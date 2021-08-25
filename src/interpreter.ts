import * as Expr from './types/expression';
import { Console } from './console';
import { Scope } from './scope';
import { TokenType } from './token';
import { Runtime } from './runtime';
import { $Any } from './types/any';
import { $Boolean } from './types/boolean';
import { $Dictionary } from './types/dictionary';
import { $Function } from './types/function';
import { $List } from './types/list';
import { $Null } from './types/null';
import { $Number } from './types/number';
import { $String } from './types/string';
import { $Void } from './types/void';
import { DataType } from './types/type.enum';
import { Scanner } from './scanner';
import { Parser } from './parser';
declare var conzole: Console;

export class Interpreter implements Expr.ExprVisitor<$Any> {
    public global = new Scope();
    public scope = this.global;
    public errors: string[] = [];
    private scanner = new Scanner();
    private parser = new Parser();
    public strings = {
        next: new $String('next')
    };

    constructor( ) {
        this.global.set('math', new $Dictionary(Runtime.Math));
        this.global.set('console', new $Dictionary(Runtime.Console));
        this.global.set('echo', Runtime.Console.get('log'));
        this.parser.errorLevel = 0;
    }

    private evaluate(expr: Expr.Expr): $Any {
        return expr.result = expr.accept(this);
    }

    public eval(expr: Expr.Expr): any {
        try {
            return  {
                error: false,
                value: expr.accept(this).toString(),
            };
        } catch (e) {
            return {
                error: true,
                value: e.message
            };
        }
    }

    public interpet(statements: Expr.Expr[]): Expr.Expr[] {
        this.errors = [];
        for (const statement of statements) {
            try {
                this.evaluate(statement);
            } catch (e) {
                conzole.error(e.message);
                this.errors.push(e.message);
                if (this.errors.length > 100) {
                    this.errors.push('Runtime Error limit exceeded');
                    return statements;
                }
            }
        }
        return statements;
    }

    public error(message: string): void {
        throw new Error(`Runtime Error => ${message}`);
    }

    public visitExpressionExpr(expr: Expr.Expression): $Any {
        return this.evaluate(expr.expression);
    }

    public visitPrintExpr(expr: Expr.Print): $Any {
        const data = this.evaluate(expr.expression);
        conzole.log(data.toString());
        return data;
    }

    public visitVarExpr(expr: Expr.Var): $Any {
        let value = new $Null();
        if (expr.initializer !== null) {
            value = this.evaluate(expr.initializer);
        }
        if (value.isLambda()) {
            (value as any).name = expr.name.lexeme;
        }
        this.scope.define(expr.name.lexeme, value);
        return value;
    }

    public visitVariableExpr(expr: Expr.Variable): $Any {
        return this.scope.get(expr.name.lexeme, expr.name);
    }

    public visitPostfixExpr(expr: Expr.Postfix): $Any {
        const value = this.scope.get(expr.name.lexeme, expr.name);
        const newValue = new $Number(value.value + expr.increment);
        this.scope.assign(expr.name.lexeme, newValue);
        return value;
    }

    public visitListExpr(expr: Expr.List): $Any {
        const values: $Any[] = [];
        for (const expression of expr.value) {
            const value = this.evaluate(expression);
            values.push(value);
        }
        return new $List(values);
    }

    private templateParse(source: string): string {
        const tokens = this.scanner.scan(source);
        const statements = this.parser.parse(tokens);
        if (this.parser.errors.length) {
            this.error(`Template string  error: ${this.parser.errors[0]}`);
        }
        let result = '';
        for (const statement of statements) {
            result += this.evaluate(statement).toString();
        }
        return result;
    }

    public visitTemplateExpr(expr: Expr.Template): $Any {
        const result = expr.value.replace(/\$\{([\s\S]+?)\}/g, (m, placeholder) => {
            if (placeholder[placeholder.length] !== ';') {
                placeholder += ';';
            }
            return this.templateParse(placeholder);
        });
        return new $String(result);
    }

    public visitAssignExpr(expr: Expr.Assign): $Any {
        const value = this.evaluate(expr.value);
        this.scope.assign(expr.name.lexeme, value);
        return value;
    }

    public visitBinaryExpr(expr: Expr.Binary): $Any {
        const left = this.evaluate(expr.left);
        const right = this.evaluate(expr.right);

        switch (expr.operator.type) {
            case TokenType.Minus:
            case TokenType.MinusEqual:
                return new $Number(left.value - right.value);
            case TokenType.Slash:
            case TokenType.SlashEqual:
                return new $Number(left.value / right.value);
            case TokenType.Star:
            case TokenType.StarEqual:
                return new $Number(left.value * right.value);
            case TokenType.Percent:
            case TokenType.PercentEqual:
                return new $Number(left.value % right.value);
            case TokenType.Plus:
            case TokenType.PlusEqual:
                if (left.isNumber() && right.isNumber()) {
                    return new $Number(left.value + right.value);
                }
                if (left.isString() && right.isString()) {
                    return new $String(left.value + right.value);
                }
                if (left.isList() && right.isList()) {
                    return new $List(left.value.concat(right.value));
                }
                if (left.isDictionary() && right.isDictionary()) {
                    return new $Dictionary(new Map([...left.value, ...right.value]));
                }
                return new $String(left.toString() + right.toString());
            case TokenType.Pipe:
                return new $Number(left.value | right.value);
            case TokenType.Caret:
                return new $Number(left.value ^ right.value);
            case TokenType.Greater:
                return new $Boolean(left.value > right.value);
            case TokenType.GreaterEqual:
                return new $Boolean(left.value >= right.value);
            case TokenType.Less:
                return new $Boolean(left.value < right.value);
            case TokenType.LessEqual:
                return new $Boolean(left.value <= right.value);
            case TokenType.EqualEqual:
                return new $Boolean(left.value === right.value);
            case TokenType.BangEqual:
                return new $Boolean(left.value !== right.value);
            case TokenType.LessEqualGreater:
                if (left.value < right.value) {
                    return new $Number(-1);
                } else if (left.value > right.value) {
                    return new $Number(1);
                } else {
                    return new $Number(0);
                }
            default:
                this.error('Unknown binary operator ' + expr.operator);
                return new $Null(); // unreachable
        }
    }

    public visitLogicalExpr(expr: Expr.Logical): $Any {
        const left = this.evaluate(expr.left);

        if (expr.operator.type === TokenType.Or) {
            if (left.isTruthy()) {
                return left;
            }
        } else {
            if (!left.isTruthy()) {
                return left;
            }
        }

        return this.evaluate(expr.right);
    }

    public visitGroupingExpr(expr: Expr.Grouping): $Any {
        return this.evaluate(expr.expression);
    }

    public visitLiteralExpr(expr: Expr.Literal): $Any {
        return expr.value;
    }

    public visitUnaryExpr(expr: Expr.Unary): $Any {
        const right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case TokenType.Minus:
                return new $Number(-Number(right.value));
            case TokenType.Bang:
                return new $Boolean(!right.isTruthy());
            case TokenType.PlusPlus:
            case TokenType.MinusMinus:
                if (!right.isNumber()) {
                    this.error(`Invalid right-hand side expression in prefix operation:  "${DataType[right.type]} ${right} is not a number`);
                }
                const newValue = Number(right.value) + (expr.operator.type === TokenType.PlusPlus ? 1 : -1);
                if (expr.right instanceof Expr.Variable) {
                    this.scope.assign(expr.right.name.lexeme, new $Number(newValue));
                } else if (expr.right instanceof Expr.Get) {
                    const assing = new Expr.Set(expr.right.entity, expr.right.key, new Expr.Literal(new $Number(newValue), expr.line), expr.line);
                    this.evaluate(assing);
                } else {
                    this.error(`Invalid right-hand side expression in prefix operation:  ${expr.right}`);
                }
                return new $Number(newValue);
            default:
                this.error(`Unknown unary operator ' + expr.operator`);
                return new $Null(); // should be unreachable
        }
    }

    public executeBlock(statements: Expr.Expr[], nextScope: Scope): $Any {
        const currentScope = this.scope;
        this.scope = nextScope;
        for (const statement of statements) {
            statement.result = this.evaluate(statement);
        }
        this.scope = currentScope;
        return new $Void();
    }

    public visitBlockExpr(expr: Expr.Block): $Any {
        return this.executeBlock(expr.statements, new Scope(this.scope));
    }

    public visitIfExpr(expr: Expr.If): $Any {
        if (this.evaluate(expr.condition).isTruthy()) {
            return this.evaluate(expr.thenExpr);
        } else if (expr.elseExpr !== null) {
            return this.evaluate(expr.elseExpr);
        }
    }

    public visitWhileExpr(expr: Expr.While): $Any {
        const values: $Any[] = [];
        const currentScope = this.scope;
        while (this.evaluate(expr.condition).isTruthy()) {
            try {
                this.evaluate(expr.loop);
            } catch (e) {
                this.scope = currentScope;
                if (e instanceof $Any && e.type === DataType.Break) {
                    if (e.value.type !== DataType.Void) {
                        values.push(e.value);
                    }
                    break;
                } else if (e instanceof $Any && e.type === DataType.Continue) {
                    if (e.value.type !== DataType.Void) {
                        values.push(e.value);
                    }
                    continue;
                } else {
                    throw e;
                }
            }
        }
        if (values.length) {
            return new $List(values);
        }
        return new $Void();
    }

    public visitEachExpr(expr: Expr.Each): $Any {
        const currentScope = this.scope;
        const values: $Any[] = [];
        const value = this.evaluate(expr.iterable) as $List;
        if (!value.isList()) {
            this.error(`${value} is not an iterable list`);
        }

        let it = 0;
        while (it < value.value.length) {
            this.scope = currentScope;
            const foreachScope = new Scope(this.scope);
            foreachScope.set(expr.name.lexeme, value.value[it]);
            this.scope = foreachScope;
            try {
                this.evaluate(expr.loop);
            } catch (e) {
                this.scope = currentScope;
                if (e instanceof $Any && e.type === DataType.Break) {
                    if (e.value.type !== DataType.Void) {
                        values.push(e.value);
                    }
                    break;
                } else if (e instanceof $Any && e.type === DataType.Continue) {
                    if (e.value.type !== DataType.Void) {
                        values.push(e.value);
                    }
                    continue;
                } else {
                    throw e;
                }
            }
        }
        if (values.length) {
            return new $List(values);
        }
        return new $Void();
    }

    public visitCallExpr(expr: Expr.Call): $Any {
        // verify callee is a function
        const callee = this.evaluate(expr.callee);
        if (!callee.isFunction()) {
            this.error(`${callee} is not a function`);
        }

        // set this in function scope
        let thiz: any = null;
        if (expr.callee instanceof Expr.Get) {
            thiz = this.evaluate(expr.callee.entity);
        } else if (expr.thiz !== null) {
            thiz = expr.thiz;
        }

        // evaluate function arguments
        const args = [];
        for (const argument of expr.args) {
            args.push(this.evaluate(argument));
        }

        // pass arguments to function
        const func = callee as $Function;
        if (args.length !== func.arity && func.arity !== -1) {
            conzole.warn(`Warning at (${expr.paren.line}): ${callee} mismatched argument count; \n Expected ${func.arity} but got ${args.length} `);
            if (args.length < func.arity) {
                for (let i = args.length; i <= func.arity; ++i) {
                    args.push(new $Null());
                }
            }
        }
        // execute function
        return func.call(thiz, args, this);
    }

    public visitDictionaryExpr(expr: Expr.Dictionary): $Any {
        const dict = new $Dictionary(new Map());
        for (const property of expr.properties) {
            const key  = this.evaluate((property as Expr.Set).key);
            const value = this.evaluate((property as Expr.Set).value);
            dict.set(key, value);
        }
        return dict;
    }

    public visitKeyExpr(expr: Expr.Key): $Any {
        return new $Any(expr.name.literal);
    }

    public visitGetExpr(expr: Expr.Get): $Any {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        if (entity.isNull() && expr.type === TokenType.QuestionDot) {
            return new $Null();
        }
        return entity.get(key);
    }

    public visitSetExpr(expr: Expr.Set): $Any {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        const value = this.evaluate(expr.value);
        entity.set(key, value);
        return value.value;
    }

    public visitFuncExpr(expr: Expr.Func): $Any {
        const func = new $Function(expr, this.scope);
        this.scope.define(expr.name.lexeme, func);
        return func;
    }

    public visitLambdaExpr(expr: Expr.Lambda): $Any {
        const lambda: Expr.Func = expr.lambda as Expr.Func;
        const func: $Function = new $Function(lambda, this.scope);
        return func;
    }

    public visitReturnExpr(expr: Expr.Return): $Any {
        let value = new $Null();
        if (expr.value) {
            value = this.evaluate(expr.value);
        }
        throw new $Any(value, DataType.Return);
    }

    public visitBreakExpr(expr: Expr.Break): $Any {
        const value = this.evaluate(expr.value);
        throw new $Any(value, DataType.Break);
    }

    public visitContinueExpr(expr: Expr.Continue): $Any {
        const value = this.evaluate(expr.value);
        throw new $Any(value, DataType.Continue);
    }

    public visitTypeofExpr(expr: Expr.Typeof): $Any {
        const value = this.evaluate(expr.value);
        return new $String(DataType[value.type].toLowerCase());
    }

    public visitDeleteExpr(expr: Expr.Delete): $Any {
        if (!(expr.value instanceof Expr.Get)) {
            const value = this.evaluate(expr.value);
            const type = DataType[value.type].toLowerCase();
            this.error(`Can't delete on type ${type} with value '${value}'. Not a Dictionary, Class or Entity`);
            return new $Null();
        }

        const getExpr = expr.value as Expr.Get;
        const entity = this.evaluate(getExpr.entity);
        const key = this.evaluate(getExpr.key);
        return entity.delete(key);
    }

}

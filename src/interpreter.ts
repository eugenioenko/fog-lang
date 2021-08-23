import * as Expr from './types/expression';
import * as Stmt from './types/statement';
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

export class Interpreter implements
    Expr.ExprVisitor<$Any>,
    Stmt.StmtVisitor<$Any> {
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
        this.global.set('re', Runtime.Utils.get('re'));
        this.global.set('iter', Runtime.Utils.get('iter'));
        this.global.set('delay', Runtime.Utils.get('delay'));
        this.global.set('fetch', Runtime.Utils.get('fetch'));
        this.parser.errorLevel = 0;
    }

    private evaluate(expr: Expr.Expr): $Any {
        return expr.result = expr.accept(this);
    }

    private execute(stmt: Stmt.Stmt): $Any {
        return stmt.result = stmt.accept(this);
    }

    public eval(stmt: Stmt.Stmt): any {
        try {
            return  {
                error: false,
                value: stmt.accept(this).toString(),
            };
        } catch (e) {
            return {
                error: true,
                value: e.message
            };
        }
    }

    public interpet(statements: Stmt.Stmt[]): Stmt.Stmt[] {
        this.errors = [];
        for (const statement of statements) {
            try {
                this.execute(statement);
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

    public visitExpressionStmt(stmt: Stmt.Expression): $Any {
        return this.evaluate(stmt.expression);
    }

    public visitPrintStmt(stmt: Stmt.Print): $Any {
        const data = this.evaluate(stmt.expression);
        conzole.log(data.toString());
        return data;
    }

    public visitVarStmt(stmt: Stmt.Var): $Any {
        let value = new $Null();
        if (stmt.initializer !== null) {
            value = this.evaluate(stmt.initializer);
        }
        if (value.isLambda()) {
            (value as any).name = stmt.name.lexeme;
        }
        this.scope.define(stmt.name.lexeme, value);
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
            result += this.execute(statement).toString();
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

    public executeBlock(statements: Stmt.Stmt[], nextScope: Scope): $Any {
        const currentScope = this.scope;
        this.scope = nextScope;
        for (const statement of statements) {
            statement.result = this.execute(statement);
        }
        this.scope = currentScope;
        return new $Void();
    }

    public visitBlockStmt(stmt: Stmt.Block): $Any {
        return this.executeBlock(stmt.statements, new Scope(this.scope));
    }

    public visitIfStmt(stmt: Stmt.If): $Any {
        if (this.evaluate(stmt.condition).isTruthy()) {
            return this.execute(stmt.thenStmt);
        } else if (stmt.elseStmt !== null) {
            return this.execute(stmt.elseStmt);
        }
    }

    public visitWhileStmt(stmt: Stmt.While): $Any {
        while (this.evaluate(stmt.condition).isTruthy()) {
            try {
                this.execute(stmt.loop);
            } catch (e) {
                if (e instanceof $Any && e.type === DataType.Break) {
                    break;
                } else if (e instanceof $Any && e.type === DataType.Continue) {
                    continue;
                } else {
                    throw e;
                }
            }
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

    public visitFuncStmt(stmt: Stmt.Func): $Any {
        const func = new $Function(stmt, this.scope);
        this.scope.define(stmt.name.lexeme, func);
        return func;
    }

    public visitLambdaExpr(expr: Expr.Lambda): $Any {
        const lambda: Stmt.Func = expr.lambda as Stmt.Func;
        const func: $Function = new $Function(lambda, this.scope);
        return func;
    }

    public visitReturnStmt(stmt: Stmt.Return): $Any {
        let value = new $Null();
        if (stmt.value) {
            value = this.evaluate(stmt.value);
        }
        throw new $Any(value, DataType.Return);
    }

    public visitBreakStmt(stmt: Stmt.Break): $Any {
        throw new $Any(null, DataType.Break);
    }

    public visitContinueStmt(stmt: Stmt.Continue): $Any {
        throw new $Any(null, DataType.Continue);
    }

    public visitTypeofExpr(expr: Expr.Typeof): $Any {
        const value = this.evaluate(expr.value);
        return new $String(DataType[value.type].toLowerCase());
    }

    public visitUseStmt(stmt: Stmt.Use): $Any {
        return new $Void();
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

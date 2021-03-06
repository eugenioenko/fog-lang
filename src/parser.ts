import * as Expr from './types/expression';
import { Console } from './console';
import { Token, TokenType } from './token';
import { $Boolean } from './types/boolean';
import { $Null } from './types/null';
import { $Number } from './types/number';
import { $Error } from './types/error';
import { $Void } from './types/void';
import { $String } from './types/string';
declare var conzole: Console;

export class Parser {
    private current: number;
    private tokens: Token[];
    public errors: string[];
    public errorLevel = 1;

    public parse(tokens: Token[]): Expr.Expr[] {
        this.current = 0;
        this.tokens = tokens;
        this.errors = [];
        const statements: Expr.Expr[] = [];
        while (!this.eof()) {
            try {
                statements.push(this.declaration());
            } catch (e) {
                if (e instanceof $Error) {
                    this.errors.push(`Parse Error (${e.line}:${e.col}) => ${e.value}`);
                } else {
                    this.errors.push(e);
                    if (this.errors.length > 100) {
                        this.errors.push('Parse Error limit exceeded');
                        return statements;
                    }
                }
                this.synchronize();
            }
        }
        return statements;
    }

    private match(...types: TokenType[]): boolean {
        for (const type of types) {
            if (this.check(type)) {
                this.advance();
                return true;
            }
        }
        return false;
    }

    private advance(): Token {
        if (!this.eof()) {
            this.current++;
        }
        return this.previous();
    }

    private peek(): Token {
        return this.tokens[this.current];
    }

    private previous(): Token {
        return this.tokens[this.current - 1];
    }

    private check(type: TokenType): boolean {
        return this.peek().type === type;
    }

    private eof(): boolean {
        return this.check(TokenType.Eof);
    }

    private consume(type: TokenType, message: string): Token {
        if (this.check(type)) {
            return this.advance();
        }

        return this.error(this.previous(), message + `, unexpected token "${this.peek().lexeme}"`);
    }

    private extraSemicolon(): boolean {
        const match = this.match(TokenType.Semicolon);
        if (this.check(TokenType.Semicolon)) {
            while (this.check(TokenType.Semicolon)) {
                this.consume(TokenType.Semicolon, '');
            }
        }
        return match;
    }

    private error(token: Token, message: string): any {
        throw new $Error(message, token.line, token.col);
    }

    private warning(message: string): void {
        if (this.errorLevel === 1) {
            const token = this.previous();
            conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => ${message}`);
        }
    }

    private synchronize(): void {
        do {
            switch (this.peek().type) {
                case TokenType.Class:
                case TokenType.Function:
                case TokenType.Var:
                case TokenType.For:
                case TokenType.If:
                case TokenType.While:
                case TokenType.Do:
                case TokenType.Print:
                case TokenType.Return:
                    this.advance();
                    return;
            }
            if (this.check(TokenType.Semicolon) || this.check(TokenType.RightBrace)) {
                this.advance();
                return;
            }
            this.advance();
        } while (!this.eof());
    }

    private declaration(): Expr.Expr {
        if (this.match(TokenType.Function)) {
            return this.funcDeclaration("function");
        }
        if (this.match(TokenType.Var)) {
            return this.varDeclaration();
        }
        return this.statement();
    }

    private funcDeclaration(kind: string): Expr.Func {
        const name: Token = this.consume(TokenType.Identifier, `Expected a ${kind} name`);
        return this.funcParamsBody(name, kind);
    }

    private funcParams(kind: string): Token[] {
        const params: Token[] = [];
        if (!this.check(TokenType.RightParen)) {
            do {
                if (params.length >= 255) {
                    this.error(this.peek(), `Parameter count exceeds 255`);
                }
                params.push(this.consume(TokenType.Identifier, `Expected a parameter name`));
            } while (this.match(TokenType.Comma));
        }
        this.consume(TokenType.RightParen, `Expected close parenthesis ")" after ${kind} parameters`);
        return params;
    }

    private funcParamsBody(name: Token, kind: string): Expr.Func {
        this.consume(TokenType.LeftParen, `Expected open parenthesis "(" after ${kind}`);
        const params: Token[] = this.funcParams(kind);

        if (this.match(TokenType.LeftBrace)) {
            const body: Expr.Expr[] = this.block();
            if (name.type !== TokenType.Lambda && this.extraSemicolon()) {
                this.warning(`Unnecessary semicolon after function ${name.lexeme} declaration`);
            }
            return new Expr.Func(name, params, body, name.line);
        }

        if (this.match(TokenType.Arrow)) {
            const body: Expr.Expr[] = [];
            let arrow: Expr.Expr;
            const keyword: Token = this.previous();
            if (!this.check(TokenType.Semicolon)) {
                arrow = this.condStatements();
            }
            this.match(TokenType.Semicolon);
            body.push(new Expr.Return(keyword, arrow, keyword.line));
            return new Expr.Func(name, params, body, name.line);
        }
        this.consume(TokenType.LeftBrace, `Expect "{" before ${kind} body`);
    }

    private varDeclaration(): Expr.Expr {
        const name: Token = this.consume(TokenType.Identifier, `Expected a variable name after "var" keyword`);
        let initializer: Expr.Expr  = null;
        if (this.match(TokenType.Equal)) {
            initializer = this.condStatements();
        }

        return new Expr.Var(name, null, initializer, name.line);
    }

    private statement() {
        if (this.match(TokenType.Print)) {
            return this.printStatement();
        }
        if (this.match(TokenType.LeftBrace)) {
            return new Expr.Block(this.block(), this.previous().line);
        }
        if (this.match(TokenType.Return)) {
            return this.returnStatement();
        }
        if (this.match(TokenType.Continue, TokenType.Use)) {
            return this.continueStatement();
        }
        if (this.match(TokenType.Break)) {
            return this.breakStatement();
        }
        return this.condStatements();
    }

    private condStatements() {
        if (this.match(TokenType.If)) {
            return this.ifStatement();
        }
        if (this.match(TokenType.While)) {
            return this.whileStatement();
        }
        if (this.match(TokenType.Each)) {
            return this.eachStatement();
        }
        return this.expressionStatement();
    }

    private ifStatement(): Expr.Expr {
        const keyword = this.previous();
        const condition: Expr.Expr = this.condStatements();
        const thenStmt: Expr.Expr = this.statement();
        let elseStmt: Expr.Expr =  null;
        if (this.match(TokenType.Else)) {
            elseStmt = this.statement();
        }
        return new Expr.If(condition, thenStmt, elseStmt, keyword.line);
    }

    private whileStatement(): Expr.Expr {
        const keyword = this.previous();
        const condition: Expr.Expr = this.condStatements();
        const loop: Expr.Expr = this.statement();
        return new Expr.While(condition, loop, keyword.line);
    }

    private eachStatement(): Expr.Expr {
        const keyword = this.previous();
        const name = this.consume(TokenType.Identifier, `Expected an identifier inside "foreach" statement`);
        this.consume(TokenType.In, `Expected "in" keyword inside foreach statement`);
        const iterable = this.condStatements();
        const loop: Expr.Expr = this.statement();
        return new Expr.Each(name, iterable, loop, keyword.line);
    }

    private printStatement(): Expr.Expr {
        const keyword = this.previous();
        const value: Expr.Expr = this.condStatements();
        return new Expr.Print(value, keyword.line);
    }

    private returnStatement(): Expr.Expr {
        const keyword: Token = this.previous();
        let value = null;

        if (!this.check(TokenType.Semicolon)) {
            value = this.condStatements();
        }

        return new Expr.Return(keyword, value, keyword.line);
    }

    private continueStatement(): Expr.Expr {
        const keyword: Token = this.previous();
        const value = this.condStatements();

        return new Expr.Continue(value, keyword.line);
    }

    private breakStatement(): Expr.Expr {
        const keyword: Token = this.previous();
        const value = this.condStatements();

        return new Expr.Break(value, keyword.line);
    }

    private block(): Expr.Expr[] {
        const statements: Expr.Expr[] = [];
        while (!this.check(TokenType.RightBrace) && !this.eof()) {
            statements.push(this.declaration());
        }
        this.consume(TokenType.RightBrace, `Expected close brace "}" after block statement`);
        return statements;
    }

    private expressionStatement(): Expr.Expr {
        const expression: Expr.Expr = this.expression();
        return new Expr.Expression(expression, expression.line);
    }

    private expression(): Expr.Expr {
        return this.assignment();
    }

    private assignment(): Expr.Expr {
        const expr: Expr.Expr = this.logicalOr();
        if (this.match(TokenType.Equal, TokenType.PlusEqual,
            TokenType.MinusEqual, TokenType.StarEqual, TokenType.SlashEqual)
        ) {
            const operator: Token = this.previous();
            let value: Expr.Expr = this.assignment();
            if (expr instanceof Expr.Variable) {
                const name: Token = expr.name;
                if (operator.type !== TokenType.Equal) {
                    value = new Expr.Binary(new Expr.Variable(name, name.line), operator, value, operator.line);
                }
                return new Expr.Assign(name, value, name.line);
            } else if (expr instanceof Expr.Get) {
                if (operator.type !== TokenType.Equal) {
                    value = new Expr.Binary(new Expr.Get(expr.entity, expr.key, expr.type, expr.line), operator, value, operator.line);
                }
                return new Expr.Set(expr.entity, expr.key, value, expr.line);
            }
            this.error(operator, `Invalid l-value, is not an assigning target.`);
        }
        return expr;
    }

    private logicalOr(): Expr.Expr {
        let expr = this.logicalAnd();
        while (this.match(TokenType.Or)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.logicalAnd();
            expr = new Expr.Logical(expr, operator, right, operator.line);
        }
        return expr;
    }

    private logicalAnd(): Expr.Expr {
        let expr = this.equality();
        while (this.match(TokenType.And)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.equality();
            expr = new Expr.Logical(expr, operator, right, operator.line);
        }
        return expr;
    }

    private equality(): Expr.Expr {
        let expr  = this.comparison();
        while (this.match(
            TokenType.BangEqual, TokenType.EqualEqual, TokenType.LessEqualGreater)
        ) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.comparison();
            expr = new Expr.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }

    private comparison(): Expr.Expr {
        let expr: Expr.Expr = this.addition();
        while (this.match(TokenType.Greater, TokenType.GreaterEqual, TokenType.Less, TokenType.LessEqual)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.addition();
            expr = new Expr.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }

    private addition(): Expr.Expr {
        let expr: Expr.Expr = this.modulus();
        while (this.match(TokenType.Minus, TokenType.Plus)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.modulus();
            expr = new Expr.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }

    private modulus(): Expr.Expr {
        let expr: Expr.Expr = this.multiplication();
        while (this.match(TokenType.Percent)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.multiplication();
            expr = new Expr.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }

    private multiplication(): Expr.Expr {
        let expr: Expr.Expr = this.typeof();
        while (this.match(TokenType.Slash, TokenType.Star)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.typeof();
            expr = new Expr.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }

    private typeof(): Expr.Expr {
        if (this.match(TokenType.Typeof)) {
            const operator: Token = this.previous();
            const value: Expr.Expr = this.typeof();
            return new Expr.Typeof(value, operator.line);
        }
        return this.delete();
    }

    private delete(): Expr.Expr {
        if (this.match(TokenType.Delete)) {
            const operator: Token = this.previous();
            const value: Expr.Expr = this.delete();
            return new Expr.Delete(value, operator.line);
        }
        return this.unary();
    }

    private unary(): Expr.Expr {
        if (this.match(TokenType.Minus, TokenType.Bang, TokenType.Dollar, TokenType.PlusPlus, TokenType.MinusMinus)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.unary();
            return new Expr.Unary(operator, right, operator.line);
        }
        return this.call();
    }

    private call(): Expr.Expr {
        let expr: Expr.Expr = this.primary();
        let consumed = true;
        do  {
            consumed = false;
            if (this.match(TokenType.LeftParen)) {
                consumed = true;
                do {
                    const args: Expr.Expr[] = [];
                    if (!this.check(TokenType.RightParen)) {
                        do {
                            args.push(this.condStatements());
                        } while (this.match(TokenType.Comma));
                    }
                    const paren: Token = this.consume(TokenType.RightParen, `Expected ")" after arguments`);
                    expr = new Expr.Call(expr, paren, args, null, paren.line);
                } while (this.match(TokenType.LeftParen));
            }
            if (this.match(TokenType.Dot, TokenType.QuestionDot)) {
                consumed = true;
                expr = this.dotGet(expr, this.previous());
            }
            if (this.match(TokenType.LeftBracket)) {
                consumed = true;
                expr = this.bracketGet(expr, this.previous());
            }
        } while (consumed);
        return expr;
    }

    private dotGet(expr: Expr.Expr, operator: Token): Expr.Expr {
        const name: Token = this.consume(TokenType.Identifier, `Expect property name after '.'`);
        const key: Expr.Key = new Expr.Key(name, name.line);
        return new Expr.Get(expr, key, operator.type, name.line);
    }

    private bracketGet(expr: Expr.Expr, operator: Token): Expr.Expr {
        let key: Expr.Expr = null;
        let end: Expr.Expr = null;
        let step: Expr.Expr = new Expr.Literal(new $Number(1), operator.line);

        if (!this.check(TokenType.Colon)) {
            key = this.condStatements();
        }

        return new Expr.Get(expr, key, operator.type, operator.line);
    }

    private primary(): Expr.Expr {
        if (this.match(TokenType.False)) {
            return new Expr.Literal(new $Boolean(false), this.previous().line);
        }
        if (this.match(TokenType.True)) {
            return new Expr.Literal(new $Boolean(true), this.previous().line);
        }
        if (this.match(TokenType.Null)) {
            return new Expr.Literal(new $Null(), this.previous().line);
        }
        if (this.match(TokenType.Void)) {
            return new Expr.Literal(new $Void(), this.previous().line);
        }
        if (this.match(TokenType.Number)) {
            return new Expr.Literal(new $Number(this.previous().literal), this.previous().line);
        }
        if (this.match(TokenType.String)) {
            return new Expr.Literal(new $String(this.previous().literal), this.previous().line);
        }
        if (this.match(TokenType.Template)) {
            return new Expr.Template(this.previous().literal, this.previous().line);
        }
        if (this.match(TokenType.Identifier)) {
            const identifier =  this.previous();
            if (this.match(TokenType.PlusPlus)) {
                return new Expr.Postfix(identifier, 1, identifier.line);
            }
            if (this.match(TokenType.MinusMinus)) {
                return new Expr.Postfix(identifier, -1, identifier.line);
            }
            return new Expr.Variable(identifier, identifier.line);
        }
        if (this.match(TokenType.LeftParen)) {
            const expr: Expr.Expr = this.condStatements();
            this.consume(TokenType.RightParen, `Expected ")" after expression`);
            return new Expr.Grouping(expr, expr.line);
        }
        if (this.match(TokenType.LeftBrace)) {
            return this.dictionary();
        }
        if (this.match(TokenType.Function)) {
            const token: Token = new Token(TokenType.Lambda, '@', '@', this.previous().line, this.previous().col);
            const lambda: Expr.Func = this.funcParamsBody(token, 'lambda');
            return new Expr.Lambda(lambda, token.line);
        }
        if (this.match(TokenType.LeftBracket)) {
            return this.list();
        }

        throw this.error(this.peek(), `Expected expression, unexpected token "${this.peek().lexeme}"`);
        // unreacheable code
        return new Expr.Literal(null, 0);
    }

    public dictionary(): Expr.Expr {
        const leftBrace = this.previous();
        if (this.match(TokenType.RightBrace)) {
            return new Expr.Dictionary([], this.previous().line);
        }
        const properties: Expr.Expr[] = [];
        do {
            if (this.match(TokenType.String, TokenType.Identifier, TokenType.Number)) {
                const key: Token = this.previous();
                if (this.match(TokenType.Colon)) {
                    const value = this.condStatements();
                    properties.push(new Expr.Set(null, new Expr.Key(key, key.line), value, key.line));
                } else {
                    const value = new Expr.Variable(key, key.line);
                    properties.push(new Expr.Set(null, new Expr.Key(key, key.line), value, key.line));
                }
            } else {
                this.error(this.peek(), `String, Number or Identifier expected as a Key of Dictionary {, unexpected token ${this.peek().lexeme}`);
            }
        } while (this.match(TokenType.Comma));
        this.consume(TokenType.RightBrace, `Expected "}" after object literal`);

        return new Expr.Dictionary(properties, leftBrace.line);
    }

    private list(): Expr.Expr {
        const values: Expr.Expr[] = [];
        const leftBracket = this.previous();

        if (this.match(TokenType.RightBracket)) {
            return new Expr.List([], this.previous().line);
        }
        do {
            values.push(this.condStatements());
        } while (this.match(TokenType.Comma));

        this.consume(TokenType.RightBracket, `Expected "]" after array declaration`);
        return new Expr.List(values, leftBracket.line);
    }

}

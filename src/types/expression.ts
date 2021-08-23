import { Token, TokenType } from 'token';;
import { $Any } from 'any';

export abstract class Expr {
    public result: any;
    public line: number;
    // tslint:disable-next-line
    constructor() { }
    public abstract accept<R>(visitor: ExprVisitor<R>): R;
}

// tslint:disable-next-line
export interface ExprVisitor<R> {
    visitAssignExpr(expr: Assign): R;
    visitBinaryExpr(expr: Binary): R;
    visitCallExpr(expr: Call): R;
    visitDeleteExpr(expr: Delete): R;
    visitDictionaryExpr(expr: Dictionary): R;
    visitGetExpr(expr: Get): R;
    visitGroupingExpr(expr: Grouping): R;
    visitKeyExpr(expr: Key): R;
    visitLambdaExpr(expr: Lambda): R;
    visitLogicalExpr(expr: Logical): R;
    visitListExpr(expr: List): R;
    visitLiteralExpr(expr: Literal): R;
    visitPostfixExpr(expr: Postfix): R;
    visitSetExpr(expr: Set): R;
    visitTemplateExpr(expr: Template): R;
    visitTypeofExpr(expr: Typeof): R;
    visitUnaryExpr(expr: Unary): R;
    visitVariableExpr(expr: Variable): R;
    visitBlockExpr(expr: Block): R;
    visitBreakExpr(expr: Break): R;
    visitContinueExpr(expr: Continue): R;
    visitExpressionExpr(expr: Expression): R;
    visitFuncExpr(expr: Func): R;
    visitIfExpr(expr: If): R;
    visitPrintExpr(expr: Print): R;
    visitReturnExpr(expr: Return): R;
    visitUseExpr(expr: Use): R;
    visitVarExpr(expr: Var): R;
    visitWhileExpr(expr: While): R;
}

export class Assign extends Expr {
    public name: Token;
    public value: Expr;

    constructor(name: Token, value: Expr, line: number) {
        super();
        this.name = name;
        this.value = value;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitAssignExpr(this);
    }

    public toString(): string {
        return 'Expr.Assign';
    }
}

export class Binary extends Expr {
    public left: Expr;
    public operator: Token;
    public right: Expr;

    constructor(left: Expr, operator: Token, right: Expr, line: number) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitBinaryExpr(this);
    }

    public toString(): string {
        return 'Expr.Binary';
    }
}

export class Call extends Expr {
    public callee: Expr;
    public paren: Token;
    public args: Expr[];
    public thiz: $Any;

    constructor(callee: Expr, paren: Token, args: Expr[], thiz: $Any, line: number) {
        super();
        this.callee = callee;
        this.paren = paren;
        this.args = args;
        this.thiz = thiz;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitCallExpr(this);
    }

    public toString(): string {
        return 'Expr.Call';
    }
}

export class Delete extends Expr {
    public value: Expr;

    constructor(value: Expr, line: number) {
        super();
        this.value = value;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitDeleteExpr(this);
    }

    public toString(): string {
        return 'Expr.Delete';
    }
}

export class Dictionary extends Expr {
    public properties: Expr[];

    constructor(properties: Expr[], line: number) {
        super();
        this.properties = properties;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitDictionaryExpr(this);
    }

    public toString(): string {
        return 'Expr.Dictionary';
    }
}

export class Get extends Expr {
    public entity: Expr;
    public key: Expr;
    public type: TokenType;

    constructor(entity: Expr, key: Expr, type: TokenType, line: number) {
        super();
        this.entity = entity;
        this.key = key;
        this.type = type;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitGetExpr(this);
    }

    public toString(): string {
        return 'Expr.Get';
    }
}

export class Grouping extends Expr {
    public expression: Expr;

    constructor(expression: Expr, line: number) {
        super();
        this.expression = expression;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitGroupingExpr(this);
    }

    public toString(): string {
        return 'Expr.Grouping';
    }
}

export class Key extends Expr {
    public name: Token;

    constructor(name: Token, line: number) {
        super();
        this.name = name;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitKeyExpr(this);
    }

    public toString(): string {
        return 'Expr.Key';
    }
}

export class Lambda extends Expr {
    public lambda: Expr;

    constructor(lambda: Expr, line: number) {
        super();
        this.lambda = lambda;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitLambdaExpr(this);
    }

    public toString(): string {
        return 'Expr.Lambda';
    }
}

export class Logical extends Expr {
    public left: Expr;
    public operator: Token;
    public right: Expr;

    constructor(left: Expr, operator: Token, right: Expr, line: number) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitLogicalExpr(this);
    }

    public toString(): string {
        return 'Expr.Logical';
    }
}

export class List extends Expr {
    public value: Expr[];

    constructor(value: Expr[], line: number) {
        super();
        this.value = value;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitListExpr(this);
    }

    public toString(): string {
        return 'Expr.List';
    }
}

export class Literal extends Expr {
    public value: $Any;

    constructor(value: $Any, line: number) {
        super();
        this.value = value;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitLiteralExpr(this);
    }

    public toString(): string {
        return 'Expr.Literal';
    }
}

export class Postfix extends Expr {
    public name: Token;
    public increment: number;

    constructor(name: Token, increment: number, line: number) {
        super();
        this.name = name;
        this.increment = increment;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitPostfixExpr(this);
    }

    public toString(): string {
        return 'Expr.Postfix';
    }
}

export class Set extends Expr {
    public entity: Expr;
    public key: Expr;
    public value: Expr;

    constructor(entity: Expr, key: Expr, value: Expr, line: number) {
        super();
        this.entity = entity;
        this.key = key;
        this.value = value;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitSetExpr(this);
    }

    public toString(): string {
        return 'Expr.Set';
    }
}

export class Template extends Expr {
    public value: string;

    constructor(value: string, line: number) {
        super();
        this.value = value;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitTemplateExpr(this);
    }

    public toString(): string {
        return 'Expr.Template';
    }
}

export class Typeof extends Expr {
    public value: Expr;

    constructor(value: Expr, line: number) {
        super();
        this.value = value;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitTypeofExpr(this);
    }

    public toString(): string {
        return 'Expr.Typeof';
    }
}

export class Unary extends Expr {
    public operator: Token;
    public right: Expr;

    constructor(operator: Token, right: Expr, line: number) {
        super();
        this.operator = operator;
        this.right = right;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitUnaryExpr(this);
    }

    public toString(): string {
        return 'Expr.Unary';
    }
}

export class Variable extends Expr {
    public name: Token;

    constructor(name: Token, line: number) {
        super();
        this.name = name;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitVariableExpr(this);
    }

    public toString(): string {
        return 'Expr.Variable';
    }
}

export class Block extends Expr {
    public statements: Expr[];

    constructor(statements: Expr[], line: number) {
        super();
        this.statements = statements;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitBlockExpr(this);
    }

    public toString(): string {
        return 'Expr.Block';
    }
}

export class Break extends Expr {
    public keyword: Token;

    constructor(keyword: Token, line: number) {
        super();
        this.keyword = keyword;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitBreakExpr(this);
    }

    public toString(): string {
        return 'Expr.Break';
    }
}

export class Continue extends Expr {
    public keyword: Token;

    constructor(keyword: Token, line: number) {
        super();
        this.keyword = keyword;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitContinueExpr(this);
    }

    public toString(): string {
        return 'Expr.Continue';
    }
}

export class Expression extends Expr {
    public expression: Expr;

    constructor(expression: Expr, line: number) {
        super();
        this.expression = expression;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitExpressionExpr(this);
    }

    public toString(): string {
        return 'Expr.Expression';
    }
}

export class Func extends Expr {
    public name: Token;
    public params: Token[];
    public body: Expr[];

    constructor(name: Token, params: Token[], body: Expr[], line: number) {
        super();
        this.name = name;
        this.params = params;
        this.body = body;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitFuncExpr(this);
    }

    public toString(): string {
        return 'Expr.Func';
    }
}

export class If extends Expr {
    public condition: Expr;
    public thenExpr: Expr;
    public elseExpr: Expr;

    constructor(condition: Expr, thenExpr: Expr, elseExpr: Expr, line: number) {
        super();
        this.condition = condition;
        this.thenExpr = thenExpr;
        this.elseExpr = elseExpr;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitIfExpr(this);
    }

    public toString(): string {
        return 'Expr.If';
    }
}

export class Print extends Expr {
    public expression: Expr;

    constructor(expression: Expr, line: number) {
        super();
        this.expression = expression;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitPrintExpr(this);
    }

    public toString(): string {
        return 'Expr.Print';
    }
}

export class Return extends Expr {
    public keyword: Token;
    public value: Expr;

    constructor(keyword: Token, value: Expr, line: number) {
        super();
        this.keyword = keyword;
        this.value = value;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitReturnExpr(this);
    }

    public toString(): string {
        return 'Expr.Return';
    }
}

export class Use extends Expr {
    public expression: Expr;

    constructor(expression: Expr, line: number) {
        super();
        this.expression = expression;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitUseExpr(this);
    }

    public toString(): string {
        return 'Expr.Use';
    }
}

export class Var extends Expr {
    public name: Token;
    public type: Token;
    public initializer: Expr;

    constructor(name: Token, type: Token, initializer: Expr, line: number) {
        super();
        this.name = name;
        this.type = type;
        this.initializer = initializer;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitVarExpr(this);
    }

    public toString(): string {
        return 'Expr.Var';
    }
}

export class While extends Expr {
    public condition: Expr;
    public loop: Expr;

    constructor(condition: Expr, loop: Expr, line: number) {
        super();
        this.condition = condition;
        this.loop = loop;
        this.line = line;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitWhileExpr(this);
    }

    public toString(): string {
        return 'Expr.While';
    }
}


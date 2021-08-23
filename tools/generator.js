let fs = require('fs');

const ExpressionAST = {
    Assign: ['name: Token', 'value: Expr'],
    Binary: ['left: Expr', 'operator: Token', 'right: Expr'],
    Call: ['callee: Expr', 'paren: Token', 'args: Expr[]', 'thiz: $Any'],
    Delete: ['value: Expr'],
    Dictionary: ['properties: Expr[]'],
    Get: ['entity: Expr', 'key: Expr', 'type: TokenType'],
    Grouping: ['expression: Expr'],
    Key: ['name: Token'],
    Lambda: ['lambda: Stmt'],
    Logical: ['left: Expr', 'operator: Token', 'right: Expr'],
    List: ['value: Expr[]'],
    Literal: ['value: $Any'],
    Postfix: ['name: Token', 'increment: number'],
    Set: ['entity: Expr', 'key: Expr', 'value: Expr'],
    Template: ['value: string'],
    Typeof: ['value: Expr'],
    Unary: ['operator: Token', 'right: Expr'],
    Variable: ['name: Token'],
};

const StatementAST = {
    Block: ['statements: Stmt[]'],
    Break: ['keyword: Token'],
    Continue: ['keyword: Token'],
    Expression : ['expression: Expr'],
    Func: ['name: Token', 'params: Token[]', 'body: Stmt[]'],
    If: ['condition: Expr', 'thenStmt: Stmt', 'elseStmt: Stmt'],
    Print : ['expression: Expr'],
    Return: ['keyword: Token', 'value: Expr'],
    Use: ['expression: Expr'],
    Var : ['name: Token', 'type: Token', 'initializer: Expr'],
    While: ['condition: Expr', 'loop: Stmt']
};

function generateAST(baseClass, AST, filename, imports = '') {
    let file = imports +
`export abstract class ${baseClass} {
    public result: any;
    public line: number;
    // tslint:disable-next-line
    constructor() { }
    public abstract accept<R>(visitor: ${baseClass}Visitor<R>): R;
}\n\n`;

    file += `// tslint:disable-next-line\nexport interface ${baseClass}Visitor<R> {\n`;
    Object.keys(AST).forEach(name => {
        file += `    visit${name}${baseClass}(${baseClass.toLowerCase()}: ${name}): R;\n`;
    });
    file += '}\n\n';

    Object.keys(AST).forEach(name => {
        const syntax = AST[name];
        file += `export class ${name} extends ${baseClass} {\n`;
        syntax.forEach(member => {
            file += '    public ' + member + ';\n'
        });
        file += `\n    constructor(${syntax.join(', ')}, line: number) {\n        super();\n`
        syntax.forEach(member => {
            const name = member.split(': ')[0];
            file += '        this.' + name + ' = ' + name + ';\n'
        });
        file += '        this.line = line;\n'
        file += '    }\n'
        file += `
    public accept<R>(visitor: ${baseClass}Visitor<R>): R {
        return visitor.visit${name}${baseClass}(this);
    }\n`;
        file += `
    public toString(): string {
        return '${baseClass}.${name}';
    }\n`;
        file += '}\n\n'
    });

    fs.writeFile(`src/types/${filename}.ts`, file, function (err, data) {
        if (err) console.log(err);
        console.log(`${filename}.ts generated`);
    });
}

generateAST('Expr', ExpressionAST, 'expression', `import { Token, TokenType } from 'token';\nimport { Stmt } from 'statement';\nimport { $Any } from 'any';\n\n`);
generateAST('Stmt', StatementAST, 'statement', `import { Token } from 'token';\n\nimport { Expr } from 'expression';\n\n`);
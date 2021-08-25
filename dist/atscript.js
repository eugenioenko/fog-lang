/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/atscript.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/atscript.ts":
/*!*************************!*\
  !*** ./src/atscript.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner */ "./src/scanner.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./src/parser.ts");
/* harmony import */ var _interpreter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpreter */ "./src/interpreter.ts");
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console */ "./src/console.ts");
/* harmony import */ var _demos_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demos/demo */ "./src/demos/demo.ts");





const conzole = new _console__WEBPACK_IMPORTED_MODULE_3__["Console"]();
const atscript = {
    execute: (source) => {
        const scanner = new _scanner__WEBPACK_IMPORTED_MODULE_0__["Scanner"]();
        const parser = new _parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        const interpreter = new _interpreter__WEBPACK_IMPORTED_MODULE_2__["Interpreter"]();
        const tokens = scanner.scan(source);
        if (scanner.errors.length) {
            scanner.errors.forEach((e) => {
                conzole.error(e);
            });
            return [];
        }
        const statements = parser.parse(tokens);
        if (parser.errors.length) {
            parser.errors.forEach((e) => {
                conzole.error(e);
            });
            return [];
        }
        return interpreter.interpet(statements);
    },
    interpreter: _interpreter__WEBPACK_IMPORTED_MODULE_2__["Interpreter"],
    parser: _parser__WEBPACK_IMPORTED_MODULE_1__["Parser"],
    scanner: _scanner__WEBPACK_IMPORTED_MODULE_0__["Scanner"]
};
if (typeof window !== 'undefined') {
    window.demoSourceCode = _demos_demo__WEBPACK_IMPORTED_MODULE_4__["DemoSourceCode"];
    window.atscript = atscript;
    window.conzole = conzole;
}
else {
    global.conzole = conzole;
    exports.atscript = atscript;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/console.ts":
/*!************************!*\
  !*** ./src/console.ts ***!
  \************************/
/*! exports provided: ConsoleMessageType, ConsoleMessage, Console */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleMessageType", function() { return ConsoleMessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleMessage", function() { return ConsoleMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return Console; });
var ConsoleMessageType;
(function (ConsoleMessageType) {
    ConsoleMessageType[ConsoleMessageType["User"] = 0] = "User";
    ConsoleMessageType[ConsoleMessageType["Error"] = 1] = "Error";
    ConsoleMessageType[ConsoleMessageType["Warning"] = 2] = "Warning";
    ConsoleMessageType[ConsoleMessageType["Info"] = 3] = "Info";
})(ConsoleMessageType || (ConsoleMessageType = {}));
class ConsoleMessage {
}
class Console {
    constructor() {
        this.messages = [];
    }
    add(message, type) {
        this.messages.push({
            text: message,
            time: new Date(),
            // tslint:disable-next-line
            type: type
        });
    }
    clear() {
        this.messages = [];
    }
    log(message) {
        this.add(message, ConsoleMessageType.User);
    }
    warn(message) {
        this.add(message, ConsoleMessageType.Warning);
    }
    error(message) {
        this.add(message, ConsoleMessageType.Error);
        // throw new Error("");
    }
    info(message) {
        this.add(message, ConsoleMessageType.Info);
    }
    first() {
        return this.messages[0].text;
    }
    last() {
        return this.messages[this.messages.length - 1].text;
    }
    print() {
        return console.log(this.messages.map((cm) => cm.text));
    }
}


/***/ }),

/***/ "./src/demos/demo.ts":
/*!***************************!*\
  !*** ./src/demos/demo.ts ***!
  \***************************/
/*! exports provided: DemoSourceCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoSourceCode", function() { return DemoSourceCode; });
const DemoSourceCode = `

var it = 0

// alternative ternary
var a = if 1 == 1 true else false
print a //true

// initializing array
it = 0
var b = while it++ < 10 use it
print b // [1,2,3..10]

// mapping array
var c = each value in b use value * 3
print c // [3,6,9..30]

// filtering array
var d = each value in c {
    if value % 2 == 0
        use value
}
print d // [6,12,18..24]

// initializing and mapping
it = 0
var e = each value in while it++ < 10 use it use value * 5
print e // [5, 10, 15...50]

// same as previous but with new scope
it = 0
print
    each value in while it++ < 10
    {
        use it
    } {
        use value * 5
    }
// [5, 10, 15...50]

`;


/***/ }),

/***/ "./src/interpreter.ts":
/*!****************************!*\
  !*** ./src/interpreter.ts ***!
  \****************************/
/*! exports provided: Interpreter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interpreter", function() { return Interpreter; });
/* harmony import */ var _types_expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/expression */ "./src/types/expression.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scope */ "./src/scope.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ "./src/token.ts");
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runtime */ "./src/runtime.ts");
/* harmony import */ var _types_any__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/any */ "./src/types/any.ts");
/* harmony import */ var _types_boolean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/boolean */ "./src/types/boolean.ts");
/* harmony import */ var _types_dictionary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/dictionary */ "./src/types/dictionary.ts");
/* harmony import */ var _types_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/function */ "./src/types/function.ts");
/* harmony import */ var _types_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/list */ "./src/types/list.ts");
/* harmony import */ var _types_null__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/null */ "./src/types/null.ts");
/* harmony import */ var _types_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types/number */ "./src/types/number.ts");
/* harmony import */ var _types_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./types/string */ "./src/types/string.ts");
/* harmony import */ var _types_void__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./types/void */ "./src/types/void.ts");
/* harmony import */ var _types_type_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types/type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scanner */ "./src/scanner.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parser */ "./src/parser.ts");
















class Interpreter {
    constructor() {
        this.global = new _scope__WEBPACK_IMPORTED_MODULE_1__["Scope"]();
        this.scope = this.global;
        this.errors = [];
        this.scanner = new _scanner__WEBPACK_IMPORTED_MODULE_14__["Scanner"]();
        this.parser = new _parser__WEBPACK_IMPORTED_MODULE_15__["Parser"]();
        this.strings = {
            next: new _types_string__WEBPACK_IMPORTED_MODULE_11__["$String"]('next')
        };
        this.global.set('math', new _types_dictionary__WEBPACK_IMPORTED_MODULE_6__["$Dictionary"](_runtime__WEBPACK_IMPORTED_MODULE_3__["Runtime"].Math));
        this.global.set('console', new _types_dictionary__WEBPACK_IMPORTED_MODULE_6__["$Dictionary"](_runtime__WEBPACK_IMPORTED_MODULE_3__["Runtime"].Console));
        this.global.set('echo', _runtime__WEBPACK_IMPORTED_MODULE_3__["Runtime"].Console.get('log'));
        this.parser.errorLevel = 0;
    }
    evaluate(expr) {
        return expr.result = expr.accept(this);
    }
    eval(expr) {
        try {
            return {
                error: false,
                value: expr.accept(this).toString(),
            };
        }
        catch (e) {
            return {
                error: true,
                value: e.message
            };
        }
    }
    interpet(statements) {
        this.errors = [];
        for (const statement of statements) {
            try {
                this.evaluate(statement);
            }
            catch (e) {
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
    error(message) {
        throw new Error(`Runtime Error => ${message}`);
    }
    visitExpressionExpr(expr) {
        return this.evaluate(expr.expression);
    }
    visitPrintExpr(expr) {
        const data = this.evaluate(expr.expression);
        conzole.log(data.toString());
        return data;
    }
    visitVarExpr(expr) {
        let value = new _types_null__WEBPACK_IMPORTED_MODULE_9__["$Null"]();
        if (expr.initializer !== null) {
            value = this.evaluate(expr.initializer);
        }
        if (value.isLambda()) {
            value.name = expr.name.lexeme;
        }
        this.scope.define(expr.name.lexeme, value);
        return value;
    }
    visitVariableExpr(expr) {
        return this.scope.get(expr.name.lexeme, expr.name);
    }
    visitPostfixExpr(expr) {
        const value = this.scope.get(expr.name.lexeme, expr.name);
        const newValue = new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](value.value + expr.increment);
        this.scope.assign(expr.name.lexeme, newValue);
        return value;
    }
    visitListExpr(expr) {
        const values = [];
        for (const expression of expr.value) {
            const value = this.evaluate(expression);
            values.push(value);
        }
        return new _types_list__WEBPACK_IMPORTED_MODULE_8__["$List"](values);
    }
    templateParse(source) {
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
    visitTemplateExpr(expr) {
        const result = expr.value.replace(/\$\{([\s\S]+?)\}/g, (m, placeholder) => {
            if (placeholder[placeholder.length] !== ';') {
                placeholder += ';';
            }
            return this.templateParse(placeholder);
        });
        return new _types_string__WEBPACK_IMPORTED_MODULE_11__["$String"](result);
    }
    visitAssignExpr(expr) {
        const value = this.evaluate(expr.value);
        this.scope.assign(expr.name.lexeme, value);
        return value;
    }
    visitBinaryExpr(expr) {
        const left = this.evaluate(expr.left);
        const right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Minus:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].MinusEqual:
                return new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](left.value - right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Slash:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].SlashEqual:
                return new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](left.value / right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Star:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].StarEqual:
                return new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](left.value * right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Percent:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PercentEqual:
                return new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](left.value % right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Plus:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusEqual:
                if (left.isNumber() && right.isNumber()) {
                    return new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](left.value + right.value);
                }
                if (left.isString() && right.isString()) {
                    return new _types_string__WEBPACK_IMPORTED_MODULE_11__["$String"](left.value + right.value);
                }
                if (left.isList() && right.isList()) {
                    return new _types_list__WEBPACK_IMPORTED_MODULE_8__["$List"](left.value.concat(right.value));
                }
                if (left.isDictionary() && right.isDictionary()) {
                    return new _types_dictionary__WEBPACK_IMPORTED_MODULE_6__["$Dictionary"](new Map([...left.value, ...right.value]));
                }
                return new _types_string__WEBPACK_IMPORTED_MODULE_11__["$String"](left.toString() + right.toString());
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Pipe:
                return new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](left.value | right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Caret:
                return new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](left.value ^ right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Greater:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](left.value > right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].GreaterEqual:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](left.value >= right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Less:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](left.value < right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LessEqual:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](left.value <= right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].EqualEqual:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](left.value === right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].BangEqual:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](left.value !== right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LessEqualGreater:
                if (left.value < right.value) {
                    return new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](-1);
                }
                else if (left.value > right.value) {
                    return new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](1);
                }
                else {
                    return new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](0);
                }
            default:
                this.error('Unknown binary operator ' + expr.operator);
                return new _types_null__WEBPACK_IMPORTED_MODULE_9__["$Null"](); // unreachable
        }
    }
    visitLogicalExpr(expr) {
        const left = this.evaluate(expr.left);
        if (expr.operator.type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Or) {
            if (left.isTruthy()) {
                return left;
            }
        }
        else {
            if (!left.isTruthy()) {
                return left;
            }
        }
        return this.evaluate(expr.right);
    }
    visitGroupingExpr(expr) {
        return this.evaluate(expr.expression);
    }
    visitLiteralExpr(expr) {
        return expr.value;
    }
    visitUnaryExpr(expr) {
        const right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Minus:
                return new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](-Number(right.value));
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Bang:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](!right.isTruthy());
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusPlus:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].MinusMinus:
                if (!right.isNumber()) {
                    this.error(`Invalid right-hand side expression in prefix operation:  "${_types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"][right.type]} ${right} is not a number`);
                }
                const newValue = Number(right.value) + (expr.operator.type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusPlus ? 1 : -1);
                if (expr.right instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Variable"]) {
                    this.scope.assign(expr.right.name.lexeme, new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](newValue));
                }
                else if (expr.right instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"]) {
                    const assing = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Set"](expr.right.entity, expr.right.key, new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](newValue), expr.line), expr.line);
                    this.evaluate(assing);
                }
                else {
                    this.error(`Invalid right-hand side expression in prefix operation:  ${expr.right}`);
                }
                return new _types_number__WEBPACK_IMPORTED_MODULE_10__["$Number"](newValue);
            default:
                this.error(`Unknown unary operator ' + expr.operator`);
                return new _types_null__WEBPACK_IMPORTED_MODULE_9__["$Null"](); // should be unreachable
        }
    }
    executeBlock(statements, nextScope) {
        const currentScope = this.scope;
        this.scope = nextScope;
        for (const statement of statements) {
            statement.result = this.evaluate(statement);
        }
        this.scope = currentScope;
        return new _types_void__WEBPACK_IMPORTED_MODULE_12__["$Void"]();
    }
    visitBlockExpr(expr) {
        return this.executeBlock(expr.statements, new _scope__WEBPACK_IMPORTED_MODULE_1__["Scope"](this.scope));
    }
    visitIfExpr(expr) {
        if (this.evaluate(expr.condition).isTruthy()) {
            return this.evaluate(expr.thenExpr);
        }
        else if (expr.elseExpr !== null) {
            return this.evaluate(expr.elseExpr);
        }
    }
    visitWhileExpr(expr) {
        const values = [];
        const currentScope = this.scope;
        while (this.evaluate(expr.condition).isTruthy()) {
            try {
                this.evaluate(expr.loop);
            }
            catch (e) {
                this.scope = currentScope;
                if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"] && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"].Break) {
                    if (e.value.type !== _types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"].Void) {
                        values.push(e.value);
                    }
                    break;
                }
                else if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"] && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"].Continue) {
                    if (e.value.type !== _types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"].Void) {
                        values.push(e.value);
                    }
                    continue;
                }
                else {
                    throw e;
                }
            }
        }
        if (values.length) {
            return new _types_list__WEBPACK_IMPORTED_MODULE_8__["$List"](values);
        }
        return new _types_void__WEBPACK_IMPORTED_MODULE_12__["$Void"]();
    }
    visitEachExpr(expr) {
        const currentScope = this.scope;
        const values = [];
        const value = this.evaluate(expr.iterable);
        if (!value.isList()) {
            this.error(`${value} is not an iterable list`);
        }
        let it = 0;
        while (it < value.value.length) {
            this.scope = currentScope;
            const foreachScope = new _scope__WEBPACK_IMPORTED_MODULE_1__["Scope"](this.scope);
            foreachScope.set(expr.name.lexeme, value.value[it++]);
            this.scope = foreachScope;
            try {
                this.evaluate(expr.loop);
            }
            catch (e) {
                this.scope = currentScope;
                if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"] && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"].Break) {
                    if (e.value.type !== _types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"].Void) {
                        values.push(e.value);
                    }
                    break;
                }
                else if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"] && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"].Continue) {
                    if (e.value.type !== _types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"].Void) {
                        values.push(e.value);
                    }
                    continue;
                }
                else {
                    throw e;
                }
            }
        }
        if (values.length) {
            return new _types_list__WEBPACK_IMPORTED_MODULE_8__["$List"](values);
        }
        return new _types_void__WEBPACK_IMPORTED_MODULE_12__["$Void"]();
    }
    visitCallExpr(expr) {
        // verify callee is a function
        const callee = this.evaluate(expr.callee);
        if (!callee.isFunction()) {
            this.error(`${callee} is not a function`);
        }
        // set this in function scope
        let thiz = null;
        if (expr.callee instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"]) {
            thiz = this.evaluate(expr.callee.entity);
        }
        else if (expr.thiz !== null) {
            thiz = expr.thiz;
        }
        // evaluate function arguments
        const args = [];
        for (const argument of expr.args) {
            args.push(this.evaluate(argument));
        }
        // pass arguments to function
        const func = callee;
        if (args.length !== func.arity && func.arity !== -1) {
            conzole.warn(`Warning at (${expr.paren.line}): ${callee} mismatched argument count; \n Expected ${func.arity} but got ${args.length} `);
            if (args.length < func.arity) {
                for (let i = args.length; i <= func.arity; ++i) {
                    args.push(new _types_null__WEBPACK_IMPORTED_MODULE_9__["$Null"]());
                }
            }
        }
        // execute function
        return func.call(thiz, args, this);
    }
    visitDictionaryExpr(expr) {
        const dict = new _types_dictionary__WEBPACK_IMPORTED_MODULE_6__["$Dictionary"](new Map());
        for (const property of expr.properties) {
            const key = this.evaluate(property.key);
            const value = this.evaluate(property.value);
            dict.set(key, value);
        }
        return dict;
    }
    visitKeyExpr(expr) {
        return new _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"](expr.name.literal);
    }
    visitGetExpr(expr) {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        if (entity.isNull() && expr.type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].QuestionDot) {
            return new _types_null__WEBPACK_IMPORTED_MODULE_9__["$Null"]();
        }
        return entity.get(key);
    }
    visitSetExpr(expr) {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        const value = this.evaluate(expr.value);
        entity.set(key, value);
        return value.value;
    }
    visitFuncExpr(expr) {
        const func = new _types_function__WEBPACK_IMPORTED_MODULE_7__["$Function"](expr, this.scope);
        this.scope.define(expr.name.lexeme, func);
        return func;
    }
    visitLambdaExpr(expr) {
        const lambda = expr.lambda;
        const func = new _types_function__WEBPACK_IMPORTED_MODULE_7__["$Function"](lambda, this.scope);
        return func;
    }
    visitReturnExpr(expr) {
        let value = new _types_null__WEBPACK_IMPORTED_MODULE_9__["$Null"]();
        if (expr.value) {
            value = this.evaluate(expr.value);
        }
        throw new _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"](value, _types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"].Return);
    }
    visitBreakExpr(expr) {
        const value = this.evaluate(expr.value);
        throw new _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"](value, _types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"].Break);
    }
    visitContinueExpr(expr) {
        const value = this.evaluate(expr.value);
        throw new _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"](value, _types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"].Continue);
    }
    visitTypeofExpr(expr) {
        const value = this.evaluate(expr.value);
        return new _types_string__WEBPACK_IMPORTED_MODULE_11__["$String"](_types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"][value.type].toLowerCase());
    }
    visitDeleteExpr(expr) {
        if (!(expr.value instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"])) {
            const value = this.evaluate(expr.value);
            const type = _types_type_enum__WEBPACK_IMPORTED_MODULE_13__["DataType"][value.type].toLowerCase();
            this.error(`Can't delete on type ${type} with value '${value}'. Not a Dictionary, Class or Entity`);
            return new _types_null__WEBPACK_IMPORTED_MODULE_9__["$Null"]();
        }
        const getExpr = expr.value;
        const entity = this.evaluate(getExpr.entity);
        const key = this.evaluate(getExpr.key);
        return entity.delete(key);
    }
}


/***/ }),

/***/ "./src/parser.ts":
/*!***********************!*\
  !*** ./src/parser.ts ***!
  \***********************/
/*! exports provided: Parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var _types_expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/expression */ "./src/types/expression.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token */ "./src/token.ts");
/* harmony import */ var _types_boolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/boolean */ "./src/types/boolean.ts");
/* harmony import */ var _types_null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/null */ "./src/types/null.ts");
/* harmony import */ var _types_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/number */ "./src/types/number.ts");
/* harmony import */ var _types_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/error */ "./src/types/error.ts");
/* harmony import */ var _types_void__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/void */ "./src/types/void.ts");
/* harmony import */ var _types_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/string */ "./src/types/string.ts");








class Parser {
    constructor() {
        this.errorLevel = 1;
    }
    parse(tokens) {
        this.current = 0;
        this.tokens = tokens;
        this.errors = [];
        const statements = [];
        while (!this.eof()) {
            try {
                statements.push(this.declaration());
            }
            catch (e) {
                if (e instanceof _types_error__WEBPACK_IMPORTED_MODULE_5__["$Error"]) {
                    this.errors.push(`Parse Error (${e.line}:${e.col}) => ${e.value}`);
                }
                else {
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
    match(...types) {
        for (const type of types) {
            if (this.check(type)) {
                this.advance();
                return true;
            }
        }
        return false;
    }
    advance() {
        if (!this.eof()) {
            this.current++;
        }
        return this.previous();
    }
    peek() {
        return this.tokens[this.current];
    }
    previous() {
        return this.tokens[this.current - 1];
    }
    check(type) {
        return this.peek().type === type;
    }
    eof() {
        return this.check(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Eof);
    }
    consume(type, message) {
        if (this.check(type)) {
            return this.advance();
        }
        return this.error(this.previous(), message + `, unexpected token "${this.peek().lexeme}"`);
    }
    extraSemicolon() {
        const match = this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Semicolon);
        if (this.check(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Semicolon)) {
            while (this.check(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Semicolon)) {
                this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Semicolon, '');
            }
        }
        return match;
    }
    error(token, message) {
        throw new _types_error__WEBPACK_IMPORTED_MODULE_5__["$Error"](message, token.line, token.col);
    }
    warning(message) {
        if (this.errorLevel === 1) {
            const token = this.previous();
            conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => ${message}`);
        }
    }
    synchronize() {
        do {
            switch (this.peek().type) {
                case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Class:
                case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Function:
                case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Var:
                case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].For:
                case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].If:
                case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].While:
                case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Do:
                case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Print:
                case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Return:
                    this.advance();
                    return;
            }
            if (this.check(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Semicolon) || this.check(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].RightBrace)) {
                this.advance();
                return;
            }
            this.advance();
        } while (!this.eof());
    }
    declaration() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Function)) {
            return this.funcDeclaration("function");
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Var)) {
            return this.varDeclaration();
        }
        return this.statement();
    }
    funcDeclaration(kind) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Identifier, `Expected a ${kind} name`);
        return this.funcParamsBody(name, kind);
    }
    funcParams(kind) {
        const params = [];
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].RightParen)) {
            do {
                if (params.length >= 255) {
                    this.error(this.peek(), `Parameter count exceeds 255`);
                }
                params.push(this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Identifier, `Expected a parameter name`));
            } while (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Comma));
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].RightParen, `Expected close parenthesis ")" after ${kind} parameters`);
        return params;
    }
    funcParamsBody(name, kind) {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].LeftParen, `Expected open parenthesis "(" after ${kind}`);
        const params = this.funcParams(kind);
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].LeftBrace)) {
            const body = this.block();
            if (name.type !== _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Lambda && this.extraSemicolon()) {
                this.warning(`Unnecessary semicolon after function ${name.lexeme} declaration`);
            }
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Func"](name, params, body, name.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Arrow)) {
            const body = [];
            let arrow;
            const keyword = this.previous();
            if (!this.check(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Semicolon)) {
                arrow = this.condStatements();
            }
            this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Semicolon);
            body.push(new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Return"](keyword, arrow, keyword.line));
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Func"](name, params, body, name.line);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].LeftBrace, `Expect "{" before ${kind} body`);
    }
    varDeclaration() {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Identifier, `Expected a variable name after "var" keyword`);
        let initializer = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Equal)) {
            initializer = this.condStatements();
        }
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Var"](name, null, initializer, name.line);
    }
    statement() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Print)) {
            return this.printStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].LeftBrace)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Block"](this.block(), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Return)) {
            return this.returnStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Continue, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Use)) {
            return this.continueStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Break)) {
            return this.breakStatement();
        }
        return this.condStatements();
    }
    condStatements() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].If)) {
            return this.ifStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].While)) {
            return this.whileStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Each)) {
            return this.eachStatement();
        }
        return this.expressionStatement();
    }
    ifStatement() {
        const keyword = this.previous();
        const condition = this.condStatements();
        const thenStmt = this.statement();
        let elseStmt = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Else)) {
            elseStmt = this.statement();
        }
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["If"](condition, thenStmt, elseStmt, keyword.line);
    }
    whileStatement() {
        const keyword = this.previous();
        const condition = this.condStatements();
        const loop = this.statement();
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["While"](condition, loop, keyword.line);
    }
    eachStatement() {
        const keyword = this.previous();
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Identifier, `Expected an identifier inside "foreach" statement`);
        this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].In, `Expected "in" keyword inside foreach statement`);
        const iterable = this.condStatements();
        const loop = this.statement();
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Each"](name, iterable, loop, keyword.line);
    }
    printStatement() {
        const keyword = this.previous();
        const value = this.condStatements();
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Print"](value, keyword.line);
    }
    returnStatement() {
        const keyword = this.previous();
        let value = null;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Semicolon)) {
            value = this.condStatements();
        }
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Return"](keyword, value, keyword.line);
    }
    continueStatement() {
        const keyword = this.previous();
        const value = this.condStatements();
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Continue"](value, keyword.line);
    }
    breakStatement() {
        const keyword = this.previous();
        const value = this.condStatements();
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Break"](value, keyword.line);
    }
    block() {
        const statements = [];
        while (!this.check(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].RightBrace) && !this.eof()) {
            statements.push(this.declaration());
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].RightBrace, `Expected close brace "}" after block statement`);
        return statements;
    }
    expressionStatement() {
        const expression = this.expression();
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Expression"](expression, expression.line);
    }
    expression() {
        return this.assignment();
    }
    assignment() {
        const expr = this.logicalOr();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Equal, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].PlusEqual, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].MinusEqual, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].StarEqual, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].SlashEqual)) {
            const operator = this.previous();
            let value = this.assignment();
            if (expr instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Variable"]) {
                const name = expr.name;
                if (operator.type !== _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Equal) {
                    value = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Variable"](name, name.line), operator, value, operator.line);
                }
                return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Assign"](name, value, name.line);
            }
            else if (expr instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"]) {
                if (operator.type !== _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Equal) {
                    value = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr.entity, expr.key, expr.type, expr.line), operator, value, operator.line);
                }
                return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Set"](expr.entity, expr.key, value, expr.line);
            }
            this.error(operator, `Invalid l-value, is not an assigning target.`);
        }
        return expr;
    }
    logicalOr() {
        let expr = this.logicalAnd();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Or)) {
            const operator = this.previous();
            const right = this.logicalAnd();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Logical"](expr, operator, right, operator.line);
        }
        return expr;
    }
    logicalAnd() {
        let expr = this.equality();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].And)) {
            const operator = this.previous();
            const right = this.equality();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Logical"](expr, operator, right, operator.line);
        }
        return expr;
    }
    equality() {
        let expr = this.comparison();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].BangEqual, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].EqualEqual, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].LessEqualGreater)) {
            const operator = this.previous();
            const right = this.comparison();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right, operator.line);
        }
        return expr;
    }
    comparison() {
        let expr = this.addition();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Greater, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].GreaterEqual, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Less, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].LessEqual)) {
            const operator = this.previous();
            const right = this.addition();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right, operator.line);
        }
        return expr;
    }
    addition() {
        let expr = this.modulus();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Minus, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Plus)) {
            const operator = this.previous();
            const right = this.modulus();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right, operator.line);
        }
        return expr;
    }
    modulus() {
        let expr = this.multiplication();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Percent)) {
            const operator = this.previous();
            const right = this.multiplication();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right, operator.line);
        }
        return expr;
    }
    multiplication() {
        let expr = this.typeof();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Slash, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Star)) {
            const operator = this.previous();
            const right = this.typeof();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right, operator.line);
        }
        return expr;
    }
    typeof() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Typeof)) {
            const operator = this.previous();
            const value = this.typeof();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Typeof"](value, operator.line);
        }
        return this.delete();
    }
    delete() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Delete)) {
            const operator = this.previous();
            const value = this.delete();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Delete"](value, operator.line);
        }
        return this.unary();
    }
    unary() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Minus, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Bang, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Dollar, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].PlusPlus, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].MinusMinus)) {
            const operator = this.previous();
            const right = this.unary();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Unary"](operator, right, operator.line);
        }
        return this.call();
    }
    call() {
        let expr = this.primary();
        let consumed = true;
        do {
            consumed = false;
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].LeftParen)) {
                consumed = true;
                do {
                    const args = [];
                    if (!this.check(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].RightParen)) {
                        do {
                            args.push(this.condStatements());
                        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Comma));
                    }
                    const paren = this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].RightParen, `Expected ")" after arguments`);
                    expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Call"](expr, paren, args, null, paren.line);
                } while (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].LeftParen));
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Dot, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].QuestionDot)) {
                consumed = true;
                expr = this.dotGet(expr, this.previous());
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].LeftBracket)) {
                consumed = true;
                expr = this.bracketGet(expr, this.previous());
            }
        } while (consumed);
        return expr;
    }
    dotGet(expr, operator) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Identifier, `Expect property name after '.'`);
        const key = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Key"](name, name.line);
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr, key, operator.type, name.line);
    }
    bracketGet(expr, operator) {
        let key = null;
        let end = null;
        let step = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_number__WEBPACK_IMPORTED_MODULE_4__["$Number"](1), operator.line);
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Colon)) {
            key = this.condStatements();
        }
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr, key, operator.type, operator.line);
    }
    primary() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].False)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_boolean__WEBPACK_IMPORTED_MODULE_2__["$Boolean"](false), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].True)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_boolean__WEBPACK_IMPORTED_MODULE_2__["$Boolean"](true), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Null)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_null__WEBPACK_IMPORTED_MODULE_3__["$Null"](), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Void)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_void__WEBPACK_IMPORTED_MODULE_6__["$Void"](), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Number)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_number__WEBPACK_IMPORTED_MODULE_4__["$Number"](this.previous().literal), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].String)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_string__WEBPACK_IMPORTED_MODULE_7__["$String"](this.previous().literal), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Template)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Template"](this.previous().literal, this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Identifier)) {
            const identifier = this.previous();
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].PlusPlus)) {
                return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Postfix"](identifier, 1, identifier.line);
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].MinusMinus)) {
                return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Postfix"](identifier, -1, identifier.line);
            }
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Variable"](identifier, identifier.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].LeftParen)) {
            const expr = this.condStatements();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].RightParen, `Expected ")" after expression`);
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Grouping"](expr, expr.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].LeftBrace)) {
            return this.dictionary();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Function)) {
            const token = new _token__WEBPACK_IMPORTED_MODULE_1__["Token"](_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Lambda, '@', '@', this.previous().line, this.previous().col);
            const lambda = this.funcParamsBody(token, 'lambda');
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Lambda"](lambda, token.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].LeftBracket)) {
            return this.list();
        }
        throw this.error(this.peek(), `Expected expression, unexpected token "${this.peek().lexeme}"`);
        // unreacheable code
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](null, 0);
    }
    dictionary() {
        const leftBrace = this.previous();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].RightBrace)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Dictionary"]([], this.previous().line);
        }
        const properties = [];
        do {
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].String, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Identifier, _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Number)) {
                const key = this.previous();
                if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Colon)) {
                    const value = this.condStatements();
                    properties.push(new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Set"](null, new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Key"](key, key.line), value, key.line));
                }
                else {
                    const value = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Variable"](key, key.line);
                    properties.push(new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Set"](null, new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Key"](key, key.line), value, key.line));
                }
            }
            else {
                this.error(this.peek(), `String, Number or Identifier expected as a Key of Dictionary {, unexpected token ${this.peek().lexeme}`);
            }
        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Comma));
        this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].RightBrace, `Expected "}" after object literal`);
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Dictionary"](properties, leftBrace.line);
    }
    list() {
        const values = [];
        const leftBracket = this.previous();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].RightBracket)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["List"]([], this.previous().line);
        }
        do {
            values.push(this.condStatements());
        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Comma));
        this.consume(_token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].RightBracket, `Expected "]" after array declaration`);
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["List"](values, leftBracket.line);
    }
}


/***/ }),

/***/ "./src/runtime.ts":
/*!************************!*\
  !*** ./src/runtime.ts ***!
  \************************/
/*! exports provided: fromJavaScriptMethod, fromJavaScriptFuncNumber, fromJavaScriptFuncVoid, Runtime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJavaScriptMethod", function() { return fromJavaScriptMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJavaScriptFuncNumber", function() { return fromJavaScriptFuncNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJavaScriptFuncVoid", function() { return fromJavaScriptFuncVoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Runtime", function() { return Runtime; });
/* harmony import */ var _types_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _types_null__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/null */ "./src/types/null.ts");
/* harmony import */ var _types_any__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/any */ "./src/types/any.ts");
/* harmony import */ var _types_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/function */ "./src/types/function.ts");
/* harmony import */ var _types_boolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/boolean */ "./src/types/boolean.ts");
/* harmony import */ var _types_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/list */ "./src/types/list.ts");
/* harmony import */ var _types_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/number */ "./src/types/number.ts");
/* harmony import */ var _types_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/string */ "./src/types/string.ts");
/* harmony import */ var _types_void__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/void */ "./src/types/void.ts");









function fromJavaScriptMethod(jsName, arity, type) {
    return new _types_function__WEBPACK_IMPORTED_MODULE_3__["$Callable"](jsName, arity, (thiz, args) => {
        const argValues = args.map((arg) => arg.value);
        const result = thiz.value[jsName](...argValues);
        switch (type) {
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Boolean:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_4__["$Boolean"](result);
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].String:
                return new _types_string__WEBPACK_IMPORTED_MODULE_7__["$String"](result);
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number:
                return new _types_number__WEBPACK_IMPORTED_MODULE_6__["$Number"](result);
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].List:
                return new _types_list__WEBPACK_IMPORTED_MODULE_5__["$List"](result);
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Null:
                return new _types_null__WEBPACK_IMPORTED_MODULE_1__["$Null"]();
            default:
                return new _types_any__WEBPACK_IMPORTED_MODULE_2__["$Any"](result);
        }
    });
}
function fromJavaScriptFuncNumber(func, name, arity) {
    return new _types_function__WEBPACK_IMPORTED_MODULE_3__["$Callable"](name, arity, (thiz, args) => {
        const argValues = args.map((arg) => arg.value);
        const result = func(...argValues);
        return new _types_number__WEBPACK_IMPORTED_MODULE_6__["$Number"](result);
    });
}
function fromJavaScriptFuncVoid(func, name, arity) {
    return new _types_function__WEBPACK_IMPORTED_MODULE_3__["$Callable"](name, arity, (thiz, args) => {
        const argValues = args.map((arg) => arg.value);
        func(...argValues);
        return new _types_void__WEBPACK_IMPORTED_MODULE_8__["$Void"]();
    });
}
const Runtime = {
    Console: new Map([
        ['log', fromJavaScriptFuncVoid(console.log, 'console.log', -1)],
        ['warn', fromJavaScriptFuncVoid(console.warn, 'console.warn', -1)],
        ['info', fromJavaScriptFuncVoid(console.info, 'console.info', -1)],
        ['error', fromJavaScriptFuncVoid(console.error, 'console.error', -1)]
    ]),
    Math: new Map([
        ['ceil', fromJavaScriptFuncNumber(Math.ceil, 'ceil', 1)],
        ['cos', fromJavaScriptFuncNumber(Math.cos, 'cos', 1)],
        ['floor', fromJavaScriptFuncNumber(Math.floor, 'floor', 1)],
        ['log', fromJavaScriptFuncNumber(Math.log, 'log', 1)],
        ['max', fromJavaScriptFuncNumber(Math.max, 'max', -1)],
        ['min', fromJavaScriptFuncNumber(Math.min, 'min', -1)],
        ['pi', new _types_number__WEBPACK_IMPORTED_MODULE_6__["$Number"](Math.PI)],
        ['pow', fromJavaScriptFuncNumber(Math.pow, 'pow', 2)],
        ['random', fromJavaScriptFuncNumber(Math.random, 'random', 0)],
        ['round', fromJavaScriptFuncNumber(Math.round, 'round', 1)],
        ['sin', fromJavaScriptFuncNumber(Math.sin, 'sin', 1)],
        ['sqrt', fromJavaScriptFuncNumber(Math.sqrt, 'sqrt', 1)],
        ['tan', fromJavaScriptFuncNumber(Math.tan, 'tan', 1)],
        ['trunc', fromJavaScriptFuncNumber(Math.trunc, 'trunc', 1)]
    ]),
    Utils: new Map([])
};


/***/ }),

/***/ "./src/scanner.ts":
/*!************************!*\
  !*** ./src/scanner.ts ***!
  \************************/
/*! exports provided: Scanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scanner", function() { return Scanner; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token */ "./src/token.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");


class Scanner {
    scan(source) {
        this.source = source;
        this.tokens = [];
        this.errors = [];
        this.current = 0;
        this.start = 0;
        this.line = 1;
        this.col = 1;
        while (!this.eof()) {
            this.start = this.current;
            try {
                this.getToken();
            }
            catch (e) {
                this.errors.push(e.message);
                if (this.errors.length > 100) {
                    this.errors.push('Error limit exceeded');
                    return this.tokens;
                }
            }
        }
        this.tokens.push(new _token__WEBPACK_IMPORTED_MODULE_0__["Token"](_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Eof, '', null, this.line, 0));
        return this.tokens;
    }
    eof() {
        return this.current >= this.source.length;
    }
    advance() {
        if (this.peek() === '\n') {
            this.line++;
            this.col = 0;
        }
        this.current++;
        this.col++;
        return this.source.charAt(this.current - 1);
    }
    addToken(tokenType, literal) {
        const text = this.source.substring(this.start, this.current);
        this.tokens.push(new _token__WEBPACK_IMPORTED_MODULE_0__["Token"](tokenType, text, literal, this.line, this.col));
    }
    match(expected) {
        if (this.eof()) {
            return false;
        }
        if (this.source.charAt(this.current) !== expected) {
            return false;
        }
        this.current++;
        return true;
    }
    peek() {
        if (this.eof()) {
            return '\0';
        }
        return this.source.charAt(this.current);
    }
    peekNext() {
        if (this.current + 1 >= this.source.length) {
            return '\0';
        }
        return this.source.charAt(this.current + 1);
    }
    comment() {
        while (this.peek() !== '\n' && !this.eof()) {
            this.advance();
        }
    }
    multilineComment() {
        while (!this.eof() && !(this.peek() === '*' && this.peekNext() === '/')) {
            this.advance();
        }
        if (this.eof()) {
            this.error('Unterminated comment, expecting closing "*/"');
        }
        else {
            // the closing slash '*/'
            this.advance();
            this.advance();
        }
    }
    string(quote) {
        while (this.peek() !== quote && !this.eof()) {
            this.advance();
        }
        // Unterminated string.
        if (this.eof()) {
            this.error(`Unterminated string, expecting closing ${quote}`);
            return;
        }
        // The closing ".
        this.advance();
        // Trim the surrounding quotes.
        const value = this.source.substring(this.start + 1, this.current - 1);
        this.addToken(quote !== '`' ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].String : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Template, value);
    }
    number() {
        // gets integer part
        while (_utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](this.peek())) {
            this.advance();
        }
        // checks for fraction
        if (this.peek() === '.' && _utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](this.peekNext())) {
            this.advance();
        }
        // gets fraction part
        while (_utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](this.peek())) {
            this.advance();
        }
        // checks for exponent
        if (this.peek().toLowerCase() === 'e') {
            this.advance();
            if (this.peek() === '-' || this.peek() === '+') {
                this.advance();
            }
        }
        while (_utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](this.peek())) {
            this.advance();
        }
        const value = this.source.substring(this.start, this.current);
        this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Number, Number(value));
    }
    identifier() {
        while (_utils__WEBPACK_IMPORTED_MODULE_1__["isAlphaNumeric"](this.peek())) {
            this.advance();
        }
        const value = this.source.substring(this.start, this.current);
        const capitalized = _utils__WEBPACK_IMPORTED_MODULE_1__["capitalize"](value);
        if (_utils__WEBPACK_IMPORTED_MODULE_1__["isKeyword"](capitalized)) {
            this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"][capitalized], value);
        }
        else {
            this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Identifier, value);
        }
    }
    getToken() {
        const char = this.advance();
        switch (char) {
            case '(':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].LeftParen, null);
                break;
            case ')':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].RightParen, null);
                break;
            case '[':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].LeftBracket, null);
                break;
            case ']':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].RightBracket, null);
                break;
            case '{':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].LeftBrace, null);
                break;
            case '}':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].RightBrace, null);
                break;
            case ',':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Comma, null);
                break;
            case ';':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Semicolon, null);
                break;
            case '^':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Caret, null);
                break;
            case '$':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Dollar, null);
                break;
            case '#':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Hash, null);
                break;
            case '@':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Function, '@');
                break;
            case ':':
                this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Arrow : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Colon, null);
                break;
            case '*':
                this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].StarEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Star, null);
                break;
            case '%':
                this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].PercentEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Percent, null);
                break;
            case '|':
                this.addToken(this.match('|') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Or : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Pipe, null);
                break;
            case '&':
                this.addToken(this.match('&') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].And : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Ampersand, null);
                break;
            case '>':
                this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].GreaterEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Greater, null);
                break;
            case '!':
                this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].BangEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Bang, null);
                break;
            case '?':
                this.addToken(this.match('?') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].QuestionQuestion : this.match('.') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].QuestionDot : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Question, null);
                break;
            case '=':
                this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].EqualEqual : this.match('>') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Arrow : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Equal, null);
                break;
            case '+':
                this.addToken(this.match('+') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].PlusPlus : this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].PlusEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Plus, null);
                break;
            case '-':
                this.addToken(this.match('-') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].MinusMinus : this.match('>') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Return : this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].MinusEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Minus, null);
                break;
            case '<':
                this.addToken(this.match('=') ? this.match('>') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].LessEqualGreater : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].LessEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Less, null);
                break;
            case '.':
                if (this.match('.')) {
                    if (this.match('.')) {
                        this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].DotDotDot, null);
                    }
                    else {
                        this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].DotDot, null);
                    }
                }
                else {
                    this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Dot, null);
                }
                break;
            case '/':
                if (this.match('/')) {
                    this.comment();
                }
                else if (this.match('*')) {
                    this.multilineComment();
                }
                else {
                    this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].SlashEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Slash, null);
                }
                break;
            case `'`:
            case `"`:
            case '`':
                this.string(char);
                break;
            // ignore cases
            case '\n':
            case ' ':
            case '\r':
            case '\t':
                break;
            // compex cases
            default:
                if (_utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](char)) {
                    this.number();
                }
                else if (_utils__WEBPACK_IMPORTED_MODULE_1__["isAlpha"](char)) {
                    this.identifier();
                }
                else {
                    this.error(`Unexpected character '${char}'`);
                }
                break;
        }
    }
    error(message) {
        throw new Error(`Scan Error (${this.line}:${this.col}) => ${message}`);
    }
}


/***/ }),

/***/ "./src/scope.ts":
/*!**********************!*\
  !*** ./src/scope.ts ***!
  \**********************/
/*! exports provided: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony import */ var _types_null__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/null */ "./src/types/null.ts");

class Scope {
    constructor(parent = null) {
        this.values = new Map();
        this.parent = parent;
    }
    error(message) {
        throw new Error(`Runtime Error => ${message}`);
    }
    set(name, value) {
        this.values.set(name, value);
    }
    define(name, value) {
        if (this.values.has(name)) {
            this.error(`Identifier "${name}" has already been defined`);
        }
        else {
            this.set(name, value);
        }
    }
    assign(name, value) {
        if (this.values.has(name)) {
            this.set(name, value);
        }
        else {
            if (this.parent !== null) {
                return this.parent.assign(name, value);
            }
            this.error(`Identifier "${name}" has not been defined`);
        }
    }
    get(key, token = null) {
        if (this.values.has(key)) {
            return this.values.get(key);
        }
        if (this.parent !== null) {
            return this.parent.get(key);
        }
        if (token) {
            this.error(` at (${token.line}:${token.col}) => "${token.lexeme}" is not defined`);
        }
        else {
            this.error(`"${key}" is not defined`);
        }
        return new _types_null__WEBPACK_IMPORTED_MODULE_0__["$Null"]();
    }
}


/***/ }),

/***/ "./src/token.ts":
/*!**********************!*\
  !*** ./src/token.ts ***!
  \**********************/
/*! exports provided: TokenType, Token */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenType", function() { return TokenType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
var TokenType;
(function (TokenType) {
    // Parser Tokens
    TokenType[TokenType["Eof"] = 0] = "Eof";
    TokenType[TokenType["Panic"] = 1] = "Panic";
    TokenType[TokenType["Lambda"] = 2] = "Lambda";
    // Single Character Tokens
    TokenType[TokenType["Ampersand"] = 3] = "Ampersand";
    TokenType[TokenType["AtSign"] = 4] = "AtSign";
    TokenType[TokenType["Caret"] = 5] = "Caret";
    TokenType[TokenType["Comma"] = 6] = "Comma";
    TokenType[TokenType["Dollar"] = 7] = "Dollar";
    TokenType[TokenType["Dot"] = 8] = "Dot";
    TokenType[TokenType["Hash"] = 9] = "Hash";
    TokenType[TokenType["LeftBrace"] = 10] = "LeftBrace";
    TokenType[TokenType["LeftBracket"] = 11] = "LeftBracket";
    TokenType[TokenType["LeftParen"] = 12] = "LeftParen";
    TokenType[TokenType["Percent"] = 13] = "Percent";
    TokenType[TokenType["Pipe"] = 14] = "Pipe";
    TokenType[TokenType["RightBrace"] = 15] = "RightBrace";
    TokenType[TokenType["RightBracket"] = 16] = "RightBracket";
    TokenType[TokenType["RightParen"] = 17] = "RightParen";
    TokenType[TokenType["Semicolon"] = 18] = "Semicolon";
    TokenType[TokenType["Slash"] = 19] = "Slash";
    TokenType[TokenType["Star"] = 20] = "Star";
    // One Or Two Character Tokens
    TokenType[TokenType["Arrow"] = 21] = "Arrow";
    TokenType[TokenType["Bang"] = 22] = "Bang";
    TokenType[TokenType["BangEqual"] = 23] = "BangEqual";
    TokenType[TokenType["Colon"] = 24] = "Colon";
    TokenType[TokenType["Equal"] = 25] = "Equal";
    TokenType[TokenType["EqualEqual"] = 26] = "EqualEqual";
    TokenType[TokenType["Greater"] = 27] = "Greater";
    TokenType[TokenType["GreaterEqual"] = 28] = "GreaterEqual";
    TokenType[TokenType["Less"] = 29] = "Less";
    TokenType[TokenType["LessEqual"] = 30] = "LessEqual";
    TokenType[TokenType["Minus"] = 31] = "Minus";
    TokenType[TokenType["MinusEqual"] = 32] = "MinusEqual";
    TokenType[TokenType["MinusMinus"] = 33] = "MinusMinus";
    TokenType[TokenType["PercentEqual"] = 34] = "PercentEqual";
    TokenType[TokenType["Plus"] = 35] = "Plus";
    TokenType[TokenType["PlusEqual"] = 36] = "PlusEqual";
    TokenType[TokenType["PlusPlus"] = 37] = "PlusPlus";
    TokenType[TokenType["Question"] = 38] = "Question";
    TokenType[TokenType["QuestionDot"] = 39] = "QuestionDot";
    TokenType[TokenType["QuestionQuestion"] = 40] = "QuestionQuestion";
    TokenType[TokenType["SlashEqual"] = 41] = "SlashEqual";
    TokenType[TokenType["StarEqual"] = 42] = "StarEqual";
    TokenType[TokenType["DotDot"] = 43] = "DotDot";
    TokenType[TokenType["DotDotDot"] = 44] = "DotDotDot";
    TokenType[TokenType["LessEqualGreater"] = 45] = "LessEqualGreater";
    // Literals
    TokenType[TokenType["Identifier"] = 46] = "Identifier";
    TokenType[TokenType["Template"] = 47] = "Template";
    TokenType[TokenType["String"] = 48] = "String";
    TokenType[TokenType["Number"] = 49] = "Number";
    TokenType[TokenType["Regex"] = 50] = "Regex";
    // Keywords
    TokenType[TokenType["And"] = 51] = "And";
    TokenType[TokenType["Break"] = 52] = "Break";
    TokenType[TokenType["Base"] = 53] = "Base";
    TokenType[TokenType["Class"] = 54] = "Class";
    TokenType[TokenType["Continue"] = 55] = "Continue";
    TokenType[TokenType["Delete"] = 56] = "Delete";
    TokenType[TokenType["Do"] = 57] = "Do";
    TokenType[TokenType["Each"] = 58] = "Each";
    TokenType[TokenType["Else"] = 59] = "Else";
    TokenType[TokenType["Extends"] = 60] = "Extends";
    TokenType[TokenType["False"] = 61] = "False";
    TokenType[TokenType["For"] = 62] = "For";
    TokenType[TokenType["Foreach"] = 63] = "Foreach";
    TokenType[TokenType["Function"] = 64] = "Function";
    TokenType[TokenType["If"] = 65] = "If";
    TokenType[TokenType["In"] = 66] = "In";
    TokenType[TokenType["Instanceof"] = 67] = "Instanceof";
    TokenType[TokenType["Is"] = 68] = "Is";
    TokenType[TokenType["New"] = 69] = "New";
    TokenType[TokenType["Null"] = 70] = "Null";
    TokenType[TokenType["Or"] = 71] = "Or";
    TokenType[TokenType["Print"] = 72] = "Print";
    TokenType[TokenType["Return"] = 73] = "Return";
    TokenType[TokenType["True"] = 74] = "True";
    TokenType[TokenType["Typeof"] = 75] = "Typeof";
    TokenType[TokenType["Var"] = 76] = "Var";
    TokenType[TokenType["Void"] = 77] = "Void";
    TokenType[TokenType["Use"] = 78] = "Use";
    TokenType[TokenType["While"] = 79] = "While";
    TokenType[TokenType["With"] = 80] = "With";
})(TokenType || (TokenType = {}));
class Token {
    constructor(type, lexeme, literal, line, col) {
        this.name = TokenType[type];
        this.type = type;
        this.lexeme = lexeme;
        this.literal = literal;
        this.line = line;
        this.col = col;
    }
    toString() {
        return `[(${this.line}):"${this.lexeme}"]`;
    }
}


/***/ }),

/***/ "./src/types/any.ts":
/*!**************************!*\
  !*** ./src/types/any.ts ***!
  \**************************/
/*! exports provided: $Any */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Any", function() { return $Any; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");

class $Any {
    constructor(value, type = _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Any) {
        this.type = _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Any;
        this.value = value;
        this.type = type;
    }
    isString() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].String;
    }
    isNull() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Null;
    }
    isBoolean() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Boolean;
    }
    isNumber() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number;
    }
    isRange() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Range;
    }
    isFunction() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Function;
    }
    isClass() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Class;
    }
    isLambda() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Function && this.name === '@';
    }
    isList() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].List;
    }
    isDictionary() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Dictionary;
    }
    isObject() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Object;
    }
    isTruthy() {
        if (this.isNull()) {
            return false;
        }
        if (this.isBoolean()) {
            return Boolean(this.value);
        }
        if (this.isNumber() && this.value === 0) {
            return false;
        }
        if (this.isString() && this.value.toString().length === 0) {
            return false;
        }
        if (this.isList() && this.value.length === 0) {
            return false;
        }
        if (this.isDictionary() && this.value.size === 0) {
            return false;
        }
        if (this.value === null) {
            throw new Error("Unknown error value Any is null");
        }
        if (typeof this.value === 'undefined') {
            throw new Error("Unknown error value Any is undefined");
        }
        return true;
    }
    isEqual(other) {
        return this.value === other.value;
    }
    isKeyValue() {
        if (this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Class ||
            this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Dictionary ||
            this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Object) {
            return true;
        }
        return false;
    }
    get(key) {
        conzole.error(`key ${key} does not exist in ${this}`);
        throw new Error("Error in Any getter");
    }
    set(key, value) {
        conzole.error(`key ${key} does not exist in ${this}`);
        throw new Error("Error in Any setter");
    }
    delete(key) {
        conzole.error(`${this} does not support operator`);
        throw new Error("Error in Any delete");
    }
    toString() {
        return this.value.toString();
    }
}


/***/ }),

/***/ "./src/types/boolean.ts":
/*!******************************!*\
  !*** ./src/types/boolean.ts ***!
  \******************************/
/*! exports provided: $Boolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Boolean", function() { return $Boolean; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Boolean extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Boolean);
    }
}


/***/ }),

/***/ "./src/types/dictionary.ts":
/*!*********************************!*\
  !*** ./src/types/dictionary.ts ***!
  \*********************************/
/*! exports provided: $Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Dictionary", function() { return $Dictionary; });
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime */ "./src/runtime.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./src/types/function.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./src/types/number.ts");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./string */ "./src/types/string.ts");
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./boolean */ "./src/types/boolean.ts");








let $Dictionary = /** @class */ (() => {
    class $Dictionary extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
        constructor(value) {
            super(value, _type_enum__WEBPACK_IMPORTED_MODULE_6__["DataType"].Dictionary);
        }
        get(key) {
            if (this.value.has(key.value)) {
                return this.value.get(key.value);
            }
            else if ($Dictionary.runtime.has(key.value)) {
                return $Dictionary.runtime.get(key.value);
            }
            else {
                return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
            }
        }
        set(key, value) {
            this.value.set(key.value, value);
            return value;
        }
        delete(key) {
            const result = this.value.delete(key.value);
            return new _boolean__WEBPACK_IMPORTED_MODULE_7__["$Boolean"](result);
        }
        toString() {
            const result = [];
            this.value.forEach((value, key) => {
                result.push(`${key.toString()}: ${value}`);
            });
            return `{${result.join('; ')}}`;
        }
        static each(thiz, args, interpreter) {
            thiz.value.forEach((value, key) => {
                args[0].call(thiz, [value, new _string__WEBPACK_IMPORTED_MODULE_5__["$String"](key), thiz], interpreter);
            });
            return thiz;
        }
        static map(thiz, args, interpreter) {
            thiz.value.forEach((value, key) => {
                thiz.value.set('key', args[0].call(thiz, [value, new _string__WEBPACK_IMPORTED_MODULE_5__["$String"](key), thiz], interpreter));
            });
            return thiz;
        }
        static indexOf(thiz, args, interpreter) {
            let index = null;
            thiz.value.forEach((value, key) => {
                if (value.type === args[0].type && value.value === args[0].value) {
                    index = key;
                }
            });
            if (index !== null) {
                return new _string__WEBPACK_IMPORTED_MODULE_5__["$String"](index);
            }
            return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
    }
    $Dictionary.runtime = new Map([
        ['clear', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('clear', 0, _type_enum__WEBPACK_IMPORTED_MODULE_6__["DataType"].Null)],
        ['delete', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('delete', 1, _type_enum__WEBPACK_IMPORTED_MODULE_6__["DataType"].Boolean)],
        ['each', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('each', 1, $Dictionary.each)],
        ['has', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('has', 1, _type_enum__WEBPACK_IMPORTED_MODULE_6__["DataType"].Boolean)],
        ['indexOf', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('indexOf', 1, $Dictionary.indexOf)],
        ['map', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('map', 1, $Dictionary.map)],
        ['merge', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('merge', 1, (thiz, args) => new $Dictionary(new Map([...(thiz.value), ...(args[0].value)])))],
        ['size', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('size', 0, (thiz, args) => new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](thiz.value.size))]
    ]);
    return $Dictionary;
})();



/***/ }),

/***/ "./src/types/error.ts":
/*!****************************!*\
  !*** ./src/types/error.ts ***!
  \****************************/
/*! exports provided: $Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Error", function() { return $Error; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Error extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value, line, col) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Error);
        this.line = line;
        this.col = col;
    }
    toString() {
        return this.value.toString();
    }
}


/***/ }),

/***/ "./src/types/expression.ts":
/*!*********************************!*\
  !*** ./src/types/expression.ts ***!
  \*********************************/
/*! exports provided: Expr, Assign, Binary, Call, Delete, Dictionary, Get, Grouping, Key, Lambda, Logical, List, Literal, Postfix, Set, Template, Typeof, Unary, Variable, Block, Break, Continue, Each, Expression, Func, If, Print, Return, Var, While */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expr", function() { return Expr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assign", function() { return Assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binary", function() { return Binary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Call", function() { return Call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Get", function() { return Get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grouping", function() { return Grouping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lambda", function() { return Lambda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logical", function() { return Logical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Literal", function() { return Literal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Postfix", function() { return Postfix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typeof", function() { return Typeof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unary", function() { return Unary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variable", function() { return Variable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Break", function() { return Break; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Continue", function() { return Continue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Each", function() { return Each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return Expression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Func", function() { return Func; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "If", function() { return If; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Print", function() { return Print; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Return", function() { return Return; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Var", function() { return Var; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "While", function() { return While; });
;
class Expr {
    // tslint:disable-next-line
    constructor() { }
}
class Assign extends Expr {
    constructor(name, value, line) {
        super();
        this.name = name;
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitAssignExpr(this);
    }
    toString() {
        return 'Expr.Assign';
    }
}
class Binary extends Expr {
    constructor(left, operator, right, line) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitBinaryExpr(this);
    }
    toString() {
        return 'Expr.Binary';
    }
}
class Call extends Expr {
    constructor(callee, paren, args, thiz, line) {
        super();
        this.callee = callee;
        this.paren = paren;
        this.args = args;
        this.thiz = thiz;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitCallExpr(this);
    }
    toString() {
        return 'Expr.Call';
    }
}
class Delete extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitDeleteExpr(this);
    }
    toString() {
        return 'Expr.Delete';
    }
}
class Dictionary extends Expr {
    constructor(properties, line) {
        super();
        this.properties = properties;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitDictionaryExpr(this);
    }
    toString() {
        return 'Expr.Dictionary';
    }
}
class Get extends Expr {
    constructor(entity, key, type, line) {
        super();
        this.entity = entity;
        this.key = key;
        this.type = type;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitGetExpr(this);
    }
    toString() {
        return 'Expr.Get';
    }
}
class Grouping extends Expr {
    constructor(expression, line) {
        super();
        this.expression = expression;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitGroupingExpr(this);
    }
    toString() {
        return 'Expr.Grouping';
    }
}
class Key extends Expr {
    constructor(name, line) {
        super();
        this.name = name;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitKeyExpr(this);
    }
    toString() {
        return 'Expr.Key';
    }
}
class Lambda extends Expr {
    constructor(lambda, line) {
        super();
        this.lambda = lambda;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitLambdaExpr(this);
    }
    toString() {
        return 'Expr.Lambda';
    }
}
class Logical extends Expr {
    constructor(left, operator, right, line) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitLogicalExpr(this);
    }
    toString() {
        return 'Expr.Logical';
    }
}
class List extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitListExpr(this);
    }
    toString() {
        return 'Expr.List';
    }
}
class Literal extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitLiteralExpr(this);
    }
    toString() {
        return 'Expr.Literal';
    }
}
class Postfix extends Expr {
    constructor(name, increment, line) {
        super();
        this.name = name;
        this.increment = increment;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitPostfixExpr(this);
    }
    toString() {
        return 'Expr.Postfix';
    }
}
class Set extends Expr {
    constructor(entity, key, value, line) {
        super();
        this.entity = entity;
        this.key = key;
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitSetExpr(this);
    }
    toString() {
        return 'Expr.Set';
    }
}
class Template extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitTemplateExpr(this);
    }
    toString() {
        return 'Expr.Template';
    }
}
class Typeof extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitTypeofExpr(this);
    }
    toString() {
        return 'Expr.Typeof';
    }
}
class Unary extends Expr {
    constructor(operator, right, line) {
        super();
        this.operator = operator;
        this.right = right;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitUnaryExpr(this);
    }
    toString() {
        return 'Expr.Unary';
    }
}
class Variable extends Expr {
    constructor(name, line) {
        super();
        this.name = name;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitVariableExpr(this);
    }
    toString() {
        return 'Expr.Variable';
    }
}
class Block extends Expr {
    constructor(statements, line) {
        super();
        this.statements = statements;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitBlockExpr(this);
    }
    toString() {
        return 'Expr.Block';
    }
}
class Break extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitBreakExpr(this);
    }
    toString() {
        return 'Expr.Break';
    }
}
class Continue extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitContinueExpr(this);
    }
    toString() {
        return 'Expr.Continue';
    }
}
class Each extends Expr {
    constructor(name, iterable, loop, line) {
        super();
        this.name = name;
        this.iterable = iterable;
        this.loop = loop;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitEachExpr(this);
    }
    toString() {
        return 'Expr.Each';
    }
}
class Expression extends Expr {
    constructor(expression, line) {
        super();
        this.expression = expression;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitExpressionExpr(this);
    }
    toString() {
        return 'Expr.Expression';
    }
}
class Func extends Expr {
    constructor(name, params, body, line) {
        super();
        this.name = name;
        this.params = params;
        this.body = body;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitFuncExpr(this);
    }
    toString() {
        return 'Expr.Func';
    }
}
class If extends Expr {
    constructor(condition, thenExpr, elseExpr, line) {
        super();
        this.condition = condition;
        this.thenExpr = thenExpr;
        this.elseExpr = elseExpr;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitIfExpr(this);
    }
    toString() {
        return 'Expr.If';
    }
}
class Print extends Expr {
    constructor(expression, line) {
        super();
        this.expression = expression;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitPrintExpr(this);
    }
    toString() {
        return 'Expr.Print';
    }
}
class Return extends Expr {
    constructor(keyword, value, line) {
        super();
        this.keyword = keyword;
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitReturnExpr(this);
    }
    toString() {
        return 'Expr.Return';
    }
}
class Var extends Expr {
    constructor(name, type, initializer, line) {
        super();
        this.name = name;
        this.type = type;
        this.initializer = initializer;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitVarExpr(this);
    }
    toString() {
        return 'Expr.Var';
    }
}
class While extends Expr {
    constructor(condition, loop, line) {
        super();
        this.condition = condition;
        this.loop = loop;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitWhileExpr(this);
    }
    toString() {
        return 'Expr.While';
    }
}


/***/ }),

/***/ "./src/types/function.ts":
/*!*******************************!*\
  !*** ./src/types/function.ts ***!
  \*******************************/
/*! exports provided: $Callable, $Function */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Callable", function() { return $Callable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Function", function() { return $Function; });
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ "./src/scope.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");




class $Callable extends _any__WEBPACK_IMPORTED_MODULE_0__["$Any"] {
    constructor(name, arity, value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_1__["DataType"].Function);
        this.arity = arity;
        this.name = name;
    }
    call(thiz, args, interpreter) {
        return this.value(thiz, args, interpreter);
    }
    toString() {
        return `<${this.name}  function>`;
    }
}
class $Function extends $Callable {
    constructor(declaration, closure) {
        super(declaration.name.lexeme, declaration.params.length, null);
        this.declaration = declaration;
        this.closure = closure;
    }
    call(thiz, args, interpreter) {
        const scope = new _scope__WEBPACK_IMPORTED_MODULE_2__["Scope"](this.closure);
        for (let i = 0; i < this.declaration.params.length; i++) {
            scope.define(this.declaration.params[i].lexeme, args[i]);
        }
        scope.set('this', thiz);
        let restoreScope = null;
        try {
            restoreScope = interpreter.scope;
            interpreter.executeBlock(this.declaration.body, scope);
        }
        catch (e) {
            if (e instanceof _any__WEBPACK_IMPORTED_MODULE_0__["$Any"] && e.type === _type_enum__WEBPACK_IMPORTED_MODULE_1__["DataType"].Return) {
                if (restoreScope) {
                    interpreter.scope = restoreScope;
                }
                return e.value;
            }
            else {
                throw e;
            }
        }
        return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
    }
}


/***/ }),

/***/ "./src/types/list.ts":
/*!***************************!*\
  !*** ./src/types/list.ts ***!
  \***************************/
/*! exports provided: $List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$List", function() { return $List; });
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime */ "./src/runtime.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./src/types/function.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./src/types/number.ts");
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");






let $List = /** @class */ (() => {
    class $List extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
        constructor(value) {
            super(value, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List);
        }
        get(key) {
            if (key.isNumber()) {
                if (typeof this.value[key.value] !== 'undefined') {
                    return this.value[key.value];
                }
                else {
                    return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
                }
            }
            else if ($List.runtime.has(key.value)) {
                return $List.runtime.get(key.value);
            }
            else {
                return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
            }
        }
        set(key, value) {
            if (key.isNumber()) {
                this.value[key.value] = value;
            }
            return value;
        }
        toString() {
            return `[${this.value.join(',')}]`;
        }
        static size(thiz, args) {
            return new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](args[0].value.length);
        }
        static each(thiz, args, interpreter) {
            for (let i = 0; i < thiz.value.length; ++i) {
                args[0].call(thiz, [thiz.value[i], new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](i), thiz], interpreter);
            }
            return thiz;
        }
        static sort(thiz, args, interpreter) {
            const list = thiz.value;
            if (args.length) {
                list.sort((a, b) => args[0].call(thiz, [a, b], interpreter).value);
            }
            else {
                list.sort((a, b) => a.value - b.value);
            }
            return thiz;
        }
        static map(thiz, args, interpreter) {
            for (let i = 0; i < thiz.value.length; ++i) {
                thiz.value[i] = args[0].call(thiz, [new _any__WEBPACK_IMPORTED_MODULE_1__["$Any"](thiz.value[i]), new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](i), thiz], interpreter);
            }
            return thiz;
        }
    }
    $List.runtime = new Map([
        ['concat', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('concat', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
        ['each', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('each', 1, $List.each)],
        ['sort', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('sort', -1, $List.sort)],
        ['includes', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('includes', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Boolean)],
        ['indexOf', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('indexOf', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Number)],
        ['join', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('join', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['lastIndexOf', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('lastIndexOf', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Number)],
        ['map', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('map', 1, $List.map)],
        ['pop', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('pop', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
        ['push', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('push', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
        ['shift', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('shift', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
        ['size', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('size', 0, (thiz, args) => new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](thiz.value.length))],
        ['slice', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('slice', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
        ['splice', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('splice', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
        ['unshift', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('unshift', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)]
    ]);
    return $List;
})();



/***/ }),

/***/ "./src/types/null.ts":
/*!***************************!*\
  !*** ./src/types/null.ts ***!
  \***************************/
/*! exports provided: $Null */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Null", function() { return $Null; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Null extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor() {
        super(null);
        this.type = _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Null;
    }
    toString() {
        return 'null';
    }
}


/***/ }),

/***/ "./src/types/number.ts":
/*!*****************************!*\
  !*** ./src/types/number.ts ***!
  \*****************************/
/*! exports provided: $Number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Number", function() { return $Number; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Number extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number);
    }
    toString() {
        return this.value.toString();
    }
}


/***/ }),

/***/ "./src/types/string.ts":
/*!*****************************!*\
  !*** ./src/types/string.ts ***!
  \*****************************/
/*! exports provided: $String */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$String", function() { return $String; });
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime */ "./src/runtime.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./src/types/function.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./src/types/number.ts");
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list */ "./src/types/list.ts");







let $String = /** @class */ (() => {
    class $String extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
        constructor(value) {
            super(value, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String);
        }
        get(key) {
            if (key.isNumber()) {
                return new $String(this.value[key.value]);
            }
            else if ($String.runtime.has(key.value)) {
                return $String.runtime.get(key.value);
            }
            return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
        set(key, value) {
            if (typeof key !== 'number') {
                // this.properties.set(key, value);
            }
            return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
        toString() {
            return `${this.value}`;
        }
        static replace(thiz, args, interpeter) {
            if (args[1].isFunction()) {
                // return new $String(thiz.value.replace(args[0].value, args[1].value));
                return thiz.value.replace(args[0].value, ((match) => (args[1].call(thiz, [new $String(match)], interpeter)).value));
            }
            return new $String(thiz.value.replace(args[0].value, args[1].value));
        }
        static split(thiz, args, interpeter) {
            const splits = thiz.value.split(args[0].value).map((str) => new $String(str));
            return new _list__WEBPACK_IMPORTED_MODULE_6__["$List"](splits);
        }
    }
    $String.runtime = new Map([
        ['toUpper', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('toUpperCase', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['toLower', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('toLowerCase', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['size', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('size', 0, (thiz, args) => new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](thiz.value.length))],
        ['split', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('split', 1, $String.split)],
        ['concat', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('concat', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['includes', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('includes', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Boolean)],
        ['indexOf', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('indexOf', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Number)],
        ['lastIndexOf', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('lastIndexOf', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Number)],
        ['repeat', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('repeat', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['replace', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('replace', -1, $String.replace)],
        ['search', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('search', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Number)],
        ['slice', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('slice', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['substring', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('substring', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['trim', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('trim', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
    ]);
    return $String;
})();



/***/ }),

/***/ "./src/types/type.enum.ts":
/*!********************************!*\
  !*** ./src/types/type.enum.ts ***!
  \********************************/
/*! exports provided: DataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return DataType; });
var DataType;
(function (DataType) {
    DataType[DataType["Null"] = 0] = "Null";
    DataType[DataType["Any"] = 1] = "Any";
    DataType[DataType["Boolean"] = 2] = "Boolean";
    DataType[DataType["Number"] = 3] = "Number";
    DataType[DataType["String"] = 4] = "String";
    DataType[DataType["List"] = 5] = "List";
    DataType[DataType["Dictionary"] = 6] = "Dictionary";
    DataType[DataType["Object"] = 7] = "Object";
    DataType[DataType["Class"] = 8] = "Class";
    DataType[DataType["Function"] = 9] = "Function";
    DataType[DataType["Lambda"] = 10] = "Lambda";
    DataType[DataType["Range"] = 11] = "Range";
    DataType[DataType["RegExp"] = 12] = "RegExp";
    DataType[DataType["Error"] = 13] = "Error";
    DataType[DataType["Iterator"] = 14] = "Iterator";
    // internal types
    DataType[DataType["Void"] = 100] = "Void";
    DataType[DataType["Return"] = 101] = "Return";
    DataType[DataType["Break"] = 102] = "Break";
    DataType[DataType["Continue"] = 103] = "Continue"; // 103
})(DataType || (DataType = {}));


/***/ }),

/***/ "./src/types/void.ts":
/*!***************************!*\
  !*** ./src/types/void.ts ***!
  \***************************/
/*! exports provided: $Void */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Void", function() { return $Void; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Void extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Void);
    }
    toString() {
        return 'void';
    }
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: isDigit, isAlpha, isAlphaNumeric, isKeyword, capitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDigit", function() { return isDigit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlpha", function() { return isAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlphaNumeric", function() { return isAlphaNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyword", function() { return isKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token */ "./src/token.ts");

function isDigit(char) {
    return char >= '0' && char <= '9';
}
function isAlpha(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}
function isAlphaNumeric(char) {
    return isAlpha(char) || isDigit(char);
}
function isKeyword(word) {
    return _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"][word] >= _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].And;
}
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXRzY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW9zL2RlbW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVycHJldGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njb3BlLnRzIiwid2VicGFjazovLy8uL3NyYy90b2tlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvYW55LnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9ib29sZWFuLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9kaWN0aW9uYXJ5LnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9lcnJvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvZXhwcmVzc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvZnVuY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL251bGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL251bWJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvc3RyaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy90eXBlLmVudW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL3ZvaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxLQUFLLEVBQUUsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsSUFBSSxFQUFFLElBQUkscURBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxLQUFLLEVBQUUsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxPQUFPLEVBQUUsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxLQUFLLEVBQUUsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxNQUFNLEVBQUUsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxLQUFLLEVBQUUsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxPQUFPLEVBQUUsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDOUQsQ0FBQztJQUNGLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBZSxFQUU1QixDQUFDO0NBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pFRjtBQUFBO0FB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QUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzFELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDM0QsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM1RCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzdELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDMUQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUMzRCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3RELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDMUQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUN0RCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3ZELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDckQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUN4RCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUMxRixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM3RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUNuRyxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUN0RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM1RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUNuRyxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM3RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUNsSixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDbkksS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3BJLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDN0ssS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDNUksS0FBSyxHQUFHO2dCQUNKLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUM1Qzt5QkFBTTt3QkFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUN6QztpQkFDSjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN0QztnQkFDRCxNQUFNO1lBQ1YsS0FBSyxHQUFHO2dCQUNKLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNsQjtxQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2lCQUMzQjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDakY7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsTUFBTTtZQUNWLGVBQWU7WUFDZixLQUFLLElBQUksQ0FBQztZQUNWLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxJQUFJLENBQUM7WUFDVixLQUFLLElBQUk7Z0JBQ0wsTUFBTTtZQUNWLGVBQWU7WUFDZjtnQkFDSSxJQUFJLDhDQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDakI7cUJBQU0sSUFBSSw4Q0FBYSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLENBQUMseUJBQXlCLElBQUksR0FBRyxDQUFDLENBQUM7aUJBQ2hEO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7SUFFTyxLQUFLLENBQUMsT0FBZTtRQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxRQUFRLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDelBEO0FBQUE7QUFBQTtBQUFxQztBQUc5QixNQUFNLEtBQUs7SUFLZCxZQUFZLFNBQWdCLElBQUk7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxLQUFLLENBQUMsT0FBZTtRQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxHQUFHLENBQUMsSUFBWSxFQUFFLEtBQVc7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBWSxFQUFFLEtBQVc7UUFDbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSw0QkFBNEIsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBWSxFQUFFLEtBQVc7UUFDbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ0gsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDMUM7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSx3QkFBd0IsQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFXLEVBQUUsUUFBZSxJQUFJO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUc7WUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsU0FBUyxLQUFLLENBQUMsTUFBTSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3RGO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLGlEQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUMzREQ7QUFBQTtBQUFBO0FBQUEsSUFBWSxTQTJGWDtBQTNGRCxXQUFZLFNBQVM7SUFDakIsZ0JBQWdCO0lBQ2hCLHVDQUFHO0lBQ0gsMkNBQUs7SUFDTCw2Q0FBTTtJQUVOLDBCQUEwQjtJQUMxQixtREFBUztJQUNULDZDQUFNO0lBQ04sMkNBQUs7SUFDTCwyQ0FBSztJQUNMLDZDQUFNO0lBQ04sdUNBQUc7SUFDSCx5Q0FBSTtJQUNKLG9EQUFTO0lBQ1Qsd0RBQVc7SUFDWCxvREFBUztJQUNULGdEQUFPO0lBQ1AsMENBQUk7SUFDSixzREFBVTtJQUNWLDBEQUFZO0lBQ1osc0RBQVU7SUFDVixvREFBUztJQUNULDRDQUFLO0lBQ0wsMENBQUk7SUFFSiw4QkFBOEI7SUFDOUIsNENBQUs7SUFDTCwwQ0FBSTtJQUNKLG9EQUFTO0lBQ1QsNENBQUs7SUFDTCw0Q0FBSztJQUNMLHNEQUFVO0lBQ1YsZ0RBQU87SUFDUCwwREFBWTtJQUNaLDBDQUFJO0lBQ0osb0RBQVM7SUFDVCw0Q0FBSztJQUNMLHNEQUFVO0lBQ1Ysc0RBQVU7SUFDViwwREFBWTtJQUNaLDBDQUFJO0lBQ0osb0RBQVM7SUFDVCxrREFBUTtJQUNSLGtEQUFRO0lBQ1Isd0RBQVc7SUFDWCxrRUFBZ0I7SUFDaEIsc0RBQVU7SUFDVixvREFBUztJQUNULDhDQUFNO0lBQ04sb0RBQVM7SUFDVCxrRUFBZ0I7SUFFaEIsV0FBVztJQUNYLHNEQUFVO0lBQ1Ysa0RBQVE7SUFDUiw4Q0FBTTtJQUNOLDhDQUFNO0lBQ04sNENBQUs7SUFFTCxXQUFXO0lBQ1gsd0NBQUc7SUFDSCw0Q0FBSztJQUNMLDBDQUFJO0lBQ0osNENBQUs7SUFDTCxrREFBUTtJQUNSLDhDQUFNO0lBQ04sc0NBQUU7SUFDRiwwQ0FBSTtJQUNKLDBDQUFJO0lBQ0osZ0RBQU87SUFDUCw0Q0FBSztJQUNMLHdDQUFHO0lBQ0gsZ0RBQU87SUFDUCxrREFBUTtJQUNSLHNDQUFFO0lBQ0Ysc0NBQUU7SUFDRixzREFBVTtJQUNWLHNDQUFFO0lBQ0Ysd0NBQUc7SUFDSCwwQ0FBSTtJQUNKLHNDQUFFO0lBQ0YsNENBQUs7SUFDTCw4Q0FBTTtJQUNOLDBDQUFJO0lBQ0osOENBQU07SUFDTix3Q0FBRztJQUNILDBDQUFJO0lBQ0osd0NBQUc7SUFDSCw0Q0FBSztJQUNMLDBDQUFJO0FBQ1IsQ0FBQyxFQTNGVyxTQUFTLEtBQVQsU0FBUyxRQTJGcEI7QUFFTSxNQUFNLEtBQUs7SUFRZCxZQUFZLElBQWUsRUFBRSxNQUFjLEVBQUUsT0FBWSxFQUFFLElBQVksRUFBRSxHQUFXO1FBQ2hGLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO0lBQy9DLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQ2pIRDtBQUFBO0FBQUE7QUFBdUM7QUFHaEMsTUFBTSxJQUFJO0lBS2IsWUFBWSxLQUFVLEVBQUUsT0FBaUIsbURBQVEsQ0FBQyxHQUFHO1FBRjlDLFNBQUksR0FBRyxtREFBUSxDQUFDLEdBQUcsQ0FBQztRQUd2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRU0sU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLE9BQU8sQ0FBQztJQUMxQyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBRU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBRU0sVUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLFFBQVEsQ0FBQztJQUMzQyxDQUFDO0lBRU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLFFBQVEsSUFBSyxJQUFZLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQztJQUN6RSxDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLFVBQVUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2YsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNsQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2RCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUM5QyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO1lBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztTQUMzRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxPQUFPLENBQUMsS0FBVztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRU0sVUFBVTtRQUNiLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLEtBQUs7WUFDNUIsSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLFVBQVU7WUFDakMsSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLE1BQU0sRUFDL0I7WUFDRSxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFTO1FBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLHNCQUFzQixJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sR0FBRyxDQUFDLEdBQVMsRUFBRSxLQUFXO1FBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLHNCQUFzQixJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVM7UUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksNEJBQTRCLENBQUMsQ0FBQztRQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDdEhEO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1Y7QUFFdEIsTUFBTSxRQUFTLFNBQVEseUNBQUk7SUFJOUIsWUFBWSxLQUFjO1FBQ3RCLEtBQUssQ0FBQyxLQUFLLEVBQUUsbURBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUNWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUVyQjtBQUNxQjtBQUNuQjtBQUNJO0FBQ0E7QUFDSTtBQUNGO0FBRXJDO0lBQUEsTUFBYSxXQUFZLFNBQVEseUNBQUk7UUFHakMsWUFBWSxLQUFxQjtZQUM3QixLQUFLLENBQUMsS0FBSyxFQUFFLG1EQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVNLEdBQUcsQ0FBQyxHQUFTO1lBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwQztpQkFBTSxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0MsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0M7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLDJDQUFLLEVBQUUsQ0FBQzthQUN0QjtRQUNMLENBQUM7UUFFTSxHQUFHLENBQUMsR0FBUyxFQUFFLEtBQVc7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqQyxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRU0sTUFBTSxDQUFDLEdBQVM7WUFDbkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLE9BQU8sSUFBSSxpREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFTSxRQUFRO1lBQ1gsTUFBTSxNQUFNLEdBQVUsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BDLENBQUM7UUFFTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQVUsRUFBRSxJQUFZLEVBQUUsV0FBd0I7WUFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFXLEVBQUUsR0FBVyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxDQUFDLENBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksK0NBQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNwRixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFTSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQVUsRUFBRSxJQUFZLEVBQUUsV0FBd0I7WUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFXLEVBQUUsR0FBVyxFQUFFLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLCtDQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUMzRyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQVUsRUFBRSxJQUFZLEVBQUUsV0FBd0I7WUFDcEUsSUFBSSxLQUFLLEdBQVcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBVyxFQUFFLEdBQVcsRUFBRSxFQUFFO2dCQUM1QyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7b0JBQzlELEtBQUssR0FBRyxHQUFHLENBQUM7aUJBQ2Y7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDaEIsT0FBTyxJQUFJLCtDQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0I7WUFDRCxPQUFPLElBQUksMkNBQUssRUFBRSxDQUFDO1FBQ3ZCLENBQUM7O0lBRWEsbUJBQU8sR0FBSSxJQUFJLEdBQUcsQ0FBQztRQUM3QixDQUFDLE9BQU8sRUFBRSxxRUFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLG1EQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsQ0FBQyxRQUFRLEVBQUUscUVBQW9CLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxtREFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELENBQUMsTUFBTSxFQUFFLElBQUksbURBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxDQUFDLEtBQUssRUFBRSxxRUFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLG1EQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsQ0FBQyxTQUFTLEVBQUUsSUFBSSxtREFBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdELENBQUMsS0FBSyxFQUFFLElBQUksbURBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxDQUFDLE9BQU8sRUFBRSxJQUFJLG1EQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRyxDQUFDLElBQVUsRUFBRSxJQUFZLEVBQVEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxtREFBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUcsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFRLEVBQUUsQ0FBQyxJQUFJLCtDQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3hHLENBQUMsQ0FBQztJQUVQLGtCQUFDO0tBQUE7QUF6RXVCOzs7Ozs7Ozs7Ozs7O0FDWHhCO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1Y7QUFFdEIsTUFBTSxNQUFPLFNBQVEseUNBQUk7SUFNNUIsWUFBWSxLQUFhLEVBQUUsSUFBWSxFQUFFLEdBQVc7UUFDaEQsS0FBSyxDQUFDLEtBQUssRUFBRSxtREFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQ25Cd0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFDO0FBR25DLE1BQWUsSUFBSTtJQUd0QiwyQkFBMkI7SUFDM0IsZ0JBQWdCLENBQUM7Q0FFcEI7QUFtQ00sTUFBTSxNQUFPLFNBQVEsSUFBSTtJQUk1QixZQUFZLElBQVcsRUFBRSxLQUFXLEVBQUUsSUFBWTtRQUM5QyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztDQUNKO0FBRU0sTUFBTSxNQUFPLFNBQVEsSUFBSTtJQUs1QixZQUFZLElBQVUsRUFBRSxRQUFlLEVBQUUsS0FBVyxFQUFFLElBQVk7UUFDOUQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTSxDQUFJLE9BQXVCO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7Q0FDSjtBQUVNLE1BQU0sSUFBSyxTQUFRLElBQUk7SUFNMUIsWUFBWSxNQUFZLEVBQUUsS0FBWSxFQUFFLElBQVksRUFBRSxJQUFVLEVBQUUsSUFBWTtRQUMxRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztDQUNKO0FBRU0sTUFBTSxNQUFPLFNBQVEsSUFBSTtJQUc1QixZQUFZLEtBQVcsRUFBRSxJQUFZO1FBQ2pDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0NBQ0o7QUFFTSxNQUFNLFVBQVcsU0FBUSxJQUFJO0lBR2hDLFlBQVksVUFBa0IsRUFBRSxJQUFZO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBRU0sTUFBTSxHQUFJLFNBQVEsSUFBSTtJQUt6QixZQUFZLE1BQVksRUFBRSxHQUFTLEVBQUUsSUFBZSxFQUFFLElBQVk7UUFDOUQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztDQUNKO0FBRU0sTUFBTSxRQUFTLFNBQVEsSUFBSTtJQUc5QixZQUFZLFVBQWdCLEVBQUUsSUFBWTtRQUN0QyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO0NBQ0o7QUFFTSxNQUFNLEdBQUksU0FBUSxJQUFJO0lBR3pCLFlBQVksSUFBVyxFQUFFLElBQVk7UUFDakMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTSxDQUFJLE9BQXVCO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7Q0FDSjtBQUVNLE1BQU0sTUFBTyxTQUFRLElBQUk7SUFHNUIsWUFBWSxNQUFZLEVBQUUsSUFBWTtRQUNsQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztDQUNKO0FBRU0sTUFBTSxPQUFRLFNBQVEsSUFBSTtJQUs3QixZQUFZLElBQVUsRUFBRSxRQUFlLEVBQUUsS0FBVyxFQUFFLElBQVk7UUFDOUQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTSxDQUFJLE9BQXVCO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztDQUNKO0FBRU0sTUFBTSxJQUFLLFNBQVEsSUFBSTtJQUcxQixZQUFZLEtBQWEsRUFBRSxJQUFZO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0NBQ0o7QUFFTSxNQUFNLE9BQVEsU0FBUSxJQUFJO0lBRzdCLFlBQVksS0FBVyxFQUFFLElBQVk7UUFDakMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTSxDQUFJLE9BQXVCO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztDQUNKO0FBRU0sTUFBTSxPQUFRLFNBQVEsSUFBSTtJQUk3QixZQUFZLElBQVcsRUFBRSxTQUFpQixFQUFFLElBQVk7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTSxDQUFJLE9BQXVCO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztDQUNKO0FBRU0sTUFBTSxHQUFJLFNBQVEsSUFBSTtJQUt6QixZQUFZLE1BQVksRUFBRSxHQUFTLEVBQUUsS0FBVyxFQUFFLElBQVk7UUFDMUQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztDQUNKO0FBRU0sTUFBTSxRQUFTLFNBQVEsSUFBSTtJQUc5QixZQUFZLEtBQWEsRUFBRSxJQUFZO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7Q0FDSjtBQUVNLE1BQU0sTUFBTyxTQUFRLElBQUk7SUFHNUIsWUFBWSxLQUFXLEVBQUUsSUFBWTtRQUNqQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztDQUNKO0FBRU0sTUFBTSxLQUFNLFNBQVEsSUFBSTtJQUkzQixZQUFZLFFBQWUsRUFBRSxLQUFXLEVBQUUsSUFBWTtRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBRU0sTUFBTSxRQUFTLFNBQVEsSUFBSTtJQUc5QixZQUFZLElBQVcsRUFBRSxJQUFZO1FBQ2pDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7Q0FDSjtBQUVNLE1BQU0sS0FBTSxTQUFRLElBQUk7SUFHM0IsWUFBWSxVQUFrQixFQUFFLElBQVk7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTSxDQUFJLE9BQXVCO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7Q0FDSjtBQUVNLE1BQU0sS0FBTSxTQUFRLElBQUk7SUFHM0IsWUFBWSxLQUFXLEVBQUUsSUFBWTtRQUNqQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBRU0sTUFBTSxRQUFTLFNBQVEsSUFBSTtJQUc5QixZQUFZLEtBQVcsRUFBRSxJQUFZO1FBQ2pDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7Q0FDSjtBQUVNLE1BQU0sSUFBSyxTQUFRLElBQUk7SUFLMUIsWUFBWSxJQUFXLEVBQUUsUUFBYyxFQUFFLElBQVUsRUFBRSxJQUFZO1FBQzdELEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0NBQ0o7QUFFTSxNQUFNLFVBQVcsU0FBUSxJQUFJO0lBR2hDLFlBQVksVUFBZ0IsRUFBRSxJQUFZO1FBQ3RDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBRU0sTUFBTSxJQUFLLFNBQVEsSUFBSTtJQUsxQixZQUFZLElBQVcsRUFBRSxNQUFlLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFDaEUsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTSxDQUFJLE9BQXVCO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjtBQUVNLE1BQU0sRUFBRyxTQUFRLElBQUk7SUFLeEIsWUFBWSxTQUFlLEVBQUUsUUFBYyxFQUFFLFFBQWMsRUFBRSxJQUFZO1FBQ3JFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFFTSxNQUFNLEtBQU0sU0FBUSxJQUFJO0lBRzNCLFlBQVksVUFBZ0IsRUFBRSxJQUFZO1FBQ3RDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0NBQ0o7QUFFTSxNQUFNLE1BQU8sU0FBUSxJQUFJO0lBSTVCLFlBQVksT0FBYyxFQUFFLEtBQVcsRUFBRSxJQUFZO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0NBQ0o7QUFFTSxNQUFNLEdBQUksU0FBUSxJQUFJO0lBS3pCLFlBQVksSUFBVyxFQUFFLElBQVcsRUFBRSxXQUFpQixFQUFFLElBQVk7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTSxDQUFJLE9BQXVCO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7Q0FDSjtBQUVNLE1BQU0sS0FBTSxTQUFRLElBQUk7SUFJM0IsWUFBWSxTQUFlLEVBQUUsSUFBVSxFQUFFLElBQVk7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTSxDQUFJLE9BQXVCO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3BtQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkI7QUFFVTtBQUVOO0FBQ0Y7QUFNeEIsTUFBTSxTQUFVLFNBQVEseUNBQUk7SUFNL0IsWUFBWSxJQUFZLEVBQUcsS0FBYSxFQUFFLEtBQW1CO1FBQ3pELEtBQUssQ0FBQyxLQUFLLEVBQUUsbURBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sSUFBSSxDQUFDLElBQVMsRUFBRSxJQUFXLEVBQUUsV0FBd0I7UUFDeEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDO0lBQ3RDLENBQUM7Q0FFSjtBQUVNLE1BQU0sU0FBVSxTQUFRLFNBQVM7SUFLcEMsWUFBWSxXQUFzQixFQUFFLE9BQWM7UUFDOUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFTSxJQUFJLENBQUMsSUFBUyxFQUFFLElBQVcsRUFBRSxXQUF3QjtRQUN4RCxNQUFNLEtBQUssR0FBRyxJQUFJLDRDQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLFlBQVksR0FBVSxJQUFJLENBQUM7UUFDL0IsSUFBSTtZQUNBLFlBQVksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2pDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDMUQ7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLElBQUksQ0FBQyxZQUFZLHlDQUFJLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDakQsSUFBSSxZQUFZLEVBQUU7b0JBQ2QsV0FBVyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7aUJBQ3BDO2dCQUNELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUNsQjtpQkFBTTtnQkFDSCxNQUFNLENBQUMsQ0FBQzthQUNYO1NBRUo7UUFDRCxPQUFPLElBQUksMkNBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQ3BFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBRXJCO0FBQ3FCO0FBQ25CO0FBQ0k7QUFDSTtBQUV2QztJQUFBLE1BQWEsS0FBTSxTQUFRLHlDQUFJO1FBRzNCLFlBQVksS0FBYTtZQUNyQixLQUFLLENBQUMsS0FBSyxFQUFFLG1EQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVNLEdBQUcsQ0FBQyxHQUFTO1lBQ2hCLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNoQixJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssV0FBVyxFQUFFO29CQUM5QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNoQztxQkFBTTtvQkFDSCxPQUFPLElBQUksMkNBQUssRUFBRSxDQUFDO2lCQUN0QjthQUNKO2lCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDSCxPQUFPLElBQUksMkNBQUssRUFBRSxDQUFDO2FBQ3RCO1FBRUwsQ0FBQztRQUVNLEdBQUcsQ0FBQyxHQUFTLEVBQUUsS0FBVztZQUM3QixJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ2pDO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVNLFFBQVE7WUFDWCxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxDQUFDO1FBRU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFVLEVBQUUsSUFBWTtZQUN2QyxPQUFPLElBQUksK0NBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFFTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQVUsRUFBRSxJQUFZLEVBQUUsV0FBd0I7WUFDakUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsQ0FBQyxDQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSwrQ0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3pGO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBVSxFQUFFLElBQVksRUFBRSxXQUF3QjtZQUNqRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBZSxDQUFDO1lBQ2xDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ2QsSUFBSSxDQUFDLENBQUMsQ0FBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUMvRCxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUNoQixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQ25CLENBQUM7YUFDTDtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFTSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQVUsRUFBRSxJQUFZLEVBQUUsV0FBd0I7WUFDaEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFJLElBQUksQ0FBQyxDQUFDLENBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSx5Q0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLCtDQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDbkg7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDOztJQUVhLGFBQU8sR0FBSSxJQUFJLEdBQUcsQ0FBQztRQUM3QixDQUFDLFFBQVEsRUFBRSxxRUFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsbURBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxDQUFDLE1BQU0sRUFBRSxJQUFJLG1EQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxtREFBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxVQUFVLEVBQUUscUVBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxtREFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLENBQUMsU0FBUyxFQUFFLHFFQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsbURBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRSxDQUFDLE1BQU0sRUFBRSxxRUFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLG1EQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsQ0FBQyxhQUFhLEVBQUUscUVBQW9CLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxtREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLENBQUMsS0FBSyxFQUFFLElBQUksbURBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLEtBQUssRUFBRSxxRUFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLG1EQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxNQUFNLEVBQUUscUVBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLG1EQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQyxPQUFPLEVBQUUscUVBQW9CLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxtREFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELENBQUMsTUFBTSxFQUFFLElBQUksbURBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFHLENBQUMsSUFBVSxFQUFFLElBQVksRUFBUSxFQUFFLENBQUMsSUFBSSwrQ0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2RyxDQUFDLE9BQU8sRUFBRSxxRUFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsbURBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxDQUFDLFFBQVEsRUFBRSxxRUFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsbURBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxDQUFDLFNBQVMsRUFBRSxxRUFBb0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsbURBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsRSxDQUFDLENBQUM7SUFFUCxZQUFDO0tBQUE7QUFuRmlCOzs7Ozs7Ozs7Ozs7O0FDUmxCO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1Y7QUFFdEIsTUFBTSxLQUFNLFNBQVEseUNBQUk7SUFJM0I7UUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLG1EQUFRLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1Y7QUFFdEIsTUFBTSxPQUFRLFNBQVEseUNBQUk7SUFJN0IsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLEVBQUUsbURBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUNmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDckI7QUFDcUI7QUFDbkI7QUFDSTtBQUNJO0FBRVI7QUFFL0I7SUFBQSxNQUFhLE9BQVEsU0FBUSx5Q0FBSTtRQUc3QixZQUFZLEtBQWE7WUFDckIsS0FBSyxDQUFDLEtBQUssRUFBRSxtREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFTSxHQUFHLENBQUMsR0FBUztZQUNoQixJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQzdDO2lCQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN2QyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QztZQUNELE9BQU8sSUFBSSwyQ0FBSyxFQUFFLENBQUM7UUFFdkIsQ0FBQztRQUVNLEdBQUcsQ0FBQyxHQUFTLEVBQUUsS0FBVTtZQUM1QixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtnQkFDekIsbUNBQW1DO2FBQ3RDO1lBQ0QsT0FBTyxJQUFJLDJDQUFLLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBRU0sUUFBUTtZQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsQ0FBQztRQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBVSxFQUFFLElBQVksRUFBRSxVQUF1QjtZQUNuRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDdEIsd0VBQXdFO2dCQUN4RSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQ3hELENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUM5RSxDQUFDLENBQUM7YUFDTjtZQUNELE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBRU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLFVBQXVCO1lBQ2pFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckYsT0FBTyxJQUFJLDJDQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsQ0FBQzs7SUFFYyxlQUFPLEdBQUksSUFBSSxHQUFHLENBQUM7UUFDOUIsQ0FBQyxTQUFTLEVBQUcscUVBQW9CLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxtREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFLENBQUMsU0FBUyxFQUFFLHFFQUFvQixDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsbURBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRSxDQUFDLE1BQU0sRUFBRSxJQUFJLG1EQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRyxDQUFDLElBQVUsRUFBRSxJQUFZLEVBQVEsRUFBRSxDQUFDLElBQUksK0NBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdkcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxtREFBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELENBQUMsUUFBUSxFQUFFLHFFQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsbURBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxDQUFDLFVBQVUsRUFBRSxxRUFBb0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLG1EQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxTQUFTLEVBQUUscUVBQW9CLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxtREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLENBQUMsYUFBYSxFQUFFLHFFQUFvQixDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsbURBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RSxDQUFDLFFBQVEsRUFBRSxxRUFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLG1EQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxTQUFTLEVBQUUsSUFBSSxtREFBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxRQUFRLEVBQUUscUVBQW9CLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxtREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlELENBQUMsT0FBTyxFQUFFLHFFQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxtREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdELENBQUMsV0FBVyxFQUFFLHFFQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxtREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFLENBQUMsTUFBTSxFQUFFLHFFQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsbURBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3RCxDQUFDLENBQUM7SUFFUCxjQUFDO0tBQUE7QUE1RG1COzs7Ozs7Ozs7Ozs7O0FDVHBCO0FBQUE7QUFBQSxJQUFZLFFBcUJYO0FBckJELFdBQVksUUFBUTtJQUNoQix1Q0FBSTtJQUNKLHFDQUFHO0lBQ0gsNkNBQU87SUFDUCwyQ0FBTTtJQUNOLDJDQUFNO0lBQ04sdUNBQUk7SUFDSixtREFBVTtJQUNWLDJDQUFNO0lBQ04seUNBQUs7SUFDTCwrQ0FBUTtJQUNSLDRDQUFNO0lBQ04sMENBQUs7SUFDTCw0Q0FBTTtJQUNOLDBDQUFLO0lBQ0wsZ0RBQVE7SUFDUixpQkFBaUI7SUFDakIseUNBQVU7SUFDViw2Q0FBTTtJQUNOLDJDQUFLO0lBQ0wsaURBQVEsRUFBRSxNQUFNO0FBQ3BCLENBQUMsRUFyQlcsUUFBUSxLQUFSLFFBQVEsUUFxQm5COzs7Ozs7Ozs7Ozs7O0FDckJEO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1Y7QUFFdEIsTUFBTSxLQUFNLFNBQVEseUNBQUk7SUFJM0IsWUFBWSxLQUFXO1FBQ25CLEtBQUssQ0FBQyxLQUFLLEVBQUUsbURBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBRTdCLFNBQVMsT0FBTyxDQUFDLElBQVk7SUFDaEMsT0FBTyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUM7QUFDdEMsQ0FBQztBQUVNLFNBQVMsT0FBTyxDQUFDLElBQVk7SUFDaEMsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUFDLElBQVk7SUFDdkMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFTSxTQUFTLFNBQVMsQ0FBQyxJQUFZO0lBQ2xDLE9BQU8sZ0RBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxnREFBUyxDQUFDLEdBQUcsQ0FBQztBQUM1QyxDQUFDO0FBRU0sU0FBUyxVQUFVLENBQUMsSUFBWTtJQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2RSxDQUFDIiwiZmlsZSI6ImF0c2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXRzY3JpcHQudHNcIik7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgeyBTY2FubmVyIH0gZnJvbSAnLi9zY2FubmVyJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuaW1wb3J0IHsgRGVtb1NvdXJjZUNvZGUgfSBmcm9tICcuL2RlbW9zL2RlbW8nO1xyXG5pbXBvcnQgeyBFeHByIH0gZnJvbSAnLi90eXBlcy9leHByZXNzaW9uJztcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdsb2JhbDogYW55O1xyXG5cclxuY29uc3QgY29uem9sZSA9IG5ldyBDb25zb2xlKCk7XHJcblxyXG5jb25zdCBhdHNjcmlwdCA9IHtcclxuICAgIGV4ZWN1dGU6IChzb3VyY2U6IHN0cmluZyk6IEV4cHJbXSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2Nhbm5lciA9IG5ldyBTY2FubmVyKCk7XHJcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xyXG4gICAgICAgIGNvbnN0IGludGVycHJldGVyID0gbmV3IEludGVycHJldGVyKCk7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gc2Nhbm5lci5zY2FuKHNvdXJjZSk7XHJcbiAgICAgICAgaWYgKHNjYW5uZXIuZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzY2FubmVyLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb256b2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdGF0ZW1lbnRzID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XHJcbiAgICAgICAgaWYgKHBhcnNlci5lcnJvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHBhcnNlci5lcnJvcnMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uem9sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGludGVycHJldGVyLmludGVycGV0KHN0YXRlbWVudHMpO1xyXG4gICAgfSxcclxuICAgIGludGVycHJldGVyOiBJbnRlcnByZXRlcixcclxuICAgIHBhcnNlcjogUGFyc2VyLFxyXG4gICAgc2Nhbm5lcjogU2Nhbm5lclxyXG59O1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB3aW5kb3cuZGVtb1NvdXJjZUNvZGUgPSBEZW1vU291cmNlQ29kZTtcclxuICAgIHdpbmRvdy5hdHNjcmlwdCA9IGF0c2NyaXB0O1xyXG4gICAgd2luZG93LmNvbnpvbGUgPSBjb256b2xlO1xyXG59IGVsc2Uge1xyXG4gICAgZ2xvYmFsLmNvbnpvbGUgPSBjb256b2xlO1xyXG4gICAgZXhwb3J0cy5hdHNjcmlwdCA9IGF0c2NyaXB0O1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIENvbnNvbGVNZXNzYWdlVHlwZSB7XHJcbiAgICBVc2VyLFxyXG4gICAgRXJyb3IsXHJcbiAgICBXYXJuaW5nLFxyXG4gICAgSW5mb1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc29sZU1lc3NhZ2Uge1xyXG4gICAgcHVibGljIHRpbWU6IERhdGU7XHJcbiAgICBwdWJsaWMgdGV4dDogYW55O1xyXG4gICAgcHVibGljIHR5cGU6IENvbnNvbGVNZXNzYWdlVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnNvbGUge1xyXG5cclxuICAgIHB1YmxpYyBtZXNzYWdlczogQ29uc29sZU1lc3NhZ2VbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGQobWVzc2FnZTogYW55LCB0eXBlOiBDb25zb2xlTWVzc2FnZVR5cGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgdHlwZTogdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZyhtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuVXNlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdhcm4obWVzc2FnZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5hZGQobWVzc2FnZSwgQ29uc29sZU1lc3NhZ2VUeXBlLldhcm5pbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcnJvcihtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuRXJyb3IpO1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5mbyhtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuSW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpcnN0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNbMF0udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGFzdCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzW3RoaXMubWVzc2FnZXMubGVuZ3RoIC0gMV0udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJpbnQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2codGhpcy5tZXNzYWdlcy5tYXAoKGNtKSA9PiBjbS50ZXh0KSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBEZW1vU291cmNlQ29kZSA9XHJcbmBcclxuXHJcbnZhciBpdCA9IDBcclxuXHJcbi8vIGFsdGVybmF0aXZlIHRlcm5hcnlcclxudmFyIGEgPSBpZiAxID09IDEgdHJ1ZSBlbHNlIGZhbHNlXHJcbnByaW50IGEgLy90cnVlXHJcblxyXG4vLyBpbml0aWFsaXppbmcgYXJyYXlcclxuaXQgPSAwXHJcbnZhciBiID0gd2hpbGUgaXQrKyA8IDEwIHVzZSBpdFxyXG5wcmludCBiIC8vIFsxLDIsMy4uMTBdXHJcblxyXG4vLyBtYXBwaW5nIGFycmF5XHJcbnZhciBjID0gZWFjaCB2YWx1ZSBpbiBiIHVzZSB2YWx1ZSAqIDNcclxucHJpbnQgYyAvLyBbMyw2LDkuLjMwXVxyXG5cclxuLy8gZmlsdGVyaW5nIGFycmF5XHJcbnZhciBkID0gZWFjaCB2YWx1ZSBpbiBjIHtcclxuICAgIGlmIHZhbHVlICUgMiA9PSAwXHJcbiAgICAgICAgdXNlIHZhbHVlXHJcbn1cclxucHJpbnQgZCAvLyBbNiwxMiwxOC4uMjRdXHJcblxyXG4vLyBpbml0aWFsaXppbmcgYW5kIG1hcHBpbmdcclxuaXQgPSAwXHJcbnZhciBlID0gZWFjaCB2YWx1ZSBpbiB3aGlsZSBpdCsrIDwgMTAgdXNlIGl0IHVzZSB2YWx1ZSAqIDVcclxucHJpbnQgZSAvLyBbNSwgMTAsIDE1Li4uNTBdXHJcblxyXG4vLyBzYW1lIGFzIHByZXZpb3VzIGJ1dCB3aXRoIG5ldyBzY29wZVxyXG5pdCA9IDBcclxucHJpbnRcclxuICAgIGVhY2ggdmFsdWUgaW4gd2hpbGUgaXQrKyA8IDEwXHJcbiAgICB7XHJcbiAgICAgICAgdXNlIGl0XHJcbiAgICB9IHtcclxuICAgICAgICB1c2UgdmFsdWUgKiA1XHJcbiAgICB9XHJcbi8vIFs1LCAxMCwgMTUuLi41MF1cclxuXHJcbmBcclxuIiwiaW1wb3J0ICogYXMgRXhwciBmcm9tICcuL3R5cGVzL2V4cHJlc3Npb24nO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuaW1wb3J0IHsgU2NvcGUgfSBmcm9tICcuL3Njb3BlJztcclxuaW1wb3J0IHsgVG9rZW5UeXBlIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCB7IFJ1bnRpbWUgfSBmcm9tICcuL3J1bnRpbWUnO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi90eXBlcy9hbnknO1xyXG5pbXBvcnQgeyAkQm9vbGVhbiB9IGZyb20gJy4vdHlwZXMvYm9vbGVhbic7XHJcbmltcG9ydCB7ICREaWN0aW9uYXJ5IH0gZnJvbSAnLi90eXBlcy9kaWN0aW9uYXJ5JztcclxuaW1wb3J0IHsgJEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlcy9mdW5jdGlvbic7XHJcbmltcG9ydCB7ICRMaXN0IH0gZnJvbSAnLi90eXBlcy9saXN0JztcclxuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL3R5cGVzL251bGwnO1xyXG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSAnLi90eXBlcy9udW1iZXInO1xyXG5pbXBvcnQgeyAkU3RyaW5nIH0gZnJvbSAnLi90eXBlcy9zdHJpbmcnO1xyXG5pbXBvcnQgeyAkVm9pZCB9IGZyb20gJy4vdHlwZXMvdm9pZCc7XHJcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlcy90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBTY2FubmVyIH0gZnJvbSAnLi9zY2FubmVyJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludGVycHJldGVyIGltcGxlbWVudHMgRXhwci5FeHByVmlzaXRvcjwkQW55PiB7XHJcbiAgICBwdWJsaWMgZ2xvYmFsID0gbmV3IFNjb3BlKCk7XHJcbiAgICBwdWJsaWMgc2NvcGUgPSB0aGlzLmdsb2JhbDtcclxuICAgIHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIHNjYW5uZXIgPSBuZXcgU2Nhbm5lcigpO1xyXG4gICAgcHJpdmF0ZSBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XHJcbiAgICBwdWJsaWMgc3RyaW5ncyA9IHtcclxuICAgICAgICBuZXh0OiBuZXcgJFN0cmluZygnbmV4dCcpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCApIHtcclxuICAgICAgICB0aGlzLmdsb2JhbC5zZXQoJ21hdGgnLCBuZXcgJERpY3Rpb25hcnkoUnVudGltZS5NYXRoKSk7XHJcbiAgICAgICAgdGhpcy5nbG9iYWwuc2V0KCdjb25zb2xlJywgbmV3ICREaWN0aW9uYXJ5KFJ1bnRpbWUuQ29uc29sZSkpO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsLnNldCgnZWNobycsIFJ1bnRpbWUuQ29uc29sZS5nZXQoJ2xvZycpKTtcclxuICAgICAgICB0aGlzLnBhcnNlci5lcnJvckxldmVsID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV2YWx1YXRlKGV4cHI6IEV4cHIuRXhwcik6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBleHByLnJlc3VsdCA9IGV4cHIuYWNjZXB0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBldmFsKGV4cHI6IEV4cHIuRXhwcik6IGFueSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuICB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZXhwci5hY2NlcHQodGhpcykudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBlLm1lc3NhZ2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVycGV0KHN0YXRlbWVudHM6IEV4cHIuRXhwcltdKTogRXhwci5FeHByW10ge1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmFsdWF0ZShzdGF0ZW1lbnQpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb256b2xlLmVycm9yKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnUnVudGltZSBFcnJvciBsaW1pdCBleGNlZWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJ1bnRpbWUgRXJyb3IgPT4gJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEV4cHJlc3Npb25FeHByKGV4cHI6IEV4cHIuRXhwcmVzc2lvbik6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIuZXhwcmVzc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0UHJpbnRFeHByKGV4cHI6IEV4cHIuUHJpbnQpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5ldmFsdWF0ZShleHByLmV4cHJlc3Npb24pO1xyXG4gICAgICAgIGNvbnpvbGUubG9nKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VmFyRXhwcihleHByOiBFeHByLlZhcik6ICRBbnkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG5ldyAkTnVsbCgpO1xyXG4gICAgICAgIGlmIChleHByLmluaXRpYWxpemVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLmluaXRpYWxpemVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlLmlzTGFtYmRhKCkpIHtcclxuICAgICAgICAgICAgKHZhbHVlIGFzIGFueSkubmFtZSA9IGV4cHIubmFtZS5sZXhlbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcGUuZGVmaW5lKGV4cHIubmFtZS5sZXhlbWUsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VmFyaWFibGVFeHByKGV4cHI6IEV4cHIuVmFyaWFibGUpOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5nZXQoZXhwci5uYW1lLmxleGVtZSwgZXhwci5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRQb3N0Zml4RXhwcihleHByOiBFeHByLlBvc3RmaXgpOiAkQW55IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2NvcGUuZ2V0KGV4cHIubmFtZS5sZXhlbWUsIGV4cHIubmFtZSk7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBuZXcgJE51bWJlcih2YWx1ZS52YWx1ZSArIGV4cHIuaW5jcmVtZW50KTtcclxuICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLm5hbWUubGV4ZW1lLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExpc3RFeHByKGV4cHI6IEV4cHIuTGlzdCk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlczogJEFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBleHByZXNzaW9uIG9mIGV4cHIudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHJlc3Npb24pO1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJExpc3QodmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRlbXBsYXRlUGFyc2Uoc291cmNlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMuc2Nhbm5lci5zY2FuKHNvdXJjZSk7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50cyA9IHRoaXMucGFyc2VyLnBhcnNlKHRva2Vucyk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyc2VyLmVycm9ycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihgVGVtcGxhdGUgc3RyaW5nICBlcnJvcjogJHt0aGlzLnBhcnNlci5lcnJvcnNbMF19YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICBmb3IgKGNvbnN0IHN0YXRlbWVudCBvZiBzdGF0ZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLmV2YWx1YXRlKHN0YXRlbWVudCkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRUZW1wbGF0ZUV4cHIoZXhwcjogRXhwci5UZW1wbGF0ZSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGV4cHIudmFsdWUucmVwbGFjZSgvXFwkXFx7KFtcXHNcXFNdKz8pXFx9L2csIChtLCBwbGFjZWhvbGRlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGxhY2Vob2xkZXJbcGxhY2Vob2xkZXIubGVuZ3RoXSAhPT0gJzsnKSB7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciArPSAnOyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVQYXJzZShwbGFjZWhvbGRlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QXNzaWduRXhwcihleHByOiBFeHByLkFzc2lnbik6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLm5hbWUubGV4ZW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEJpbmFyeUV4cHIoZXhwcjogRXhwci5CaW5hcnkpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTWludXM6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLk1pbnVzRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdC52YWx1ZSAtIHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuU2xhc2g6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlNsYXNoRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdC52YWx1ZSAvIHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuU3RhcjpcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuU3RhckVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQudmFsdWUgKiByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBlcmNlbnQ6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBlcmNlbnRFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0LnZhbHVlICUgcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QbHVzOlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QbHVzRXF1YWw6XHJcbiAgICAgICAgICAgICAgICBpZiAobGVmdC5pc051bWJlcigpICYmIHJpZ2h0LmlzTnVtYmVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdC52YWx1ZSArIHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsZWZ0LmlzU3RyaW5nKCkgJiYgcmlnaHQuaXNTdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJFN0cmluZyhsZWZ0LnZhbHVlICsgcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnQuaXNMaXN0KCkgJiYgcmlnaHQuaXNMaXN0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRMaXN0KGxlZnQudmFsdWUuY29uY2F0KHJpZ2h0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGVmdC5pc0RpY3Rpb25hcnkoKSAmJiByaWdodC5pc0RpY3Rpb25hcnkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJERpY3Rpb25hcnkobmV3IE1hcChbLi4ubGVmdC52YWx1ZSwgLi4ucmlnaHQudmFsdWVdKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcobGVmdC50b1N0cmluZygpICsgcmlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBpcGU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdC52YWx1ZSB8IHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQ2FyZXQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdC52YWx1ZSBeIHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuR3JlYXRlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdC52YWx1ZSA+IHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuR3JlYXRlckVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0LnZhbHVlID49IHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTGVzczpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdC52YWx1ZSA8IHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTGVzc0VxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0LnZhbHVlIDw9IHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuRXF1YWxFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdC52YWx1ZSA9PT0gcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5CYW5nRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGxlZnQudmFsdWUgIT09IHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTGVzc0VxdWFsR3JlYXRlcjpcclxuICAgICAgICAgICAgICAgIGlmIChsZWZ0LnZhbHVlIDwgcmlnaHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIoLTEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsZWZ0LnZhbHVlID4gcmlnaHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIoMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcigwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ1Vua25vd24gYmluYXJ5IG9wZXJhdG9yICcgKyBleHByLm9wZXJhdG9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bGwoKTsgLy8gdW5yZWFjaGFibGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TG9naWNhbEV4cHIoZXhwcjogRXhwci5Mb2dpY2FsKTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZXZhbHVhdGUoZXhwci5sZWZ0KTtcclxuXHJcbiAgICAgICAgaWYgKGV4cHIub3BlcmF0b3IudHlwZSA9PT0gVG9rZW5UeXBlLk9yKSB7XHJcbiAgICAgICAgICAgIGlmIChsZWZ0LmlzVHJ1dGh5KCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFsZWZ0LmlzVHJ1dGh5KCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRHcm91cGluZ0V4cHIoZXhwcjogRXhwci5Hcm91cGluZyk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIuZXhwcmVzc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TGl0ZXJhbEV4cHIoZXhwcjogRXhwci5MaXRlcmFsKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIGV4cHIudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VW5hcnlFeHByKGV4cHI6IEV4cHIuVW5hcnkpOiAkQW55IHtcclxuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XHJcbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTWludXM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIoLU51bWJlcihyaWdodC52YWx1ZSkpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5CYW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbighcmlnaHQuaXNUcnV0aHkoKSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBsdXNQbHVzOlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NaW51c01pbnVzOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFyaWdodC5pc051bWJlcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgSW52YWxpZCByaWdodC1oYW5kIHNpZGUgZXhwcmVzc2lvbiBpbiBwcmVmaXggb3BlcmF0aW9uOiAgXCIke0RhdGFUeXBlW3JpZ2h0LnR5cGVdfSAke3JpZ2h0fSBpcyBub3QgYSBudW1iZXJgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gTnVtYmVyKHJpZ2h0LnZhbHVlKSArIChleHByLm9wZXJhdG9yLnR5cGUgPT09IFRva2VuVHlwZS5QbHVzUGx1cyA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhwci5yaWdodCBpbnN0YW5jZW9mIEV4cHIuVmFyaWFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLnJpZ2h0Lm5hbWUubGV4ZW1lLCBuZXcgJE51bWJlcihuZXdWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChleHByLnJpZ2h0IGluc3RhbmNlb2YgRXhwci5HZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc3NpbmcgPSBuZXcgRXhwci5TZXQoZXhwci5yaWdodC5lbnRpdHksIGV4cHIucmlnaHQua2V5LCBuZXcgRXhwci5MaXRlcmFsKG5ldyAkTnVtYmVyKG5ld1ZhbHVlKSwgZXhwci5saW5lKSwgZXhwci5saW5lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2YWx1YXRlKGFzc2luZyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoYEludmFsaWQgcmlnaHQtaGFuZCBzaWRlIGV4cHJlc3Npb24gaW4gcHJlZml4IG9wZXJhdGlvbjogICR7ZXhwci5yaWdodH1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBVbmtub3duIHVuYXJ5IG9wZXJhdG9yICcgKyBleHByLm9wZXJhdG9yYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7IC8vIHNob3VsZCBiZSB1bnJlYWNoYWJsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZUJsb2NrKHN0YXRlbWVudHM6IEV4cHIuRXhwcltdLCBuZXh0U2NvcGU6IFNjb3BlKTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gdGhpcy5zY29wZTtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbmV4dFNjb3BlO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3RhdGVtZW50IG9mIHN0YXRlbWVudHMpIHtcclxuICAgICAgICAgICAgc3RhdGVtZW50LnJlc3VsdCA9IHRoaXMuZXZhbHVhdGUoc3RhdGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IGN1cnJlbnRTY29wZTtcclxuICAgICAgICByZXR1cm4gbmV3ICRWb2lkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QmxvY2tFeHByKGV4cHI6IEV4cHIuQmxvY2spOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlQmxvY2soZXhwci5zdGF0ZW1lbnRzLCBuZXcgU2NvcGUodGhpcy5zY29wZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdElmRXhwcihleHByOiBFeHByLklmKTogJEFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZhbHVhdGUoZXhwci5jb25kaXRpb24pLmlzVHJ1dGh5KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci50aGVuRXhwcik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChleHByLmVsc2VFeHByICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIuZWxzZUV4cHIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRXaGlsZUV4cHIoZXhwcjogRXhwci5XaGlsZSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlczogJEFueVtdID0gW107XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gdGhpcy5zY29wZTtcclxuICAgICAgICB3aGlsZSAodGhpcy5ldmFsdWF0ZShleHByLmNvbmRpdGlvbikuaXNUcnV0aHkoKSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmFsdWF0ZShleHByLmxvb3ApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlID0gY3VycmVudFNjb3BlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiAkQW55ICYmIGUudHlwZSA9PT0gRGF0YVR5cGUuQnJlYWspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS52YWx1ZS50eXBlICE9PSBEYXRhVHlwZS5Wb2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZSBpbnN0YW5jZW9mICRBbnkgJiYgZS50eXBlID09PSBEYXRhVHlwZS5Db250aW51ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnZhbHVlLnR5cGUgIT09IERhdGFUeXBlLlZvaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJExpc3QodmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkVm9pZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEVhY2hFeHByKGV4cHI6IEV4cHIuRWFjaCk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29wZSA9IHRoaXMuc2NvcGU7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzOiAkQW55W10gPSBbXTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoZXhwci5pdGVyYWJsZSkgYXMgJExpc3Q7XHJcbiAgICAgICAgaWYgKCF2YWx1ZS5pc0xpc3QoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKGAke3ZhbHVlfSBpcyBub3QgYW4gaXRlcmFibGUgbGlzdGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGl0ID0gMDtcclxuICAgICAgICB3aGlsZSAoaXQgPCB2YWx1ZS52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29wZSA9IGN1cnJlbnRTY29wZTtcclxuICAgICAgICAgICAgY29uc3QgZm9yZWFjaFNjb3BlID0gbmV3IFNjb3BlKHRoaXMuc2NvcGUpO1xyXG4gICAgICAgICAgICBmb3JlYWNoU2NvcGUuc2V0KGV4cHIubmFtZS5sZXhlbWUsIHZhbHVlLnZhbHVlW2l0KytdKTtcclxuICAgICAgICAgICAgdGhpcy5zY29wZSA9IGZvcmVhY2hTY29wZTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZhbHVhdGUoZXhwci5sb29wKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZSA9IGN1cnJlbnRTY29wZTtcclxuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgJEFueSAmJiBlLnR5cGUgPT09IERhdGFUeXBlLkJyZWFrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudmFsdWUudHlwZSAhPT0gRGF0YVR5cGUuVm9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUgaW5zdGFuY2VvZiAkQW55ICYmIGUudHlwZSA9PT0gRGF0YVR5cGUuQ29udGludWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS52YWx1ZS50eXBlICE9PSBEYXRhVHlwZS5Wb2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3ICRMaXN0KHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRDYWxsRXhwcihleHByOiBFeHByLkNhbGwpOiAkQW55IHtcclxuICAgICAgICAvLyB2ZXJpZnkgY2FsbGVlIGlzIGEgZnVuY3Rpb25cclxuICAgICAgICBjb25zdCBjYWxsZWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIuY2FsbGVlKTtcclxuICAgICAgICBpZiAoIWNhbGxlZS5pc0Z1bmN0aW9uKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihgJHtjYWxsZWV9IGlzIG5vdCBhIGZ1bmN0aW9uYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgdGhpcyBpbiBmdW5jdGlvbiBzY29wZVxyXG4gICAgICAgIGxldCB0aGl6OiBhbnkgPSBudWxsO1xyXG4gICAgICAgIGlmIChleHByLmNhbGxlZSBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXogPSB0aGlzLmV2YWx1YXRlKGV4cHIuY2FsbGVlLmVudGl0eSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChleHByLnRoaXogIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpeiA9IGV4cHIudGhpejtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGV2YWx1YXRlIGZ1bmN0aW9uIGFyZ3VtZW50c1xyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGFyZ3VtZW50IG9mIGV4cHIuYXJncykge1xyXG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5ldmFsdWF0ZShhcmd1bWVudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGFzcyBhcmd1bWVudHMgdG8gZnVuY3Rpb25cclxuICAgICAgICBjb25zdCBmdW5jID0gY2FsbGVlIGFzICRGdW5jdGlvbjtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggIT09IGZ1bmMuYXJpdHkgJiYgZnVuYy5hcml0eSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uem9sZS53YXJuKGBXYXJuaW5nIGF0ICgke2V4cHIucGFyZW4ubGluZX0pOiAke2NhbGxlZX0gbWlzbWF0Y2hlZCBhcmd1bWVudCBjb3VudDsgXFxuIEV4cGVjdGVkICR7ZnVuYy5hcml0eX0gYnV0IGdvdCAke2FyZ3MubGVuZ3RofSBgKTtcclxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgZnVuYy5hcml0eSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGFyZ3MubGVuZ3RoOyBpIDw9IGZ1bmMuYXJpdHk7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChuZXcgJE51bGwoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXhlY3V0ZSBmdW5jdGlvblxyXG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpeiwgYXJncywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0RGljdGlvbmFyeUV4cHIoZXhwcjogRXhwci5EaWN0aW9uYXJ5KTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgZGljdCA9IG5ldyAkRGljdGlvbmFyeShuZXcgTWFwKCkpO1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgZXhwci5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSAgPSB0aGlzLmV2YWx1YXRlKChwcm9wZXJ0eSBhcyBFeHByLlNldCkua2V5KTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKChwcm9wZXJ0eSBhcyBFeHByLlNldCkudmFsdWUpO1xyXG4gICAgICAgICAgICBkaWN0LnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0S2V5RXhwcihleHByOiBFeHByLktleSk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgJEFueShleHByLm5hbWUubGl0ZXJhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0R2V0RXhwcihleHByOiBFeHByLkdldCk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZXZhbHVhdGUoZXhwci5lbnRpdHkpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXZhbHVhdGUoZXhwci5rZXkpO1xyXG4gICAgICAgIGlmIChlbnRpdHkuaXNOdWxsKCkgJiYgZXhwci50eXBlID09PSBUb2tlblR5cGUuUXVlc3Rpb25Eb3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZW50aXR5LmdldChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFNldEV4cHIoZXhwcjogRXhwci5TZXQpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV2YWx1YXRlKGV4cHIua2V5KTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoZXhwci52YWx1ZSk7XHJcbiAgICAgICAgZW50aXR5LnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWUudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0RnVuY0V4cHIoZXhwcjogRXhwci5GdW5jKTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgZnVuYyA9IG5ldyAkRnVuY3Rpb24oZXhwciwgdGhpcy5zY29wZSk7XHJcbiAgICAgICAgdGhpcy5zY29wZS5kZWZpbmUoZXhwci5uYW1lLmxleGVtZSwgZnVuYyk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TGFtYmRhRXhwcihleHByOiBFeHByLkxhbWJkYSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGxhbWJkYTogRXhwci5GdW5jID0gZXhwci5sYW1iZGEgYXMgRXhwci5GdW5jO1xyXG4gICAgICAgIGNvbnN0IGZ1bmM6ICRGdW5jdGlvbiA9IG5ldyAkRnVuY3Rpb24obGFtYmRhLCB0aGlzLnNjb3BlKTtcclxuICAgICAgICByZXR1cm4gZnVuYztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRSZXR1cm5FeHByKGV4cHI6IEV4cHIuUmV0dXJuKTogJEFueSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbmV3ICROdWxsKCk7XHJcbiAgICAgICAgaWYgKGV4cHIudmFsdWUpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgJEFueSh2YWx1ZSwgRGF0YVR5cGUuUmV0dXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRCcmVha0V4cHIoZXhwcjogRXhwci5CcmVhayk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcclxuICAgICAgICB0aHJvdyBuZXcgJEFueSh2YWx1ZSwgRGF0YVR5cGUuQnJlYWspO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdENvbnRpbnVlRXhwcihleHByOiBFeHByLkNvbnRpbnVlKTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIudmFsdWUpO1xyXG4gICAgICAgIHRocm93IG5ldyAkQW55KHZhbHVlLCBEYXRhVHlwZS5Db250aW51ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VHlwZW9mRXhwcihleHByOiBFeHByLlR5cGVvZik6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcoRGF0YVR5cGVbdmFsdWUudHlwZV0udG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0RGVsZXRlRXhwcihleHByOiBFeHByLkRlbGV0ZSk6ICRBbnkge1xyXG4gICAgICAgIGlmICghKGV4cHIudmFsdWUgaW5zdGFuY2VvZiBFeHByLkdldCkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gRGF0YVR5cGVbdmFsdWUudHlwZV0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihgQ2FuJ3QgZGVsZXRlIG9uIHR5cGUgJHt0eXBlfSB3aXRoIHZhbHVlICcke3ZhbHVlfScuIE5vdCBhIERpY3Rpb25hcnksIENsYXNzIG9yIEVudGl0eWApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnZXRFeHByID0gZXhwci52YWx1ZSBhcyBFeHByLkdldDtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGdldEV4cHIuZW50aXR5KTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV2YWx1YXRlKGdldEV4cHIua2V5KTtcclxuICAgICAgICByZXR1cm4gZW50aXR5LmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBFeHByIGZyb20gJy4vdHlwZXMvZXhwcmVzc2lvbic7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5pbXBvcnQgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi90eXBlcy9ib29sZWFuJztcclxuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL3R5cGVzL251bGwnO1xyXG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSAnLi90eXBlcy9udW1iZXInO1xyXG5pbXBvcnQgeyAkRXJyb3IgfSBmcm9tICcuL3R5cGVzL2Vycm9yJztcclxuaW1wb3J0IHsgJFZvaWQgfSBmcm9tICcuL3R5cGVzL3ZvaWQnO1xyXG5pbXBvcnQgeyAkU3RyaW5nIH0gZnJvbSAnLi90eXBlcy9zdHJpbmcnO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdG9rZW5zOiBUb2tlbltdO1xyXG4gICAgcHVibGljIGVycm9yczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgZXJyb3JMZXZlbCA9IDE7XHJcblxyXG4gICAgcHVibGljIHBhcnNlKHRva2VuczogVG9rZW5bXSk6IEV4cHIuRXhwcltdIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50czogRXhwci5FeHByW10gPSBbXTtcclxuICAgICAgICB3aGlsZSAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlbWVudHMucHVzaCh0aGlzLmRlY2xhcmF0aW9uKCkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mICRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goYFBhcnNlIEVycm9yICgke2UubGluZX06JHtlLmNvbH0pID0+ICR7ZS52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ1BhcnNlIEVycm9yIGxpbWl0IGV4Y2VlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdGVtZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1hdGNoKC4uLnR5cGVzOiBUb2tlblR5cGVbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiB0eXBlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVjayh0eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZHZhbmNlKCk6IFRva2VuIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwZWVrKCk6IFRva2VuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5jdXJyZW50XTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByZXZpb3VzKCk6IFRva2VuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5jdXJyZW50IC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVjayh0eXBlOiBUb2tlblR5cGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wZWVrKCkudHlwZSA9PT0gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVvZigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVjayhUb2tlblR5cGUuRW9mKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnN1bWUodHlwZTogVG9rZW5UeXBlLCBtZXNzYWdlOiBzdHJpbmcpOiBUb2tlbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2sodHlwZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IodGhpcy5wcmV2aW91cygpLCBtZXNzYWdlICsgYCwgdW5leHBlY3RlZCB0b2tlbiBcIiR7dGhpcy5wZWVrKCkubGV4ZW1lfVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYVNlbWljb2xvbigpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMubWF0Y2goVG9rZW5UeXBlLlNlbWljb2xvbik7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXJyb3IodG9rZW46IFRva2VuLCBtZXNzYWdlOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHRocm93IG5ldyAkRXJyb3IobWVzc2FnZSwgdG9rZW4ubGluZSwgdG9rZW4uY29sKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JMZXZlbCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uem9sZS53YXJuKGBbbGluZSAoJHt0b2tlbi5saW5lfSkgcGFyc2Ugd2FybmluZyBhdCBcIiR7dG9rZW4ubGV4ZW1lfVwiXSA9PiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3luY2hyb25pemUoKTogdm9pZCB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucGVlaygpLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkNsYXNzOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuRnVuY3Rpb246XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5WYXI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5Gb3I6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5JZjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLldoaWxlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuRG86XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QcmludDpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlJldHVybjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikgfHwgdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRCcmFjZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH0gd2hpbGUgKCF0aGlzLmVvZigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlY2xhcmF0aW9uKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZ1bmN0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jRGVjbGFyYXRpb24oXCJmdW5jdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlZhcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFyRGVjbGFyYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmdW5jRGVjbGFyYXRpb24oa2luZDogc3RyaW5nKTogRXhwci5GdW5jIHtcclxuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgYEV4cGVjdGVkIGEgJHtraW5kfSBuYW1lYCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVuY1BhcmFtc0JvZHkobmFtZSwga2luZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmdW5jUGFyYW1zKGtpbmQ6IHN0cmluZyk6IFRva2VuW10ge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtczogVG9rZW5bXSA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRQYXJlbikpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPj0gMjU1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcih0aGlzLnBlZWsoKSwgYFBhcmFtZXRlciBjb3VudCBleGNlZWRzIDI1NWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1c2godGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSBwYXJhbWV0ZXIgbmFtZWApKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29tbWEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgY2xvc2UgcGFyZW50aGVzaXMgXCIpXCIgYWZ0ZXIgJHtraW5kfSBwYXJhbWV0ZXJzYCk7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZ1bmNQYXJhbXNCb2R5KG5hbWU6IFRva2VuLCBraW5kOiBzdHJpbmcpOiBFeHByLkZ1bmMge1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTGVmdFBhcmVuLCBgRXhwZWN0ZWQgb3BlbiBwYXJlbnRoZXNpcyBcIihcIiBhZnRlciAke2tpbmR9YCk7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zOiBUb2tlbltdID0gdGhpcy5mdW5jUGFyYW1zKGtpbmQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdEJyYWNlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5OiBFeHByLkV4cHJbXSA9IHRoaXMuYmxvY2soKTtcclxuICAgICAgICAgICAgaWYgKG5hbWUudHlwZSAhPT0gVG9rZW5UeXBlLkxhbWJkYSAmJiB0aGlzLmV4dHJhU2VtaWNvbG9uKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyhgVW5uZWNlc3Nhcnkgc2VtaWNvbG9uIGFmdGVyIGZ1bmN0aW9uICR7bmFtZS5sZXhlbWV9IGRlY2xhcmF0aW9uYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkZ1bmMobmFtZSwgcGFyYW1zLCBib2R5LCBuYW1lLmxpbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkFycm93KSkge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5OiBFeHByLkV4cHJbXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgYXJyb3c6IEV4cHIuRXhwcjtcclxuICAgICAgICAgICAgY29uc3Qga2V5d29yZDogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuU2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICAgICAgYXJyb3cgPSB0aGlzLmNvbmRTdGF0ZW1lbnRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYXRjaChUb2tlblR5cGUuU2VtaWNvbG9uKTtcclxuICAgICAgICAgICAgYm9keS5wdXNoKG5ldyBFeHByLlJldHVybihrZXl3b3JkLCBhcnJvdywga2V5d29yZC5saW5lKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5GdW5jKG5hbWUsIHBhcmFtcywgYm9keSwgbmFtZS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MZWZ0QnJhY2UsIGBFeHBlY3QgXCJ7XCIgYmVmb3JlICR7a2luZH0gYm9keWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFyRGVjbGFyYXRpb24oKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgYEV4cGVjdGVkIGEgdmFyaWFibGUgbmFtZSBhZnRlciBcInZhclwiIGtleXdvcmRgKTtcclxuICAgICAgICBsZXQgaW5pdGlhbGl6ZXI6IEV4cHIuRXhwciAgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FcXVhbCkpIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB0aGlzLmNvbmRTdGF0ZW1lbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuVmFyKG5hbWUsIG51bGwsIGluaXRpYWxpemVyLCBuYW1lLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGVtZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5QcmludCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFjZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkJsb2NrKHRoaXMuYmxvY2soKSwgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUmV0dXJuKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNvbnRpbnVlLCBUb2tlblR5cGUuVXNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250aW51ZVN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQnJlYWspKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJyZWFrU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmRTdGF0ZW1lbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25kU3RhdGVtZW50cygpIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuSWYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlmU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5XaGlsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hpbGVTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVhY2gpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2hTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaWZTdGF0ZW1lbnQoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBrZXl3b3JkID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5jb25kU3RhdGVtZW50cygpO1xyXG4gICAgICAgIGNvbnN0IHRoZW5TdG10OiBFeHByLkV4cHIgPSB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIGxldCBlbHNlU3RtdDogRXhwci5FeHByID0gIG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVsc2UpKSB7XHJcbiAgICAgICAgICAgIGVsc2VTdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLklmKGNvbmRpdGlvbiwgdGhlblN0bXQsIGVsc2VTdG10LCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd2hpbGVTdGF0ZW1lbnQoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBrZXl3b3JkID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5jb25kU3RhdGVtZW50cygpO1xyXG4gICAgICAgIGNvbnN0IGxvb3A6IEV4cHIuRXhwciA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLldoaWxlKGNvbmRpdGlvbiwgbG9vcCwga2V5d29yZC5saW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVhY2hTdGF0ZW1lbnQoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBrZXl3b3JkID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLklkZW50aWZpZXIsIGBFeHBlY3RlZCBhbiBpZGVudGlmaWVyIGluc2lkZSBcImZvcmVhY2hcIiBzdGF0ZW1lbnRgKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkluLCBgRXhwZWN0ZWQgXCJpblwiIGtleXdvcmQgaW5zaWRlIGZvcmVhY2ggc3RhdGVtZW50YCk7XHJcbiAgICAgICAgY29uc3QgaXRlcmFibGUgPSB0aGlzLmNvbmRTdGF0ZW1lbnRzKCk7XHJcbiAgICAgICAgY29uc3QgbG9vcDogRXhwci5FeHByID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuRWFjaChuYW1lLCBpdGVyYWJsZSwgbG9vcCwga2V5d29yZC5saW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW50U3RhdGVtZW50KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICBjb25zdCB2YWx1ZTogRXhwci5FeHByID0gdGhpcy5jb25kU3RhdGVtZW50cygpO1xyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5QcmludCh2YWx1ZSwga2V5d29yZC5saW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJldHVyblN0YXRlbWVudCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGNvbnN0IGtleXdvcmQ6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuU2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuY29uZFN0YXRlbWVudHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5SZXR1cm4oa2V5d29yZCwgdmFsdWUsIGtleXdvcmQubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb250aW51ZVN0YXRlbWVudCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGNvbnN0IGtleXdvcmQ6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb25kU3RhdGVtZW50cygpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuQ29udGludWUodmFsdWUsIGtleXdvcmQubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBicmVha1N0YXRlbWVudCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGNvbnN0IGtleXdvcmQ6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb25kU3RhdGVtZW50cygpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuQnJlYWsodmFsdWUsIGtleXdvcmQubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBibG9jaygpOiBFeHByLkV4cHJbXSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50czogRXhwci5FeHByW10gPSBbXTtcclxuICAgICAgICB3aGlsZSAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0QnJhY2UpICYmICF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlbWVudHMucHVzaCh0aGlzLmRlY2xhcmF0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2UsIGBFeHBlY3RlZCBjbG9zZSBicmFjZSBcIn1cIiBhZnRlciBibG9jayBzdGF0ZW1lbnRgKTtcclxuICAgICAgICByZXR1cm4gc3RhdGVtZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4cHJlc3Npb25TdGF0ZW1lbnQoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBleHByZXNzaW9uOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuRXhwcmVzc2lvbihleHByZXNzaW9uLCBleHByZXNzaW9uLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhwcmVzc2lvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzc2lnbm1lbnQoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBleHByOiBFeHByLkV4cHIgPSB0aGlzLmxvZ2ljYWxPcigpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FcXVhbCwgVG9rZW5UeXBlLlBsdXNFcXVhbCxcclxuICAgICAgICAgICAgVG9rZW5UeXBlLk1pbnVzRXF1YWwsIFRva2VuVHlwZS5TdGFyRXF1YWwsIFRva2VuVHlwZS5TbGFzaEVxdWFsKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZTogRXhwci5FeHByID0gdGhpcy5hc3NpZ25tZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChleHByIGluc3RhbmNlb2YgRXhwci5WYXJpYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSBleHByLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSAhPT0gVG9rZW5UeXBlLkVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRXhwci5CaW5hcnkobmV3IEV4cHIuVmFyaWFibGUobmFtZSwgbmFtZS5saW5lKSwgb3BlcmF0b3IsIHZhbHVlLCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Bc3NpZ24obmFtZSwgdmFsdWUsIG5hbWUubGluZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwciBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSAhPT0gVG9rZW5UeXBlLkVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRXhwci5CaW5hcnkobmV3IEV4cHIuR2V0KGV4cHIuZW50aXR5LCBleHByLmtleSwgZXhwci50eXBlLCBleHByLmxpbmUpLCBvcGVyYXRvciwgdmFsdWUsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlNldChleHByLmVudGl0eSwgZXhwci5rZXksIHZhbHVlLCBleHByLmxpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3Iob3BlcmF0b3IsIGBJbnZhbGlkIGwtdmFsdWUsIGlzIG5vdCBhbiBhc3NpZ25pbmcgdGFyZ2V0LmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ2ljYWxPcigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByID0gdGhpcy5sb2dpY2FsQW5kKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk9yKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLmxvZ2ljYWxBbmQoKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkxvZ2ljYWwoZXhwciwgb3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dpY2FsQW5kKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmVxdWFsaXR5KCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkFuZCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5lcXVhbGl0eSgpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuTG9naWNhbChleHByLCBvcGVyYXRvciwgcmlnaHQsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVxdWFsaXR5KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHIgID0gdGhpcy5jb21wYXJpc29uKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goXHJcbiAgICAgICAgICAgIFRva2VuVHlwZS5CYW5nRXF1YWwsIFRva2VuVHlwZS5FcXVhbEVxdWFsLCBUb2tlblR5cGUuTGVzc0VxdWFsR3JlYXRlcilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5jb21wYXJpc29uKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wYXJpc29uKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMuYWRkaXRpb24oKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuR3JlYXRlciwgVG9rZW5UeXBlLkdyZWF0ZXJFcXVhbCwgVG9rZW5UeXBlLkxlc3MsIFRva2VuVHlwZS5MZXNzRXF1YWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMuYWRkaXRpb24oKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZGl0aW9uKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMubW9kdWx1cygpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5NaW51cywgVG9rZW5UeXBlLlBsdXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubW9kdWx1cygpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW9kdWx1cygpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLm11bHRpcGxpY2F0aW9uKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlBlcmNlbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubXVsdGlwbGljYXRpb24oKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG11bHRpcGxpY2F0aW9uKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMudHlwZW9mKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlNsYXNoLCBUb2tlblR5cGUuU3RhcikpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy50eXBlb2YoKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHR5cGVvZigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UeXBlb2YpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWU6IEV4cHIuRXhwciA9IHRoaXMudHlwZW9mKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5UeXBlb2YodmFsdWUsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5EZWxldGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWU6IEV4cHIuRXhwciA9IHRoaXMuZGVsZXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5EZWxldGUodmFsdWUsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy51bmFyeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdW5hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTWludXMsIFRva2VuVHlwZS5CYW5nLCBUb2tlblR5cGUuRG9sbGFyLCBUb2tlblR5cGUuUGx1c1BsdXMsIFRva2VuVHlwZS5NaW51c01pbnVzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLnVuYXJ5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5VbmFyeShvcGVyYXRvciwgcmlnaHQsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jYWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMucHJpbWFyeSgpO1xyXG4gICAgICAgIGxldCBjb25zdW1lZCA9IHRydWU7XHJcbiAgICAgICAgZG8gIHtcclxuICAgICAgICAgICAgY29uc3VtZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRQYXJlbikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN1bWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmdzOiBFeHByLkV4cHJbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRQYXJlbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuY29uZFN0YXRlbWVudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNvbW1hKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVuOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIGFyZ3VtZW50c2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5DYWxsKGV4cHIsIHBhcmVuLCBhcmdzLCBudWxsLCBwYXJlbi5saW5lKTtcclxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRQYXJlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Eb3QsIFRva2VuVHlwZS5RdWVzdGlvbkRvdCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN1bWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGV4cHIgPSB0aGlzLmRvdEdldChleHByLCB0aGlzLnByZXZpb3VzKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2tldCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN1bWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGV4cHIgPSB0aGlzLmJyYWNrZXRHZXQoZXhwciwgdGhpcy5wcmV2aW91cygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKGNvbnN1bWVkKTtcclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRvdEdldChleHByOiBFeHByLkV4cHIsIG9wZXJhdG9yOiBUb2tlbik6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLklkZW50aWZpZXIsIGBFeHBlY3QgcHJvcGVydHkgbmFtZSBhZnRlciAnLidgKTtcclxuICAgICAgICBjb25zdCBrZXk6IEV4cHIuS2V5ID0gbmV3IEV4cHIuS2V5KG5hbWUsIG5hbWUubGluZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdldChleHByLCBrZXksIG9wZXJhdG9yLnR5cGUsIG5hbWUubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBicmFja2V0R2V0KGV4cHI6IEV4cHIuRXhwciwgb3BlcmF0b3I6IFRva2VuKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQga2V5OiBFeHByLkV4cHIgPSBudWxsO1xyXG4gICAgICAgIGxldCBlbmQ6IEV4cHIuRXhwciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHN0ZXA6IEV4cHIuRXhwciA9IG5ldyBFeHByLkxpdGVyYWwobmV3ICROdW1iZXIoMSksIG9wZXJhdG9yLmxpbmUpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLkNvbG9uKSkge1xyXG4gICAgICAgICAgICBrZXkgPSB0aGlzLmNvbmRTdGF0ZW1lbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuR2V0KGV4cHIsIGtleSwgb3BlcmF0b3IudHlwZSwgb3BlcmF0b3IubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmltYXJ5KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZhbHNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChuZXcgJEJvb2xlYW4oZmFsc2UpLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UcnVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChuZXcgJEJvb2xlYW4odHJ1ZSksIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk51bGwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKG5ldyAkTnVsbCgpLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Wb2lkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChuZXcgJFZvaWQoKSwgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTnVtYmVyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChuZXcgJE51bWJlcih0aGlzLnByZXZpb3VzKCkubGl0ZXJhbCksIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlN0cmluZykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobmV3ICRTdHJpbmcodGhpcy5wcmV2aW91cygpLmxpdGVyYWwpLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UZW1wbGF0ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlRlbXBsYXRlKHRoaXMucHJldmlvdXMoKS5saXRlcmFsLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gIHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlBsdXNQbHVzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlBvc3RmaXgoaWRlbnRpZmllciwgMSwgaWRlbnRpZmllci5saW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTWludXNNaW51cykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Qb3N0Zml4KGlkZW50aWZpZXIsIC0xLCBpZGVudGlmaWVyLmxpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5WYXJpYWJsZShpZGVudGlmaWVyLCBpZGVudGlmaWVyLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdFBhcmVuKSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHByOiBFeHByLkV4cHIgPSB0aGlzLmNvbmRTdGF0ZW1lbnRzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIGV4cHJlc3Npb25gKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdyb3VwaW5nKGV4cHIsIGV4cHIubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpY3Rpb25hcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZ1bmN0aW9uKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbjogVG9rZW4gPSBuZXcgVG9rZW4oVG9rZW5UeXBlLkxhbWJkYSwgJ0AnLCAnQCcsIHRoaXMucHJldmlvdXMoKS5saW5lLCB0aGlzLnByZXZpb3VzKCkuY29sKTtcclxuICAgICAgICAgICAgY29uc3QgbGFtYmRhOiBFeHByLkZ1bmMgPSB0aGlzLmZ1bmNQYXJhbXNCb2R5KHRva2VuLCAnbGFtYmRhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MYW1iZGEobGFtYmRhLCB0b2tlbi5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyB0aGlzLmVycm9yKHRoaXMucGVlaygpLCBgRXhwZWN0ZWQgZXhwcmVzc2lvbiwgdW5leHBlY3RlZCB0b2tlbiBcIiR7dGhpcy5wZWVrKCkubGV4ZW1lfVwiYCk7XHJcbiAgICAgICAgLy8gdW5yZWFjaGVhYmxlIGNvZGVcclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChudWxsLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGljdGlvbmFyeSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGNvbnN0IGxlZnRCcmFjZSA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUmlnaHRCcmFjZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkRpY3Rpb25hcnkoW10sIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvcGVydGllczogRXhwci5FeHByW10gPSBbXTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TdHJpbmcsIFRva2VuVHlwZS5JZGVudGlmaWVyLCBUb2tlblR5cGUuTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5OiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db2xvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29uZFN0YXRlbWVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gobmV3IEV4cHIuU2V0KG51bGwsIG5ldyBFeHByLktleShrZXksIGtleS5saW5lKSwgdmFsdWUsIGtleS5saW5lKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IEV4cHIuVmFyaWFibGUoa2V5LCBrZXkubGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKG5ldyBFeHByLlNldChudWxsLCBuZXcgRXhwci5LZXkoa2V5LCBrZXkubGluZSksIHZhbHVlLCBrZXkubGluZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcih0aGlzLnBlZWsoKSwgYFN0cmluZywgTnVtYmVyIG9yIElkZW50aWZpZXIgZXhwZWN0ZWQgYXMgYSBLZXkgb2YgRGljdGlvbmFyeSB7LCB1bmV4cGVjdGVkIHRva2VuICR7dGhpcy5wZWVrKCkubGV4ZW1lfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29tbWEpKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2UsIGBFeHBlY3RlZCBcIn1cIiBhZnRlciBvYmplY3QgbGl0ZXJhbGApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuRGljdGlvbmFyeShwcm9wZXJ0aWVzLCBsZWZ0QnJhY2UubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzOiBFeHByLkV4cHJbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxlZnRCcmFja2V0ID0gdGhpcy5wcmV2aW91cygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUmlnaHRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGlzdChbXSwgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRoaXMuY29uZFN0YXRlbWVudHMoKSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29tbWEpKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodEJyYWNrZXQsIGBFeHBlY3RlZCBcIl1cIiBhZnRlciBhcnJheSBkZWNsYXJhdGlvbmApO1xyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5MaXN0KHZhbHVlcywgbGVmdEJyYWNrZXQubGluZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlcy90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vdHlwZXMvbnVsbCc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL3R5cGVzL2FueSc7XHJcbmltcG9ydCB7ICRDYWxsYWJsZSwgJEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlcy9mdW5jdGlvbic7XHJcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi90eXBlcy9ib29sZWFuJztcclxuaW1wb3J0IHsgJExpc3QgfSBmcm9tICcuL3R5cGVzL2xpc3QnO1xyXG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSAnLi90eXBlcy9udW1iZXInO1xyXG5pbXBvcnQgeyAkU3RyaW5nIH0gZnJvbSAnLi90eXBlcy9zdHJpbmcnO1xyXG5pbXBvcnQgeyAkVm9pZCB9IGZyb20gJy4vdHlwZXMvdm9pZCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJvbUphdmFTY3JpcHRNZXRob2QoanNOYW1lOiBzdHJpbmcsIGFyaXR5OiBudW1iZXIsIHR5cGU6IERhdGFUeXBlKTogJENhbGxhYmxlIHtcclxuICAgIHJldHVybiBuZXcgJENhbGxhYmxlKGpzTmFtZSwgYXJpdHksICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IHtcclxuICAgICAgICBjb25zdCBhcmdWYWx1ZXMgPSBhcmdzLm1hcCgoYXJnOiAkQW55KSA9PiBhcmcudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXoudmFsdWVbanNOYW1lXSguLi5hcmdWYWx1ZXMpO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLkJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuU3RyaW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTGlzdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJExpc3QocmVzdWx0KTtcclxuICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5OdWxsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQW55KHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoZnVuYzogKC4uLmFyZ3o6IGFueSkgPT4gYW55LCBuYW1lOiBzdHJpbmcsIGFyaXR5OiBudW1iZXIpOiAkQ2FsbGFibGUge1xyXG4gICAgcmV0dXJuIG5ldyAkQ2FsbGFibGUobmFtZSwgYXJpdHksICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IHtcclxuICAgICAgICBjb25zdCBhcmdWYWx1ZXMgPSBhcmdzLm1hcCgoYXJnOiAkQW55KSA9PiBhcmcudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZ1bmMoLi4uYXJnVmFsdWVzKTtcclxuICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIocmVzdWx0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJvbUphdmFTY3JpcHRGdW5jVm9pZChmdW5jOiAoLi4uYXJnejogYW55KSA9PiBhbnksIG5hbWU6IHN0cmluZywgYXJpdHk6IG51bWJlcik6ICRDYWxsYWJsZSB7XHJcbiAgICByZXR1cm4gbmV3ICRDYWxsYWJsZShuYW1lLCBhcml0eSwgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFyZ1ZhbHVlcyA9IGFyZ3MubWFwKChhcmc6ICRBbnkpID0+IGFyZy52YWx1ZSk7XHJcbiAgICAgICAgZnVuYyguLi5hcmdWYWx1ZXMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUnVudGltZSA9IHtcclxuICAgIENvbnNvbGU6ICBuZXcgTWFwPHN0cmluZywgJEFueT4oW1xyXG4gICAgICAgIFsnbG9nJywgZnJvbUphdmFTY3JpcHRGdW5jVm9pZChjb25zb2xlLmxvZywgJ2NvbnNvbGUubG9nJywgLTEpXSxcclxuICAgICAgICBbJ3dhcm4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNWb2lkKGNvbnNvbGUud2FybiwgJ2NvbnNvbGUud2FybicsIC0xKV0sXHJcbiAgICAgICAgWydpbmZvJywgZnJvbUphdmFTY3JpcHRGdW5jVm9pZChjb25zb2xlLmluZm8sICdjb25zb2xlLmluZm8nLCAtMSldLFxyXG4gICAgICAgIFsnZXJyb3InLCBmcm9tSmF2YVNjcmlwdEZ1bmNWb2lkKGNvbnNvbGUuZXJyb3IsICdjb25zb2xlLmVycm9yJywgLTEpXVxyXG4gICAgXSksXHJcbiAgICBNYXRoOiAgbmV3IE1hcDxzdHJpbmcsICRBbnk+KFtcclxuICAgICAgICBbJ2NlaWwnLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5jZWlsLCAnY2VpbCcsIDEpXSxcclxuICAgICAgICBbJ2NvcycsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLmNvcywgJ2NvcycsIDEpXSxcclxuICAgICAgICBbJ2Zsb29yJywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGguZmxvb3IsICdmbG9vcicsIDEpXSxcclxuICAgICAgICBbJ2xvZycsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLmxvZywgJ2xvZycsIDEpXSxcclxuICAgICAgICBbJ21heCcsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLm1heCwgJ21heCcsIC0xKV0sXHJcbiAgICAgICAgWydtaW4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5taW4sICdtaW4nLCAtMSldLFxyXG4gICAgICAgIFsncGknLCBuZXcgJE51bWJlcihNYXRoLlBJKV0sXHJcbiAgICAgICAgWydwb3cnLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5wb3csICdwb3cnLCAyKV0sXHJcbiAgICAgICAgWydyYW5kb20nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5yYW5kb20sICdyYW5kb20nLCAwKV0sXHJcbiAgICAgICAgWydyb3VuZCcsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLnJvdW5kLCAncm91bmQnLCAxKV0sXHJcbiAgICAgICAgWydzaW4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5zaW4sICdzaW4nLCAxKV0sXHJcbiAgICAgICAgWydzcXJ0JywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGguc3FydCwgJ3NxcnQnLCAxKV0sXHJcbiAgICAgICAgWyd0YW4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC50YW4sICd0YW4nLCAxKV0sXHJcbiAgICAgICAgWyd0cnVuYycsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLnRydW5jLCAndHJ1bmMnLCAxKV1cclxuICAgIF0pLFxyXG4gICAgVXRpbHM6IG5ldyBNYXA8c3RyaW5nLCAkQW55PihbXHJcblxyXG4gICAgXSlcclxufTtcclxuIiwiaW1wb3J0IHsgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gJy4vdG9rZW4nO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7ICRFcnJvciB9IGZyb20gJy4vdHlwZXMvZXJyb3InO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjYW5uZXIge1xyXG4gICAgLyoqIHNjcmlwdHMgc291cmNlIGNvZGUgKi9cclxuICAgIHB1YmxpYyBzb3VyY2U6IHN0cmluZztcclxuICAgIC8qKiBjb250YWluZXMgdGhlIHNvdXJjZSBjb2RlIHJlcHJlc2VudGVkIGFzIGxpc3Qgb2YgdG9rZW5zICovXHJcbiAgICBwdWJsaWMgdG9rZW5zOiBUb2tlbltdO1xyXG4gICAgLyoqIExpc3Qgb2YgZXJyb3JzIGZyb20gc2Nhbm5pbmcgKi9cclxuICAgIHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdO1xyXG4gICAgLyoqIHBvaW50cyB0byB0aGUgY3VycmVudCBjaGFyYWN0ZXIgYmVpbmcgdG9rZW5pemVkICovXHJcbiAgICBwcml2YXRlIGN1cnJlbnQ6IG51bWJlcjtcclxuICAgIC8qKiBwb2ludHMgdG8gdGhlIHN0YXJ0IG9mIHRoZSB0b2tlbiBmcmFzZSAqL1xyXG4gICAgcHJpdmF0ZSBzdGFydDogbnVtYmVyO1xyXG4gICAgLyoqIGN1cnJlbnQgbGluZSBvZiBzb3VyY2UgY29kZSBiaWVuZyB0b2tlbml6ZWQgKi9cclxuICAgIHByaXZhdGUgbGluZTogbnVtYmVyO1xyXG4gICAgLyoqIGN1cnJlbnQgY29sdW1uIG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgdG9rZW5pemVkICovXHJcbiAgICBwcml2YXRlIGNvbDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBzY2FuKHNvdXJjZTogc3RyaW5nKTogVG9rZW5bXSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IDA7XHJcbiAgICAgICAgdGhpcy5saW5lID0gMTtcclxuICAgICAgICB0aGlzLmNvbCA9IDE7XHJcblxyXG4gICAgICAgIHdoaWxlICghdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnRXJyb3IgbGltaXQgZXhjZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaChuZXcgVG9rZW4oVG9rZW5UeXBlLkVvZiwgJycsIG51bGwsIHRoaXMubGluZSwgMCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVvZigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50ID49IHRoaXMuc291cmNlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkdmFuY2UoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZSsrO1xyXG4gICAgICAgICAgICB0aGlzLmNvbCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCsrO1xyXG4gICAgICAgIHRoaXMuY29sKys7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFRva2VuKHRva2VuVHlwZTogVG9rZW5UeXBlLCBsaXRlcmFsOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaChuZXcgVG9rZW4odG9rZW5UeXBlLCB0ZXh0LCBsaXRlcmFsLCB0aGlzLmxpbmUsIHRoaXMuY29sKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXRjaChleHBlY3RlZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQpICE9PSBleHBlY3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnQrKztcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWsoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1xcMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWtOZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCArIDEgPj0gdGhpcy5zb3VyY2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnXFwwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucGVlaygpICE9PSAnXFxuJyAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtdWx0aWxpbmVDb21tZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHdoaWxlICghdGhpcy5lb2YoKSAmJiAhKHRoaXMucGVlaygpID09PSAnKicgJiYgdGhpcy5wZWVrTmV4dCgpID09PSAnLycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCwgZXhwZWN0aW5nIGNsb3NpbmcgXCIqL1wiJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhlIGNsb3Npbmcgc2xhc2ggJyovJ1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RyaW5nKHF1b3RlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCkgIT09IHF1b3RlICYmICF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVW50ZXJtaW5hdGVkIHN0cmluZy5cclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKGBVbnRlcm1pbmF0ZWQgc3RyaW5nLCBleHBlY3RpbmcgY2xvc2luZyAke3F1b3RlfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGUgY2xvc2luZyBcIi5cclxuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuXHJcbiAgICAgICAgLy8gVHJpbSB0aGUgc3Vycm91bmRpbmcgcXVvdGVzLlxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQgKyAxLCB0aGlzLmN1cnJlbnQgLSAxKTtcclxuICAgICAgICB0aGlzLmFkZFRva2VuKHF1b3RlICE9PSAnYCcgPyBUb2tlblR5cGUuU3RyaW5nIDogVG9rZW5UeXBlLlRlbXBsYXRlLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBudW1iZXIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gZ2V0cyBpbnRlZ2VyIHBhcnRcclxuICAgICAgICB3aGlsZSAoVXRpbHMuaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVja3MgZm9yIGZyYWN0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnLicgJiYgVXRpbHMuaXNEaWdpdCh0aGlzLnBlZWtOZXh0KCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0cyBmcmFjdGlvbiBwYXJ0XHJcbiAgICAgICAgd2hpbGUgKFV0aWxzLmlzRGlnaXQodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2tzIGZvciBleHBvbmVudFxyXG4gICAgICAgIGlmICh0aGlzLnBlZWsoKS50b0xvd2VyQ2FzZSgpID09PSAnZScpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJy0nIHx8IHRoaXMucGVlaygpID09PSAnKycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSAoVXRpbHMuaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0ICwgdGhpcy5jdXJyZW50KTtcclxuICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5OdW1iZXIsIE51bWJlcih2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaWRlbnRpZmllcigpOiB2b2lkIHtcclxuICAgICAgICB3aGlsZSAoVXRpbHMuaXNBbHBoYU51bWVyaWModGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCwgdGhpcy5jdXJyZW50KTtcclxuICAgICAgICBjb25zdCBjYXBpdGFsaXplZCA9IFV0aWxzLmNhcGl0YWxpemUodmFsdWUpO1xyXG4gICAgICAgIGlmIChVdGlscy5pc0tleXdvcmQoY2FwaXRhbGl6ZWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlW2NhcGl0YWxpemVkXSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLklkZW50aWZpZXIsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUb2tlbigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjaGFyID0gdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgc3dpdGNoIChjaGFyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJygnOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5MZWZ0UGFyZW4sIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKSc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlJpZ2h0UGFyZW4sIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnWyc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkxlZnRCcmFja2V0LCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ10nOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5SaWdodEJyYWNrZXQsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAneyc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkxlZnRCcmFjZSwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd9JzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuUmlnaHRCcmFjZSwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcsJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuQ29tbWEsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnOyc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlNlbWljb2xvbiwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdeJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuQ2FyZXQsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnJCc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkRvbGxhciwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcjJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuSGFzaCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdAJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuRnVuY3Rpb24sICdAJyk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc6JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuQXJyb3cgOiBUb2tlblR5cGUuQ29sb24sIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKic6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLlN0YXJFcXVhbCA6IFRva2VuVHlwZS5TdGFyLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyUnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5QZXJjZW50RXF1YWwgOiBUb2tlblR5cGUuUGVyY2VudCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd8JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCd8JykgPyBUb2tlblR5cGUuT3IgOiBUb2tlblR5cGUuUGlwZSwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcmJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCcmJykgPyBUb2tlblR5cGUuQW5kIDogVG9rZW5UeXBlLkFtcGVyc2FuZCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc+JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuR3JlYXRlckVxdWFsIDogVG9rZW5UeXBlLkdyZWF0ZXIsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnISc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLkJhbmdFcXVhbCA6IFRva2VuVHlwZS5CYW5nLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJz8nOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz8nKSA/IFRva2VuVHlwZS5RdWVzdGlvblF1ZXN0aW9uIDogdGhpcy5tYXRjaCgnLicpID8gVG9rZW5UeXBlLlF1ZXN0aW9uRG90IDogVG9rZW5UeXBlLlF1ZXN0aW9uLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJz0nOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5FcXVhbEVxdWFsIDogdGhpcy5tYXRjaCgnPicpID8gVG9rZW5UeXBlLkFycm93IDogVG9rZW5UeXBlLkVxdWFsLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJysnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJysnKSA/IFRva2VuVHlwZS5QbHVzUGx1cyA6IHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5QbHVzRXF1YWwgOiBUb2tlblR5cGUuUGx1cywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICctJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCctJykgPyBUb2tlblR5cGUuTWludXNNaW51cyA6IHRoaXMubWF0Y2goJz4nKSA/IFRva2VuVHlwZS5SZXR1cm4gOiB0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuTWludXNFcXVhbCA6IFRva2VuVHlwZS5NaW51cywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc8JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyB0aGlzLm1hdGNoKCc+JykgPyBUb2tlblR5cGUuTGVzc0VxdWFsR3JlYXRlciA6IFRva2VuVHlwZS5MZXNzRXF1YWwgOiBUb2tlblR5cGUuTGVzcywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKCcuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRjaCgnLicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkRvdERvdERvdCwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuRG90RG90LCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkRvdCwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRjaCgnLycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goJyonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlsaW5lQ29tbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5TbGFzaEVxdWFsIDogVG9rZW5UeXBlLlNsYXNoLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGAnYDpcclxuICAgICAgICAgICAgY2FzZSBgXCJgOlxyXG4gICAgICAgICAgICBjYXNlICdgJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nKGNoYXIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIGlnbm9yZSBjYXNlc1xyXG4gICAgICAgICAgICBjYXNlICdcXG4nOlxyXG4gICAgICAgICAgICBjYXNlICcgJzpcclxuICAgICAgICAgICAgY2FzZSAnXFxyJzpcclxuICAgICAgICAgICAgY2FzZSAnXFx0JzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyBjb21wZXggY2FzZXNcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGlmIChVdGlscy5pc0RpZ2l0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoVXRpbHMuaXNBbHBoYShjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciAnJHtjaGFyfSdgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgU2NhbiBFcnJvciAoJHt0aGlzLmxpbmV9OiR7dGhpcy5jb2x9KSA9PiAke21lc3NhZ2V9YCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi90eXBlcy9hbnknO1xyXG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vdHlwZXMvbnVsbCc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NvcGUge1xyXG5cclxuICAgIHByaXZhdGUgdmFsdWVzOiBNYXA8c3RyaW5nLCBhbnk+O1xyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNjb3BlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogU2NvcGUgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJ1bnRpbWUgRXJyb3IgPT4gJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogJEFueSkge1xyXG4gICAgICAgIHRoaXMudmFsdWVzLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmluZShuYW1lOiBzdHJpbmcsIHZhbHVlOiAkQW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKGBJZGVudGlmaWVyIFwiJHtuYW1lfVwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzc2lnbihuYW1lOiBzdHJpbmcsIHZhbHVlOiAkQW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuYXNzaWduKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVycm9yKGBJZGVudGlmaWVyIFwiJHtuYW1lfVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcsIHRva2VuOiBUb2tlbiA9IG51bGwpOiAkQW55IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKGAgYXQgKCR7dG9rZW4ubGluZX06JHt0b2tlbi5jb2x9KSA9PiBcIiR7dG9rZW4ubGV4ZW1lfVwiIGlzIG5vdCBkZWZpbmVkYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihgXCIke2tleX1cIiBpcyBub3QgZGVmaW5lZGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XHJcbiAgICAvLyBQYXJzZXIgVG9rZW5zXHJcbiAgICBFb2YsXHJcbiAgICBQYW5pYyxcclxuICAgIExhbWJkYSxcclxuXHJcbiAgICAvLyBTaW5nbGUgQ2hhcmFjdGVyIFRva2Vuc1xyXG4gICAgQW1wZXJzYW5kLFxyXG4gICAgQXRTaWduLFxyXG4gICAgQ2FyZXQsXHJcbiAgICBDb21tYSxcclxuICAgIERvbGxhcixcclxuICAgIERvdCxcclxuICAgIEhhc2gsXHJcbiAgICBMZWZ0QnJhY2UsXHJcbiAgICBMZWZ0QnJhY2tldCxcclxuICAgIExlZnRQYXJlbixcclxuICAgIFBlcmNlbnQsXHJcbiAgICBQaXBlLFxyXG4gICAgUmlnaHRCcmFjZSxcclxuICAgIFJpZ2h0QnJhY2tldCxcclxuICAgIFJpZ2h0UGFyZW4sXHJcbiAgICBTZW1pY29sb24sXHJcbiAgICBTbGFzaCxcclxuICAgIFN0YXIsXHJcblxyXG4gICAgLy8gT25lIE9yIFR3byBDaGFyYWN0ZXIgVG9rZW5zXHJcbiAgICBBcnJvdyxcclxuICAgIEJhbmcsXHJcbiAgICBCYW5nRXF1YWwsXHJcbiAgICBDb2xvbixcclxuICAgIEVxdWFsLFxyXG4gICAgRXF1YWxFcXVhbCxcclxuICAgIEdyZWF0ZXIsXHJcbiAgICBHcmVhdGVyRXF1YWwsXHJcbiAgICBMZXNzLFxyXG4gICAgTGVzc0VxdWFsLFxyXG4gICAgTWludXMsXHJcbiAgICBNaW51c0VxdWFsLFxyXG4gICAgTWludXNNaW51cyxcclxuICAgIFBlcmNlbnRFcXVhbCxcclxuICAgIFBsdXMsXHJcbiAgICBQbHVzRXF1YWwsXHJcbiAgICBQbHVzUGx1cyxcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgUXVlc3Rpb25Eb3QsXHJcbiAgICBRdWVzdGlvblF1ZXN0aW9uLFxyXG4gICAgU2xhc2hFcXVhbCxcclxuICAgIFN0YXJFcXVhbCxcclxuICAgIERvdERvdCxcclxuICAgIERvdERvdERvdCxcclxuICAgIExlc3NFcXVhbEdyZWF0ZXIsXHJcblxyXG4gICAgLy8gTGl0ZXJhbHNcclxuICAgIElkZW50aWZpZXIsXHJcbiAgICBUZW1wbGF0ZSxcclxuICAgIFN0cmluZyxcclxuICAgIE51bWJlcixcclxuICAgIFJlZ2V4LFxyXG5cclxuICAgIC8vIEtleXdvcmRzXHJcbiAgICBBbmQsXHJcbiAgICBCcmVhayxcclxuICAgIEJhc2UsXHJcbiAgICBDbGFzcyxcclxuICAgIENvbnRpbnVlLFxyXG4gICAgRGVsZXRlLFxyXG4gICAgRG8sXHJcbiAgICBFYWNoLFxyXG4gICAgRWxzZSxcclxuICAgIEV4dGVuZHMsXHJcbiAgICBGYWxzZSxcclxuICAgIEZvcixcclxuICAgIEZvcmVhY2gsXHJcbiAgICBGdW5jdGlvbixcclxuICAgIElmLFxyXG4gICAgSW4sXHJcbiAgICBJbnN0YW5jZW9mLFxyXG4gICAgSXMsXHJcbiAgICBOZXcsXHJcbiAgICBOdWxsLFxyXG4gICAgT3IsXHJcbiAgICBQcmludCxcclxuICAgIFJldHVybixcclxuICAgIFRydWUsXHJcbiAgICBUeXBlb2YsXHJcbiAgICBWYXIsXHJcbiAgICBWb2lkLFxyXG4gICAgVXNlLFxyXG4gICAgV2hpbGUsXHJcbiAgICBXaXRoXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlbiB7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGxpbmU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb2w6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0eXBlOiBUb2tlblR5cGU7XHJcbiAgICBwdWJsaWMgbGl0ZXJhbDogYW55O1xyXG4gICAgcHVibGljIGxleGVtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IFRva2VuVHlwZSwgbGV4ZW1lOiBzdHJpbmcsIGxpdGVyYWw6IGFueSwgbGluZTogbnVtYmVyLCBjb2w6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFRva2VuVHlwZVt0eXBlXTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMubGV4ZW1lID0gbGV4ZW1lO1xyXG4gICAgICAgIHRoaXMubGl0ZXJhbCA9IGxpdGVyYWw7XHJcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcclxuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBbKCR7dGhpcy5saW5lfSk6XCIke3RoaXMubGV4ZW1lfVwiXWA7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuLi9jb25zb2xlJztcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XHJcbiAgICBwdWJsaWMgdHlwZSA9IERhdGFUeXBlLkFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55LCB0eXBlOiBEYXRhVHlwZSA9IERhdGFUeXBlLkFueSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1N0cmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5TdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTnVsbCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5OdWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0Jvb2xlYW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuQm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNOdW1iZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuTnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1JhbmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLlJhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0Z1bmN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkZ1bmN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0NsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkNsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0xhbWJkYSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5GdW5jdGlvbiAmJiAodGhpcyBhcyBhbnkpLm5hbWUgPT09ICdAJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNMaXN0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGljdGlvbmFyeSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5EaWN0aW9uYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc09iamVjdCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5PYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVHJ1dGh5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTnVsbCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCb29sZWFuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKCkgJiYgdGhpcy52YWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RyaW5nKCkgJiYgdGhpcy52YWx1ZS50b1N0cmluZygpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzTGlzdCgpICYmIHRoaXMudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaWN0aW9uYXJ5KCkgJiYgdGhpcy52YWx1ZS5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBlcnJvciB2YWx1ZSBBbnkgaXMgbnVsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGVycm9yIHZhbHVlIEFueSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0VxdWFsKG90aGVyOiAkQW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IG90aGVyLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0tleVZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IERhdGFUeXBlLkNsYXNzIHx8XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuRGljdGlvbmFyeSB8fFxyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPT09IERhdGFUeXBlLk9iamVjdFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XHJcbiAgICAgICAgY29uem9sZS5lcnJvcihga2V5ICR7a2V5fSBkb2VzIG5vdCBleGlzdCBpbiAke3RoaXN9YCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgaW4gQW55IGdldHRlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICBjb256b2xlLmVycm9yKGBrZXkgJHtrZXl9IGRvZXMgbm90IGV4aXN0IGluICR7dGhpc31gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBpbiBBbnkgc2V0dGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoa2V5OiAkQW55KTogJEFueSB7XHJcbiAgICAgICAgY29uem9sZS5lcnJvcihgJHt0aGlzfSBkb2VzIG5vdCBzdXBwb3J0IG9wZXJhdG9yYCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgaW4gQW55IGRlbGV0ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xyXG5cclxuZXhwb3J0IGNsYXNzICRCb29sZWFuIGV4dGVuZHMgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkJvb2xlYW4pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcclxuaW1wb3J0IHsgZnJvbUphdmFTY3JpcHRNZXRob2QgfSBmcm9tICcuLi9ydW50aW1lJztcclxuaW1wb3J0IHsgSW50ZXJwcmV0ZXIgfSBmcm9tICcuLi9pbnRlcnByZXRlcic7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcbmltcG9ydCB7ICRGdW5jdGlvbiwgJENhbGxhYmxlIH0gZnJvbSAnLi9mdW5jdGlvbic7XHJcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi9udWxsJztcclxuaW1wb3J0IHsgJE51bWJlciB9IGZyb20gJy4vbnVtYmVyJztcclxuaW1wb3J0IHsgJFN0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi9ib29sZWFuJztcclxuXHJcbmV4cG9ydCBjbGFzcyAkRGljdGlvbmFyeSBleHRlbmRzICRBbnkge1xyXG4gICAgcHVibGljIHZhbHVlOiBNYXA8YW55LCAkQW55PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogTWFwPGFueSwgJEFueT4pIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuRGljdGlvbmFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6ICRBbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlLmhhcyhrZXkudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmdldChrZXkudmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJERpY3Rpb25hcnkucnVudGltZS5oYXMoa2V5LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJERpY3Rpb25hcnkucnVudGltZS5nZXQoa2V5LnZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIHRoaXMudmFsdWUuc2V0KGtleS52YWx1ZSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGtleTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMudmFsdWUuZGVsZXRlKGtleS52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcclxuICAgICAgICB0aGlzLnZhbHVlLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYCR7a2V5LnRvU3RyaW5nKCl9OiAke3ZhbHVlfWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBgeyR7cmVzdWx0LmpvaW4oJzsgJyl9fWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlYWNoKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKTogJEFueSB7XHJcbiAgICAgICAgdGhpei52YWx1ZS5mb3JFYWNoKCh2YWx1ZTogJEFueSwga2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgKGFyZ3NbMF0gYXMgJEZ1bmN0aW9uKS5jYWxsKHRoaXosIFt2YWx1ZSwgbmV3ICRTdHJpbmcoa2V5KSwgdGhpel0sIGludGVycHJldGVyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpejtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1hcCh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xyXG4gICAgICAgIHRoaXoudmFsdWUuZm9yRWFjaCgodmFsdWU6ICRBbnksIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXoudmFsdWUuc2V0KCdrZXknLCAoYXJnc1swXSBhcyAkRnVuY3Rpb24pLmNhbGwodGhpeiwgW3ZhbHVlLCBuZXcgJFN0cmluZyhrZXkpLCB0aGl6XSwgaW50ZXJwcmV0ZXIpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpejtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluZGV4T2YodGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcclxuICAgICAgICBsZXQgaW5kZXg6IHN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpei52YWx1ZS5mb3JFYWNoKCh2YWx1ZTogJEFueSwga2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLnR5cGUgPT09IGFyZ3NbMF0udHlwZSAmJiB2YWx1ZS52YWx1ZSA9PT0gYXJnc1swXS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBrZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcnVudGltZSA9ICBuZXcgTWFwKFtcclxuICAgICAgICBbJ2NsZWFyJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2NsZWFyJywgMCwgRGF0YVR5cGUuTnVsbCldLFxyXG4gICAgICAgIFsnZGVsZXRlJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2RlbGV0ZScsIDEsIERhdGFUeXBlLkJvb2xlYW4pXSxcclxuICAgICAgICBbJ2VhY2gnLCBuZXcgJENhbGxhYmxlKCdlYWNoJywgMSwgJERpY3Rpb25hcnkuZWFjaCldLFxyXG4gICAgICAgIFsnaGFzJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2hhcycsIDEsIERhdGFUeXBlLkJvb2xlYW4pXSxcclxuICAgICAgICBbJ2luZGV4T2YnLCBuZXcgJENhbGxhYmxlKCdpbmRleE9mJywgMSwgJERpY3Rpb25hcnkuaW5kZXhPZildLFxyXG4gICAgICAgIFsnbWFwJywgbmV3ICRDYWxsYWJsZSgnbWFwJywgMSwgJERpY3Rpb25hcnkubWFwKV0sXHJcbiAgICAgICAgWydtZXJnZScsIG5ldyAkQ2FsbGFibGUoJ21lcmdlJywgMSwgICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IG5ldyAkRGljdGlvbmFyeShuZXcgTWFwKFsuLi4odGhpei52YWx1ZSksIC4uLihhcmdzWzBdLnZhbHVlKV0pKSldLFxyXG4gICAgICAgIFsnc2l6ZScsIG5ldyAkQ2FsbGFibGUoJ3NpemUnLCAwLCAgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkgPT4gbmV3ICROdW1iZXIodGhpei52YWx1ZS5zaXplKSldXHJcbiAgICBdKTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcblxyXG5leHBvcnQgY2xhc3MgJEVycm9yIGV4dGVuZHMgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbGluZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcsIGxpbmU6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuRXJyb3IpO1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gJ3Rva2VuJzs7XG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnYW55JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV4cHIge1xuICAgIHB1YmxpYyByZXN1bHQ6IGFueTtcbiAgICBwdWJsaWMgbGluZTogbnVtYmVyO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgcHVibGljIGFic3RyYWN0IGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFI7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuZXhwb3J0IGludGVyZmFjZSBFeHByVmlzaXRvcjxSPiB7XG4gICAgdmlzaXRBc3NpZ25FeHByKGV4cHI6IEFzc2lnbik6IFI7XG4gICAgdmlzaXRCaW5hcnlFeHByKGV4cHI6IEJpbmFyeSk6IFI7XG4gICAgdmlzaXRDYWxsRXhwcihleHByOiBDYWxsKTogUjtcbiAgICB2aXNpdERlbGV0ZUV4cHIoZXhwcjogRGVsZXRlKTogUjtcbiAgICB2aXNpdERpY3Rpb25hcnlFeHByKGV4cHI6IERpY3Rpb25hcnkpOiBSO1xuICAgIHZpc2l0R2V0RXhwcihleHByOiBHZXQpOiBSO1xuICAgIHZpc2l0R3JvdXBpbmdFeHByKGV4cHI6IEdyb3VwaW5nKTogUjtcbiAgICB2aXNpdEtleUV4cHIoZXhwcjogS2V5KTogUjtcbiAgICB2aXNpdExhbWJkYUV4cHIoZXhwcjogTGFtYmRhKTogUjtcbiAgICB2aXNpdExvZ2ljYWxFeHByKGV4cHI6IExvZ2ljYWwpOiBSO1xuICAgIHZpc2l0TGlzdEV4cHIoZXhwcjogTGlzdCk6IFI7XG4gICAgdmlzaXRMaXRlcmFsRXhwcihleHByOiBMaXRlcmFsKTogUjtcbiAgICB2aXNpdFBvc3RmaXhFeHByKGV4cHI6IFBvc3RmaXgpOiBSO1xuICAgIHZpc2l0U2V0RXhwcihleHByOiBTZXQpOiBSO1xuICAgIHZpc2l0VGVtcGxhdGVFeHByKGV4cHI6IFRlbXBsYXRlKTogUjtcbiAgICB2aXNpdFR5cGVvZkV4cHIoZXhwcjogVHlwZW9mKTogUjtcbiAgICB2aXNpdFVuYXJ5RXhwcihleHByOiBVbmFyeSk6IFI7XG4gICAgdmlzaXRWYXJpYWJsZUV4cHIoZXhwcjogVmFyaWFibGUpOiBSO1xuICAgIHZpc2l0QmxvY2tFeHByKGV4cHI6IEJsb2NrKTogUjtcbiAgICB2aXNpdEJyZWFrRXhwcihleHByOiBCcmVhayk6IFI7XG4gICAgdmlzaXRDb250aW51ZUV4cHIoZXhwcjogQ29udGludWUpOiBSO1xuICAgIHZpc2l0RWFjaEV4cHIoZXhwcjogRWFjaCk6IFI7XG4gICAgdmlzaXRFeHByZXNzaW9uRXhwcihleHByOiBFeHByZXNzaW9uKTogUjtcbiAgICB2aXNpdEZ1bmNFeHByKGV4cHI6IEZ1bmMpOiBSO1xuICAgIHZpc2l0SWZFeHByKGV4cHI6IElmKTogUjtcbiAgICB2aXNpdFByaW50RXhwcihleHByOiBQcmludCk6IFI7XG4gICAgdmlzaXRSZXR1cm5FeHByKGV4cHI6IFJldHVybik6IFI7XG4gICAgdmlzaXRWYXJFeHByKGV4cHI6IFZhcik6IFI7XG4gICAgdmlzaXRXaGlsZUV4cHIoZXhwcjogV2hpbGUpOiBSO1xufVxuXG5leHBvcnQgY2xhc3MgQXNzaWduIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCB2YWx1ZTogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QXNzaWduRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkFzc2lnbic7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmluYXJ5IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGxlZnQ6IEV4cHI7XG4gICAgcHVibGljIG9wZXJhdG9yOiBUb2tlbjtcbiAgICBwdWJsaWMgcmlnaHQ6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihsZWZ0OiBFeHByLCBvcGVyYXRvcjogVG9rZW4sIHJpZ2h0OiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJpbmFyeUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5CaW5hcnknO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbGwgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgY2FsbGVlOiBFeHByO1xuICAgIHB1YmxpYyBwYXJlbjogVG9rZW47XG4gICAgcHVibGljIGFyZ3M6IEV4cHJbXTtcbiAgICBwdWJsaWMgdGhpejogJEFueTtcblxuICAgIGNvbnN0cnVjdG9yKGNhbGxlZTogRXhwciwgcGFyZW46IFRva2VuLCBhcmdzOiBFeHByW10sIHRoaXo6ICRBbnksIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICAgICAgdGhpcy5wYXJlbiA9IHBhcmVuO1xuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgICAgICB0aGlzLnRoaXogPSB0aGl6O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDYWxsRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkNhbGwnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXREZWxldGVFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuRGVsZXRlJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaWN0aW9uYXJ5IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHByb3BlcnRpZXM6IEV4cHJbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM6IEV4cHJbXSwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdERpY3Rpb25hcnlFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuRGljdGlvbmFyeSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2V0IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGVudGl0eTogRXhwcjtcbiAgICBwdWJsaWMga2V5OiBFeHByO1xuICAgIHB1YmxpYyB0eXBlOiBUb2tlblR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihlbnRpdHk6IEV4cHIsIGtleTogRXhwciwgdHlwZTogVG9rZW5UeXBlLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRHZXRFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuR2V0JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHcm91cGluZyBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBleHByZXNzaW9uOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEdyb3VwaW5nRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkdyb3VwaW5nJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLZXkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEtleUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5LZXknO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBsYW1iZGE6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihsYW1iZGE6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxhbWJkYSA9IGxhbWJkYTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGFtYmRhRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxhbWJkYSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9naWNhbCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBsZWZ0OiBFeHByO1xuICAgIHB1YmxpYyBvcGVyYXRvcjogVG9rZW47XG4gICAgcHVibGljIHJpZ2h0OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgb3BlcmF0b3I6IFRva2VuLCByaWdodDogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMb2dpY2FsRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxvZ2ljYWwnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpc3QgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHJbXTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByW10sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdExpc3RFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuTGlzdCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogJEFueTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiAkQW55LCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxpdGVyYWwnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvc3RmaXggZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIGluY3JlbWVudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIGluY3JlbWVudDogbnVtYmVyLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnQgPSBpbmNyZW1lbnQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFBvc3RmaXhFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuUG9zdGZpeCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGVudGl0eTogRXhwcjtcbiAgICBwdWJsaWMga2V5OiBFeHByO1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGVudGl0eTogRXhwciwga2V5OiBFeHByLCB2YWx1ZTogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRTZXRFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuU2V0JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZywgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGVtcGxhdGVFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuVGVtcGxhdGUnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVvZiBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRUeXBlb2ZFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuVHlwZW9mJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBvcGVyYXRvcjogVG9rZW47XG4gICAgcHVibGljIHJpZ2h0OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3I6IFRva2VuLCByaWdodDogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRVbmFyeUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5VbmFyeSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFyaWFibGUgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFZhcmlhYmxlRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlZhcmlhYmxlJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCbG9jayBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBzdGF0ZW1lbnRzOiBFeHByW107XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnRzOiBFeHByW10sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCbG9ja0V4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5CbG9jayc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnJlYWsgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QnJlYWtFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuQnJlYWsnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnRpbnVlIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENvbnRpbnVlRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkNvbnRpbnVlJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFYWNoIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyBpdGVyYWJsZTogRXhwcjtcbiAgICBwdWJsaWMgbG9vcDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBpdGVyYWJsZTogRXhwciwgbG9vcDogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXRlcmFibGUgPSBpdGVyYWJsZTtcbiAgICAgICAgdGhpcy5sb29wID0gbG9vcDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RWFjaEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5FYWNoJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGV4cHJlc3Npb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RXhwcmVzc2lvbkV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5FeHByZXNzaW9uJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyBwYXJhbXM6IFRva2VuW107XG4gICAgcHVibGljIGJvZHk6IEV4cHJbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBwYXJhbXM6IFRva2VuW10sIGJvZHk6IEV4cHJbXSwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRGdW5jRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkZ1bmMnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIElmIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcbiAgICBwdWJsaWMgdGhlbkV4cHI6IEV4cHI7XG4gICAgcHVibGljIGVsc2VFeHByOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCB0aGVuRXhwcjogRXhwciwgZWxzZUV4cHI6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy50aGVuRXhwciA9IHRoZW5FeHByO1xuICAgICAgICB0aGlzLmVsc2VFeHByID0gZWxzZUV4cHI7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdElmRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLklmJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmludCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBleHByZXNzaW9uOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFByaW50RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlByaW50JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXR1cm4gZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMga2V5d29yZDogVG9rZW47XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5d29yZDogVG9rZW4sIHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRSZXR1cm5FeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuUmV0dXJuJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXIgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHR5cGU6IFRva2VuO1xuICAgIHB1YmxpYyBpbml0aWFsaXplcjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCB0eXBlOiBUb2tlbiwgaW5pdGlhbGl6ZXI6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFZhckV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5WYXInO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdoaWxlIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcbiAgICBwdWJsaWMgbG9vcDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogRXhwciwgbG9vcDogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmxvb3AgPSBsb29wO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRXaGlsZUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5XaGlsZSc7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi4vY29uc29sZSc7XHJcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4uL2ludGVycHJldGVyJztcclxuaW1wb3J0IHsgU2NvcGUgfSBmcm9tICcuLi9zY29wZSc7XHJcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi9udWxsJztcclxuaW1wb3J0ICogYXMgRXhwciBmcm9tICcuL2V4cHJlc3Npb24nO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IHR5cGUgRnVuY3Rpb25DYWxsID0gKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKSA9PiAkQW55O1xyXG5cclxuZXhwb3J0IGNsYXNzICRDYWxsYWJsZSBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogRnVuY3Rpb25DYWxsO1xyXG4gICAgcHVibGljIGFyaXR5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgIGFyaXR5OiBudW1iZXIsIHZhbHVlOiBGdW5jdGlvbkNhbGwpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuRnVuY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuYXJpdHkgPSBhcml0eTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxsKHRoaXo6IGFueSwgYXJnczogYW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlciwgKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUodGhpeiwgYXJncywgaW50ZXJwcmV0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgPCR7dGhpcy5uYW1lfSAgZnVuY3Rpb24+YDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyAkRnVuY3Rpb24gZXh0ZW5kcyAkQ2FsbGFibGUge1xyXG4gICAgcHVibGljIGRlY2xhcmF0aW9uOiBFeHByLkZ1bmM7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjbG9zdXJlOiBTY29wZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbjogRXhwci5GdW5jLCBjbG9zdXJlOiBTY29wZSkge1xyXG4gICAgICAgIHN1cGVyKGRlY2xhcmF0aW9uLm5hbWUubGV4ZW1lLCBkZWNsYXJhdGlvbi5wYXJhbXMubGVuZ3RoLCBudWxsKTtcclxuICAgICAgICB0aGlzLmRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb247XHJcbiAgICAgICAgdGhpcy5jbG9zdXJlID0gY2xvc3VyZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsbCh0aGl6OiBhbnksIGFyZ3M6IGFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBzY29wZSA9IG5ldyBTY29wZSh0aGlzLmNsb3N1cmUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNsYXJhdGlvbi5wYXJhbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2NvcGUuZGVmaW5lKHRoaXMuZGVjbGFyYXRpb24ucGFyYW1zW2ldLmxleGVtZSwgYXJnc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjb3BlLnNldCgndGhpcycsIHRoaXopO1xyXG4gICAgICAgIGxldCByZXN0b3JlU2NvcGU6IFNjb3BlID0gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXN0b3JlU2NvcGUgPSBpbnRlcnByZXRlci5zY29wZTtcclxuICAgICAgICAgICAgaW50ZXJwcmV0ZXIuZXhlY3V0ZUJsb2NrKHRoaXMuZGVjbGFyYXRpb24uYm9keSwgc2NvcGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiAkQW55ICYmIGUudHlwZSA9PT0gRGF0YVR5cGUuUmV0dXJuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdG9yZVNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwcmV0ZXIuc2NvcGUgPSByZXN0b3JlU2NvcGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS52YWx1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgZnJvbUphdmFTY3JpcHRNZXRob2QgfSBmcm9tICcuLi9ydW50aW1lJztcclxuaW1wb3J0IHsgSW50ZXJwcmV0ZXIgfSBmcm9tICcuLi9pbnRlcnByZXRlcic7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcbmltcG9ydCB7ICRGdW5jdGlvbiwgJENhbGxhYmxlIH0gZnJvbSAnLi9mdW5jdGlvbic7XHJcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi9udWxsJztcclxuaW1wb3J0IHsgJE51bWJlciB9IGZyb20gJy4vbnVtYmVyJztcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcblxyXG5leHBvcnQgY2xhc3MgJExpc3QgZXh0ZW5kcyAkQW55IHtcclxuICAgIHB1YmxpYyB2YWx1ZTogJEFueVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiAkQW55W10pIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICBpZiAoa2V5LmlzTnVtYmVyKCkpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlW2tleS52YWx1ZV0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVtrZXkudmFsdWVdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICgkTGlzdC5ydW50aW1lLmhhcyhrZXkudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkTGlzdC5ydW50aW1lLmdldChrZXkudmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIGlmIChrZXkuaXNOdW1iZXIoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlW2tleS52YWx1ZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgWyR7dGhpcy52YWx1ZS5qb2luKCcsJyl9XWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzaXplKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgJE51bWJlcihhcmdzWzBdLnZhbHVlLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlYWNoKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKTogJEFueSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIChhcmdzWzBdIGFzICRGdW5jdGlvbikuY2FsbCh0aGl6LCBbdGhpei52YWx1ZVtpXSwgbmV3ICROdW1iZXIoaSksIHRoaXpdLCBpbnRlcnByZXRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGl6O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc29ydCh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGl6LnZhbHVlIGFzICRBbnlbXTtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGlzdC5zb3J0KChhLCBiKSA9PlxyXG4gICAgICAgICAgICAgICAgKGFyZ3NbMF0gYXMgJEZ1bmN0aW9uKS5jYWxsKHRoaXosIFthLCBiXSwgaW50ZXJwcmV0ZXIpLnZhbHVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdC5zb3J0KChhLCBiKSA9PlxyXG4gICAgICAgICAgICAgICBhLnZhbHVlIC0gYi52YWx1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpejtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1hcCh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpei52YWx1ZS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGl6LnZhbHVlW2ldID0gKGFyZ3NbMF0gYXMgJEZ1bmN0aW9uKS5jYWxsKHRoaXosIFtuZXcgJEFueSh0aGl6LnZhbHVlW2ldKSwgbmV3ICROdW1iZXIoaSksIHRoaXpdLCBpbnRlcnByZXRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGl6O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcnVudGltZSA9ICBuZXcgTWFwKFtcclxuICAgICAgICBbJ2NvbmNhdCcsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdjb25jYXQnLCAtMSwgRGF0YVR5cGUuTGlzdCldLFxyXG4gICAgICAgIFsnZWFjaCcsIG5ldyAkQ2FsbGFibGUoJ2VhY2gnLCAxLCAkTGlzdC5lYWNoKV0sXHJcbiAgICAgICAgWydzb3J0JywgbmV3ICRDYWxsYWJsZSgnc29ydCcsIC0xLCAkTGlzdC5zb3J0KV0sXHJcbiAgICAgICAgWydpbmNsdWRlcycsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdpbmNsdWRlcycsIDEsIERhdGFUeXBlLkJvb2xlYW4pXSxcclxuICAgICAgICBbJ2luZGV4T2YnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnaW5kZXhPZicsIDEsIERhdGFUeXBlLk51bWJlcildLFxyXG4gICAgICAgIFsnam9pbicsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdqb2luJywgMSwgRGF0YVR5cGUuU3RyaW5nKV0sXHJcbiAgICAgICAgWydsYXN0SW5kZXhPZicsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdsYXN0SW5kZXhPZicsIDEsIERhdGFUeXBlLk51bWJlcildLFxyXG4gICAgICAgIFsnbWFwJywgbmV3ICRDYWxsYWJsZSgnbWFwJywgMSwgJExpc3QubWFwKV0sXHJcbiAgICAgICAgWydwb3AnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgncG9wJywgMCwgRGF0YVR5cGUuTGlzdCldLFxyXG4gICAgICAgIFsncHVzaCcsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdwdXNoJywgLTEsIERhdGFUeXBlLkxpc3QpXSxcclxuICAgICAgICBbJ3NoaWZ0JywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3NoaWZ0JywgMCwgRGF0YVR5cGUuTGlzdCldLFxyXG4gICAgICAgIFsnc2l6ZScsIG5ldyAkQ2FsbGFibGUoJ3NpemUnLCAwLCAgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkgPT4gbmV3ICROdW1iZXIodGhpei52YWx1ZS5sZW5ndGgpKV0sXHJcbiAgICAgICAgWydzbGljZScsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdzbGljZScsIC0xLCBEYXRhVHlwZS5MaXN0KV0sXHJcbiAgICAgICAgWydzcGxpY2UnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnc3BsaWNlJywgLTEsIERhdGFUeXBlLkxpc3QpXSxcclxuICAgICAgICBbJ3Vuc2hpZnQnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgndW5zaGlmdCcsIC0xLCBEYXRhVHlwZS5MaXN0KV1cclxuICAgIF0pO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuXHJcbmV4cG9ydCBjbGFzcyAkTnVsbCBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihudWxsKTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBEYXRhVHlwZS5OdWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gJ251bGwnO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuXHJcbmV4cG9ydCBjbGFzcyAkTnVtYmVyIGV4dGVuZHMgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5OdW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IGZyb21KYXZhU2NyaXB0TWV0aG9kIH0gZnJvbSAnLi4vcnVudGltZSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcbmltcG9ydCB7ICRDYWxsYWJsZSwgJEZ1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbic7XHJcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi9udWxsJztcclxuaW1wb3J0IHsgJE51bWJlciB9IGZyb20gJy4vbnVtYmVyJztcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyAkTGlzdCB9IGZyb20gJy4vbGlzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgJFN0cmluZyBleHRlbmRzICRBbnkge1xyXG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5TdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XHJcbiAgICAgICAgaWYgKGtleS5pc051bWJlcigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJFN0cmluZyh0aGlzLnZhbHVlW2tleS52YWx1ZV0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJFN0cmluZy5ydW50aW1lLmhhcyhrZXkudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkU3RyaW5nLnJ1bnRpbWUuZ2V0KGtleS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChrZXk6ICRBbnksIHZhbHVlOiBhbnkpOiAkQW55IHtcclxuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5wcm9wZXJ0aWVzLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnZhbHVlfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZXBsYWNlKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcclxuICAgICAgICBpZiAoYXJnc1sxXS5pc0Z1bmN0aW9uKCkpIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIG5ldyAkU3RyaW5nKHRoaXoudmFsdWUucmVwbGFjZShhcmdzWzBdLnZhbHVlLCBhcmdzWzFdLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGl6LnZhbHVlLnJlcGxhY2UoYXJnc1swXS52YWx1ZSwgKChtYXRjaDogc3RyaW5nKSA9PlxyXG4gICAgICAgICAgICAgICAgKChhcmdzWzFdIGFzICRGdW5jdGlvbikuY2FsbCh0aGl6LCBbbmV3ICRTdHJpbmcobWF0Y2gpXSwgaW50ZXJwZXRlcikpLnZhbHVlXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcodGhpei52YWx1ZS5yZXBsYWNlKGFyZ3NbMF0udmFsdWUsIGFyZ3NbMV0udmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNwbGl0KHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBzcGxpdHMgPSB0aGl6LnZhbHVlLnNwbGl0KGFyZ3NbMF0udmFsdWUpLm1hcCgoc3RyOnN0cmluZykgPT4gbmV3ICRTdHJpbmcoc3RyKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTGlzdChzcGxpdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgIHJ1bnRpbWUgPSAgbmV3IE1hcChbXHJcbiAgICAgICAgWyd0b1VwcGVyJywgIGZyb21KYXZhU2NyaXB0TWV0aG9kKCd0b1VwcGVyQ2FzZScsIDAsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgICAgIFsndG9Mb3dlcicsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCd0b0xvd2VyQ2FzZScsIDAsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgICAgIFsnc2l6ZScsIG5ldyAkQ2FsbGFibGUoJ3NpemUnLCAwLCAgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkgPT4gbmV3ICROdW1iZXIodGhpei52YWx1ZS5sZW5ndGgpKV0sXHJcbiAgICAgICAgWydzcGxpdCcsIG5ldyAkQ2FsbGFibGUoJ3NwbGl0JywgMSwgJFN0cmluZy5zcGxpdCldLFxyXG4gICAgICAgIFsnY29uY2F0JywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2NvbmNhdCcsIDEsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgICAgIFsnaW5jbHVkZXMnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnaW5jbHVkZXMnLCAxLCBEYXRhVHlwZS5Cb29sZWFuKV0sXHJcbiAgICAgICAgWydpbmRleE9mJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2luZGV4T2YnLCAxLCBEYXRhVHlwZS5OdW1iZXIpXSxcclxuICAgICAgICBbJ2xhc3RJbmRleE9mJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2xhc3RJbmRleE9mJywgMSwgRGF0YVR5cGUuTnVtYmVyKV0sXHJcbiAgICAgICAgWydyZXBlYXQnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgncmVwZWF0JywgMSwgRGF0YVR5cGUuU3RyaW5nKV0sXHJcbiAgICAgICAgWydyZXBsYWNlJywgbmV3ICRDYWxsYWJsZSgncmVwbGFjZScsIC0xLCAkU3RyaW5nLnJlcGxhY2UpXSxcclxuICAgICAgICBbJ3NlYXJjaCcsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdzZWFyY2gnLCAxLCBEYXRhVHlwZS5OdW1iZXIpXSxcclxuICAgICAgICBbJ3NsaWNlJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3NsaWNlJywgLTEsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgICAgIFsnc3Vic3RyaW5nJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3N1YnN0cmluZycsIC0xLCBEYXRhVHlwZS5TdHJpbmcpXSxcclxuICAgICAgICBbJ3RyaW0nLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgndHJpbScsIDAsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgXSk7XHJcblxyXG59XHJcbiIsImV4cG9ydCBlbnVtIERhdGFUeXBlIHtcclxuICAgIE51bGwsICAgIC8vIDBcclxuICAgIEFueSwgICAgIC8vIDFcclxuICAgIEJvb2xlYW4sIC8vIDJcclxuICAgIE51bWJlciwgIC8vIDNcclxuICAgIFN0cmluZywgIC8vIDRcclxuICAgIExpc3QsICAgIC8vIDVcclxuICAgIERpY3Rpb25hcnksIC8vIDZcclxuICAgIE9iamVjdCwgICAvLyA3XHJcbiAgICBDbGFzcywgICAgLy8gOFxyXG4gICAgRnVuY3Rpb24sIC8vIDlcclxuICAgIExhbWJkYSwgICAvLyAxMFxyXG4gICAgUmFuZ2UsICAgIC8vIDExXHJcbiAgICBSZWdFeHAsICAgLy8gMTJcclxuICAgIEVycm9yLCAgICAvLyAxM1xyXG4gICAgSXRlcmF0b3IsIC8vIDE0XHJcbiAgICAvLyBpbnRlcm5hbCB0eXBlc1xyXG4gICAgVm9pZCA9IDEwMCwgLy8gIDEwMFxyXG4gICAgUmV0dXJuLCAgIC8vIDEwMVxyXG4gICAgQnJlYWssICAgIC8vIDEwMlxyXG4gICAgQ29udGludWUgIC8vIDEwM1xyXG59XHJcbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xyXG5cclxuZXhwb3J0IGNsYXNzICRWb2lkIGV4dGVuZHMgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiB2b2lkKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLlZvaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gJ3ZvaWQnO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RpZ2l0KGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoYXIgPj0gJzAnICYmIGNoYXIgPD0gJzknO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBbHBoYShjaGFyOiBzdHJpbmcgKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fCAoY2hhciA+PSAnQScgJiYgY2hhciA8PSAnWicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWMoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNBbHBoYShjaGFyKSB8fCBpc0RpZ2l0KGNoYXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNLZXl3b3JkKHdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIFRva2VuVHlwZVt3b3JkXSA+PSBUb2tlblR5cGUuQW5kO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZSh3b3JkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
import { fromJavaScriptMethod } from '../runtime';
import { $Any } from './any';
import { $Callable, $Function } from './function';
import { $Null } from './null';
import { $Number } from './number';
import { DataType } from './type.enum';
import { Interpreter } from '../interpreter';
import { $List } from './list';

export class $String extends $Any {
    public value: string;

    constructor(value: string) {
        super(value, DataType.String);
    }

    public get(key: $Any): $Any {
        if (key.isNumber()) {
            return new $String(this.value[key.value]);
        } else if ($String.runtime.has(key.value)) {
            return $String.runtime.get(key.value);
        }
        return new $Null();

    }

    public set(key: $Any, value: any): $Any {
        if (typeof key !== 'number') {
            // this.properties.set(key, value);
        }
        return new $Null();
    }

    public toString(): string {
        return `${this.value}`;
    }

    public static replace(thiz: $Any, args: $Any[], interpeter: Interpreter): $Any {
        if (args[1].isFunction()) {
            // return new $String(thiz.value.replace(args[0].value, args[1].value));
            return thiz.value.replace(args[0].value, ((match: string) =>
                ((args[1] as $Function).call(thiz, [new $String(match)], interpeter)).value
            ));
        }
        return new $String(thiz.value.replace(args[0].value, args[1].value));
    }

    public static split(thiz: $Any, args: $Any[], interpeter: Interpreter): $Any {
        const splits = thiz.value.split(args[0].value).map((str:string) => new $String(str));
        return new $List(splits);
    }

    public static  runtime =  new Map([
        ['toUpper',  fromJavaScriptMethod('toUpperCase', 0, DataType.String)],
        ['toLower', fromJavaScriptMethod('toLowerCase', 0, DataType.String)],
        ['size', new $Callable('size', 0,  (thiz: $Any, args: $Any[]): $Any => new $Number(thiz.value.length))],
        ['split', new $Callable('split', 1, $String.split)],
        ['concat', fromJavaScriptMethod('concat', 1, DataType.String)],
        ['includes', fromJavaScriptMethod('includes', 1, DataType.Boolean)],
        ['indexOf', fromJavaScriptMethod('indexOf', 1, DataType.Number)],
        ['lastIndexOf', fromJavaScriptMethod('lastIndexOf', 1, DataType.Number)],
        ['repeat', fromJavaScriptMethod('repeat', 1, DataType.String)],
        ['replace', new $Callable('replace', -1, $String.replace)],
        ['search', fromJavaScriptMethod('search', 1, DataType.Number)],
        ['slice', fromJavaScriptMethod('slice', -1, DataType.String)],
        ['substring', fromJavaScriptMethod('substring', -1, DataType.String)],
        ['trim', fromJavaScriptMethod('trim', 0, DataType.String)],
    ]);

}

import { DataType } from './type.enum';
import { $Any } from './any';

export class $Void extends $Any {

    public value: void;

    constructor(value: void) {
        super(value, DataType.Void);
    }

    public toString() {
        return 'void';
    }

}

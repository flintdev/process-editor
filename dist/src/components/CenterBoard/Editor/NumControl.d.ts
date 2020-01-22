/// <reference types="react" />
import Rete from "src/utils/rete-index";
export default class NumControl extends Rete.Control {
    emitter: any;
    component: ({ value, onChange }: any) => JSX.Element;
    props: {
        readonly: boolean;
        value: any;
        onChange: (v: any) => void;
    };
    constructor(emitter: any, key: string, node: {
        data: {
            [x: string]: any;
        };
    }, readonly?: boolean);
    setValue(val: any): void;
    update(): void;
}

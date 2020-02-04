import * as React from "react";
import Rete from "src/utils/rete-index";

export default class StrControl extends Rete.Control {
    emitter: any;
    component: ({ value, onChange }: any) => JSX.Element;
    props: { readonly: boolean; value: any; onChange: (v: any) => void; };
    constructor(emitter: any, key: string, node: { data: { [x: string]: any; }; }, readonly = false) {
        super(key);
        this.emitter = emitter;
        this.key = key;
        this.component = ({ value, onChange }) => (
            <textarea
                value={value}
                ref={ref => {
                    ref && ref.addEventListener("pointerdown", e => e.stopPropagation());
                }}
                style={{backgroundColor: '#fff8c6', width: `100%`, minHeight: `400px`}}
                onChange={e => onChange(e.target.value)}
            />
        );

        const initial = node.data[key] || `function ececute(flowData, handler) {\n  \n}`;

        node.data[key] = initial;
        this.props = {
            readonly,
            value: initial,
            onChange: v => {
                this.setValue(v);
                this.emitter.trigger("process");
            }
        };
    }

    setValue(val: any) {
        this.props.value = val;
        this.putData(this.key, val);
        this.update();
    }
    update() {
        throw new Error("Method not implemented.");
    }
}
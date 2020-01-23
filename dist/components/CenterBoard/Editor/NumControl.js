"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const rete_index_1 = require("src/utils/rete-index");
class NumControl extends rete_index_1.default.Control {
    constructor(emitter, key, node, readonly = false) {
        super(key);
        this.emitter = emitter;
        this.key = key;
        this.component = ({ value, onChange }) => (React.createElement("input", { type: "number", value: value, ref: ref => {
                ref && ref.addEventListener("pointerdown", e => e.stopPropagation());
            }, style: { backgroundColor: 'red' }, onChange: e => onChange(+e.target.value) }));
        const initial = node.data[key] || 0;
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
    setValue(val) {
        this.props.value = val;
        this.putData(this.key, val);
        this.update();
    }
    update() {
        throw new Error("Method not implemented.");
    }
}
exports.default = NumControl;
//# sourceMappingURL=NumControl.js.map
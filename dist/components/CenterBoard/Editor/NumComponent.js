"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rete_index_1 = require("src/utils/rete-index");
const NumControl_1 = require("./NumControl");
class NumComponent extends rete_index_1.default.Component {
    constructor(numSocket) {
        super("Number");
        this.numSocket = numSocket;
    }
    builder(node) {
        var out1 = new rete_index_1.default.Output("num", "Number", this.numSocket);
        var ctrl = new NumControl_1.default(this.editor, "num", node);
        return node.addControl(ctrl).addOutput(out1);
    }
    worker(node, inputs, outputs) {
        outputs["num"] = node.data.num;
    }
}
exports.default = NumComponent;
//# sourceMappingURL=NumComponent.js.map
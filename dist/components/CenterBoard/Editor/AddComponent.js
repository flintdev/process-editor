"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rete_index_1 = require("src/utils/rete-index");
const NumControl_1 = require("./NumControl");
const MyNode_1 = require("./MyNode");
// var numSocket = new Rete.Socket("Number value");
class AddComponent extends rete_index_1.default.Component {
    constructor(numSocket) {
        super("Add");
        this.numSocket = numSocket;
        this.data.component = MyNode_1.default; // optional
    }
    builder(node) {
        console.log(">>> builder");
        var inp1 = new rete_index_1.default.Input("num1", "Number", this.numSocket);
        var inp2 = new rete_index_1.default.Input("num2", "Number2", this.numSocket);
        var out = new rete_index_1.default.Output("num", "Number", this.numSocket);
        inp1.addControl(new NumControl_1.default(this.editor, "num1", node));
        inp2.addControl(new NumControl_1.default(this.editor, "num2", node));
        return node
            .addInput(inp1)
            .addInput(inp2)
            .addControl(new NumControl_1.default(this.editor, "preview", node, true))
            .addOutput(out);
    }
    worker(node, inputs, outputs) {
        console.log(">>> worker");
        var n1 = inputs["num1"].length ? inputs["num1"][0] : node.data.num1;
        var n2 = inputs["num2"].length ? inputs["num2"][0] : node.data.num2;
        var sum = n1 + n2;
        this.editor.nodes
            .find((n) => n.id == node.id)
            .controls.get("preview")
            .setValue(sum);
        outputs["num"] = sum;
    }
}
exports.default = AddComponent;
//# sourceMappingURL=AddComponent.js.map
import * as React from "react";
import Rete from "src/utils/rete-index";
import NumControl from "./NumControl";
import CardComponentWidget from "./CardComponentWidget";

export default class CardComponent extends Rete.Component {
    numSocket: any;
    constructor(numSocket: any) {
        super("Card");
        this.numSocket = numSocket;
        this.data.component = CardComponentWidget; // optional
    }

    builder(node: any, label="label", type="type", group="group", category="category") {
        console.log(">>> builder")
        var inp1 = new Rete.Input("input1", "Number", this.numSocket);
        var out1 = new Rete.Output("output1", "Number", this.numSocket);
        var out2 = new Rete.Output("output2", "Number", this.numSocket);

        // inp1.addControl(new NumControl(this.editor, "input1", node));

        node.data.label = node.data.label || label;
        node.data.type = node.data.type || type;
        node.data.group = node.data.group || group;
        node.data.category = node.data.category || category;
        return node
            .addInput(inp1)
            // .addControl(new NumControl(this.editor, "output1", node, true))
            // .addControl(new NumControl(this.editor, "output2", node, true))
            .addOutput(out1)
            .addOutput(out2);
    }

    worker(node: any, inputs: { [x: string]: any[]; }, outputs: { [x: string]: any; }) {
        console.log(">>> worker", node)
        // var n1 = inputs["input1"].length ? inputs["input1"][0] : node.data.num1;
        // var sum = n1;

        // this.editor.nodes
        //     .find((n: { id: any; }) => n.id == node.id)
        //     .controls.get("preview")
        //     .setValue(sum);
        // outputs["output1"] = sum;
    }
}
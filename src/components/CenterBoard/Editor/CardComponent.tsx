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

    builder(node: any) {
        console.log(">>> builder")
        var inp1 = new Rete.Input("input1", "Number", this.numSocket);
        var out1 = new Rete.Output("output1", "Number", this.numSocket);
        var out2 = new Rete.Output("output2", "Number", this.numSocket);

        // inp1.addControl(new NumControl(this.editor, "input1", node));

        return node
            .addInput(inp1)
            // .addControl(new NumControl(this.editor, "preview", node, true))
            .addOutput(out1)
            .addOutput(out2);
    }

    worker(node: any, inputs: { [x: string]: any[]; }, outputs: { [x: string]: any; }) {
        console.log(">>> worker")
        // var n1 = inputs["input1"].length ? inputs["input1"][0] : node.data.num1;
        // var sum = n1;

        // this.editor.nodes
        //     .find((n: { id: any; }) => n.id == node.id)
        //     .controls.get("preview")
        //     .setValue(sum);
        // outputs["output1"] = sum;
    }
}
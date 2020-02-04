import * as React from "react";
import Rete from "src/utils/rete-index";
import NumControl from "./NumControl";
// import MyNode from "./MyNode";

// var numSocket = new Rete.Socket("Number value");

export default class AddComponent extends Rete.Component {
    numSocket: any;
    constructor(numSocket: any) {
        super("Add");
        this.numSocket = numSocket;
        // this.data.component = MyNode; // optional
    }

    builder(node: any) {
        console.log(">>> builder")
        var inp1 = new Rete.Input("num1", "Number", this.numSocket);
        var inp2 = new Rete.Input("num2", "Number2", this.numSocket);
        var out = new Rete.Output("num", "Number", this.numSocket);

        inp1.addControl(new NumControl(this.editor, "num1", node));
        inp2.addControl(new NumControl(this.editor, "num2", node));

        return node
            .addInput(inp1)
            .addInput(inp2)
            .addControl(new NumControl(this.editor, "preview", node, true))
            .addOutput(out);
    }

    worker(node: any, inputs: { [x: string]: any[]; }, outputs: { [x: string]: any; }) {
        console.log(">>> worker")
        var n1 = inputs["num1"].length ? inputs["num1"][0] : node.data.num1;
        var n2 = inputs["num2"].length ? inputs["num2"][0] : node.data.num2;
        var sum = n1 + n2;

        this.editor.nodes
            .find((n: { id: any; }) => n.id == node.id)
            .controls.get("preview")
            .setValue(sum);
        outputs["num"] = sum;
    }
}
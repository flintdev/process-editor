import * as React from "react";
import Rete from "src/utils/rete-index";
import NumControl from "./NumControl";

export default class NumComponent extends Rete.Component {
    numSocket: any;
    constructor(numSocket: any) {
        super("Number");
        this.numSocket = numSocket;
    }

    builder(node: any) {
        var out1 = new Rete.Output("num", "Number", this.numSocket);
        var ctrl = new NumControl(this.editor, "num", node);

        return node.addControl(ctrl).addOutput(out1);
    }

    worker(node: { data: { num: any; }; }, inputs: any, outputs: { [x: string]: any; }) {
        outputs["num"] = node.data.num;
    }
}
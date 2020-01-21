import * as React from "react";
import Rete from "src/utils/rete-index";
import {ReactRenderPlugin, ConnectionPlugin, ContextMenuPlugin, AreaPlugin} from "src/utils/rete-index";
import { MyNode } from "./MyNode";

var numSocket = new Rete.Socket("Number value");

class NumControl extends Rete.Control {
    emitter: any;
    component: ({ value, onChange }: any) => JSX.Element;
    props: { readonly: boolean; value: any; onChange: (v: any) => void; };
    constructor(emitter: any, key: string, node: { data: { [x: string]: any; }; }, readonly = false) {
        super(key);
        this.emitter = emitter;
        this.key = key;
        this.component = ({ value, onChange }) => (
            <input
                type="number"
                value={value}
                ref={ref => {
                    ref && ref.addEventListener("pointerdown", e => e.stopPropagation());
                }}
                onChange={e => onChange(+e.target.value)}
            />
        );

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

    setValue(val: any) {
        this.props.value = val;
        this.putData(this.key, val);
        this.update();
    }
    update() {
        throw new Error("Method not implemented.");
    }
}

class NumComponent extends Rete.Component {
    constructor() {
        super("Number");
    }

    builder(node: any) {
        var out1 = new Rete.Output("num", "Number", numSocket);
        var ctrl = new NumControl(this.editor, "num", node);

        return node.addControl(ctrl).addOutput(out1);
    }

    worker(node: { data: { num: any; }; }, inputs: any, outputs: { [x: string]: any; }) {
        outputs["num"] = node.data.num;
    }
}

class AddComponent extends Rete.Component {
    constructor() {
        super("Add");
        this.data.component = MyNode; // optional
    }

    builder(node: any) {
        var inp1 = new Rete.Input("num1", "Number", numSocket);
        var inp2 = new Rete.Input("num2", "Number2", numSocket);
        var out = new Rete.Output("num", "Number", numSocket);

        inp1.addControl(new NumControl(this.editor, "num1", node));
        inp2.addControl(new NumControl(this.editor, "num2", node));

        return node
            .addInput(inp1)
            .addInput(inp2)
            .addControl(new NumControl(this.editor, "preview", node, true))
            .addOutput(out);
    }

    worker(node: any, inputs: { [x: string]: any[]; }, outputs: { [x: string]: any; }) {
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

export async function createEditor(container: HTMLDivElement, editorConfig: any, onChange: (editorConfig: any) => void) {
    var components = [new NumComponent(), new AddComponent()];

    var editor = new Rete.NodeEditor("editor@0.0.1", container);
    editor.use(ConnectionPlugin);
    editor.use(ReactRenderPlugin);
    editor.use(ContextMenuPlugin);


    var engine = new Rete.Engine("editor@0.0.1");

    components.map(c => {
        editor.register(c);
        engine.register(c);
    });

    var needPositionFlag = true;

    editor.on(
        "process",
        // "process nodecreated noderemoved connectioncreated connectionremoved",
        async (e) => {
            onChange(editor.toJSON());
            await engine.abort();
            await engine.process(editor.toJSON());
            if (needPositionFlag) {
                focusEditor();
                needPositionFlag = false;
            }
        }
    );

    editor.view.resize();
    editor.trigger("process");
    AreaPlugin.zoomAt(editor, editor.nodes);

    //Load up the initial config
    if (editorConfig) {
        await engine.abort();
        editor.fromJSON(editorConfig);
    }

    const focusEditor = () => {
        AreaPlugin.zoomAt(editor, editor.nodes);
    };

    return {focusEditor}
}
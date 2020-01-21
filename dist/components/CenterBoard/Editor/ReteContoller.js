"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const rete_index_1 = require("src/utils/rete-index");
const rete_index_2 = require("src/utils/rete-index");
const MyNode_1 = require("./MyNode");
var numSocket = new rete_index_1.default.Socket("Number value");
class NumControl extends rete_index_1.default.Control {
    constructor(emitter, key, node, readonly = false) {
        super(key);
        this.emitter = emitter;
        this.key = key;
        this.component = ({ value, onChange }) => (React.createElement("input", { type: "number", value: value, ref: ref => {
                ref && ref.addEventListener("pointerdown", e => e.stopPropagation());
            }, onChange: e => onChange(+e.target.value) }));
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
class NumComponent extends rete_index_1.default.Component {
    constructor() {
        super("Number");
    }
    builder(node) {
        var out1 = new rete_index_1.default.Output("num", "Number", numSocket);
        var ctrl = new NumControl(this.editor, "num", node);
        return node.addControl(ctrl).addOutput(out1);
    }
    worker(node, inputs, outputs) {
        outputs["num"] = node.data.num;
    }
}
class AddComponent extends rete_index_1.default.Component {
    constructor() {
        super("Add");
        this.data.component = MyNode_1.MyNode; // optional
    }
    builder(node) {
        var inp1 = new rete_index_1.default.Input("num1", "Number", numSocket);
        var inp2 = new rete_index_1.default.Input("num2", "Number2", numSocket);
        var out = new rete_index_1.default.Output("num", "Number", numSocket);
        inp1.addControl(new NumControl(this.editor, "num1", node));
        inp2.addControl(new NumControl(this.editor, "num2", node));
        return node
            .addInput(inp1)
            .addInput(inp2)
            .addControl(new NumControl(this.editor, "preview", node, true))
            .addOutput(out);
    }
    worker(node, inputs, outputs) {
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
async function createEditor(container, editorConfig, onChange) {
    var components = [new NumComponent(), new AddComponent()];
    var editor = new rete_index_1.default.NodeEditor("editor@0.0.1", container);
    editor.use(rete_index_2.ConnectionPlugin);
    editor.use(rete_index_2.ReactRenderPlugin);
    editor.use(rete_index_2.ContextMenuPlugin);
    var engine = new rete_index_1.default.Engine("editor@0.0.1");
    components.map(c => {
        editor.register(c);
        engine.register(c);
    });
    var needPositionFlag = true;
    editor.on("process", 
    // "process nodecreated noderemoved connectioncreated connectionremoved",
    async (e) => {
        onChange(editor.toJSON());
        await engine.abort();
        await engine.process(editor.toJSON());
        if (needPositionFlag) {
            focusEditor();
            needPositionFlag = false;
        }
    });
    editor.view.resize();
    editor.trigger("process");
    rete_index_2.AreaPlugin.zoomAt(editor, editor.nodes);
    //Load up the initial config
    if (editorConfig) {
        await engine.abort();
        editor.fromJSON(editorConfig);
    }
    const focusEditor = () => {
        rete_index_2.AreaPlugin.zoomAt(editor, editor.nodes);
    };
    return { focusEditor };
}
exports.createEditor = createEditor;
//# sourceMappingURL=ReteContoller.js.map
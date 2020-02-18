"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rete_index_1 = require("../../../utils/rete-index");
const rete_index_2 = require("../../../utils/rete-index");
const CardComponent_1 = require("./CardComponent");
async function createEditor(container, editorConfig, onChange, stepOptions, stepDbClick) {
    var numSocket = new rete_index_1.default.Socket("Number value");
    var components = stepOptions.map(o => new CardComponent_1.default(numSocket, o.icon, o.type, o.category, o.group, stepDbClick));
    var editor = new rete_index_1.default.NodeEditor("editor@0.0.1", container);
    editor.use(rete_index_2.ConnectionPlugin);
    editor.use(rete_index_2.ReactRenderPlugin);
    editor.use(rete_index_2.ContextMenuPlugin);
    editor.use(rete_index_2.HistoryPlugin, { keyboard: true });
    var engine = new rete_index_1.default.Engine("editor@0.0.1");
    components.map(c => {
        editor.register(c);
        engine.register(c);
    });
    var needPositionFlag = true;
    editor.on(["process", "nodecreated", "noderemoved", "connectioncreated", "connectionremoved"], async (e) => {
        const json = editor.toJSON();
        onChange(json);
        await engine.abort();
        if (needPositionFlag) {
            focusEditor();
            needPositionFlag = false;
        }
    });
    //Load up the initial config
    if (editorConfig) {
        await engine.abort();
        editor.fromJSON(editorConfig);
    }
    const focusEditor = () => {
        rete_index_2.AreaPlugin.zoomAt(editor, editor.nodes);
    };
    const reRender = async (json) => {
        editor.fromJSON(json);
    };
    const callAction = async (action) => {
        // @ts-ignore
        editor.trigger(action);
    };
    const dropNode = async (labelText) => {
        const { x, y } = editor.view.area.mouse;
        const targetComponent = components.filter((o) => o.name === labelText)[0];
        if (targetComponent) {
            const n1 = await components.filter((o) => o.name === labelText)[0].createNode();
            n1.position = [x, y];
            editor.addNode(n1);
        }
    };
    return { focusEditor, reRender, dropNode, callAction };
}
exports.createEditor = createEditor;
//# sourceMappingURL=ReteContoller.js.map
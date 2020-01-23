"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rete_index_1 = require("src/utils/rete-index");
const rete_index_2 = require("src/utils/rete-index");
const NumComponent_1 = require("./NumComponent");
const AddComponent_1 = require("./AddComponent");
const CardComponent_1 = require("./CardComponent");
async function createEditor(container, editorConfig, onChange) {
    var numSocket = new rete_index_1.default.Socket("Number value");
    var components = [
        new NumComponent_1.default(numSocket),
        new AddComponent_1.default(numSocket),
        new CardComponent_1.default(numSocket)
    ];
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
    editor.on(["process", "nodecreated", "noderemoved", "connectioncreated", "connectionremoved"], async (e) => {
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
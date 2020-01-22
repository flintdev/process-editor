import * as React from "react";
import Rete from "src/utils/rete-index";
import {ReactRenderPlugin, ConnectionPlugin, ContextMenuPlugin, AreaPlugin} from "src/utils/rete-index";
import NumComponent from "./NumComponent";
import AddComponent from "./AddComponent";
import CardComponent from "./CardComponent";

export async function createEditor(container: HTMLDivElement, editorConfig: any, onChange: (editorConfig: any) => void) {
    var numSocket = new Rete.Socket("Number value");
    var components = [
        new NumComponent(numSocket),
        new AddComponent(numSocket),
        new CardComponent(numSocket)
    ];

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
        ["process", "nodecreated", "noderemoved", "connectioncreated", "connectionremoved"],
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
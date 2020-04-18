import Rete from "../../../utils/rete-index";
import {ReactRenderPlugin, ConnectionPlugin, AreaPlugin, HistoryPlugin} from "../../../utils/rete-index";
import CardComponent from "./CardComponent";
// import MyContextMenu from "../../../../../_rete-plugin/my-context-menu-plugin";
import MyContextMenu from "./Menu";

export async function createEditor(
    container: HTMLDivElement,
    editorConfig: any,
    onChange: (editorConfig: any) => void, stepOptions: any[],
    stepDbClick: any,
    stepSingleClick: any
) {
    var numSocket = new Rete.Socket("Number value");
    var components = stepOptions.map(o => new CardComponent(numSocket, o.icon, o.type, o.category, o.group, stepDbClick));

    var editor = new Rete.NodeEditor("editor@0.0.1", container);
    editor.use(ConnectionPlugin);
    editor.use(ReactRenderPlugin);
    editor.use(MyContextMenu)
    editor.use(HistoryPlugin, { keyboard: true });


    var engine = new Rete.Engine("editor@0.0.1");

    components.map(c => {
        editor.register(c);
        engine.register(c);
    });

    var needPositionFlag = true;

    editor.on(
        ["process", "nodecreated", "noderemoved", "connectioncreated", "connectionremoved"],
        async (e) => {
            const json = editor.toJSON();
            onChange(json);
            await engine.abort();
            if (needPositionFlag) {
                focusEditor();
                needPositionFlag = false;
            }
        }
    );

    editor.on('zoom', ({ source }) => {
        return source !== 'dblclick';
    });

    editor.on('nodeselect', (node) => {
        stepSingleClick(node)
    })
    //Load up the initial config
    if (editorConfig) {
        await engine.abort();
        editor.fromJSON(editorConfig);
    }

    const focusEditor = () => {
        AreaPlugin.zoomAt(editor, editor.nodes);
    };

    const reRender = async (json: any) => {
        editor.fromJSON(json);
    };

    const callAction = async (action: string) => {
        // @ts-ignore
        editor.trigger(action);
    };

    const dropNode = async (labelText: string, e: any) => {
        editor.view.area.pointermove(e as any as PointerEvent);
        const {x, y} = editor.view.area.mouse;
        const targetComponent = components.filter((o:any) => o.name === labelText)[0];
        if (targetComponent) {
            const n1 = await components.filter((o:any) => o.name === labelText)[0].createNode();
            n1.position = [x, y];
            editor.addNode(n1);
        }

    };

    const deleteNode = async (node: any)  =>{
        if (node) {
            await editor.removeNode(node);
            stepSingleClick(null);
        }
    }


    return {focusEditor, reRender, dropNode, callAction, deleteNode}
}
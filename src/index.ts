import ProcessEditor from "./ProcessEditor";

interface EditorNodeOutput {
    name: string,
    condition?: {
        key?: string,
        operator?: string,
        value?: string,
    }
}

interface EditorNodeConnection {
    node: number | string
    input: string
}

interface EditorNode {
    id: number | string,
    name: string,
    position: number[], // [x, y]
    outputs: {
        [key: string]: EditorNodeConnection
    },
    inputs: {
        [key: string]: EditorNodeConnection
    },
    data: {
        label: string
        type: string
        group: string
        category: string
        code: string,
        outputs: Array<EditorNodeOutput>
    }
}

interface EditorData {
    id: string,
    nodes: {
        [key: string]: EditorNode
    }
}

export {ProcessEditor, EditorData, EditorNode, EditorNodeConnection, EditorNodeOutput};
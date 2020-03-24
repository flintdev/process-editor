import { EditorData, EditorNode } from "../index";

interface StepData {
    code: String
    isAsync: Boolean
}

interface StepProps {
    label: String
    type: String
    group: String
    category: String
}

interface StepCondition {
    key: String
    value: String
    operator: String
    stepLabels: String[]
}

interface StepMap {
    [key: string]: Step
}

class Step {
    props: StepProps;
    nextSteps: StepCondition[];
    data: StepData;
    constructor(props: StepProps, data: StepData, nextSteps: StepCondition[]) {
        this.props = props;
        this.data = data;
        this.nextSteps = nextSteps;
    }
}

export default class StepManager {
    constructor() {

    }

    cleanStepData(node: any) {
        const {data} = node;
        const {label, type, group, category, code, outputs, inputs} = data;
        const cleanInputs = type == "Hub" ? {inputs} : {};
        return {...node, data: {label, type, group, category,code, outputs, ...cleanInputs}} as EditorNode;
    }

    cleanEditorData(editorData: EditorData) {
        const cleanData = {} as EditorData;
        cleanData.id = editorData.id;
        cleanData.nodes = Object.values(editorData.nodes).reduce((ret: any, node: EditorNode) => {
            const {id, data} = node;
            const {label, type, group, category,code, outputs, inputs} = data;
            const cleanInputs = type == "Hub" ? {inputs} : {};
            ret[id] = {...node, data: {label, type, group, category,code, outputs, ...cleanInputs}} as EditorNode;
            return ret;
        }, {});
        return cleanData;
    }

    buildFromEditorData(editorData: any) {
        const ret = {} as StepMap;
        for (let id in editorData) {
            const node = editorData[id];
            const data = node.data;
            const step = new Step(
                {label:data.label, type:data.type, group:data.group, category:data.category} as StepProps,
                {code: data.code, isAsync: false} as StepData,
                Object.keys(node.outputs).reduce((ret: StepCondition[], outputKey: string) => {
                    const condition = data.outputs.find((o:any) => o.name === outputKey).condition;
                    ret.push({
                        key: condition.key,
                        value: condition.value,
                        operator: condition.operator,
                        stepLabels: node.outputs[outputKey].connections.map((connection: any) => 
                            editorData[connection.node].data.label
                        )
                    })
                    return ret;
                }, []),
            )
            ret[node.data.label] = step;
        }
        return ret;
        
    }

}
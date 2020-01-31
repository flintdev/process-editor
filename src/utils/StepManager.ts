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

    buildFromEditorData(editorData: any) {
        const ret = {} as StepMap;
        for (let id in editorData) {
            const node = editorData[id];
            const step = new Step(
                node.data as StepProps,
                {code: "somecode", isAsync: false} as StepData,
                Object.keys(node.outputs).reduce((ret: StepCondition[], outputKey: string) => {
                    ret.push({
                        key: outputKey,
                        value: "somevalue",
                        operator: "someoperator",
                        stepLabels: node.outputs[outputKey].connections.map((connection: any) => 
                            editorData[connection.node].data.label
                        )
                    })
                    return ret;
                }, []),
            )
            ret[node.data.label] = step;
            console.log(step)
        }
        return ret;
        
    }

}
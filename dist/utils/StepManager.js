"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Step {
    constructor(props, data, nextSteps) {
        this.props = props;
        this.data = data;
        this.nextSteps = nextSteps;
    }
}
class StepManager {
    constructor() {
    }
    cleanStepData(node) {
        const { data } = node;
        const { label, type, group, category, code, outputs } = data;
        return Object.assign(Object.assign({}, node), { data: { label, type, group, category, code, outputs } });
    }
    cleanEditorData(editorData) {
        const cleanData = {};
        cleanData.id = editorData.id;
        cleanData.nodes = Object.values(editorData.nodes).reduce((ret, node) => {
            const { id, data } = node;
            const { label, type, group, category, code, outputs } = data;
            ret[id] = Object.assign(Object.assign({}, node), { data: { label, type, group, category, code, outputs } });
            return ret;
        }, {});
        return cleanData;
    }
    buildFromEditorData(editorData) {
        const ret = {};
        for (let id in editorData) {
            const node = editorData[id];
            const data = node.data;
            const step = new Step({ label: data.label, type: data.type, group: data.group, category: data.category }, { code: data.code, isAsync: false }, Object.keys(node.outputs).reduce((ret, outputKey) => {
                const condition = data.outputs.find((o) => o.name === outputKey).condition;
                ret.push({
                    key: condition.key,
                    value: condition.value,
                    operator: condition.operator,
                    stepLabels: node.outputs[outputKey].connections.map((connection) => editorData[connection.node].data.label)
                });
                return ret;
            }, []));
            ret[node.data.label] = step;
        }
        return ret;
    }
}
exports.default = StepManager;
//# sourceMappingURL=StepManager.js.map
import { EditorData, EditorNode } from "../index";
interface StepData {
    code: String;
    isAsync: Boolean;
}
interface StepProps {
    label: String;
    type: String;
    group: String;
    category: String;
}
interface StepCondition {
    key: String;
    value: String;
    operator: String;
    stepLabels: String[];
}
interface StepMap {
    [key: string]: Step;
}
declare class Step {
    props: StepProps;
    nextSteps: StepCondition[];
    data: StepData;
    constructor(props: StepProps, data: StepData, nextSteps: StepCondition[]);
}
export default class StepManager {
    constructor();
    cleanStepData(node: any): EditorNode;
    cleanEditorData(editorData: EditorData): EditorData;
    buildFromEditorData(editorData: any): StepMap;
}
export {};

/// <reference types="react" />
import { Node } from "src/utils/rete-index";
interface Props {
    node: any;
    bindSocket: any;
    bindControl: any;
}
interface State {
    outputs: any[];
    controls: any[];
    inputs: any[];
    selected: any[];
}
export default class MyNode extends Node<Props, State> {
    props: Props;
    state: State;
    constructor(props: Props);
    render(): JSX.Element;
}
export {};

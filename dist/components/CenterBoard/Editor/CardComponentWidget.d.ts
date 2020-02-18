/// <reference types="react" />
import { Node } from "../../../utils/rete-index";
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
export default class CardComponentWidget extends Node<Props, State> {
    props: Props;
    state: State;
    constructor(props: Props);
    render(): JSX.Element;
}
export {};

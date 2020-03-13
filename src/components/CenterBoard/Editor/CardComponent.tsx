import Rete from "../../../utils/rete-index";
import CardComponentWidget from "./CardComponentWidget";
import EndComponentWidget from "./EndComponentWidget";

export default class CardComponent extends Rete.Component {
    numSocket: any;
    stepDbClick: any;
    constructor(numSocket: any, icon: any, type: string, category: string, group: string, stepDbClick: any) {
        super(type);
        this.numSocket = numSocket;
        this.data.stepDbClick = stepDbClick;
        this.data.component = type === 'End' ? EndComponentWidget : CardComponentWidget;
        this.data.icon = icon;
        this.data.type = type;
        this.data.label = type;
        this.data.group = group;
        this.data.category = category;
    }

    helperIO(inputs: any[], outputs: any[], node: any) {
        outputs.forEach((o: any) => {
            node.addOutput(new Rete.Output(o.name, "Number", this.numSocket, o.multiConns))
        })
        inputs.forEach((o: any) => {
            node.addInput(new Rete.Input(o.name, "Number", this.numSocket, o.multiConns))
        })
        return node
    }

    builder(node: any) {
        switch(this.data.type) {
            case "End":
                node.data.inputs = [{"multiConns": true, "name": "input1", "condition": { "key": "null", "operator": "always", "value": "null"}}]
                node.data.outputs = []
                break;
            case "Hub":
                node.data.inputs = node.data.inputs || [{"name": "input1", "condition": { "key": "null", "operator": "always", "value": "null"}}]
                node.data.outputs = [{"name": "output1", "condition": { "key": "null", "operator": "always", "value": "null"}}]
                break;
            case "Trigger":
                node.data.inputs = []
                node.data.outputs = [{"name": "output1", "condition": { "key": "null", "operator": "always", "value": "null"}}]
                break;
            default:
                node.data.inputs = [{"name": "input1", "condition": { "key": "null", "operator": "always", "value": "null"}}]
                node.data.outputs = [{"name": "output1", "condition": { "key": "null", "operator": "always", "value": "null"}}]
        }
        node = this.helperIO(node.data.inputs, node.data.outputs, node)

        node.data.stepDbClick = this.data.stepDbClick;
        node.data.label = `${node.data.label || this.data.label}`;
        node.data.code = `${node.data.code || ''}`;

        node.data.icon = this.data.icon;
        node.data.type = this.data.type;
        node.data.group = this.data.group;
        node.data.category = this.data.category;

        return node;
    }

    worker(node: any, inputs: { [x: string]: any[]; }, outputs: { [x: string]: any; }) {

    }
}
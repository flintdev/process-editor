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

    builder(node: any) {
        if (this.data.type !== 'End') {
            if (node.data.outputs) {
                node.data.outputs.forEach((o: any) => {
                    node.addOutput(new Rete.Output(o.name, "Number", this.numSocket))
                })
            } else {
                node.data.outputs = [{
                    "name": "output1",
                    "condition": {
                        "key": "null",
                        "operator": "always",
                        "value": "null"
                    }
                }]
                node.addOutput(new Rete.Output('output1', "Number", this.numSocket))
            }
        }
        if (this.data.type === 'Hub') {
            node.data.inputs = node.data.inputs ||[{
                "name": "input1",
                "condition": {
                    "key": "null",
                    "operator": "always",
                    "value": "null"
                }
            }]
            node.data.inputs.forEach((o: any) => {
                node.addInput(new Rete.Input(o.name, "Number", this.numSocket))
            })
        } else if (this.data.type !== 'Trigger') {
            var inp1 = new Rete.Input("input1", "Number", this.numSocket, this.data.type === 'End');
            node.addInput(inp1);
        }

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
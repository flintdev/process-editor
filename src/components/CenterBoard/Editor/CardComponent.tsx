import Rete from "../../../utils/rete-index";
import CardComponentWidget from "./CardComponentWidget";

export default class CardComponent extends Rete.Component {
    numSocket: any;
    stepDbClick: any;
    constructor(numSocket: any, icon: any, type: string, category: string, stepDbClick: any) {
        super(type);
        this.numSocket = numSocket;
        this.data.stepDbClick = stepDbClick;
        this.data.component = CardComponentWidget;
        this.data.icon = icon;
        this.data.type = type;
        this.data.category = category;
    }

    builder(node: any, label = "label", type = "type", group = "group", category = "category") {
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
        var inp1 = new Rete.Input("input1", "Number", this.numSocket);

        node.data.stepDbClick = this.data.stepDbClick;
        node.data.label = `${node.data.label || label}`;
        node.data.code = `${node.data.code || ''}`;

        node.data.icon = this.data.icon;
        node.data.type = this.data.type;
        node.data.group = node.data.group || group;
        node.data.category = this.data.category;
        node.addInput(inp1);

        return node;
    }

    worker(node: any, inputs: { [x: string]: any[]; }, outputs: { [x: string]: any; }) {
        
    }
}
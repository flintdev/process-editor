"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rete_index_1 = require("../../../utils/rete-index");
const CardComponentWidget_1 = require("./CardComponentWidget");
const EndComponentWidget_1 = require("./EndComponentWidget");
class CardComponent extends rete_index_1.default.Component {
    constructor(numSocket, icon, type, category, group, stepDbClick) {
        super(type);
        this.numSocket = numSocket;
        this.data.stepDbClick = stepDbClick;
        this.data.component = type === 'End' ? EndComponentWidget_1.default : CardComponentWidget_1.default;
        this.data.icon = icon;
        this.data.type = type;
        this.data.group = group;
        this.data.category = category;
    }
    builder(node, label = "label") {
        if (this.data.type !== 'End') {
            if (node.data.outputs) {
                node.data.outputs.forEach((o) => {
                    node.addOutput(new rete_index_1.default.Output(o.name, "Number", this.numSocket));
                });
            }
            else {
                node.data.outputs = [{
                        "name": "output1",
                        "condition": {
                            "key": "null",
                            "operator": "always",
                            "value": "null"
                        }
                    }];
                node.addOutput(new rete_index_1.default.Output('output1', "Number", this.numSocket));
            }
        }
        var inp1 = new rete_index_1.default.Input("input1", "Number", this.numSocket, this.data.type === 'End');
        node.data.stepDbClick = this.data.stepDbClick;
        node.data.label = `${node.data.label || label}`;
        node.data.code = `${node.data.code || ''}`;
        node.data.icon = this.data.icon;
        node.data.type = this.data.type;
        node.data.group = this.data.group;
        node.data.category = this.data.category;
        node.addInput(inp1);
        return node;
    }
    worker(node, inputs, outputs) {
    }
}
exports.default = CardComponent;
//# sourceMappingURL=CardComponent.js.map
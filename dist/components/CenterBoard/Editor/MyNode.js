"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const rete_index_1 = require("src/utils/rete-index");
;
;
class MyNode extends rete_index_1.Node {
    constructor(props) {
        super(props);
    }
    render() {
        const { node, bindSocket, bindControl } = this.props;
        const { outputs, controls, inputs, selected } = this.state;
        return (React.createElement("div", { className: `node ${selected}`, style: { background: "#3f51b5" } },
            React.createElement("div", { className: "title" },
                "<<",
                " ",
                node.name,
                " ",
                ">>"),
            outputs.map(output => (React.createElement("div", { className: "output", key: output.key },
                React.createElement("div", { className: "output-title" }, output.name),
                React.createElement(rete_index_1.Socket, { type: "output", socket: output.socket, io: output, innerRef: bindSocket })))),
            controls.map(control => (React.createElement(rete_index_1.Control, { className: "control", key: control.key, control: control, innerRef: bindControl }))),
            inputs.map(input => (React.createElement("div", { className: "input", key: input.key },
                React.createElement(rete_index_1.Socket, { type: "input", socket: input.socket, io: input, innerRef: bindSocket }),
                !input.showControl() && (React.createElement("div", { className: "input-title" }, input.name)),
                input.showControl() && (React.createElement(rete_index_1.Control, { className: "input-control", control: input.control, innerRef: bindControl })))))));
    }
}
exports.default = MyNode;
//# sourceMappingURL=MyNode.js.map
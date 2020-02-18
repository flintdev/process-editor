"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const rete_index_1 = require("../../../utils/rete-index");
const CardComponentContianer_1 = require("./CardComponentContianer");
const styled_components_1 = require("styled-components");
;
;
const CustomSocket = styled_components_1.default.div `
    .socket {
        border-radius: 0;
        background-color: orange;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' stroke='white' fill='white' /></svg>");
        background-size: 100%
    }
`;
class CardComponentWidget extends rete_index_1.Node {
    constructor(props) {
        super(props);
    }
    render() {
        const { node, bindSocket, bindControl } = this.props;
        const { label, type, group, category, icon, stepDbClick } = node.data;
        const { outputs, controls, inputs, selected } = this.state;
        return (React.createElement("div", { className: `node ${selected}`, style: { borderRadius: 0, padding: 3 } },
            React.createElement(CardComponentContianer_1.default, { data: node.toJSON(), type: type, category: category, label: label, icon: icon, stepDbClick: stepDbClick }),
            outputs.map(output => (React.createElement("div", { className: "output", key: output.key, style: {
                    backgroundColor: '#FDFABE',
                    borderTop: `1px solid #ccc`,
                    display: 'flex',
                    flexDirection: 'row-reverse'
                } },
                React.createElement(CustomSocket, null,
                    React.createElement(rete_index_1.Socket, { type: "output", socket: output.socket, io: output, innerRef: bindSocket })),
                React.createElement("div", { className: "output-title", style: { color: 'grey' } }, output.key)))),
            inputs.map(input => (React.createElement("div", { className: "input", key: input.key, style: {
                    backgroundColor: '#FDFABE',
                    borderTop: `1px solid #ccc`,
                    display: 'flex'
                } },
                React.createElement(CustomSocket, null,
                    React.createElement(rete_index_1.Socket, { type: "input", socket: input.socket, io: input, innerRef: bindSocket })),
                React.createElement("div", { className: "input-title", style: { color: 'grey' } }, input.key),
                input.showControl() && (React.createElement(rete_index_1.Control, { className: "input-control", control: input.control, innerRef: bindControl })))))));
    }
}
exports.default = CardComponentWidget;
//# sourceMappingURL=CardComponentWidget.js.map
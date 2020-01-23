"use strict";
// src/ProcessEditor/ProcessEditor.tsx
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const react_redux_1 = require("react-redux");
const store_1 = require("../redux/store");
const RootContainer_1 = require("../containers/RootContainer");
const styles = styles_1.createStyles({
    root: {},
});
class ProcessEditor extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    componentDidMount() {
    }
    render() {
        const { classes } = this.props;
        // const { operations, stepOptions, editorData, onSaved, stepDbClick } = this.props;
        return (React.createElement(react_redux_1.Provider, { store: store_1.store },
            React.createElement("div", { className: classes.root },
                React.createElement(RootContainer_1.default, Object.assign({}, this.props)))));
    }
}
exports.default = styles_1.withStyles(styles)(ProcessEditor);
//# sourceMappingURL=ProcessEditor.js.map
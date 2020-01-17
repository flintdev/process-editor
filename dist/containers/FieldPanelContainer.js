"use strict";
// src/containers/fieldPanel/FieldPanelContainer.tsx
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const react_redux_1 = require("react-redux");
const styles = styles_1.createStyles({
    root: {},
    container: {
        width: 300,
    }
});
class FieldPanelContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    componentDidMount() {
    }
    render() {
        const { classes } = this.props;
        return (React.createElement("div", { className: classes.root }));
    }
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(FieldPanelContainer));
//# sourceMappingURL=FieldPanelContainer.js.map
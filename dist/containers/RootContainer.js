"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const react_redux_1 = require("react-redux");
const actions = require("../redux/modules/root/actions");
const LeftPaneContainer_1 = require("../components/LeftPane/LeftPaneContainer");
const TopAppBar_1 = require("../components/TopAppBar");
const core_1 = require("@material-ui/core");
const Editor_1 = require("../components/CenterBoard/Editor/Editor");
const styles = styles_1.createStyles({
    root: {},
    container: {
        width: 300,
    }
});
class RootContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
        this.editorActions = {};
        this.updateStepData = (newStepData) => {
            this.editorActions.handleRender(newStepData);
        };
        this.triggerDrop = (labelText) => {
            this.editorActions.handleDrop(labelText);
        };
        this.callAction = (action) => {
            this.editorActions.handleCallAction(action);
        };
    }
    componentDidMount() {
        this.props.operations.updateStepData = this.updateStepData;
    }
    render() {
        const { classes } = this.props;
        const { stepOptions, editorData, onSaved, onClose, stepDbClick } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement(core_1.CssBaseline, null),
            React.createElement(TopAppBar_1.default, { onSaved: onSaved, callAction: this.callAction, onClose: onClose }),
            React.createElement(LeftPaneContainer_1.default, { stepOptions: stepOptions, triggerDrop: this.triggerDrop },
                React.createElement(Editor_1.default, { initialData: editorData, stepOptions: stepOptions, stepDbClick: stepDbClick, editorActions: this.editorActions }))));
    }
}
const mapStateToProps = (state) => {
    return state.root;
};
const mapDispatchToProps = (dispatch) => {
    return {
        setProjectName: (data) => dispatch(actions.setProjectName(data)),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(RootContainer));
//# sourceMappingURL=RootContainer.js.map
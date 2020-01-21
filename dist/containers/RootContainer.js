"use strict";
// src/containers/ProjectContainer.tsx
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
    }
    componentDidMount() {
    }
    render() {
        const { classes } = this.props;
        // const {projectName, setProjectName} = this.props.root;
        console.log(this.props);
        return (React.createElement(React.Fragment, null,
            React.createElement(core_1.CssBaseline, null),
            React.createElement(TopAppBar_1.default, null),
            React.createElement(LeftPaneContainer_1.default, null,
                React.createElement(Editor_1.default, null))));
    }
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        setProjectName: (data) => dispatch(actions.setProjectName(data)),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(RootContainer));
//# sourceMappingURL=RootContainer.js.map
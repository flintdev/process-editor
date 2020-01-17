"use strict";
// src/containers/ProjectContainer.tsx
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const react_redux_1 = require("react-redux");
const actions = require("../redux/modules/project/actions");
const Button_1 = require("@material-ui/core/Button");
const styles = styles_1.createStyles({
    root: {},
    container: {
        width: 300,
    }
});
class ProjectContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    componentDidMount() {
    }
    render() {
        const { classes, projectName, setProjectName } = this.props;
        console.log(this.props);
        return (React.createElement("div", { className: classes.root },
            React.createElement(Button_1.default, { variant: "contained", color: "primary", onClick: () => setProjectName && setProjectName(new Date().getTime().toString()) }, "set project as time"),
            projectName));
    }
}
const mapStateToProps = (state) => {
    return state.project;
};
const mapDispatchToProps = (dispatch) => {
    return {
        setProjectName: (data) => dispatch(actions.setProjectName(data)),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(ProjectContainer));
//# sourceMappingURL=ProjectContainer.js.map
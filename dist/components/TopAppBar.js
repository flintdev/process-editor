"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const Toolbar_1 = require("@material-ui/core/Toolbar");
const IconButton_1 = require("@material-ui/core/IconButton");
const Redo_1 = require("@material-ui/icons/Redo");
const Undo_1 = require("@material-ui/icons/Undo");
const Button_1 = require("@material-ui/core/Button");
const react_redux_1 = require("react-redux");
const actions = require("src/redux/modules/editor/actions");
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));
function TopAppBar(props) {
    const classes = useStyles();
    const translateProcessData = (editorData) => {
        const processData = editorData.nodes;
        return processData;
    };
    return (React.createElement("div", { className: classes.grow },
        React.createElement(Toolbar_1.default, { style: { border: `1px solid gray` } },
            React.createElement(IconButton_1.default, { edge: "start", className: classes.menuButton, color: "inherit", "aria-label": "open drawer" },
                React.createElement(Undo_1.default, null)),
            React.createElement(IconButton_1.default, { edge: "start", className: classes.menuButton, color: "inherit", "aria-label": "open drawer" },
                React.createElement(Redo_1.default, null)),
            React.createElement("div", { className: classes.grow }),
            React.createElement(Button_1.default, { variant: "contained", color: "primary", onClick: () => props.onSaved(translateProcessData(props.editor.editorJSON), props.editor.editorJSON) }, "Save"))));
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        setEditorJSON: (data) => dispatch(actions.setEditorJSON(data)),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TopAppBar);
//# sourceMappingURL=TopAppBar.js.map
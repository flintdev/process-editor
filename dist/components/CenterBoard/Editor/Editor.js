"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReteContoller_1 = require("./ReteContoller");
const CenterFocusStrong_1 = require("@material-ui/icons/CenterFocusStrong");
const IconButton_1 = require("@material-ui/core/IconButton");
const styles_1 = require("@material-ui/core/styles");
const react_redux_1 = require("react-redux");
const actions = require("../../../redux/modules/editor/actions");
const styles = styles_1.createStyles({
    root: {},
    container: {
        width: 300,
    }
});
class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = () => {
            this.props.editorActions.handleRender = this.handleRender;
            this.props.editorActions.handleDrop = this.handleDrop;
            this.props.editorActions.handleCallAction = this.handleCallAction;
            const { initialData, stepOptions, stepDbClick } = this.props;
            this.setState({ initialData: initialData });
            const init = async (ref, data, action) => {
                const { focusEditor, reRender, dropNode, callAction } = await ReteContoller_1.createEditor(ref, data, action, stepOptions, stepDbClick);
                this.setState({ focusEditor: focusEditor, reRender: reRender, dropNode: dropNode, callAction: callAction });
            };
            const tmp = (React.createElement("div", { style: { width: "100%", height: "100%" }, ref: ref => ref && init(ref, initialData, this.onChange) }));
            this.setState({ reteContainer: tmp });
        };
        this.onChange = (editorConfig) => {
            this.props.setEditorJSON(editorConfig);
            //Uncomment this and we get in an infinite loop !!!!
            this.setState({ editorConfig });
        };
        this.handleRender = (newStepData) => {
            const newEditorConfig = Object.assign({}, this.props.editor.editorJSON);
            // console.log('>>> this.props.editor.editorJSON', this.props.editor.editorJSON);
            newEditorConfig.nodes[newStepData.id] = newStepData;
            // this.props.setEditorJSON(newEditorConfig);
            // console.log('>>> newEditorConfig', newEditorConfig)
            this.state.reRender(newEditorConfig);
        };
        this.handleDrop = (labelText) => {
            this.state.dropNode(labelText);
        };
        this.handleCallAction = (action) => {
            this.state.callAction(action);
        };
        this.state = {
            reteContainer: null,
            focusEditor: () => { }
        };
    }
    render() {
        const { reteContainer } = this.state;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { position: 'absolute', display: 'flex', zIndex: 10000 } },
                React.createElement(IconButton_1.default, { onClick: () => this.state.focusEditor() },
                    React.createElement(CenterFocusStrong_1.default, null))),
            reteContainer));
    }
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        setEditorJSON: (data) => dispatch(actions.setEditorJSON(data)),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(Editor));
//# sourceMappingURL=Editor.js.map
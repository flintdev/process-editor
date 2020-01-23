"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReteContoller_1 = require("./ReteContoller");
const CenterFocusStrong_1 = require("@material-ui/icons/CenterFocusStrong");
const IconButton_1 = require("@material-ui/core/IconButton");
class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = () => {
            const { initialData } = this.props;
            this.setState({ initialData: initialData });
            const init = async (ref, data, action) => {
                const { focusEditor } = await ReteContoller_1.createEditor(ref, data, action);
                this.setState({ focusEditor: focusEditor });
            };
            const tmp = (React.createElement("div", { style: { width: "100%", height: "100%" }, ref: ref => ref && init(ref, initialData, this.onChange) }));
            this.setState({ reteContainer: tmp });
        };
        this.onChange = (editorConfig) => {
            console.log("onChange: ", editorConfig);
            //Uncomment this and we get in an infinite loop !!!!
            this.setState({ editorConfig });
        };
        this.state = {
            reteContainer: null,
            focusEditor: () => { }
        };
    }
    render() {
        const { reteContainer } = this.state;
        return (React.createElement(React.Fragment, null,
            React.createElement(IconButton_1.default, { onClick: () => this.state.focusEditor(), style: { position: 'absolute' } },
                React.createElement(CenterFocusStrong_1.default, null)),
            reteContainer));
    }
}
exports.default = Editor;
//# sourceMappingURL=Editor.js.map
import * as React from "react";
import { createEditor } from "./ReteContoller";
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState } from "../../../redux/state";
import * as actions from "../../../redux/modules/editor/actions";
import styled from "styled-components";

const styles = createStyles({
    root: {

    },
    container: {
        width: 300,
    }
});

const EditorWrapper = styled.div`
    .connection .main-path {
        fill: none;
        stroke-width: 5px;
        stroke: grey;
    }
    .node {
        background: grey;
        border: 5px solid grey;
    }
    .node.selected {
        background: #009688;
        border: 5px solid #009688;;
    }
`

class Editor extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            reteContainer: null,
            focusEditor: () => { }
        }
    }

    componentDidMount = () => {
        this.props.editorActions.handleRender = this.handleRender;
        this.props.editorActions.handleDrop = this.handleDrop;
        this.props.editorActions.handleCallAction = this.handleCallAction;
        this.props.editorActions.handleDeleteNode = this.handleDeleteNode;
        const { initialData, stepOptions, stepDbClick } = this.props;
        this.setState({ initialData: initialData });
        const init = async (ref: HTMLDivElement, data: any, action: (editorConfig: any) => void) => {
            const { focusEditor, reRender, dropNode, callAction, deleteNode } = await createEditor(ref, data, action, stepOptions, stepDbClick, this.stepSingleClick);
            this.setState({ focusEditor: focusEditor, reRender: reRender, dropNode: dropNode, callAction:callAction, deleteNode:deleteNode });
        };
        const tmp = (
            <EditorWrapper
                style={{ width: "100%", height: "100%"}}
                ref={ref =>
                    ref && init(ref, initialData, this.onChange)
                }
            />
        );
        this.setState({ reteContainer: tmp });
    };

    onChange = (editorConfig: any) => {
        this.props.setEditorJSON(editorConfig);

        //Uncomment this and we get in an infinite loop !!!!
        this.setState({ editorConfig });
    };

    handleRender = (newStepData: any) => {

        const newEditorConfig = {...this.props.editor.editorJSON};
        // console.log('>>> this.props.editor.editorJSON', this.props.editor.editorJSON);
        newEditorConfig.nodes[newStepData.id] = newStepData;
        // this.props.setEditorJSON(newEditorConfig);
        // console.log('>>> newEditorConfig', newEditorConfig)

        this.state.reRender(newEditorConfig);
    }

    handleDrop = (labelText: string, e: any) => {
        this.state.dropNode(labelText, e);
    }
    
    handleCallAction = (action: string) => {
        this.state.callAction(action);
    }

    handleDeleteNode = (node: any) => {
        this.state.deleteNode(node);
    }

    stepSingleClick = (node: any) => {
        this.props.selectNode(node);
    }

    render() {
        const { reteContainer } = this.state;

        return (
            <React.Fragment>
                <div style={{ position: 'absolute', display: 'flex', zIndex: 10000 }}>
                    <IconButton onClick={() => this.state.focusEditor()}>
                        <CenterFocusStrongIcon />
                    </IconButton>
                </div>
                {reteContainer}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    return state;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.EditorAction>) => {
    return {
        setEditorJSON: (data: object) => dispatch(actions.setEditorJSON(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Editor));

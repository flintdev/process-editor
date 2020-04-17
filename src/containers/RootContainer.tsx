import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState, RootState } from "../redux/state";
import * as actions from "../redux/modules/root/actions";
import LeftPaneContainer from '../components/LeftPane/LeftPaneContainer';
import TopAppBar from '../components/TopAppBar';
import { CssBaseline } from '@material-ui/core';
import Editor from '../components/CenterBoard/Editor/Editor';
import HotKeyWrapper from '../components/CenterBoard/HotKeyWrapper';

const styles = createStyles({
    root: {

    },
    container: {
        width: 300,
    }
});

export interface Props extends WithStyles<typeof styles>, RootState {
    operations: any,
    stepOptions: any,
    editorData: any,
    onSaved: any,
    onClose: any,
    stepDbClick: any
    root?: any,
    name?: string
}

class RootContainer extends React.Component<Props, any> {
    constructor(props: any){
        super(props);
        this.selectNode = this.selectNode.bind(this);
    }
    state = {
        selectedNode: null
    };

    editorActions: any = {};


    updateStepData = (newStepData: any) => {
        this.editorActions.handleRender(newStepData)
    }

    triggerDrop = (labelText: string, e: any) => {
        this.editorActions.handleDrop(labelText, e)
    }

    callAction = (action: string) => {
        this.editorActions.handleCallAction(action)
    }

    selectNode = (node: any) => {
        this.setState({selectedNode: node})
    }

    componentDidMount(): void {
        this.props.operations.updateStepData = this.updateStepData;
    }

    handlers = {
        DELETE_NODE: () => {
            if (this.state.selectedNode) {
                this.editorActions.handleDeleteNode(this.state.selectedNode)
            }
        }
    };

    render() {
        const { classes } = this.props;
        const { stepOptions, editorData, onSaved, onClose, stepDbClick, name } = this.props;
        
        return (
            <React.Fragment>
                <CssBaseline />
                <TopAppBar triggerDrop={this.triggerDrop} stepOptions={stepOptions} name={name} onSaved={onSaved} callAction={this.callAction} onClose={onClose}/>
                <LeftPaneContainer stepOptions={stepOptions} triggerDrop={this.triggerDrop}>
                    <HotKeyWrapper handlers={this.handlers}>
                        <Editor
                            selectNode={this.selectNode}
                            initialData={editorData}
                            stepOptions={stepOptions}
                            stepDbClick={stepDbClick}
                            editorActions={this.editorActions}
                        />
                    </HotKeyWrapper>
                </LeftPaneContainer>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return state.root;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.RootAction>) => {
    return {
        setProjectName: (data: String) => dispatch(actions.setProjectName(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RootContainer));

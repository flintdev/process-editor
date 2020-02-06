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
    stepDbClick: any
    root?: any,
}

class RootContainer extends React.Component<Props, any> {
    state = {

    };

    editorActions: any = {};


    updateStepData = (newStepData: any) => {
        this.editorActions.handleRender(newStepData)
    }

    triggerDrop = (labelText: string) => {
        this.editorActions.handleDrop(labelText)
    }

    callAction = (action: string) => {
        this.editorActions.handleCallAction(action)
    }



    componentDidMount(): void {
        this.props.operations.updateStepData = this.updateStepData;
    }

    render() {
        const { classes } = this.props;
        const { stepOptions, editorData, onSaved, stepDbClick } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <TopAppBar onSaved={onSaved} callAction={this.callAction}/>
                <LeftPaneContainer stepOptions={stepOptions} triggerDrop={this.triggerDrop}>
                    <Editor
                        initialData={editorData}
                        stepOptions={stepOptions}
                        stepDbClick={stepDbClick}
                        editorActions={this.editorActions}
                    />
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

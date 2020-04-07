// example/ExampleContainer.tsx

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { initialData } from "./data";
import {ProcessEditor} from "../src/index";
import CodeIcon from '@material-ui/icons/Code';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import AssignmentTurnedInTwoToneIcon from '@material-ui/icons/AssignmentTurnedInTwoTone';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import NewReleasesTwoToneIcon from '@material-ui/icons/NewReleasesTwoTone';
import StepDialog from "./StepDialog";
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import {EditorData} from "../src/index"
import DeviceHubIcon from '@material-ui/icons/DeviceHub';

const stepOptions = [
    {
        "type": "End",
        "group": "Standard",
        "category": "Automation",
        "icon": <RadioButtonCheckedIcon/>
    },
    {
        "type": "Script",
        "group": "Standard",
        "category": "Automation",
        "icon": <CodeIcon/>
    },
    {
        "type": "Approve/Reject",
        "group": "Standard",
        "category": "Automation",
        "icon": <AssignmentTurnedInTwoToneIcon />
    },
    {
        "type": "Object Add",
        "group": "Standard",
        "category": "Trigger",
        "icon": <AddCircleTwoToneIcon />
    },
    {
        "type": "Object Update",
        "group": "Standard",
        "category": "Trigger",
        "icon": <NewReleasesTwoToneIcon />
    },
    {
        "type": "Object Delete",
        "group": "Standard",
        "category": "Trigger",
        "icon": <HighlightOffTwoToneIcon />
    },
    {
        "type": "Gmail",
        "group": "Third-party",
        "category": "Notification",
        "icon": <EmailTwoToneIcon />
    },
    {
        "type": "Hub",
        "group": "Standard",
        "category": "Automation",
        "icon": <DeviceHubIcon />
    }
];

const styles = createStyles({
    root: {

    },
});

export interface Props extends WithStyles<typeof styles> {

}

class ExampleContainer extends React.Component<Props, object> {
    state = {

    };

    // define functions of event listeners
    onSaved = (editorData: EditorData) => {
        console.log('>>> onSaved.editorData', editorData);
    };

    onClose = () => {
        console.log('>>> onClose');
    }

    // process some async actions to fetch input params and append it to stepData
    stepDbClick = (stepData: any) => {
        this.actions?.handleClickOpen(stepData);
    };

    stepDbClickUpdate = (newStepData: any) => {
        this.operations?.updateStepData(newStepData);
    }


    operations: any = {};
    actions: any = {};

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {/* place the react component under any container */}
                <StepDialog actions={this.actions} stepDbClickUpdate={this.stepDbClickUpdate}/>
                <div style={{height: '100vh'}}>
                    <ProcessEditor
                        operations={this.operations}
                        stepOptions={stepOptions}
                        editorData={initialData}
                        onSaved={this.onSaved}
                        onClose={this.onClose}
                        stepDbClick={this.stepDbClick}
                    />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ExampleContainer);

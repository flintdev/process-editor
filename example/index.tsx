import * as React from "react";
import { render } from 'react-dom'
import ProcessEditor from '../src/index';
import { Icon } from 'antd';

// define functions of event listeners
const onSaved = (processData, editorData) => {
    console.log('>>> onSaved', processData, editorData);
};
const stepDbClick = (stepData) => {
    console.log('>>> stepDbClick', stepData)
    // process some async actions to fetch input params and append it to stepData
    // this.operations.updateStepData(newStepData);
};

const stepOptions = [
    {
        "type": "Script",
        "group": "Standard",
        "category": "Automation",
        "icon": <Icon type="code" theme="twoTone" twoToneColor="#4fc3f7" style={{ fontSize: 20 }}/>
    },
    {
        "type": "Approve/Reject",
        "group": "Standard",
        "category": "Automation",
        "icon": <Icon type="interaction" theme="twoTone" twoToneColor="#81c784" style={{ fontSize: 20 }}/>
    },
    {
        "type": "Object Add",
        "group": "Standard",
        "category": "Trigger",
        "icon": <Icon type="plus-circle" theme="twoTone" twoToneColor="#ba68c8" style={{ fontSize: 20 }}/>
    },
    {
        "type": "Slack",
        "group": "Third-party",
        "category": "Notification",
        "icon": <Icon type="thunderbolt" theme="twoTone" twoToneColor="#d81b60" style={{ fontSize: 20 }}/>
    },
    {
        "type": "Timer",
        "group": "Standard",
        "category": "Utilities",
        "icon": <Icon type="clock-circle" theme="twoTone" twoToneColor="#7986cb" style={{ fontSize: 20 }}/>
    },
    {
        "type": "If",
        "group": "Standard",
        "category": "Condition",
        "icon": <Icon type="question-circle" theme="twoTone" twoToneColor="#ff8a65" style={{ fontSize: 20 }}/>
    },
    {
        "type": "End",
        "group": "Standard",
        "category": "Condition",
        "icon": <Icon type="stop" theme="twoTone" twoToneColor="#90a4ae" style={{ fontSize: 20 }}/>
    },
    // ...
];

const stepData = {
    "id": 1,
    "label": "Submit Expense",
    "type": "Object Add",
    "group": "Standard",
    "category": "Trigger",
    "params": {}  // optional, appended by main program.
};

const processData = {
    "startAt": "Submit Expense",
    "Submit Expense": {
        "data": "stepData1",
        "next": "Validate Expense Items"
    },
    "Validate Expense Items": {
        "data": "stepData2",
        "next": "Valid?"
    },
    "Valid?": {
        "data": "stepData3",
        "next": ["Manager Approval", null]
    },
    // ...
};

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <div style={{ height: `100%` }}>
                <ProcessEditor
                    // operations={this.operations}
                    stepOptions={stepOptions}
                    // editorData={editorData}
                    onSaved={onSaved}
                    stepDbClick={stepDbClick}
                />
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));
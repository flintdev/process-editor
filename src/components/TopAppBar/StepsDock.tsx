import * as React from "react";
import DraggableCore from 'react-draggable';

export default class StepsDock extends React.Component<any> {
    constructor(props: any) {
        super(props)
    }
    render() {
        const { triggerDrop, stepOptions } = this.props;
        const handleTriggerDrop = (labelText: string, e: any) => {
            triggerDrop(labelText, e)
        }
        return (
            <div style={{paddingRight: 100}}>
                {!!stepOptions &&
                    stepOptions.slice(0,5).map((step: any) => {
                        const { type, icon } = step;
                        return (
                            <DraggableCore
                                defaultPosition={{ x: 0, y: 0 }}
                                position={{ x: 0, y: 0 }}
                                scale={1}
                                onStop={(e) => handleTriggerDrop(type, e)}
                            >
                                {icon}
                            </DraggableCore>
                        )
                    })
                }
            </div>
        );
    }
}
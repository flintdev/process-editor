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
            <div style={{paddingLeft: 100, display: 'flex'}}>
                {!!stepOptions &&
                    stepOptions.slice(0,10).map((step: any, i: number) => {
                        const { type, icon } = step;
                        return (
                            <DraggableCore
                                defaultPosition={{ x: 0, y: 0 }}
                                position={{ x: 0, y: 0 }}
                                scale={1}
                                onStop={(e) => handleTriggerDrop(type, e)}
                                key={i}
                            >
                                <div style={{marginRight: 10, cursor: "pointer"}}>
                                    {icon}
                                </div>
                            </DraggableCore>
                        )
                    })
                }
            </div>
        );
    }
}
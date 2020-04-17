import * as React from "react";
import { Node, Socket, Control } from "../../../utils/rete-index";
import CardComponentContianer from "./CardComponentContianer";
import styled from "styled-components";
import StepManager from '../../../utils/StepManager';

interface Props { node: any; bindSocket: any; bindControl: any; };
interface State { outputs: any[]; controls: any[]; inputs: any[]; selected: any[]; };

const CustomSocket: React.FunctionComponent<any> = styled.div`
    .socket {
        position: ${(props: any) => props.isInput ? 'absolute' : 'unset'};
        top: 50%;
        border-radius: 0;
        border-color: grey;
        background-color: orange;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' stroke='white' fill='white' /></svg>");
        background-size: 100%
    }
`

export default class CardComponentWidget extends Node<Props, State> {
    props: Props;
    state: State;
    constructor(props: Props) {
        super(props);
    }
    render() {
        const { node, bindSocket, bindControl} = this.props;
        const { label, type, group, category, icon, stepDbClick, handleInputChange } = node.data;
        const { outputs, controls, inputs, selected } = this.state;

        return (
            <div className={`node ${selected}`} style={{borderRadius: 0, padding: 3}}>
                <CardComponentContianer
                    data={node.toJSON()}
                    type={type} 
                    category={category} label={label} icon={icon} stepDbClick={stepDbClick}
                    handleInputChange={handleInputChange}
                    />
                {/* Outputs */}
                {outputs.map(output => (
                    <div key={output.key} style={{ 
                        backgroundColor: '#FDFABE',
                        borderTop: `1px solid #ccc`,
                        display: 'flex',
                        flexDirection: 'row-reverse'
                    }}
                    onDoubleClick={(e) => {
                        e.preventDefault();
                        stepDbClick(new StepManager().cleanStepData(node.toJSON()))
                      }}
                    >
                        <CustomSocket isInput={false}>
                            <Socket
                                type="output"
                                socket={output.socket}
                                io={output}
                                innerRef={bindSocket}
                            />
                        </CustomSocket>
                        <div style={{ color: 'black', fontSize: 20 }}>{output.key}</div>
                    </div>
                ))}
                {/* Controls */}
                {/* {controls.map(control => (
                    <Control
                        className="control"
                        key={control.key}
                        control={control}
                        innerRef={bindControl}
                    />
                ))} */}
                {/* Inputs */}
                {inputs.map((input, i) => (
                    <CustomSocket key={i} isInput={true}>
                        <Socket
                            type="input"
                            socket={input.socket}
                            io={input}
                            innerRef={bindSocket}
                        />
                    </CustomSocket>
                ))}
            </div>
        );
    }
}
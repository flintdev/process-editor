import * as React from "react";
import { Node, Socket, Control } from "src/utils/rete-index";
import CardComponentContianer from "./CardComponentContianer";
import styled from "styled-components";

interface Props { node: any; bindSocket: any; bindControl: any; };
interface State { outputs: any[]; controls: any[]; inputs: any[]; selected: any[]; };

const CustomSocket: React.FunctionComponent<any> = styled.div`
    .socket {
        border-radius: 0;
        background-color: orange;
        background-image: url("src/static/images/arrow.png");
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
        const { node, bindSocket, bindControl } = this.props;
        const { outputs, controls, inputs, selected } = this.state;

        return (
            <div className={`node ${selected}`}>
                <CardComponentContianer title={"Code Block"} type={"Automation"} name={"Validate Expense Items with some more text to create a long name for the card"}/>
                {/* Outputs */}
                {outputs.map(output => (
                    <div className="output" key={output.key} style={{ 
                        backgroundColor: '#FDFABE',
                        borderTop: `1px solid #ccc`,
                        display: 'flex',
                        flexDirection: 'row-reverse'
                    }}>
                        <CustomSocket>
                            <Socket
                                type="output"
                                socket={output.socket}
                                io={output}
                                innerRef={bindSocket}
                            />
                        </CustomSocket>
                        <div className="output-title" style={{ color: 'grey' }}>{output.name}</div>
                    </div>
                ))}
                {/* Controls */}
                {controls.map(control => (
                    <Control
                        className="control"
                        key={control.key}
                        control={control}
                        innerRef={bindControl}
                    />
                ))}
                {/* Inputs */}
                {inputs.map(input => (
                    <div className="input" key={input.key} style={{ 
                        backgroundColor: '#FDFABE',
                        borderTop: `1px solid #ccc`,
                        display: 'flex'
                    }}>
                        <CustomSocket>
                            <Socket
                                type="input"
                                socket={input.socket}
                                io={input}
                                innerRef={bindSocket}
                            />
                        </CustomSocket>
                        {!input.showControl() && (
                            <div className="input-title" style={{ color: 'grey' }}>{input.name}</div>
                        )}
                        {input.showControl() && (
                            <Control
                                className="input-control"
                                control={input.control}
                                innerRef={bindControl}
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    }
}
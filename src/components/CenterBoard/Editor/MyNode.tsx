import * as React from "react";
import { Node, Socket, Control } from "src/utils/rete-index";

interface Props { node: any; bindSocket: any; bindControl: any; };
interface State { outputs: any[]; controls: any[]; inputs: any[]; selected: any[]; };

export default class MyNode extends Node<Props, State> {
    props: Props;
    state: State;
    constructor(props: Props) {
        super(props);
    }
    render() {
        const { node, bindSocket, bindControl } = this.props;
        const { outputs, controls, inputs, selected } = this.state;

        return (
            <div className={`node ${selected}`} style={{ background: "#3f51b5" }}>
                <div className="title">
                    {"<<"} {node.name} {">>"}
                </div>
                {/* Outputs */}
                {outputs.map(output => (
                    <div className="output" key={output.key}>
                        <div className="output-title">{output.name}</div>
                        <Socket
                            type="output"
                            socket={output.socket}
                            io={output}
                            innerRef={bindSocket}
                        />
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
                    <div className="input" key={input.key}>
                        <Socket
                            type="input"
                            socket={input.socket}
                            io={input}
                            innerRef={bindSocket}
                        />
                        {!input.showControl() && (
                            <div className="input-title">{input.name}</div>
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
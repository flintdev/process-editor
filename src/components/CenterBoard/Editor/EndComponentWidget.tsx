import * as React from "react";
import { Node, Socket, Control } from "../../../utils/rete-index";
import styled from "styled-components";

interface Props { node: any; bindSocket: any; bindControl: any; };
interface State { outputs: any[]; controls: any[]; inputs: any[]; selected: any[]; };

const CustomSocket: React.FunctionComponent<any> = styled.div`
    .socket {
        border-radius: 12px;
        background-color: green;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' stroke='white' fill='white'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
        background-size: 100%;
        transform: scale(1.5);
        margin-left: 12px;
        margin-top: 12px;
    }
`


export default class EndComponentWidget extends Node<Props, State> {
    props: Props;
    state: State;
    constructor(props: Props) {
        super(props);
    }
    render() {
        const { node, bindSocket, bindControl} = this.props;
        const { label, type, group, category, icon, stepDbClick } = node.data;
        const { outputs, controls, inputs, selected } = this.state;

        return (
            <div className={`node ${selected}`} style={{borderRadius: 28, padding: 3, minWidth: 48, minHeight: 48}}>
                {/* Inputs */}
                {inputs.map((input, i) => (

                        <CustomSocket key={i}>
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
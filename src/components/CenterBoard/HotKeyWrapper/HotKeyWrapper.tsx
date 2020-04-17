import {HotKeys} from "react-hotkeys";
import * as React from 'react';

const keyMap = {DELETE_NODE: ["del", "backspace"]};

export default (props: any) => (
    <HotKeys keyMap={keyMap} style={{height: 'inherit'}}>
        <HotKeys handlers={props.handlers} style={{outline: 0, height: 'inherit'}}>
            {props.children}
        </HotKeys>
    </HotKeys>
);

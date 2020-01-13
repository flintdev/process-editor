import * as React from "react";
import {render} from 'react-dom'
import ProcessEditor from '../src/index';

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <div style={{height: `100%`}}>
                <ProcessEditor/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
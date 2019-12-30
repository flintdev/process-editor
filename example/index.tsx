import * as React from "react";
import {render} from 'react-dom'
import MyAwosomeApp from '../lib/index';

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <MyAwosomeApp/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
import * as React from "react";
import 'antd/dist/antd.css';

import { LayoutContainer } from "./containers/LayoutContainer";


export default class ProcessEditor extends React.Component<{}, {}> {
    render() {
        return (
            <div style={{height: `100%`}}>
                <LayoutContainer/>
            </div>
        )
    }
}

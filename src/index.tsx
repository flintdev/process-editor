import * as React from "react";
import 'antd/dist/antd.css';

import LayoutContainer from "./containers/LayoutContainer";

type Props = {
    stepOptions: any[]
    onSaved: any
    stepDbClick: any
}

export default class ProcessEditor extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <div style={{ height: `100%` }}>
                <LayoutContainer {...this.props} />
            </div>
        )
    }
}

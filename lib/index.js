import * as React from "react";
import 'antd/dist/antd.css';
import { LayoutContainer } from "./containers/LayoutContainer";
export default class ProcessEditor extends React.Component {
    render() {
        return (React.createElement("div", { style: { height: `100%` } },
            React.createElement(LayoutContainer, null)));
    }
}

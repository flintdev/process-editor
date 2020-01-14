import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import SketchContainer from './SketchContainer';
import { Button } from 'antd';
const { Header, Content, Sider } = Layout;
export default class LayoutContainer extends React.Component {
    render() {
        const { stepOptions, onSaved } = this.props;
        return (React.createElement(Layout, { style: { height: `100%` } },
            React.createElement(Layout, { style: { maxHeight: 50 } },
                React.createElement("div", { style: { height: 50, backgroundColor: '#fff' } },
                    React.createElement(Button, { key: "1", style: { float: 'left', margin: 10 } },
                        React.createElement(Icon, { type: "undo" }),
                        " undo "),
                    React.createElement(Button, { key: "2", style: { float: 'left', margin: 10 } },
                        React.createElement(Icon, { type: "redo" }),
                        " redo "),
                    React.createElement(Button, { key: "3", style: { float: 'right', margin: 10 }, onClick: () => onSaved(), type: "primary" }, "Save"))),
            React.createElement(Layout, null,
                React.createElement(Sider, { width: 200, style: { background: '#fff' } },
                    React.createElement(Menu, { mode: "inline", defaultSelectedKeys: [], defaultOpenKeys: [], style: { height: '100%', borderRight: 0 } }, !!stepOptions && stepOptions.map(option => {
                        return React.createElement(Menu.Item, { key: option.type },
                            option.icon,
                            " ",
                            option.type);
                    }))),
                React.createElement(Layout, null,
                    React.createElement(Content, { style: {
                            background: '#fff',
                            margin: 0,
                            minHeight: 280,
                            backgroundSize: `10px 10px`,
                            backgroundImage: `
                                    linear-gradient(to right, #eee 1px, transparent 1px),
                                    linear-gradient(to bottom, #eee 1px, transparent 1px)
                                `
                        } },
                        React.createElement(SketchContainer, null))))));
    }
}

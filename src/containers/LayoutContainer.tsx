import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import SketchContainer from './SketchContainer';
import { Button } from 'antd';

type Props = {
    stepOptions: any[]
    onSaved: any
    stepDbClick: any
}

// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class LayoutContainer extends React.Component<Props> {
    render() {
        const {stepOptions, onSaved} = this.props;
        return (
            <Layout style={{ height: `100%` }}>
                <Layout style={{ maxHeight: 50 }}>
                    <div
                        style={{ height: 50, backgroundColor: '#fff' }}
                    >
                        <Button key="1" style={{float: 'left', margin: 10}} ><Icon type="undo"/> undo </Button>
                        <Button key="2" style={{float: 'left', margin: 10}} ><Icon type="redo"/> redo </Button>
                        <Button key="3" style={{float: 'right', margin: 10}} onClick={() => onSaved()} type="primary">Save</Button>
                    </div>
                </Layout>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[]}
                            defaultOpenKeys={[]}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {
                            !!stepOptions && stepOptions.map(option => {
                                    return <Menu.Item key={option.type}>{option.icon} {option.type}</Menu.Item>
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <Content
                            style={{
                                background: '#fff',
                                margin: 0,
                                minHeight: 280,
                                backgroundSize: `10px 10px`,
                                backgroundImage: `
                                    linear-gradient(to right, #eee 1px, transparent 1px),
                                    linear-gradient(to bottom, #eee 1px, transparent 1px)
                                `
                            }}
                        >
                            <SketchContainer />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
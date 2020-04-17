import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

function deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}

async function createNode(component: any, { data = {}, meta = {}, x = 0, y = 0 }) {
    const node = await component.createNode(deepCopy(data));

    node.meta = Object.assign(deepCopy(meta), node.meta);
    node.position[0] = x;
    node.position[1] = y;

    return node;
}

class NodeMenu extends React.Component<any> {
    nodeItems: any[];
    visible: boolean;
    position: number[];
    items: any[];
    el: HTMLDivElement;
    args: { node: any; };
    node: any;
    hideTimer: any;
    constructor(editor: any, props: any) {
        super(props);
        this.items = [];
        this.position = [0, 0];
        this.visible = false;
        this.node = null;
        this.hideTimer = null;
        this.el = document.createElement('div');
        editor.view.container.appendChild(this.el);

        this.addItem('Delete', (node: any) => {
            editor.removeNode(node)
        });
        this.addItem('Clone', async (node: any) => {
            const { name, position: [x, y], ...params } = node;
            const component = editor.components.get(name);
            const newNode = await createNode(component, { ...params, x: x + 10, y: y + 10 });

            editor.addNode(newNode);
        });
        this.renderMenu();
        this.timeoutHide = this.timeoutHide.bind(this);
        this.cancelHide = this.cancelHide.bind(this);
    }

    addItem(title: string, onClick: any) {
        this.items.push({ title, onClick });
        this.renderMenu();
    }

    show(x: number, y: number, node: any) {
        this.position = [x, y];
        this.node = node;
        this.visible = true;
        this.renderMenu();
    }

    hide() {
        this.visible = false;
        this.renderMenu();
    }

    timeoutHide() {
        this.hideTimer = setTimeout(() => {
            this.hide();
        }, 1000);
    }

    cancelHide() {
        if (this.hideTimer) {
            clearTimeout(this.hideTimer);
        }
    }

    renderMenu() {
        const [x, y] = this.position;
        ReactDOM.render (
            this.visible ?
                <Paper style={{ position: `fixed`, left: x, top: y }} onMouseOver={this.cancelHide} onMouseLeave={this.timeoutHide}>
                    {this.items.map((item: any, i: number) => (
                        <MenuItem key={i} onClick={() => {
                            item.onClick(this.node);
                            this.hide();
                        }}>{item.title}</MenuItem>
                    ))}
                </Paper>
                : <div />
            , this.el
        )
    }
}


function install(editor: any, {
    nodeItems = {},
}) {
    editor.bind('hidecontextmenu');
    const nodeMenu = new NodeMenu(editor, nodeItems);

    editor.on('hidecontextmenu', () => {
        nodeMenu.hide();
    });

    editor.on('click contextmenu', () => {
        editor.trigger('hidecontextmenu');
    });

    editor.on('contextmenu', (input: any) => {
        const { e, node } = input
        e.preventDefault();
        e.stopPropagation();

        const [x, y] = [e.clientX, e.clientY];
        if (node) nodeMenu.show(x, y, node);

    });
}

export default {
    name: 'my-context-menu',
    install
}
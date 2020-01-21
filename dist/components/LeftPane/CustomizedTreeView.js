"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const SvgIcon_1 = require("@material-ui/core/SvgIcon");
const styles_1 = require("@material-ui/core/styles");
const TreeView_1 = require("@material-ui/lab/TreeView");
const TreeItem_1 = require("@material-ui/lab/TreeItem");
const Collapse_1 = require("@material-ui/core/Collapse");
const web_cjs_1 = require("react-spring/web.cjs"); // web.cjs is required for IE 11 support
function MinusSquare(props) {
    return (React.createElement(SvgIcon_1.default, Object.assign({ fontSize: "inherit" }, props),
        React.createElement("path", { d: "M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" })));
}
function PlusSquare(props) {
    return (React.createElement(SvgIcon_1.default, Object.assign({ fontSize: "inherit" }, props),
        React.createElement("path", { d: "M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" })));
}
function CloseSquare(props) {
    return (React.createElement(SvgIcon_1.default, Object.assign({ className: "close", fontSize: "inherit" }, props),
        React.createElement("path", { d: "M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" })));
}
function TransitionComponent(props) {
    const style = web_cjs_1.useSpring({
        from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
    });
    return (React.createElement(web_cjs_1.animated.div, { style: style },
        React.createElement(Collapse_1.default, Object.assign({}, props))));
}
const StyledTreeItem = styles_1.withStyles((theme) => styles_1.createStyles({
    iconContainer: {
        '& .close': {
            opacity: 0.3,
        },
    },
    group: {
        marginLeft: 12,
        paddingLeft: 12,
        borderLeft: `1px dashed ${styles_1.fade(theme.palette.text.primary, 0.4)}`,
    },
}))((props) => React.createElement(TreeItem_1.default, Object.assign({}, props, { TransitionComponent: TransitionComponent })));
const useStyles = styles_1.makeStyles(styles_1.createStyles({
    root: {
        height: 264,
        flexGrow: 1,
        maxWidth: 400,
    },
}));
function CustomizedTreeView() {
    const classes = useStyles();
    return (React.createElement(TreeView_1.default, { className: classes.root, defaultExpanded: ['1'], defaultCollapseIcon: React.createElement(MinusSquare, null), defaultExpandIcon: React.createElement(PlusSquare, null), defaultEndIcon: React.createElement(CloseSquare, null) },
        React.createElement(StyledTreeItem, { nodeId: "1", label: "Main" },
            React.createElement(StyledTreeItem, { nodeId: "2", label: "Hello" }),
            React.createElement(StyledTreeItem, { nodeId: "3", label: "Subtree with children" },
                React.createElement(StyledTreeItem, { nodeId: "6", label: "Hello" }),
                React.createElement(StyledTreeItem, { nodeId: "7", label: "Sub-subtree with children" },
                    React.createElement(StyledTreeItem, { nodeId: "9", label: "Child 1" }),
                    React.createElement(StyledTreeItem, { nodeId: "10", label: "Child 2" }),
                    React.createElement(StyledTreeItem, { nodeId: "11", label: "Child 3" })),
                React.createElement(StyledTreeItem, { nodeId: "8", label: "Hello" })),
            React.createElement(StyledTreeItem, { nodeId: "4", label: "World" }),
            React.createElement(StyledTreeItem, { nodeId: "5", label: "Something something" }))));
}
exports.default = CustomizedTreeView;
//# sourceMappingURL=CustomizedTreeView.js.map
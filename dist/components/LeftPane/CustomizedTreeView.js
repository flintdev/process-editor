"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const TreeView_1 = require("@material-ui/lab/TreeView");
const TreeItem_1 = require("@material-ui/lab/TreeItem");
const Typography_1 = require("@material-ui/core/Typography");
const react_draggable_1 = require("react-draggable");
const _ = require("lodash");
const SvgIcon_1 = require("@material-ui/core/SvgIcon");
function MinusSquare(props) {
    return (React.createElement(SvgIcon_1.default, Object.assign({ fontSize: "inherit" }, props),
        React.createElement("path", { d: "M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" })));
}
function PlusSquare(props) {
    return (React.createElement(SvgIcon_1.default, Object.assign({ fontSize: "inherit" }, props),
        React.createElement("path", { d: "M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" })));
}
const useTreeItemStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    root: {
        color: theme.palette.text.secondary,
        '&:focus > $content': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
            color: 'var(--tree-view-color)',
        },
    },
    content: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '$expanded > &': {
            fontWeight: theme.typography.fontWeightRegular,
        },
    },
    group: {
        marginLeft: 0,
        '& $content': {
            paddingLeft: theme.spacing(2),
        },
    },
    expanded: {},
    label: {
        fontWeight: 'inherit',
        color: 'inherit',
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
        marginRight: theme.spacing(1),
    },
    labelText: {
        fontWeight: 'inherit',
        flexGrow: 1,
    },
}));
function StyledTreeItem(props) {
    const classes = useTreeItemStyles();
    const { labelText, labelIcon, labelInfo, color, bgColor, triggerDrop } = props, other = __rest(props, ["labelText", "labelIcon", "labelInfo", "color", "bgColor", "triggerDrop"]);
    const handleTriggerDrop = () => {
        triggerDrop(labelText);
    };
    return (React.createElement(TreeItem_1.default, Object.assign({ label: React.createElement("div", { className: classes.labelRoot },
            React.createElement(react_draggable_1.default, { defaultPosition: { x: 0, y: 0 }, position: { x: 0, y: 0 }, scale: 1, onStop: handleTriggerDrop },
                React.createElement("div", { style: { display: "flex", flexDirection: 'row' } },
                    React.createElement("div", { className: classes.labelIcon }, labelIcon),
                    React.createElement(Typography_1.default, { variant: "body2", className: classes.labelText }, labelText)))), style: {
            '--tree-view-color': color,
            '--tree-view-bg-color': bgColor,
        }, classes: {
            root: classes.root,
            content: classes.content,
            expanded: classes.expanded,
            group: classes.group,
            label: classes.label,
        } }, other)));
}
const useStyles = styles_1.makeStyles(styles_1.createStyles({
    root: {
        flexGrow: 1
    },
}));
function CustomizedTreeView(props) {
    const classes = useStyles();
    const { data, triggerDrop } = props;
    const byGroyp = _.groupBy(data, (o) => o.group);
    const treeData = Object.keys(byGroyp).reduce((ret, group) => {
        ret[group] = _.groupBy(byGroyp[group], (o) => o.category);
        return ret;
    }, {});
    const ids = [];
    let curId = 0;
    const buildTree = () => {
        return Object.keys(treeData).map(group => {
            curId += 1;
            ids.push(curId.toString());
            return React.createElement(TreeItem_1.default, { key: `group-${curId}`, nodeId: curId.toString(), label: React.createElement(Typography_1.default, { variant: "body1", style: { fontWeight: `bold` } }, `${group} Steps`) }, Object.keys(treeData[group]).map(category => {
                curId += 1;
                ids.push(curId.toString());
                return React.createElement(TreeItem_1.default, { key: `category-${curId}`, nodeId: curId.toString(), label: category }, treeData[group][category].map((item, index) => {
                    curId += 1;
                    ids.push(curId.toString());
                    return React.createElement(StyledTreeItem, { key: `item-${curId}`, nodeId: curId.toString(), triggerDrop: triggerDrop, labelText: item.type, labelIcon: item.icon, labelInfo: item.category });
                }));
            }));
        });
    };
    return (React.createElement(TreeView_1.default, { className: classes.root, defaultExpanded: ids, defaultCollapseIcon: React.createElement(MinusSquare, null), defaultExpandIcon: React.createElement(PlusSquare, null), defaultEndIcon: React.createElement("div", { style: { width: 24 } }) }, !!data && buildTree()));
}
exports.default = CustomizedTreeView;
//# sourceMappingURL=CustomizedTreeView.js.map
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
const ArrowDropDown_1 = require("@material-ui/icons/ArrowDropDown");
const ArrowRight_1 = require("@material-ui/icons/ArrowRight");
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
    const { labelText, labelIcon, labelInfo, color, bgColor } = props, other = __rest(props, ["labelText", "labelIcon", "labelInfo", "color", "bgColor"]);
    return (React.createElement(TreeItem_1.default, Object.assign({ label: React.createElement("div", { className: classes.labelRoot },
            React.createElement("div", { className: classes.labelIcon }, labelIcon),
            React.createElement(Typography_1.default, { variant: "body2", className: classes.labelText }, labelText),
            React.createElement(Typography_1.default, { variant: "caption", color: "inherit" }, labelInfo)), style: {
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
    const { data } = props;
    return (React.createElement(TreeView_1.default, { className: classes.root, defaultExpanded: [], defaultCollapseIcon: React.createElement(ArrowDropDown_1.default, null), defaultExpandIcon: React.createElement(ArrowRight_1.default, null), defaultEndIcon: React.createElement("div", { style: { width: 24 } }) }, !!data && data.map((item, index) => {
        return React.createElement(StyledTreeItem, { nodeId: index.toString(), labelText: item.type, labelIcon: item.icon, labelInfo: item.category });
    })));
}
exports.default = CustomizedTreeView;
//# sourceMappingURL=CustomizedTreeView.js.map
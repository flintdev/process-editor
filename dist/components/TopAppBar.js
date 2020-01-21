"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const AppBar_1 = require("@material-ui/core/AppBar");
const Toolbar_1 = require("@material-ui/core/Toolbar");
const IconButton_1 = require("@material-ui/core/IconButton");
const Typography_1 = require("@material-ui/core/Typography");
const InputBase_1 = require("@material-ui/core/InputBase");
const Badge_1 = require("@material-ui/core/Badge");
const MenuItem_1 = require("@material-ui/core/MenuItem");
const Menu_1 = require("@material-ui/core/Menu");
const Menu_2 = require("@material-ui/icons/Menu");
const Search_1 = require("@material-ui/icons/Search");
const AccountCircle_1 = require("@material-ui/icons/AccountCircle");
const Mail_1 = require("@material-ui/icons/Mail");
const Notifications_1 = require("@material-ui/icons/Notifications");
const MoreVert_1 = require("@material-ui/icons/MoreVert");
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: styles_1.fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: styles_1.fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));
function TopAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (React.createElement(Menu_1.default, { anchorEl: anchorEl, anchorOrigin: { vertical: 'top', horizontal: 'right' }, id: menuId, keepMounted: true, transformOrigin: { vertical: 'top', horizontal: 'right' }, open: isMenuOpen, onClose: handleMenuClose },
        React.createElement(MenuItem_1.default, { onClick: handleMenuClose }, "Profile"),
        React.createElement(MenuItem_1.default, { onClick: handleMenuClose }, "My account")));
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (React.createElement(Menu_1.default, { anchorEl: mobileMoreAnchorEl, anchorOrigin: { vertical: 'top', horizontal: 'right' }, id: mobileMenuId, keepMounted: true, transformOrigin: { vertical: 'top', horizontal: 'right' }, open: isMobileMenuOpen, onClose: handleMobileMenuClose },
        React.createElement(MenuItem_1.default, null,
            React.createElement(IconButton_1.default, { "aria-label": "show 4 new mails", color: "inherit" },
                React.createElement(Badge_1.default, { badgeContent: 4, color: "secondary" },
                    React.createElement(Mail_1.default, null))),
            React.createElement("p", null, "Messages")),
        React.createElement(MenuItem_1.default, null,
            React.createElement(IconButton_1.default, { "aria-label": "show 11 new notifications", color: "inherit" },
                React.createElement(Badge_1.default, { badgeContent: 11, color: "secondary" },
                    React.createElement(Notifications_1.default, null))),
            React.createElement("p", null, "Notifications")),
        React.createElement(MenuItem_1.default, { onClick: handleProfileMenuOpen },
            React.createElement(IconButton_1.default, { "aria-label": "account of current user", "aria-controls": "primary-search-account-menu", "aria-haspopup": "true", color: "inherit" },
                React.createElement(AccountCircle_1.default, null)),
            React.createElement("p", null, "Profile"))));
    return (React.createElement("div", { className: classes.grow },
        React.createElement(AppBar_1.default, { position: "static" },
            React.createElement(Toolbar_1.default, null,
                React.createElement(IconButton_1.default, { edge: "start", className: classes.menuButton, color: "inherit", "aria-label": "open drawer" },
                    React.createElement(Menu_2.default, null)),
                React.createElement(Typography_1.default, { className: classes.title, variant: "h6", noWrap: true }, "Material-UI"),
                React.createElement("div", { className: classes.search },
                    React.createElement("div", { className: classes.searchIcon },
                        React.createElement(Search_1.default, null)),
                    React.createElement(InputBase_1.default, { placeholder: "Search\u2026", classes: {
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }, inputProps: { 'aria-label': 'search' } })),
                React.createElement("div", { className: classes.grow }),
                React.createElement("div", { className: classes.sectionDesktop },
                    React.createElement(IconButton_1.default, { "aria-label": "show 4 new mails", color: "inherit" },
                        React.createElement(Badge_1.default, { badgeContent: 4, color: "secondary" },
                            React.createElement(Mail_1.default, null))),
                    React.createElement(IconButton_1.default, { "aria-label": "show 17 new notifications", color: "inherit" },
                        React.createElement(Badge_1.default, { badgeContent: 17, color: "secondary" },
                            React.createElement(Notifications_1.default, null))),
                    React.createElement(IconButton_1.default, { edge: "end", "aria-label": "account of current user", "aria-controls": menuId, "aria-haspopup": "true", onClick: handleProfileMenuOpen, color: "inherit" },
                        React.createElement(AccountCircle_1.default, null))),
                React.createElement("div", { className: classes.sectionMobile },
                    React.createElement(IconButton_1.default, { "aria-label": "show more", "aria-controls": mobileMenuId, "aria-haspopup": "true", onClick: handleMobileMenuOpen, color: "inherit" },
                        React.createElement(MoreVert_1.default, null))))),
        renderMobileMenu,
        renderMenu));
}
exports.default = TopAppBar;
//# sourceMappingURL=TopAppBar.js.map
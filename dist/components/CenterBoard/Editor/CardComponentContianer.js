"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const Card_1 = require("@material-ui/core/Card");
const CardHeader_1 = require("@material-ui/core/CardHeader");
const CardContent_1 = require("@material-ui/core/CardContent");
const Avatar_1 = require("@material-ui/core/Avatar");
const colors_1 = require("@material-ui/core/colors");
const InputBase_1 = require("@material-ui/core/InputBase");
const IconButton_1 = require("@material-ui/core/IconButton");
const MoreVert_1 = require("@material-ui/icons/MoreVert");
const StepManager_1 = require("../../../utils/StepManager");
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    card: {
        maxWidth: 345,
        minWidth: 345
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: colors_1.red[500],
    },
}));
function CardComponentContianer(props) {
    const classes = useStyles({});
    return (React.createElement(Card_1.default, { className: classes.card },
        React.createElement(CardHeader_1.default, { avatar: React.createElement(Avatar_1.default, { "aria-label": "recipe", className: classes.avatar }, props.icon), action: React.createElement(IconButton_1.default, { "aria-label": "settings", onClick: () => props.stepDbClick(new StepManager_1.default().cleanStepData(props.data)) },
                React.createElement(MoreVert_1.default, null)), title: props.type, subheader: props.category }),
        React.createElement(CardContent_1.default, { style: { backgroundColor: '#ddd' } },
            React.createElement(InputBase_1.default, { disabled: true, style: { padding: 10, backgroundColor: `white`, textAlign: `center`, width: '100%' }, autoFocus: true, defaultValue: props.label, inputProps: { 'aria-label': 'naked' } }))));
}
exports.default = CardComponentContianer;
//# sourceMappingURL=CardComponentContianer.js.map
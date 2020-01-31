import * as React from "react";
import { createEditor } from "./ReteContoller";
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState } from "src/redux/state";
import * as actions from "src/redux/modules/editor/actions";

const styles = createStyles({
    root: {

    },
    container: {
        width: 300,
    }
});

class Editor extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            reteContainer: null,
            focusEditor: () => { }
        }
    }

    componentDidMount = () => {
        const { initialData, stepOptions } = this.props;
        this.setState({ initialData: initialData });
        const init = async (ref: HTMLDivElement, data: any, action: (editorConfig: any) => void) => {
            const { focusEditor } = await createEditor(ref, data, action, stepOptions);
            this.setState({ focusEditor: focusEditor });
        };
        const tmp = (
            <div
                style={{ width: "100%", height: "100%"}}
                ref={ref =>
                    ref && init(ref, initialData, this.onChange)
                }
            />
        );
        this.setState({ reteContainer: tmp });
    };

    onChange = (editorConfig: any) => {
        console.log("onChange: ", editorConfig);
        this.props.setEditorJSON(editorConfig);

        //Uncomment this and we get in an infinite loop !!!!
        this.setState({ editorConfig });
    };

    render() {
        const { reteContainer } = this.state;
        return (
            <React.Fragment>
                <IconButton onClick={() => this.state.focusEditor()} style={{ position: 'absolute' }}>
                    <CenterFocusStrongIcon />
                </IconButton>
                {reteContainer}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    return state;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.EditorAction>) => {
    return {
        setEditorJSON: (data: object) => dispatch(actions.setEditorJSON(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Editor));

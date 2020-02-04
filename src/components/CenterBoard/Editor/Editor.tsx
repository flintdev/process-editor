import * as React from "react";
import { createEditor } from "./ReteContoller";
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState } from "../../../redux/state";
import * as actions from "../../../redux/modules/editor/actions";

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
        this.props.editorActions.handleRender = this.handleRender;
        const { initialData, stepOptions, stepDbClick } = this.props;
        this.setState({ initialData: initialData });
        const init = async (ref: HTMLDivElement, data: any, action: (editorConfig: any) => void) => {
            const { focusEditor, reRender } = await createEditor(ref, data, action, stepOptions, stepDbClick);
            this.setState({ focusEditor: focusEditor, reRender: reRender });
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
        this.props.setEditorJSON(editorConfig);

        //Uncomment this and we get in an infinite loop !!!!
        this.setState({ editorConfig });
    };

    handleRender = (newStepData: any) => {

        const newEditorConfig = {...this.props.editor.editorJSON};
        // console.log('>>> this.props.editor.editorJSON', this.props.editor.editorJSON);
        newEditorConfig.nodes[newStepData.id] = newStepData;
        // this.props.setEditorJSON(newEditorConfig);
        // console.log('>>> newEditorConfig', newEditorConfig)

        this.state.reRender(newEditorConfig);
    }

    render() {
        const { reteContainer } = this.state;

        return (
            <React.Fragment>
                <div style={{ position: 'absolute', display: 'flex' }}>
                    <IconButton onClick={() => this.state.focusEditor()}>
                        <CenterFocusStrongIcon />
                    </IconButton>
                </div>
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

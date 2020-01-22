import * as React from "react";
import { createEditor } from "./ReteContoller";
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import IconButton from '@material-ui/core/IconButton';

class Editor extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            reteContainer: null,
            focusEditor: () => { }
        }
    }

    componentDidMount = () => {
        const { initialData } = this.props;
        this.setState({ initialData: initialData });
        const init = async (ref: HTMLDivElement, data: any, action: (editorConfig: any) => void) => {
            const { focusEditor } = await createEditor(ref, data, action);
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

export default Editor;
// src/ProcessEditor/ProcessEditor.tsx

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { store } from "../redux/store";
import { ProcessEditorProps } from "../interface";
import RootContainer from '../containers/RootContainer';

const styles = createStyles({
    root: {
        height: `100%`
    },
});

export interface Props extends WithStyles<typeof styles>, ProcessEditorProps {
    operations: any,
    stepOptions: any,
    editorData: any,
    onSaved: any,
    onClose: any,
    stepDbClick: any,
    name?: string
}

class ProcessEditor extends React.Component<Props, object> {
    state = {};

    componentDidMount(): void {

    }

    render() {
        const { classes } = this.props;

        return (
            <Provider store={store}>
                <div className={classes.root}>
                    <RootContainer {...this.props}/>
                </div>
            </Provider>
        )
    }
}

export default withStyles(styles)(ProcessEditor);

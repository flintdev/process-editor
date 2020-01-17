// src/ModelEditor/ModelEditor.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import {Provider} from 'react-redux';
import {store} from "../redux/store";
import {ProcessEditorProps} from "../interface";
import ProjectContainer from '../containers/ProjectContainer';

const styles = createStyles({
    root: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
    },
});

export interface Props extends WithStyles<typeof styles>, ProcessEditorProps {

}

class ModelEditor extends React.Component<Props, object> {
    state = {};

    componentDidMount(): void {

    }

    render() {
        const {classes} = this.props;
        return (
            <Provider store={store}>
                <div className={classes.root}>
                    <ProjectContainer/>
                </div>
            </Provider>
        )
    }
}

export default withStyles(styles)(ModelEditor);

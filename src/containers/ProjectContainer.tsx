// src/containers/ProjectContainer.tsx

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState, ProjectState } from "../redux/state";
import * as actions from "../redux/modules/project/actions";
import Button from '@material-ui/core/Button';

const styles = createStyles({
    root: {

    },
    container: {
        width: 300,
    }
});

export interface Props extends WithStyles<typeof styles>, ProjectState {

}

class ProjectContainer extends React.Component<Props, any> {
    state = {

    };

    componentDidMount(): void {

    }

    render() {
        const {classes, projectName, setProjectName} = this.props;
        console.log(this.props);
        return (
            <div className={classes.root}>
                <Button
                    variant="contained"
                    color={"primary"}
                    onClick={() => setProjectName && setProjectName(new Date().getTime().toString())}>
                        set project as time
                </Button>
                {projectName}
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return state.project;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.ProjectAction>) => {
    return {
        setProjectName: (data: String) => dispatch(actions.setProjectName(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProjectContainer));

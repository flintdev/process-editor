// src/containers/ProjectContainer.tsx

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState, RootState } from "../redux/state";
import * as actions from "../redux/modules/root/actions";
import Button from '@material-ui/core/Button';
import LeftPaneContainer from '../components/LeftPane/LeftPaneContainer';
import TopAppBar from '../components/TopAppBar';
import { CssBaseline } from '@material-ui/core';

const styles = createStyles({
    root: {

    },
    container: {
        width: 300,
    }
});

export interface Props extends WithStyles<typeof styles>, StoreState {

}

class RootContainer extends React.Component<Props, any> {
    state = {

    };

    componentDidMount(): void {

    }

    render() {
        const { classes } = this.props;
        // const {projectName, setProjectName} = this.props.root;
        console.log(1, this.props);
        return (
            <React.Fragment>
                <CssBaseline />
                {/* <Button
                    variant="contained"
                    color={"primary"}
                    onClick={() => setProjectName && setProjectName(new Date().getTime().toString())}>
                        set project as time
                </Button>
                {projectName} */}
                <TopAppBar/>
                <LeftPaneContainer>
                    <div>rete</div>
                </LeftPaneContainer>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return state;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.RootAction>) => {
    return {
        setProjectName: (data: String) => dispatch(actions.setProjectName(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RootContainer));

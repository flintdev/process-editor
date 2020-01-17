// example/ExampleContainer.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import {data} from "./data";
import ProcessEditor from "../dist/ProcessEditor";

const styles = createStyles({
    root: {

    },
});

export interface Props extends WithStyles<typeof styles>{

}

class ExampleContainer extends React.Component<Props, object> {
    state = {
    
    };
    
    componentDidMount(): void {
        console.log('>>> data', data);
    }
    
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <ProcessEditor/>
            </div>
        )
    }
}

export default withStyles(styles)(ExampleContainer);

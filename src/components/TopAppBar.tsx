import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import RedoIcon from '@material-ui/icons/Redo';
import UndoIcon from '@material-ui/icons/Undo';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState } from "../redux/state";
import * as actions from "../redux/modules/editor/actions";
import StepManager from "../utils/StepManager";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    }
  }),
);

function TopAppBar(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
        <Toolbar style={{border: `1px solid gray`}}>
          <IconButton
            onClick={() => props.callAction('undo')}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <UndoIcon />
          </IconButton>
          <IconButton
            onClick={() => props.callAction('redo')}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <RedoIcon />
          </IconButton>
          <div className={classes.grow} />
          <Button className={classes.menuButton} variant="contained" color="primary" onClick={() => props.onSaved(new StepManager().cleanEditorData(props.editor.editorJSON))}>
            Save
          </Button>
          <Button className={classes.menuButton} variant="text" color="primary" onClick={props.onClose}>
            Close
          </Button>
        </Toolbar>
    </div>
  );
}

const mapStateToProps = (state: StoreState) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.EditorAction>) => {
  return {
      setEditorJSON: (data: object) => dispatch(actions.setEditorJSON(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopAppBar);
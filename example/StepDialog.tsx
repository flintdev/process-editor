import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default function StepDialog(props: any) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState('');

  const handleClickOpen = (stepData: any) => {
    setOpen(true);
    setData(JSON.stringify(stepData, null, 4))
  };

  const handleClose = (isSave: boolean) => {
    setOpen(false);
    if (isSave) props.stepDbClickUpdate(JSON.parse(data));
  };

  React.useEffect(() => {
    props.actions.handleClickOpen = handleClickOpen;
    props.actions.handleClose = handleClose;
  })


  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={'md'}
        open={open}
        onClose={() => handleClose(false)}
        scroll={'paper'}
      >
        <DialogTitle>Simple Editor</DialogTitle>
        <DialogContent dividers={true}>
            <TextField
              style={{ height: `80vh`, width: `100%` }}
              value={data}
              onChange={e => setData(e.target.value)}
              multiline={true}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(true)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
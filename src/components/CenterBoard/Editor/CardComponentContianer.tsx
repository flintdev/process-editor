import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StepManager from '../../../utils/StepManager';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 400,
      minWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: "#eee",
      color: "black"
    },
  }),
);

export default function CardComponentContianer(props: { data: any, type: String, category: String, label: String, icon: any, stepDbClick: any}) {
  const classes = useStyles({});

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          React.cloneElement(props.icon, {style: { fontSize: 45, color: "black"}})
        }
        action={
          <IconButton aria-label="settings" onClick={() => props.stepDbClick(new StepManager().cleanStepData(props.data))}>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.type}
        subheader={props.category}
      />
      <CardContent style={{backgroundColor: '#ddd'}}>
        <InputBase
          disabled={true}
          style={{backgroundColor: `#ddd`, textAlign: `center`, width: '100%', fontSize: 30, color: "black", fontWeight: 600}}
          autoFocus={true}
          defaultValue={props.label}
          inputProps={{ 'aria-label': 'naked' }}
        />
      </CardContent>
    </Card>
  );
}
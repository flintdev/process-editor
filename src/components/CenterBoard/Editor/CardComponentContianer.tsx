import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StepManager from '../../../utils/StepManager';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
      minWidth: 345
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
      backgroundColor: red[500],
    },
  }),
);

export default function CardComponentContianer(props: { data: any, type: String, category: String, label: String, icon: any, stepDbClick: any}) {
  const classes = useStyles({});

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.icon}
          </Avatar>
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
          style={{padding: 10, backgroundColor: `white`, textAlign: `center`, width: '100%'}}
          autoFocus={true}
          defaultValue={props.label}
          inputProps={{ 'aria-label': 'naked' }}
        />
      </CardContent>
    </Card>
  );
}
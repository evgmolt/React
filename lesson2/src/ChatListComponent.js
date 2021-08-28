import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(() => ({
  root: {
    width: "50%",
    height: "100%",
    float: "left",
    backgroundColor: "BurlyWood",
  },
}));

export default function ChatListComponent(chatsArray) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
          <ListItem >
              <ListItemText primary={chatsArray.array[0].name} />
          </ListItem>
          <ListItem >
              <ListItemText primary={chatsArray.array[1].name} />
          </ListItem>
      </List>
    </div>
  );
}

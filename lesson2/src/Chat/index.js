import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./chatSlice";
import MessageListComponent from "./MessageListComponent";
import ChatListComponent from "../ChatListComponent";
import InputWrapperComponent from "./InputWrapperComponent"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  chatWrapper: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  },
  componentWrapper: {
      height: "500px",
      width: "600px",
      border: "1px solid black",
      display: "flex",
      flexDirection: "column"
  },
  lists: {
    height : "90%"
  }
}));

function Chat() {
  // const [messagesArray, setMessagesArray] = useState([]);
  const { messagesArray } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const classes = useStyles();

  const onSendMessage = (messageText) => {
    dispatch(addMessage({ author: "Author", messageText }));
  };

  useEffect(() => {
    if (messagesArray.length > 0) {
      setTimeout(() => {
        console.log("Message was sent");
      }, 1000);
    }
  }, [messagesArray]);


  let chatsArray = [{ id : "0", name : "Name 1"}, { id : "2", name : "Name 2"}];

  return (
    <div className={classes.chatWrapper}>
      <div className={classes.componentWrapper}>
        <div className={classes.lists}>
        <ChatListComponent array={chatsArray}/>
        <MessageListComponent array= {messagesArray}/>
        </div>
        <InputWrapperComponent onSendMessage = {onSendMessage}/>
      </div>
    </div>
  );
} 

export default Chat;

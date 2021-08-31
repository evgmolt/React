import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./chatSlice";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  chatWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  componentWrapper: {
    width: "400px",
    height: "600px",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
  },
}));

function Chat() {
  const urlParams = useParams();
  const chatId = Number.parseInt(urlParams.id);
  console.log("INDEX chatId " + chatId);
  const { chats } = useSelector((state) => state.chat);
  const messagesArray = chats.find((chat) => chat.id === chatId).messagesArray;
  console.log("INDEX messagesArray " + messagesArray);
  const dispatch = useDispatch();

  const classes = useStyles();

  const onSendMessage = (messageText) => {
    dispatch(addMessage({ chatId, messageText }));
  };

  useEffect(() => {
    if (messagesArray.length > 0) {
      setTimeout(() => {
        // console.log("Message was sent");
      }, 1000);
    }
  }, [messagesArray]);

  return (
    <div className={classes.chatWrapper}>
      <div className={classes.componentWrapper}>
        <MessageList messagesArray={messagesArray} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
}

export default Chat;

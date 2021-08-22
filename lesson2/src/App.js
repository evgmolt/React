import React, { useState, useEffect } from "react";
import MessageListComponent from "./MessageListComponent";
import ChatListComponent from "./ChatListComponent";
import InputWrapperComponent from "./InputWrapperComponent"
import { makeStyles } from '@material-ui/core/styles';

function App() {

  const [messagesArray, setMessagesArray] = useState([]);
  
  const onSendMessage= (messageText, author) => {
    setMessagesArray(prev => [...prev, {
      messageText,
      author : author,
      }
    ]);
  }
  
  const useStyles = makeStyles(() => ({
    appWrapper: {
        height: "100vh",
        width: "100vw",
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

  const classes = useStyles();

  useEffect(() => {
    if (messagesArray.length > 0) {
      const botMessage = "Сообщение получено";
      const botAuthor = "bot";
      const lastMessage = messagesArray[messagesArray.length - 1];
      if (lastMessage.author !== botAuthor) {
        setTimeout(() => onSendMessage(botMessage, botAuthor), 1500);
      }
    }
  }, [messagesArray])

  let chatsArray = [{ id : "0", name : "Name 1"}, { id : "2", name : "Name 2"}];

  return (
    <div className={classes.appWrapper}>
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

export default App;

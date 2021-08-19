import React, { useState, useEffect } from "react";
import './App.css';
import MessageListComponent from "./MessageListComponent";
import InputWrapperComponent from "./InputWrapperComponent"

function App() {

  const [messagesArray, setMessagesArray] = useState([]);

  const onSendMessage= (messageText, author) => {
    setMessagesArray(prev => [...prev, {
      messageText,
      author : author,
      }
    ]);
  }
  
  useEffect(() => {
    if (messagesArray.length > 0) {
      const botMessage = "Сообщение получено";
      const botAuthor = "bot";
      const lastMessage = messagesArray[messagesArray.length - 1];
      console.log(lastMessage);
      if (lastMessage.author !== botAuthor) {
        console.log("Into");
        setTimeout(() => onSendMessage(botMessage, botAuthor), 1500);
      }
    }
  }, [messagesArray])

  return (
    <div className="mainWrapper">
      <MessageListComponent array= {messagesArray}/>
      <InputWrapperComponent onSendMessage = {onSendMessage}/>
    </div>
  );
} 

export default App;

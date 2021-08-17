import React, { useState, useEffect } from "react";
import './App.css';
import InputComponent from "./InputComponent";
import MessageListComponent from "./MessageListComponent";

function App() {

  const [inputMessage, setInputMessage] = useState("");
  const [messagesArray, setMessagesArray] = useState([]);


  const onSendMessage= () => {
    setMessagesArray(prev => [...prev, inputMessage]);
    setInputMessage("");
    setTimeout(() => {
      setMessagesArray(prev => [...prev, "Сообщение получено"]);
    }, 1500);
    
  }

  const onEnterPress = (key) => {
    if (key.code === "Enter") {
      onSendMessage();
    }
  }

  useEffect(() => {
   
  }, [messagesArray])

  return (
    <div className="mainWrapper">
{/*      <div className="messageList">
        {messagesArray.map((message, i) => (
            <div key={i}>{message}</div>
        ))}
        </div>*/}
      <MessageListComponent array= {messagesArray}/>
      <div className="inputWrapper">
{/*}        <input 
          className="input" 
          value={inputMessage} 
          onChange={e => setInputMessage(e.target.value)}
          onKeyDown={(key) => {
            if (key.code === "Enter") {
              onSendMessage();
            }
          }}
        />*/}
        <InputComponent value={inputMessage} onChange={setInputMessage} onKeyDown={(key) =>{
              console.log("Code " + key.code);
              if (key.code === "Enter") {
              onSendMessage();
            }}}/>
        <button onClick={onSendMessage}>Отправить</button>
      </div>
    </div>
  );
} 

export default App;

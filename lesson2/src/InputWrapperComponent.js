import { useState } from 'react';
import './App.css';
import InputComponent from "./InputComponent";


const InputWrapperComponent = ({onSendMessage}) => {
    const [inputMessage, setInputMessage] = useState("");

    const SendAndRemoveInput =() => {
        if (inputMessage !== "")
        {
            onSendMessage(inputMessage, "author");
            setInputMessage(""); 
        }
        
    }
    return (
        <div className="inputWrapper">

        <InputComponent value={inputMessage} onChange={setInputMessage} onKeyDown={(key) =>{
              if (key.code === "Enter") {
                SendAndRemoveInput();
            }}}/>
        <button onClick={SendAndRemoveInput}>Отправить</button>
      </div>
    )
}

export default InputWrapperComponent;
import { useState } from 'react';
import './App.css';
import Message from './Message';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input className = "input-class"
        value = {inputText} 
        onChange = {e => setInputText(e.target.value)}/>
      <Message textToShow = {inputText}/>
    </div>
  );
}

export default App;

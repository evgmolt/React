import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import store from "./store";
import Playground from "./Playground";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />    
    </Provider>
{/*      <Playground /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

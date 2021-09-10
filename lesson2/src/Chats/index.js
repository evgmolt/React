import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Chat1 from "./Chat1/index.js";
import Chat2 from "./Chat2/index.js";


const Chats = () => {
   return <div>Chats
        <nav>
        <ul>
          <li>
            <Link to="/Chats/Chat1">
              Chat 1
            </Link>
          </li>
          <li>
            <Link to="/Chats/Chat2">
              Chat 2
            </Link>
          </li>
        </ul>
      </nav>

        <Switch>
          <Route path="/Chats/Chat1">
            <Chat1 />
          </Route>
          <Route path="/Chats/Chat2">
            <Chat2 />
          </Route>
          <Route path="/Chats">
            Chat not Found
          </Route>
        </Switch>
    </div>
}


export default Chats;
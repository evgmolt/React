import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Chat from "./Chat";
import Home from "./Home"
import Playground from "./Playground";
import Profile from "./Profile";
import Chats from "./Chats";
import AppBar from "./AppBar";
import { Typography } from "@material-ui/core";

  const App = () => {
      return <Router>
          <AppBar />
          <Switch>
              <Route path="/Chat">
                <Chat />
              </Route>
              <Route path="/Playground">
                <Playground /> 
              </Route>
              <Route path="/Profile">
                <Profile />  
              </Route>
              <Route path="/Chats">
                <Chats />  
              </Route>
              <Route path="/">
                <Home />  
              </Route>
          </Switch>
      </Router>
  }

  export default App;
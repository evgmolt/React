import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomRoute from "./util/CustomRoute";
import Chat from "./Chat";
import Playground from "./Playground";
import Stocks from "./Stocks";
import Profile from "./Profile";
import Home from "./Home";
import AppBar from "./AppBar";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase/compat";
import { useAuthState } from "react-firebase-hooks/auth";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
}));

const firebaseConfig = {
  apiKey: "AIzaSyBQuSDcYGA4kXHzGbSVmPb_XgxY_RsPtuE",
  authDomain: "gb-react-project-b7c7f.firebaseapp.com",
  databaseURL: "https://gb-react-project-b7c7f-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "gb-react-project-b7c7f",
  storageBucket: "gb-react-project-b7c7f.appspot.com",
  messagingSenderId: "123425933655",
  appId: "1:123425933655:web:19024b176853ffe7bcd612"
};


firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

const App = () => {
  const classes = useStyles();

  const [user, loading] = useAuthState(firebase.auth());

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <Router>
      <div className={classes.mainWrapper}>
        <AppBar />

        <Switch>
          <Route path="/chat/:id">
            <Chat />
          </Route>

          <CustomRoute path="/playground" secured withAppBar={true}>
            <Playground myProps={1} />
          </CustomRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>          

          <Route path="/Stocks" secured withAppBar={true}>
            <Stocks />
          </Route>

          <Route path="/Profile">
            <Profile />
          </Route>

          <Route path="/" withAppBar={false}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

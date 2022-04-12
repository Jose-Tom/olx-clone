import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import Post from "./store/postContext";
import Home from "./Pages/Home";
/**
 * ?  =====Import Components=====
 */

import { AuthContext, FirebaseContext } from "./store/Context";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div>
      <Post>
        <Router>
          <Route exact path="/olx-clone/">
            <Home />
          </Route>
          <Route path="/olx-clone/signup">
            <Signup />
          </Route>
          <Route path="/olx-clone/login">
            <Login />
          </Route>
          <Route path="/olx-clone/create">
            <Create />
          </Route>
          <Route path="/olx-clone/view">
            <View />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import Login from "./components/login/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomBootstrap.css";
import "./App.css";
import {
  removeTokenFromLocalStorage,
  setTokenInLocalStorage,
  validateLogin,
} from "./functions/loginManagement";
import { recolacteUserAuth } from "./functions/relocateUserAuth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formIsValid, setFormIsValid] = useState();
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    setWaiting(true);

    setTimeout(async () => {
      const response = await validateLogin(email, password);

      if (response) {
        setIsLoggedIn(true);
        setTokenInLocalStorage();

        // setTokenInLocalStorage(response.data.token);
      }

      if (!response) setFormIsValid(false);

      setWaiting(false);
    }, 1000);
  };

  const logoutHandler = () => {
    removeTokenFromLocalStorage("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          {recolacteUserAuth({
            check: isLoggedIn,
            component: <Home onLogout={logoutHandler} />,
            to: <Redirect to={"/login"} />,
          })}
        </Route>
        <Route path="/login">
          {recolacteUserAuth({
            check: !isLoggedIn,
            component: (
              <Login
                onLogin={loginHandler}
                isValid={formIsValid}
                setIsValid={setFormIsValid}
                isWaiting={waiting}
              />
            ),
            to: <Redirect to={"/"} />,
          })}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

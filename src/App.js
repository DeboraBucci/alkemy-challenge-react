import React, { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import Login from "./components/login/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Bootstrap.css";
import "./App.css";
import {
  removeTokenFromLocalStorage,
  setTokenInLocalStorage,
  validateLogin,
} from "./components/functions/loginManagement";

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
        setTokenInLocalStorage(response.data.token);
      }

      if (!response) setFormIsValid(false);

      setWaiting(false);
    }, 1000);
  };

  const logoutHandler = () => {
    removeTokenFromLocalStorage("isLoggedIn");
    setIsLoggedIn(false);
  };

  const authUser = ({ check, component, to }) => {
    return check ? component : <Redirect to={to} />;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {authUser({
            check: isLoggedIn,
            component: <Home onLogout={logoutHandler} />,
            to: "/login",
          })}
        </Route>
        <Route path="/login">
          {authUser({
            check: !isLoggedIn,
            component: (
              <Login
                onLogin={loginHandler}
                isValid={formIsValid}
                setIsValid={setFormIsValid}
                isWaiting={waiting}
              />
            ),
            to: "/",
          })}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import axios from "axios";

import Home from "./components/Home";
import LogIn from "./components/login/LogIn";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Bootstrap.css";

import SweetAlert from "./components/UI/SweetAlert";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formIsValid, setFormIsValid] = useState();
  const [waiting, setWaiting] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === token) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    setWaiting(true);

    setTimeout(() => {
      setWaiting(false);

      axios
        .post("http://challenge-react.alkemy.org", {
          email: email,
          password: password,
        })
        .then(function (response) {
          setIsLoggedIn(true);
          setFormIsValid(true);
          setToken(response.data.token);

          localStorage.setItem("isLoggedIn", `${response.data.token}`);
        })
        .catch(function (error) {
          console.error(error);
          setFormIsValid(false);
          SweetAlert({
            text: "Wrong credentials!",
          });
        });
    }, 1000);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const content = isLoggedIn ? (
    <Home onLogout={logoutHandler} />
  ) : (
    <LogIn
      onLogin={loginHandler}
      isValid={formIsValid}
      setIsValid={setFormIsValid}
      isWaiting={waiting}
    />
  );

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/">{content}</Route>
          <Route path="/login">{content}</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

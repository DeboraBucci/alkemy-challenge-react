import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";
import axios from "axios";

import Home from "./components/Home";
import LogIn from "./components/login/LogIn";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Bootstrap.css";

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

          localStorage.setItem("isLoggedIn", `${response.data.token}`);
        })
        .catch(function (error) {
          console.error(error);
          setFormIsValid(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong credentials!",
          });
        });
    }, 1000);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {!isLoggedIn && (
        <LogIn
          onLogin={loginHandler}
          isValid={formIsValid}
          isWaiting={waiting}
        />
      )}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </div>
  );
}

export default App;

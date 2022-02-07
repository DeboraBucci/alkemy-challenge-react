import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import LogIn from "./components/login/LogIn";
import Axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formIsValid, setFormIsValid] = useState();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    Axios.post("http://challenge-react.alkemy.org", {
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
      });
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {!isLoggedIn && <LogIn onLogin={loginHandler} isValid={formIsValid} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </div>
  );
}

export default App;

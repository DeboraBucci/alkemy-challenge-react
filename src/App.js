import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import LogIn from "./components/login/LogIn";
import Axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        localStorage.setItem("isLoggedIn", `${response.data.token}`);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {!isLoggedIn && <LogIn onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </div>
  );
}

export default App;

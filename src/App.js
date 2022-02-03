import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import LogIn from "./components/login/LogIn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
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

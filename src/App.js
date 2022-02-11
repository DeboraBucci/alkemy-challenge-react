import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import LogIn from "./components/login/LogIn";
import Axios from "axios";
import Swal from "sweetalert2";
import Cart from "./components/cart/Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formIsValid, setFormIsValid] = useState();
  const [waiting, setWaiting] = useState(false);
  const [cartIsOpened, setCartIsOpened] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("isLoggedIn") ===
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE"
    ) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    setWaiting(true);
    setTimeout(() => {
      setWaiting(false);

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

  const openCartHandler = () => {
    setCartIsOpened(true);
  };

  const closeCartHandler = () => {
    setCartIsOpened(false);
  };

  return (
    <React.Fragment>
      {cartIsOpened && <Cart onCloseCart={closeCartHandler} />}
      {!isLoggedIn && (
        <LogIn
          onLogin={loginHandler}
          isValid={formIsValid}
          isWaiting={waiting}
        />
      )}
      {isLoggedIn && (
        <Home onLogout={logoutHandler} onOpenCart={openCartHandler} />
      )}
    </React.Fragment>
  );
}

export default App;

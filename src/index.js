import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";

import App from "./App";
import CartProvider from "./store/CartProvider";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

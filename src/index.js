import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";

import App from "./App";
import CartProvider from "./store/CartProvider";

import "./index.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/lilys-cuisine">
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

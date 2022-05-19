import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";

import App from "./App";
import CartProvider from "./store/CartProvider";

import "./index.css";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

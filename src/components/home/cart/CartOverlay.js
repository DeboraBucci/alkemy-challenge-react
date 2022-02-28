import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "../../UI/Backdrop";

import Cart from "./Cart";

const CartOverlay = (props) => {
  const portal = document.getElementById("overlays");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onCloseCart} />, portal)}
      {ReactDOM.createPortal(
        <Cart
          meals={props.meals}
          onCloseCart={props.onCloseCart}
          userName={props.userName}
        />,
        portal
      )}
    </React.Fragment>
  );
};

export default CartOverlay;

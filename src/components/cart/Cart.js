import React from "react";
import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.cart}>
        <button className={classes["btn-close"]}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div>Cart</div>
      </div>
    </React.Fragment>
  );
};

export default Cart;

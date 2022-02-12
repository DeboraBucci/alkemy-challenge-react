import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li key={props.key} className={classes["cart-item"]}>
      <div className={classes["img-box"]}>
        <img width={200} alt={props.title} src={props.image} />
      </div>
      <div className={classes.text}>
        <h3>{props.title}</h3>
        <p className={classes.price}>Price: $ {props.price}</p>
      </div>
    </li>
  );
};

export default CartItem;

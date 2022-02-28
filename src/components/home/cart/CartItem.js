import React from "react";

import classes from "./CartItem.module.css";

import RemoveFromCartButton from "../../buttons/RemoveFromCartButton";
import EmptyMealCard from "../../UI/EmptyMealCard";

const CartItem = (props) => {
  const content = props.image ? (
    <>
      <div className={`fx-cntr ${classes["img-box"]}`}>
        <img width={200} alt={props.title} src={props.image} />
      </div>
      <div className={classes.text}>
        <h3>{props.title}</h3>
        {props.price && <p className={classes.price}>Price: $ {props.price}</p>}
      </div>
      {props.title && <RemoveFromCartButton onClick={props.onRemove} />}
    </>
  ) : (
    <EmptyMealCard />
  );

  return (
    <li className={`${classes["cart-item"]} ${props.className}`}>{content}</li>
  );
};

export default CartItem;

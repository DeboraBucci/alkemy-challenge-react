import React from "react";
import classes from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
const CartItem = (props) => {
  return (
    <li className={`${classes["cart-item"]} ${props.className}`}>
      <div className={classes["img-box"]}>
        {props.image && <img width={200} alt={props.title} src={props.image} />}
        {!props.image && (
          <div className={classes.fallback}>
            <div className={classes.circle}>
              <FontAwesomeIcon icon={faUtensils} />
            </div>
          </div>
        )}
      </div>
      <div className={classes.text}>
        <h3>{props.title}</h3>
        {props.price && <p className={classes.price}>Price: $ {props.price}</p>}
        {!props.price && <p>Add a meal!</p>}
      </div>
    </li>
  );
};

export default CartItem;

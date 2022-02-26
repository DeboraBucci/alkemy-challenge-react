import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faUtensils,
  faDollarSign,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import CartContext from "../../store/cart-context";

import CartItem from "./CartItem";
import OrderMenuButton from "../../buttons/OrderMenuButton";
import ModalComp from "../../UI/ModalComp";

import classes from "./Cart.module.css";

import { timeTextGenerator } from "../../functions/timeTextGenerator";
const { timeCalculator } = require("../../functions/timeCalculator");

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [hours, minutes] = timeCalculator(
    +cartCtx.totalTime / cartCtx.totalDishes.length
  );

  const emptyCart = cartCtx.totalDishes.length === 0;

  const cartItemRemoveHandler = (item) => {
    const { id, isVegan } = item;
    cartCtx.removeItem(id, isVegan);
  };

  const cartItems = (
    <ul className={classes.list}>
      {props.meals.map((dish) => (
        <CartItem
          key={dish.item.id || Math.random()}
          title={dish.item.title}
          image={dish.item.image}
          price={dish.item.price}
          className={!dish.item.title && classes["empty-item"]}
          onRemove={
            cartItemRemoveHandler.bind(null, dish.item) || Math.random()
          }
        />
      ))}
    </ul>
  );

  return (
    <ModalComp className={classes.cart}>
      <div className={classes["title-box"]}>
        <h3>My Cart</h3>
      </div>

      {cartItems}

      <div>
        {!emptyCart && (
          <div className={classes.info}>
            <p>
              <FontAwesomeIcon icon={faUtensils} /> {cartCtx.totalServings}
            </p>
            <p>
              <FontAwesomeIcon icon={faClock} />{" "}
              {timeTextGenerator(hours, minutes).join(" ")}
            </p>
            <p>
              <FontAwesomeIcon icon={faHeartPulse} />{" "}
              {!emptyCart &&
                Math.round(
                  cartCtx.totalHealthScore / cartCtx.totalDishes.length
                )}
            </p>
            <p>
              <FontAwesomeIcon icon={faDollarSign} />{" "}
              {cartCtx.totalPrice.toFixed(2)}
            </p>
          </div>
        )}
        <div className={classes.actions}>
          <button onClick={props.onCloseCart} className={classes["btn-close"]}>
            Close
          </button>
          <OrderMenuButton />
        </div>
        <button onClick={props.onCloseCart} className={classes["btn-x"]}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </ModalComp>
  );
};

export default Cart;

import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faUtensils,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [meals, setMeals] = useState([]);
  const cartCtx = useContext(CartContext);
  const defaultArr = [
    {
      item: {
        id: Math.random(),
        title: null,
        image: null,
      },
    },
    {
      item: {
        id: Math.random(),
        title: null,
        image: null,
      },
    },
    {
      item: {
        id: Math.random(),
        title: null,
        image: null,
      },
    },
    {
      item: {
        id: Math.random(),
        title: null,
        image: null,
      },
    },
  ];

  useEffect(() => {
    cartCtx.totalDishes.map((dish) => {
      defaultArr.pop();
      defaultArr.unshift(dish);
    });

    setMeals(defaultArr);
  }, []);

  const hours = Math.floor(+cartCtx.totalTime / 60);
  const minutes = Math.floor(+cartCtx.totalTime % 60);

  const emptyCart = cartCtx.totalDishes.length === 0;

  const cartItems = (
    <ul className={classes.list}>
      {meals.map((dish) => (
        <CartItem
          key={dish.item.id}
          title={dish.item.title}
          image={dish.item.image}
          price={dish.item.price}
          className={!dish.item.title && classes["empty-item"]}
        />
      ))}
    </ul>
  );

  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.cart}>
        <div className={classes["title-box"]}>
          <h3>My Cart</h3>
        </div>

        {cartItems}

        {emptyCart && (
          <ul className={`${classes.list} ${classes["empty-list"]}`}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </ul>
        )}

        <div>
          <div className={classes.info}>
            <p>
              <FontAwesomeIcon icon={faUtensils} /> {cartCtx.totalDishes.length}
            </p>
            <p>
              <FontAwesomeIcon icon={faClock} />{" "}
              {hours !== 0 ? `${hours} h` : ""}{" "}
              {minutes !== 0 ? `${minutes} min` : ""}
            </p>
            <p>
              <FontAwesomeIcon icon={faDollarSign} />{" "}
              {cartCtx.totalPrice.toFixed(2)}
            </p>
          </div>
          <div className={classes.actions}>
            <button
              onClick={props.onCloseCart}
              className={classes["btn-close"]}
            >
              Close
            </button>
            <button
              disabled={emptyCart}
              className={`${classes["btn-order"]} ${
                emptyCart && classes.disabled
              }`}
            >
              Order <FontAwesomeIcon icon={faCircleCheck} />
            </button>
          </div>
          <button onClick={props.onCloseCart} className={classes["btn-x"]}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;

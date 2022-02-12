import React, { useContext } from "react";
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
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);

  const cartItems = (
    <ul className={classes.list}>
      {cartCtx.totalDishes.map((dish) => (
        <CartItem
          key={dish.item.id}
          title={dish.item.title}
          image={dish.item.image}
          price={dish.item.price}
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

        <div>
          <div className={classes.info}>
            <p>
              <FontAwesomeIcon icon={faUtensils} /> {cartCtx.totalDishes.length}
            </p>
            <p>
              <FontAwesomeIcon icon={faClock} /> 2hs
            </p>
            <p>
              <FontAwesomeIcon icon={faDollarSign} /> {cartCtx.totalPrice}
            </p>
          </div>
          <div className={classes.actions}>
            <button className={classes["btn-close"]}>Close</button>
            <button className={classes["btn-order"]}>
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

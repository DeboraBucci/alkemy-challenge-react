import React from "react";
import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.cart}>
        <h3>My Cart</h3>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vanilla</td>
              <td>2</td>
              <td>$50</td>
            </tr>
          </tbody>
        </table>

        <div>
          <div className={classes.info}>
            <p>Number of Dishes: 4</p>
            <p>Preparation Time: 2hs</p>
            <p>Total Amount: $350</p>
          </div>
          <div className={classes.actions}>
            <button className={classes["btn-close"]}>Close</button>
            <button className={classes["btn-order"]}>Order</button>
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

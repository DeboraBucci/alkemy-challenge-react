import React, { useContext } from "react";
import classes from "./Bar.module.css";
import CartContext from "../store/cart-context";

const Bar = () => {
  const cartCtx = useContext(CartContext);
  const hours = Math.floor(+cartCtx.totalTime / 60);
  const minutes = Math.floor(+cartCtx.totalTime % 60);

  console.log(hours, minutes);

  return (
    <div className={classes.bar}>
      <p>Total: ${Math.round(cartCtx.totalPrice)}</p>
      <p>
        Preparation Time: {hours ? `${hours} h` : ""}{" "}
        {minutes ? `${minutes} min` : ""}
      </p>
      <p>
        Health Score: {cartCtx.totalHealthScore / cartCtx.totalDishes.length}
      </p>
      <p>Dishes: {cartCtx.totalDishes.length}</p>
      <button>Order</button>
    </div>
  );
};

export default Bar;

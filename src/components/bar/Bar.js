import React, { useContext } from "react";
import classes from "./Bar.module.css";
import CartContext from "../store/cart-context";
import { faUtensils, faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bar = () => {
  const cartCtx = useContext(CartContext);
  const hours = Math.floor(+cartCtx.totalTime / 60);
  const minutes = Math.floor(+cartCtx.totalTime % 60);

  console.log(hours, minutes);

  return (
    <div className={classes.bar}>
      <p>
        <FontAwesomeIcon icon={faUtensils} /> {cartCtx.totalDishes.length}
      </p>
      <p>
        <FontAwesomeIcon icon={faClock} /> {hours ? `${hours} h` : ""}{" "}
        {minutes ? `${minutes} min` : ""}
      </p>
      <p>
        <FontAwesomeIcon icon={faHeartPulse} />{" "}
        {cartCtx.totalHealthScore / cartCtx.totalDishes.length}
      </p>
      <p>TOTAL : ${Math.round(cartCtx.totalPrice)}</p>
      <button>Order</button>
    </div>
  );
};

export default Bar;

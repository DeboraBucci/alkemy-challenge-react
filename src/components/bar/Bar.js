import React, { useContext, useEffect, useState } from "react";
import classes from "./Bar.module.css";
import CartContext from "../store/cart-context";
import { faUtensils, faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faClock, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bar = () => {
  const cartCtx = useContext(CartContext);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (cartCtx.totalDishes.length === 0) {
      setIsEmpty(true);
      return;
    }

    setIsEmpty(false);
  }, [cartCtx]);

  const hours = Math.floor(+cartCtx.totalTime / 60);
  const minutes = Math.floor(+cartCtx.totalTime % 60);

  return (
    <div className={classes.bar}>
      <p>
        <FontAwesomeIcon icon={faUtensils} /> {cartCtx.totalDishes.length}
      </p>
      <p>
        <FontAwesomeIcon icon={faClock} /> {hours ? `${hours} h` : ""}{" "}
        {minutes ? `${minutes} min` : ""}
        {!hours && !minutes && "0 hs"}
      </p>
      <p>
        <FontAwesomeIcon icon={faHeartPulse} />{" "}
        {!isEmpty
          ? Math.round(cartCtx.totalHealthScore / cartCtx.totalDishes.length)
          : "0"}
      </p>
      <p>TOTAL : ${Math.round(cartCtx.totalPrice)}</p>

      <button
        className={`${classes["btn-order"]} ${isEmpty && classes.disabled}`}
        disabled={isEmpty}
      >
        Order <FontAwesomeIcon icon={faCircleCheck} />
      </button>
    </div>
  );
};

export default Bar;

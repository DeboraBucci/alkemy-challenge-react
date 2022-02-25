import React, { useContext, useEffect, useState } from "react";
import classes from "./Bar.module.css";
import CartContext from "../store/cart-context";
import {
  faUtensils,
  faHeartPulse,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderMenuButton from "../UI/OrderMenuButton";

const Bar = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isBarOpened, setIsBarOpened] = useState(true);

  const cartCtx = useContext(CartContext);

  const hours = Math.floor(
    +cartCtx.totalTime / cartCtx.totalDishes.length / 60
  );
  const minutes = Math.floor(
    (+cartCtx.totalTime / cartCtx.totalDishes.length) % 60
  );

  useEffect(() => {
    if (cartCtx.totalDishes.length === 0) {
      setIsEmpty(true);
      return;
    }

    setIsEmpty(false);
  }, [cartCtx]);

  const openBarHandler = () => {
    setIsBarOpened(true);
  };

  const closeBarHandler = () => {
    setIsBarOpened(false);
  };

  return (
    <React.Fragment>
      <button
        className={`${classes["btn-open"]} ${isBarOpened && classes.hide}`}
        onClick={openBarHandler}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
      <div className={`${classes.bar} ${!isBarOpened && classes.closed}`}>
        <button onClick={closeBarHandler}>
          <FontAwesomeIcon
            className={classes["btn-close"]}
            icon={faAngleDown}
          />
        </button>

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

        <OrderMenuButton />
      </div>
    </React.Fragment>
  );
};

export default Bar;

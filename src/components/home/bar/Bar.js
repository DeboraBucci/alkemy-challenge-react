import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faHeartPulse,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import OrderMenuButton from "../../buttons/OrderMenuButton";

import CartContext from "../../../store/cart-context";

import { timeCalculator } from "../../functions/timeCalculator";
import { timeTextGenerator } from "../../functions/timeTextGenerator";

import classes from "./Bar.module.css";

const Bar = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isBarOpened, setIsBarOpened] = useState(true);

  const cartCtx = useContext(CartContext);

  const cookingTimeMinutes =
    cartCtx.totalTime / cartCtx.totalDishes.length || 0;

  const [hours, minutes] = timeCalculator(cookingTimeMinutes);

  const avgCookingTimeStr = timeTextGenerator(hours, minutes).join(" ");

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
        <div className={classes.text}>
          <p>
            <FontAwesomeIcon icon={faUtensils} />
            <span> Servings: </span>
            {cartCtx.totalServings}
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} />
            <span> Avg. Cooking Time: </span>
            {avgCookingTimeStr}
          </p>
          <p>
            <FontAwesomeIcon icon={faHeartPulse} />
            <span> Avg. Health Score: </span>
            {!isEmpty
              ? Math.round(
                  cartCtx.totalHealthScore / cartCtx.totalDishes.length
                )
              : "0"}
          </p>
          <p className={classes.total}>
            TOTAL $ {Math.round(cartCtx.totalPrice)}
          </p>
        </div>
        <OrderMenuButton />
        <button onClick={closeBarHandler}>
          <FontAwesomeIcon
            className={classes["btn-close"]}
            icon={faAngleDown}
          />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Bar;

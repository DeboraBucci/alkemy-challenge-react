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

import { timeCalculator } from "../../../functions/timeCalculator";
import { timeTextGenerator } from "../../../functions/timeTextGenerator";

import classes from "./Bar.module.css";

const Bar = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isBarOpened, setIsBarOpened] = useState(true);

  const cartCtx = useContext(CartContext);

  const dishesAmount = cartCtx.totalDishes.length;
  const cookingTimeMinutes = cartCtx.totalTime / dishesAmount || 0;

  const [hours, minutes] = timeCalculator(cookingTimeMinutes);
  const avgCookingTimeStr = timeTextGenerator(hours, minutes).join(" ");

  useEffect(() => {
    if (dishesAmount === 0) {
      setIsEmpty(true);
      return;
    }

    setIsEmpty(false);
  }, [cartCtx]);

  const barHandler = () => {
    setIsBarOpened((prev) => (prev === false ? true : false));
  };

  const openBarBtn = (
    <button
      aria-label="show bar"
      className={`${classes["btn-open"]} ${isBarOpened && classes.hide}`}
      onClick={barHandler}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  );

  const closeBarBtn = (
    <button onClick={barHandler} aria-label="hide bar">
      <FontAwesomeIcon className={classes["btn-close"]} icon={faAngleDown} />
    </button>
  );

  const text = (
    <div className={`fx-cntr ${classes.text}`}>
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
          ? Math.round(cartCtx.totalHealthScore / cartCtx.totalDishes.length)
          : "0"}
      </p>
      <p className={`fx-cntr ${classes.total}`}>
        TOTAL $ {Math.round(cartCtx.totalPrice)}
      </p>
    </div>
  );

  return (
    <React.Fragment>
      <div className={`fx-cntr ${classes.bar} ${!isBarOpened && classes.hide}`}>
        {text}
        <OrderMenuButton />
        {closeBarBtn}
      </div>
      {openBarBtn}
    </React.Fragment>
  );
};

export default Bar;

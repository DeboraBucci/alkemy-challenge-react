import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faFire,
  faHeartbeat,
  faPlus,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { faStar, faClock } from "@fortawesome/free-regular-svg-icons";

import classes from "./MenuDish.module.css";

import RemoveFromCartButton from "../../buttons/RemoveFromCartButton";
import AddToCartButton from "../../buttons/AddToCartButton";
import MoreInfoButton from "../../buttons/MoreInfoButton";
import EmptyMealCard from "../../UI/EmptyMealCard";

const MenuDish = ({ dish, setInfoHandler, removeItemHandler }) => {
  const [isContentShown, setIsContentShown] = useState(false);
  const mealExists = dish.item.title;

  const enterRatingHandler = () => {
    setIsContentShown(true);
  };

  const leaveRatingHandler = () => {
    setIsContentShown(false);
  };

  const content = mealExists && (
    <div className={classes.text}>
      <div className={classes.title}>
        <h3>{dish.item.title}</h3>
      </div>

      <div className={classes["extra-info"]}>
        <p>
          <FontAwesomeIcon icon={faFire} /> {dish.item.calories}
        </p>
        <p>
          <FontAwesomeIcon icon={faHeartbeat} /> {dish.item.healthScore} score
        </p>

        <p>
          <FontAwesomeIcon icon={faClock} /> {dish.item.time} mins
        </p>

        <p>
          <FontAwesomeIcon icon={faUtensils} /> {dish.item.servings} servings
        </p>
      </div>

      <MoreInfoButton
        meal={dish.item}
        setInfoHandler={setInfoHandler}
        className={classes["btn-info"]}
      />
    </div>
  );

  const dietClass = dish.item.isVegan ? classes.vegan : classes.nonvegan;

  const floatingContent = mealExists && (
    <>
      <span className={`${classes["diet-tag"]} ${dietClass}`}>
        {dish.item.isVegan ? "vegan" : "non vegan"}
      </span>

      <RemoveFromCartButton
        onClick={removeItemHandler.bind(null, dish.item)}
        className={classes["btn-remove"]}
      />
      <AddToCartButton
        className={classes["btn-add"]}
        meal={dish.item}
        icon={<FontAwesomeIcon icon={faPlus} />}
        num={Math.random()}
      />

      <p
        className={classes.rating}
        onMouseEnter={enterRatingHandler}
        onMouseLeave={leaveRatingHandler}
      >
        <FontAwesomeIcon icon={faStar} />{" "}
        {isContentShown && (
          <span>
            {dish.item.rating} ({dish.item.raters})
          </span>
        )}
      </p>

      <p className={classes.price}>
        <FontAwesomeIcon icon={faDollarSign} /> {dish.item.price}
      </p>
    </>
  );

  return (
    <li className={classes.meal}>
      <div className={classes.content}>
        {mealExists && (
          <div className={classes.img}>
            <img src={dish.item.image} />
          </div>
        )}
        {!mealExists && <EmptyMealCard className={classes["empty-card"]} />}
        {content}
        {floatingContent}
      </div>
    </li>
  );
};

export default MenuDish;

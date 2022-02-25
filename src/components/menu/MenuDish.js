import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import classes from "./MenuDish.module.css";

import RemoveFromCartButton from "../UI/RemoveFromCartButton";
import AddToCartButton from "../UI/AddToCartButton";
import MoreInfoButton from "../UI/MoreInfoButton";
import EmptyMealCard from "../UI/EmptyMealCard";

const MenuDish = ({ dish, setInfoHandler, removeItemHandler }) => {
  const mealExists = dish.item.title;

  const img = mealExists ? (
    <img src={dish.item.image} />
  ) : (
    <EmptyMealCard className={classes["empty-card"]} />
  );

  const content = mealExists && (
    <>
      <div>
        <h3>{dish.item.title}</h3>
      </div>

      <div className={classes["extra-info"]}>
        <p>Price: ${dish.item.price}</p>
        <p>Servings: {dish.item.servings}</p>
      </div>

      <MoreInfoButton
        meal={dish.item}
        setInfoHandler={setInfoHandler}
        className={classes["btn-info"]}
      />
    </>
  );

  const floatingContent = mealExists && (
    <>
      <span className={dish.item.isVegan ? classes.vegan : classes.nonvegan}>
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
    </>
  );

  return (
    <li className={classes.meal}>
      <div className={classes.content}>
        <div className={classes.img}>{img}</div>

        {content}
        {floatingContent}
      </div>
    </li>
  );
};

export default MenuDish;

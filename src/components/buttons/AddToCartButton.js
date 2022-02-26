import React, { useContext } from "react";

import classes from "./AddToCartButton.module.css";

import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../../store/cart-context";
import { mealInfoHandler } from "../../Data";

import SweetAlert from "../UI/SweetAlert";

const AddToCartButton = ({
  meal,
  className = classes["btn-add-default"],
  icon = "default",
}) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    if (cartCtx.totalDishes.length === 4) {
      SweetAlert({
        title: "Full Menu ...",
        text: "You can't have more than four meals in your menu.",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }

    if (meal.isVegan && cartCtx.veganMeals === 2) {
      SweetAlert({
        title: "Couldn't Select Meal ...",
        text: "You can't choose any more vegan meals. Try some other diets, explore the deliciousness!",
        footer: '<a href="">Why do I have this issue?</a>',
      });

      return;
    }
    if (!meal.isVegan && cartCtx.nonVeganMeals === 2) {
      SweetAlert({
        title: "Couldn't Select Meal ...",
        text: "You can't choose any more non vegan meals. Time to pick some vegan ones too. Yummy!",
        footer: '<a href="">Why do I have this issue?</a>',
      });

      return;
    }

    const mealInfo = mealInfoHandler(meal);
    cartCtx.addItem(mealInfo);
  };

  return (
    <Button
      onClick={addToCartHandler}
      className={`${classes.btn} ${className}`}
      variant="primary"
    >
      {icon === "default" && "Add to Cart "}
      {icon === "default" ? <FontAwesomeIcon icon={faCartPlus} /> : icon}
    </Button>
  );
};

export default AddToCartButton;

import React, { useContext } from "react";

import classes from "./AddToCartButton.module.css";

import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../../store/cart-context";
import { mealInfoHandler } from "../../Data";

import SweetAlert from "../UI/SweetAlert";

const AddToCartButton = ({ meal, className, icon = "default" }) => {
  const cartCtx = useContext(CartContext);

  const alertMessages = [
    {
      fullMenu: {
        title: "Full Menu ...",
        text: "You can't have more than four meals in your menu.",
      },
    },
    {
      fullVegan: {
        title: "Couldn't Select Meal ...",
        text: "You can't choose any more vegan meals. Try some other diets, explore the deliciousness!",
      },
    },
    {
      fullNonVegan: {
        title: "Couldn't Select Meal ...",
        text: "You can't choose any more non vegan meals. Time to pick some vegan ones too. Yummy!",
      },
    },
  ];

  const addToCartHandler = () => {
    if (cartCtx.totalDishes.length === 4) {
      SweetAlert({
        title: "Full Menu ...",
        text: "You can't have more than four meals in your menu.",
      });
      return;
    }

    if (meal.isVegan && cartCtx.veganMeals === 2) {
      SweetAlert(alertMessages.fullMenu);

      return;
    }
    if (!meal.isVegan && cartCtx.nonVeganMeals === 2) {
      SweetAlert({
        title: "Couldn't Select Meal ...",
        text: "You can't choose any more non vegan meals. Time to pick some vegan ones too. Yummy!",
      });

      return;
    }

    const mealInfo = mealInfoHandler(meal);
    cartCtx.addItem(mealInfo);
  };

  const content =
    icon === "default"
      ? ["Add to Cart", <FontAwesomeIcon icon={faCartPlus} />]
      : icon;

  return (
    <Button
      onClick={addToCartHandler}
      className={`${classes["btn-add-default"]} ${className}`}
      variant="primary"
    >
      {content}
    </Button>
  );
};

export default AddToCartButton;

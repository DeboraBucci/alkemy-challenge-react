import React, { useContext } from "react";

import classes from "./AddToCartButton.module.css";

import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../store/cart-context";
import { mealInfoHandler } from "../../Data";

const AddToCartButton = ({
  meal,
  className = classes["btn-add-default"],
  icon = "default",
}) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
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

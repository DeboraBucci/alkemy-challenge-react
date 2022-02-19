import React, { useContext } from "react";

import classes from "./AddToCartButton.module.css";

import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../store/cart-context";
import { mealInfoHandler } from "../../Data";

const AddToCartButton = ({ meal, className = classes["btn-add-default"] }) => {
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
      Add to Cart
      <FontAwesomeIcon icon={faCartPlus} />
    </Button>
  );
};

export default AddToCartButton;

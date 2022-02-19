import React, { useContext } from "react";

import classes from "./AddToCartButton.module.css";

import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../store/cart-context";

const AddToCartButton = ({ meal, className = classes["btn-add-default"] }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: meal.id + Math.random(),
      title: meal.title,
      image: meal.image,
      price: meal.price,
      time: meal.time,
      healthScore: meal.healthScore,
    });
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

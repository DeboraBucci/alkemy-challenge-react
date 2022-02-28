import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../../store/cart-context";
import SweetAlert from "../UI/SweetAlert";

import classes from "./OrderMenuButton.module.css";

const OrderMenuButton = ({ className }) => {
  const cartCtx = useContext(CartContext);

  const orderHandler = () => {
    if (cartCtx.totalDishes.length < 4) {
      SweetAlert({
        title: "Not Enough Meals...",
        text: "Please select four meals to be able to set the menu.",
      });
      return;
    }

    SweetAlert({
      icon: "warning",
      title: "Are you sure?",
      text: "Your won't be able to change the menu after this.",
      confirmButtonText: "Yes, order menu!",
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        SweetAlert({
          icon: "success",
          title: "Menu Set",
          text: "Bon appetit!",
        });
        cartCtx.removeAllMeals();
      }
    });
  };

  const empty = cartCtx.totalDishes.length === 0;

  return (
    <button
      disabled={empty}
      className={`${classes.order} ${className}`}
      onClick={orderHandler}
      aria-label="order menu"
    >
      Order <FontAwesomeIcon icon={faCircleCheck} />
    </button>
  );
};

export default OrderMenuButton;

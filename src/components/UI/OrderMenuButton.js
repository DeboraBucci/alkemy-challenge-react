import React, { useContext } from "react";

import CartContext from "../store/cart-context";
import SweetAlert from "./SweetAlert";

const OrderMenuButton = ({ className, children }) => {
  const cartCtx = useContext(CartContext);

  const orderHandler = () => {
    if (cartCtx.totalDishes.length < 4) {
      SweetAlert({
        title: "Not Enough Meals...",
        text: "Please select four meals to be able to set the menu.",
        footer: '<a href="">Why do I have this issue?</a>',
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
      }
    });
  };

  return (
    <button
      disabled={cartCtx.totalDishes.length === 0}
      className={className}
      onClick={orderHandler}
    >
      {children}
    </button>
  );
};

export default OrderMenuButton;

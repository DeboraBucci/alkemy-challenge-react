import React, { useContext } from "react";
import Swal from "sweetalert2";
import CartContext from "../store/cart-context";

import swalClasses from "../../SweetAlert.module.css";

const OrderMenuButton = ({ className, children }) => {
  const cartCtx = useContext(CartContext);

  const orderHandler = () => {
    if (cartCtx.totalDishes.length < 4) {
      Swal.fire({
        icon: "error",
        title: "Not Enough Meals...",
        text: "Please select four meals to be able to set the menu.",
        footer: '<a href="">Why do I have this issue?</a>',
        customClass: {
          confirmButton: `${swalClasses["btn-confirm"]}`,
        },
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Your won't be able to change the menu after this.",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order menu!",
      customClass: {
        confirmButton: `${swalClasses["btn-confirm"]}`,
        cancelButton: `${swalClasses["btn-cancel"]}`,
      },
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Menu Set",
          text: "Bon appetit!",
          icon: "success",
          customClass: {
            confirmButton: `${swalClasses["btn-confirm"]}`,
          },
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

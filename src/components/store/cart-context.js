import React from "react";

const CartContext = React.createContext({
  totalDishes: [],
  totalPrice: 0,
  totalTime: 0,
  totalHealthScore: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;

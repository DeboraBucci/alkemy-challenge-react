import React from "react";

const CartContext = React.createContext({
  totalDishes: [],
  totalPrice: 0,
  totalTime: 0,
  totalHealthScore: 0,
  veganMeals: 0,
  nonVeganMeals: 0,
  addItem: (item) => {},
  removeItem: (id, isVegan) => {},
});

export default CartContext;

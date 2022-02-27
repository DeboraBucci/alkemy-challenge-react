import { useReducer } from "react";
import CartContext from "./cart-context";

const {
  newCartGenerator,
} = require("../components/functions/newCartGenerator");

const defaultCart = newCartGenerator([], 0, 0, 0, 0, 0, 0);

const cartReducer = (
  {
    totalDishes,
    totalPrice,
    totalTime,
    totalHealthScore,
    totalServings,
    veganMeals,
    nonVeganMeals,
  },
  action
) => {
  // ADD
  // -------------------------------------------------------------------
  if (action.type === "ADD") {
    totalDishes.length >= 4 &&
      newCartGenerator(
        totalDishes,
        totalPrice,
        totalTime,
        totalHealthScore,
        totalServings,
        veganMeals,
        nonVeganMeals
      );

    const item = action.item;
    const { price, time, healthScore, servings, isVegan } = item;

    const updatedDishes = totalDishes.concat(action);
    const updatedTotalPrice = totalPrice + price;
    const updatedTotalTime = totalTime + time;
    const updatedHealthscore = totalHealthScore + healthScore;
    const updatedTotalServings = totalServings + servings;
    const updatedVeganMeals = veganMeals + (isVegan ? 1 : 0);
    const updatedNonVeganMeals = nonVeganMeals + (isVegan ? 0 : 1);

    return newCartGenerator(
      updatedDishes,
      updatedTotalPrice,
      updatedTotalTime,
      updatedHealthscore,
      updatedTotalServings,
      updatedVeganMeals,
      updatedNonVeganMeals
    );
  }

  // REMOVE
  // -------------------------------------------------------------------
  if (action.type === "REMOVE") {
    // FIND DELETED ITEM
    const updatedDishes = totalDishes.filter(
      (dish) => dish.item.id !== action.id
    );
    const index = totalDishes.findIndex((dish) => dish.item.id === action.id);
    const deletedDish = totalDishes[index].item;

    // UPDATE CART
    const updatedTotalPrice = totalPrice - deletedDish.price;
    const updatedTotalTime = totalTime - deletedDish.time;
    const updatedHealthscore = totalHealthScore - deletedDish.healthScore;
    const updatedTotalServings = totalServings - deletedDish.servings;
    const updatedVeganMeals = veganMeals - (action.isVegan ? 1 : 0);
    const updatedNonVeganMeals = nonVeganMeals - (action.isVegan ? 0 : 1);

    return newCartGenerator(
      updatedDishes,
      updatedTotalPrice,
      updatedTotalTime,
      updatedHealthscore,
      updatedTotalServings,
      updatedVeganMeals,
      updatedNonVeganMeals
    );
  }

  // EMTPY THE CART
  // -------------------------------------------------------------------
  if (action.type === "REMOVE_ALL_MEALS") {
    return defaultCart;
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id, isVegan) => {
    dispatchCartAction({ type: "REMOVE", id: id, isVegan: isVegan });
  };

  const removeAllMealsFromCartHandler = () => {
    dispatchCartAction({ type: "REMOVE_MEALS" });
  };

  const cartContext = {
    totalDishes: cartState.totalDishes,
    totalPrice: cartState.totalPrice,
    totalTime: cartState.totalTime,
    totalHealthScore: cartState.totalHealthScore,
    totalServings: cartState.totalServings,
    veganMeals: cartState.veganMeals,
    nonVeganMeals: cartState.nonVeganMeals,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    removeAllMeals: removeAllMealsFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

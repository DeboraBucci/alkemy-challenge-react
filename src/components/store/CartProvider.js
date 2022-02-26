import { useReducer } from "react";
import CartContext from "./cart-context";

const { newCartGenerator } = require("../functions/newCartGenerator");

const defaultCart = newCartGenerator([], 0, 0, 0, 0, 0, 0);

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    if (state.totalDishes.length > 3) {
      return newCartGenerator(
        state.totalDishes,
        state.totalPrice,
        state.totalTime,
        state.totalHealthScore,
        state.totalServings,
        state.veganMeals,
        state.nonVeganMeals
      );
    } else {
      const updatedDishes = state.totalDishes.concat(action);
      const updatedTotalPrice = state.totalPrice + action.item.price;
      const updatedTotalTime = state.totalTime + action.item.time;
      const updatedHealthscore =
        state.totalHealthScore + action.item.healthScore;
      const updatedTotalServings = state.totalServings + action.item.servings;
      console.log(state.totalServings);

      const updatedVeganMeals =
        state.veganMeals + (action.item.isVegan ? 1 : 0);
      const updatedNonVeganMeals =
        state.nonVeganMeals + (action.item.isVegan ? 0 : 1);

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
  }

  if (action.type === "REMOVE") {
    const updatedDishes = state.totalDishes.filter(
      (item) => item.item.id !== action.id
    );

    const index = state.totalDishes.findIndex(
      (item) => item.item.id === action.id
    );

    const deletedItem = state.totalDishes[index].item;

    const updatedTotalPrice = state.totalPrice - deletedItem.price;
    const updatedTotalTime = state.totalTime - deletedItem.time;
    const updatedHealthscore = state.totalHealthScore - deletedItem.healthScore;
    const updatedTotalServings =
      state.totalServings - deletedItem.totalServings;

    const updatedVeganMeals = state.veganMeals - (action.isVegan ? 1 : 0);
    const updatedNonVeganMeals = state.nonVeganMeals - (action.isVegan ? 0 : 1);

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
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

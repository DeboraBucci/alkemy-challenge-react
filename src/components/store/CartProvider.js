import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  totalDishes: [],
  totalPrice: 0,
  totalTime: 0,
  totalHealthScore: 0,
  veganMeals: 0,
  nonVeganMeals: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    if (state.totalDishes.length > 3) {
      return {
        totalDishes: state.totalDishes,
        totalPrice: state.totalPrice,
        totalTime: state.totalTime,
        totalHealthScore: state.totalHealthScore,
        veganMeals: state.veganMeals,
        nonVeganMeals: state.nonVeganMeals,
      };
    } else {
      const updatedDishes = state.totalDishes.concat(action);
      const updatedTotalPrice = state.totalPrice + action.item.price;
      const updatedTotalTime = state.totalTime + action.item.time;
      const updatedHealthscore =
        state.totalHealthScore + action.item.healthScore;
      const updatedVeganMeals =
        state.veganMeals + (action.item.isVegan ? 1 : 0);
      const updatedNonVeganMeals =
        state.nonVeganMeals + (action.item.isVegan ? 0 : 1);

      return {
        totalDishes: updatedDishes,
        totalPrice: updatedTotalPrice,
        totalTime: updatedTotalTime,
        totalHealthScore: updatedHealthscore,
        veganMeals: updatedVeganMeals,
        nonVeganMeals: updatedNonVeganMeals,
      };
    }
  }

  if (action.type === "REMOVE") {
    const updatedItems = state.totalDishes.filter(
      (item) => item.item.id !== action.id
    );

    const index = state.totalDishes.findIndex(
      (item) => item.item.id === action.id
    );

    const deletedItem = state.totalDishes[index].item;

    const updatedTotalPrice = state.totalPrice - deletedItem.price;
    const updatedTotalTime = state.totalTime - deletedItem.time;
    const updatedTotalHealthScore =
      state.totalHealthScore - deletedItem.healthScore;
    const updatedVeganMeals = state.veganMeals - (action.isVegan ? 1 : 0);
    const updatedNonVeganMeals = state.nonVeganMeals - (action.isVegan ? 0 : 1);

    return {
      totalDishes: updatedItems,
      totalPrice: updatedTotalPrice,
      totalTime: updatedTotalTime,
      totalHealthScore: updatedTotalHealthScore,
      veganMeals: updatedVeganMeals,
      nonVeganMeals: updatedNonVeganMeals,
    };
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

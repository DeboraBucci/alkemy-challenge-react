import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  totalDishes: [],
  totalPrice: 0,
  totalTime: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    if (state.totalDishes.length > 3) {
      return {
        totalDishes: state.totalDishes,
        totalPrice: state.totalPrice,
        totalTime: state.totalTime,
      };
    } else {
      const updatedDishes = state.totalDishes.concat(action);
      const updatedTotalPrice = state.totalPrice + action.item.price;
      const updatedTotalTime = state.totalTime + action.item.time;

      return {
        totalDishes: updatedDishes,
        totalPrice: updatedTotalPrice,
        totalTime: updatedTotalTime,
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

    console.log(state.totalDishes);
    return {
      totalDishes: updatedItems,
      totalPrice: updatedTotalPrice,
      totalTime: updatedTotalTime,
    };
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    totalDishes: cartState.totalDishes,
    totalPrice: cartState.totalPrice,
    totalTime: cartState.totalTime,
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

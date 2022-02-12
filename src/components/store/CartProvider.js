import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  totalDishes: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    if (state.totalDishes.length > 3) {
      const updatedTotalPrice = state.totalPrice;
      return {
        totalDishes: state.totalDishes,
        totalPrice: updatedTotalPrice,
      };
    } else {
      const updatedDishes = state.totalDishes.concat(action);
      const updatedTotalPrice = state.totalPrice + action.item.price;
      return {
        totalDishes: updatedDishes,
        totalPrice: updatedTotalPrice,
      };
    }
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

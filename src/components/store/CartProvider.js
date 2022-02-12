import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  totalDishes: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    if (state.totalDishes.length > 3) {
      return {
        totalDishes: state.totalDishes,
        totalPrice: 0,
      };
    } else {
      const updatedDishes = state.totalDishes.concat(action);
      return {
        totalDishes: updatedDishes,
        totalPrice: 0,
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

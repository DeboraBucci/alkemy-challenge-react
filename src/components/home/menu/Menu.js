import React, { useContext } from "react";

import CartContext from "../../store/cart-context";

import classes from "./Menu.module.css";

import MenuDish from "./MenuDish";
import OrderMenuButton from "../../buttons/OrderMenuButton";

const Menu = ({ setInfoHandler, meals }) => {
  const cartCtx = useContext(CartContext);

  const removeItemHandler = (dish) => {
    const { id, isVegan } = dish;
    cartCtx.removeItem(id, isVegan);
  };

  return (
    <section id="menu" className={classes.menu}>
      <div className={classes.title}>
        <h2>MENU</h2>
      </div>
      <div className={classes.box}>
        <ul>
          {meals.map((dish) => {
            return (
              <MenuDish
                key={dish.item.id || Math.random()}
                dish={dish}
                setInfoHandler={setInfoHandler}
                removeItemHandler={removeItemHandler}
              />
            );
          })}
        </ul>

        <div className={classes.actions}>
          <OrderMenuButton />
        </div>
      </div>
    </section>
  );
};

export default Menu;

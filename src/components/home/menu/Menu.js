import React, { useContext } from "react";

import CartContext from "../../../store/cart-context";

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
    <section id="menu" className={`fx-cntr ${classes.menu}`}>
      <div className={classes.title}>
        <h2>MENU</h2>
      </div>
      <div className={classes.box}>
        <ul className="fx-cntr ">
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

        <OrderMenuButton className={classes.order} />
      </div>
    </section>
  );
};

export default Menu;

import React, { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import MoreInfoButton from "../UI/MoreInfoButton";

import { defaultObj } from "../../Data";

import classes from "./Menu.module.css";

const Menu = ({ setInfoHandler }) => {
  const [meals, setMeals] = useState([]);
  const cartCtx = useContext(CartContext);

  const defaultArr = [defaultObj, defaultObj, defaultObj, defaultObj];

  useEffect(() => {
    cartCtx.totalDishes.forEach((dish) => {
      defaultArr.pop();
      defaultArr.unshift(dish);
    });

    setMeals(defaultArr);
  }, [cartCtx]);

  return (
    <section className={classes.menu}>
      <div className={classes.title}>
        <h2>MENU</h2>
      </div>
      <div className={classes.box}>
        <ul>
          {meals.map((dish) => {
            return (
              <li className={classes.meal} key={dish.item.id || Math.random()}>
                <div className={classes.img}>
                  <img src={dish.item.image} />
                </div>
                <div>
                  <h3>{dish.item.title}</h3>
                  <p>Price: ${dish.item.price}</p>
                  <p>Servings: {dish.item.servings}</p>
                </div>
                <MoreInfoButton
                  meal={dish.item}
                  setInfoHandler={setInfoHandler}
                />
              </li>
            );
          })}
        </ul>
        <div className={classes.actions}>
          <button>Order Menu</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;

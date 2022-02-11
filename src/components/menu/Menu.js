import React from "react";
import classes from "./Menu.module.css";

const Menu = () => {
  const dishes = [
    { id: "dish-1" },
    { id: "dish-2" },
    { id: "dish-3" },
    { id: "dish-4" },
  ];

  return (
    <section className={classes.menu}>
      <div className={classes.container}>
        <div>
          <h2 className={classes.title}>My Menu</h2>
        </div>
        <div className={classes.box}>
          <ul className={classes.inner}>
            {dishes.map((dish) => {
              return (
                <li key={Math.random()}>
                  <h3>?</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;

import React from "react";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <section className={classes.menu}>
      <div className={classes.container}>
        <div>
          <h2 className={classes.title}>My Menu</h2>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>
            <p>you don't have any meals inside your menu.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

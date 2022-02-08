import React from "react";
import classes from "./Bar.module.css";

const Bar = () => {
  return (
    <div className={classes.bar}>
      <p>Total: $160</p>
      <p>Preparation Time: 1:30hs</p>
      <p>Health Score: 85.4</p>
      <p>Dishes: 3</p>
      <button>Order</button>
    </div>
  );
};

export default Bar;

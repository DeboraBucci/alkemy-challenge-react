import React from "react";
import classes from "./MealChunk.module.css";

import MealItem from "./MealItem";

const MealChunk = ({ setInfoHandler, mealChunk }) => {
  const content = mealChunk.map((meal, i) => (
    <MealItem
      setInfoHandler={setInfoHandler}
      key={`meal ${i + 1}`}
      meal={meal}
    />
  ));

  return <div className={`fx-cntr ${classes["chunk-meals"]}`}>{content}</div>;
};

export default MealChunk;

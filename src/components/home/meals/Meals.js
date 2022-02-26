import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import classes from "./Meals.module.css";

import MealsPagination from "./MealsPagination";
import MealChunk from "./MealChunk";

const Meals = ({ meals, waiting, setInfoHandler, isMealsShown }) => {
  const [mealsList, setmealsList] = useState([]);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < meals.length; i += 5) {
      arr.push(meals.slice(i, i + 5));
    }

    waiting ? setmealsList([]) : setmealsList(arr);
  }, [waiting, meals]);

  // CONTENT
  // -----------------------------------------------------------------------
  let content = <p></p>;

  if (waiting && mealsList.length === 0) {
    content = (
      <Spinner className={classes.spinner} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (!waiting && mealsList.length === 0) {
    content = <p className={classes["no-meals"]}>No meals found.</p>;
  } else {
    content = (
      <>
        {mealsList.map((mealChunk, i) => {
          return (
            active === i + 1 && (
              <MealChunk
                key={`meal chunk number ${i + 1}`}
                setInfoHandler={setInfoHandler}
                mealChunk={mealChunk}
              />
            )
          );
        })}
        <MealsPagination
          setActive={setActive}
          mealsList={mealsList}
          active={active}
        />
      </>
    );
  }

  // RETURN
  // -----------------------------------------------------------------------
  return (
    <section id="meals" className={classes.meals}>
      {isMealsShown && content}
    </section>
  );
};

export default Meals;

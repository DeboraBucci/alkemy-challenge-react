import React, { useContext, useEffect, useState } from "react";
import classes from "./Meals.module.css";
import { Spinner } from "react-bootstrap";
import MealItem from "./MealItem";

const Meals = ({ meals, waiting }) => {
  const [displayedMeals, setDisplayedMeals] = useState([]);
  useEffect(() => {
    if (waiting) {
      setDisplayedMeals([]);
    } else {
      setDisplayedMeals(meals);
    }
  }, [waiting, meals]);

  return (
    <section className={classes.meals}>
      <div className={classes["meals-box"]}>
        {waiting && displayedMeals.length === 0 && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {!waiting && displayedMeals.length === 0 ? (
          <p>No meals found.</p>
        ) : (
          displayedMeals.map((meal) => <MealItem meal={meal} />)
        )}
      </div>
    </section>
  );
};

export default Meals;

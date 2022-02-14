import React, { useContext, useEffect, useState } from "react";
import classes from "./Meals.module.css";
import { Spinner } from "react-bootstrap";
import MealPagination from "./MealPagination";

const Meals = ({ meals, waiting }) => {
  const [displayedMeals, setDisplayedMeals] = useState([]);

  useEffect(() => {
    if (waiting) {
      setDisplayedMeals([]);
    } else {
      let chunk = 5;
      const arr = [];

      for (let i = 0; i < meals.length; i += chunk) {
        arr.push(meals.slice(i, i + chunk));
      }
      setDisplayedMeals(arr);
    }
  }, [waiting, meals]);

  return (
    <section className={classes.meals}>
      {waiting && displayedMeals.length === 0 && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!waiting && displayedMeals.length === 0 ? (
        <p>No meals found.</p>
      ) : (
        <MealPagination displayedMeals={displayedMeals} />
      )}
    </section>
  );
};

export default Meals;

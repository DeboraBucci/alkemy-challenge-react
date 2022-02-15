import React, { useContext, useEffect, useState } from "react";
import classes from "./Meals.module.css";
import { Spinner } from "react-bootstrap";
import MealPagination from "./MealPagination";
import MoreInfo from "./MoreInfo";

const Meals = ({ meals, waiting }) => {
  const [displayedMeals, setDisplayedMeals] = useState([]);
  const [info, setInfo] = useState({});
  const [infoIsShown, setInfoIsShown] = useState(false);

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

  const setInfoHandler = (info) => {
    setInfo(info);
    setInfoIsShown(true);
  };

  return (
    <section className={classes.meals}>
      {waiting && displayedMeals.length === 0 && (
        <Spinner className={classes.spinner} animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!waiting && displayedMeals.length === 0 ? (
        <p className={classes["no-meals"]}>No meals found.</p>
      ) : (
        <MealPagination
          setInfoHandler={setInfoHandler}
          displayedMeals={displayedMeals}
        />
      )}
      {infoIsShown && <MoreInfo info={info} setInfoIsShown={setInfoIsShown} />}
    </section>
  );
};

export default Meals;

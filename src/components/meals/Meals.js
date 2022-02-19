import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import classes from "./Meals.module.css";

import MoreInfo from "./MoreInfo";
import AllDisplayedMeals from "./AllDisplayedMeals";

const Meals = ({
  meals,
  waiting,
  setInfoHandler,
  extraInfoIsShown,
  extraInfo,
  setExtraInfoIsShown,
}) => {
  const [mealsList, setmealsList] = useState([]);

  let chunk = 5;

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < meals.length; i += chunk) {
      arr.push(meals.slice(i, i + chunk));
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
      <AllDisplayedMeals
        mealsList={mealsList}
        setInfoHandler={setInfoHandler}
      />
    );
  }

  // RETURN
  // -----------------------------------------------------------------------
  return (
    <section className={classes.meals}>
      {content}
      {extraInfoIsShown && (
        <MoreInfo info={extraInfo} setInfoIsShown={setExtraInfoIsShown} />
      )}
    </section>
  );
};

export default Meals;

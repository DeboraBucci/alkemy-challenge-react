import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import classes from "./Meals.module.css";

import MoreInfo from "./MoreInfo";
import MealPagination from "./MealPagination";

const Meals = ({ meals, waiting }) => {
  const [displayedMeals, setDisplayedMeals] = useState([]);
  const [info, setInfo] = useState({});
  const [infoIsShown, setInfoIsShown] = useState(false);

  let chunk = 5;

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < meals.length; i += chunk) {
      arr.push(meals.slice(i, i + chunk));
    }

    waiting ? setDisplayedMeals([]) : setDisplayedMeals(arr);
  }, [waiting, meals]);

  const setInfoHandler = (info) => {
    setInfo(info);
    setInfoIsShown(true);
  };

  // CONTENT
  // -----------------------------------------------------------------------
  let content = <p></p>;

  if (waiting && displayedMeals.length === 0) {
    content = (
      <Spinner className={classes.spinner} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (!waiting && displayedMeals.length === 0) {
    content = <p className={classes["no-meals"]}>No meals found.</p>;
  } else {
    content = (
      <MealPagination
        displayedMeals={displayedMeals}
        setInfoHandler={setInfoHandler}
      />
    );
  }

  // RETURN
  // -----------------------------------------------------------------------
  return (
    <section className={classes.meals}>
      {content}
      {infoIsShown && <MoreInfo info={info} setInfoIsShown={setInfoIsShown} />}
    </section>
  );
};

export default Meals;

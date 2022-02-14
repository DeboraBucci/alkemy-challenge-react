import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import MealItem from "./MealItem";
import classes from "./MealPagination.module.css";

const MealPagination = ({ displayedMeals }) => {
  let items = [];
  let current = 0;

  const [active, setActive] = useState(1);

  for (let number = 1; number < displayedMeals.length; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const paginationHandler = (e) => {
    if (e.target.text === undefined) {
      return;
    }

    setActive(Number(e.target.text));
  };

  return (
    <React.Fragment>
      {displayedMeals.map((mealPag) => {
        current++;
        return (
          <div key={Math.random()}>
            {current === active && (
              <div className={classes.pagination}>
                <div className={classes["chunk-meals"]}>
                  {mealPag.map((meal) => (
                    <MealItem key={Math.random()} meal={meal} />
                  ))}
                </div>
                <Pagination
                  className={classes["pag-num"]}
                  onClick={paginationHandler}
                >
                  {items}
                </Pagination>
              </div>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default MealPagination;

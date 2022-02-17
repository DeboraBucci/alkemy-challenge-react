import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import MealItem from "./MealItem";
import classes from "./MealPagination.module.css";
import {
  faAngleRight,
  faAngleLeft,
  faAnglesRight,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MealPagination = ({ displayedMeals, setInfoHandler }) => {
  let items = [];
  let current = 0;

  const [active, setActive] = useState(1);

  for (let number = 1; number <= displayedMeals.length; number++) {
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

  const nextPaginationHandler = () => {
    setActive((prevNum) => {
      if (prevNum === displayedMeals.length) return prevNum;
      const newNum = prevNum + 1;
      return newNum;
    });
  };

  const prevPaginationHandler = () => {
    setActive((prevNum) => {
      if (prevNum === 1) return prevNum;
      const newNum = prevNum - 1;
      return newNum;
    });
  };

  const firstPaginationHandler = () => {
    setActive(1);
  };

  const lastPaginationHandler = () => {
    setActive(displayedMeals.length);
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
                    <MealItem
                      setInfoHandler={setInfoHandler}
                      key={Math.random()}
                      meal={meal}
                    />
                  ))}
                </div>
                <Pagination
                  onClick={paginationHandler}
                  className={classes["pag-num"]}
                >
                  <button
                    className={`${classes["btn-first"]} ${classes["btn-page"]}`}
                    onClick={firstPaginationHandler}
                  >
                    <FontAwesomeIcon icon={faAnglesLeft} />
                  </button>
                  <button
                    className={`${classes["btn-page"]}`}
                    onClick={prevPaginationHandler}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </button>
                  {items}
                  <button
                    className={` ${classes["btn-page"]}`}
                    onClick={nextPaginationHandler}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </button>
                  <button
                    className={`${classes["btn-last"]} ${classes["btn-page"]}`}
                    onClick={lastPaginationHandler}
                  >
                    <FontAwesomeIcon icon={faAnglesRight} />
                  </button>
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

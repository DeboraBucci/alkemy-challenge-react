import React from "react";
import { Pagination } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faAnglesRight,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./MealsPagination.module.css";

const MealsPagination = ({ setActive, mealsList, active }) => {
  let items = [];

  for (let number = 1; number <= mealsList.length; number++) {
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

  const paginationButtonsHelper = (comparison, num) => {
    setActive((prevNum) => {
      if (prevNum === comparison) return prevNum;
      const newNum = prevNum + num;
      return newNum;
    });
  };

  const nextPaginationHandler = () => {
    paginationButtonsHelper(mealsList.length, 1);
  };

  const prevPaginationHandler = () => {
    paginationButtonsHelper(1, -1);
  };

  const firstPaginationHandler = (e) => {
    setActive(1);
  };

  const lastPaginationHandler = () => {
    setActive(mealsList.length);
  };

  return (
    <Pagination onClick={paginationHandler} className={classes.pagination}>
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
  );
};

export default MealsPagination;

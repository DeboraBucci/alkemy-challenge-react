import React, { useLayoutEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

import PaginationItem from "./PaginationItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faAnglesRight,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./MealsPagination.module.css";

const MealsPagination = ({ setActive, mealsList, active }) => {
  const [showEllipsis, setShowEllipsis] = useState(window.innerWidth < 1000);

  useLayoutEffect(() => {
    function updateSize() {
      setShowEllipsis(window.innerWidth < 1000);
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
      {showEllipsis && active !== 1 && <Pagination.Ellipsis />}
      <PaginationItem active={active} mealsList={mealsList} />
      {showEllipsis && active !== mealsList.length && <Pagination.Ellipsis />}
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

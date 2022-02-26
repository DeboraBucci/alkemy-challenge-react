import React from "react";

import { Pagination } from "react-bootstrap";

import classes from "./PaginationItem.module.css";

const PaginationItem = ({ active, mealsList }) => {
  let items = [];

  for (let num = 1; num <= mealsList.length; num++) {
    const conditions = num <= active + 2 && num >= active - 2;

    items.push(
      <Pagination.Item
        className={`${classes["pag-item"]} ${!conditions && classes.invisible}`}
        key={num}
        active={num === active}
      >
        {num}
      </Pagination.Item>
    );
  }

  return <React.Fragment>{items}</React.Fragment>;
};

export default PaginationItem;

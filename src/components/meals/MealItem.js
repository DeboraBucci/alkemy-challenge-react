import React from "react";

import { Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { info } from "../../Data";

import AddToCartButton from "../UI/AddToCartButton";
import MoreInfoButton from "../UI/MoreInfoButton";

import classes from "./MealItem.module.css";

const MealItem = ({ meal, setInfoHandler }) => {
  return (
    <Card className={classes.card} style={{ width: "18rem" }}>
      <Card.Img className={classes.img} variant="top" src={meal.image} />

      <Card.Body className={classes["card-body"]}>
        <Card.Title className={classes.title}>{meal.title}</Card.Title>

        <div className={classes.price}>$ {meal.price}</div>

        <ul className={classes["diet-list"]}>
          {meal.diets.map((diet) => (
            <li key={diet}>{diet}</li>
          ))}
        </ul>

        <ul className={classes.list}>
          {info.map((mealInfo) => (
            <li key={mealInfo.feature}>
              <FontAwesomeIcon
                className={classes[`${mealInfo.iconClass}`]}
                icon={mealInfo.icon}
              />
              <p>
                {mealInfo.startingText}
                <span className={classes.strong}>
                  {meal[`${mealInfo.feature}`]}
                  {mealInfo.spanText}
                </span>
                {mealInfo.finalText}
                {mealInfo.feature === "rating" && ` (${meal.raters})`}
              </p>
            </li>
          ))}
        </ul>

        <div className={classes.actions}>
          <AddToCartButton meal={meal} />

          <MoreInfoButton setInfoHandler={setInfoHandler} meal={meal} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default MealItem;

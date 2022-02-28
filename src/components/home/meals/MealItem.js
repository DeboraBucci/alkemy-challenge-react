import React from "react";

import { Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { info } from "../../../Data";

import AddToCartButton from "../../buttons/AddToCartButton";
import MoreInfoButton from "../../buttons/MoreInfoButton";

import classes from "./MealItem.module.css";

const MealItem = ({ meal, setInfoHandler }) => {
  return (
    <Card className={classes.card}>
      <div className={classes.price}>$ {meal.price}</div>

      <div className={`fx-cntr ${classes["img-box"]}`}>
        <Card.Img variant="top" src={meal.image} />
      </div>

      <Card.Body className={classes["card-body"]}>
        <div className={classes["text-container"]}>
          <div>
            <Card.Title>{meal.title}</Card.Title>
            <ul className={classes["tags-list"]}>
              {meal.diets.map((diet) => (
                <li className={classes.diet} key={diet}>
                  {diet}
                </li>
              ))}
              {meal.cuisines.map((cuisine) => {
                return (
                  <li className={classes.cuisine} key={cuisine}>
                    {cuisine}
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className={classes.list}>
            {info.map((mealInfo) => (
              <li key={mealInfo.feature}>
                <FontAwesomeIcon
                  className={`${mealInfo.iconClass}`}
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
        </div>

        <div className={classes.actions}>
          <AddToCartButton meal={meal} />
          <MoreInfoButton setInfoHandler={setInfoHandler} meal={meal} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default MealItem;

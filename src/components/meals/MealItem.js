import React from "react";

import { Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faStar, faClock } from "@fortawesome/free-regular-svg-icons";

import classes from "./MealItem.module.css";

import AddToCartButton from "../UI/AddToCartButton";
import MoreInfoButton from "../UI/MoreInfoButton";

const MealItem = ({ meal, setInfoHandler }) => {
  const info = [
    {
      icon: faFire,
      iconClass: classes.fire,
      text: [
        <span className={classes.strong}>{meal.calories}</span>,
        " calories",
      ],
      key: "calories",
    },
    {
      icon: faHeartbeat,
      iconClass: classes.heart,
      text: [
        "Health Score ",
        <span className={classes.strong}>{meal.healthScore}</span>,
      ],
      key: "health score",
    },
    {
      icon: faStar,
      iconClass: classes.rate,
      text: [
        <span className={classes.strong}>{meal.rating} </span>,
        `rating (
          ${meal.raters})`,
      ],
      key: "rating",
    },
    {
      icon: faClock,
      iconClass: classes.time,
      text: [
        "Cooking time ",
        <span className={classes.strong}>{meal.time} mins</span>,
      ],
      key: "time",
    },
  ];

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
            <li key={mealInfo.key}>
              <FontAwesomeIcon
                className={mealInfo.iconClass}
                icon={mealInfo.icon}
              />
              <p>{mealInfo.text}</p>
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

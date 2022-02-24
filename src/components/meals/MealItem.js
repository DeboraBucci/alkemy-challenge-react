import React from "react";
import { Button, Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faHeartbeat, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar, faClock } from "@fortawesome/free-regular-svg-icons";

import classes from "./MealItem.module.css";
import AddToCartButton from "../UI/AddToCartButton";
import MoreInfoButton from "../UI/MoreInfoButton";

const MealItem = ({ meal, setInfoHandler }) => {
  const info = [
    {
      icon: <FontAwesomeIcon className={classes.fire} icon={faFire} />,
      text: (
        <p>
          <span className={classes.strong}>{meal.calories}</span> calories
        </p>
      ),
      key: "calories",
    },
    {
      icon: <FontAwesomeIcon className={classes.heart} icon={faHeartbeat} />,
      text: (
        <p>
          Health Score{" "}
          <span className={classes.strong}>{meal.healthScore}</span>
        </p>
      ),
      key: "health score",
    },
    {
      icon: <FontAwesomeIcon className={classes.rate} icon={faStar} />,
      text: (
        <p>
          <span className={classes.strong}>{meal.rating}</span> rating (
          {meal.raters})
        </p>
      ),
      key: "rating",
    },
    {
      icon: <FontAwesomeIcon className={classes.time} icon={faClock} />,
      text: (
        <p>
          Cooking time <span className={classes.strong}>{meal.time} mins</span>
        </p>
      ),
      key: "time",
    },
  ];

  return (
    <Card
      key={Math.random()}
      className={classes.card}
      style={{ width: "18rem" }}
    >
      <Card.Img className={classes.img} variant="top" src={meal.image} />
      <Card.Body className={classes["card-body"]}>
        <Card.Title>{meal.title}</Card.Title>
        <div className={classes.price}>$ {meal.price}</div>

        <ul className={classes["diet-list"]}>
          {meal.diets.map((diet) => (
            <li key={diet}>{diet}</li>
          ))}
        </ul>

        <ul className={classes.list}>
          {info.map((mealInfo) => (
            <li key={mealInfo.key}>
              {mealInfo.icon}
              {mealInfo.text}
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

import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faHeartbeat, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar, faClock } from "@fortawesome/free-regular-svg-icons";

import classes from "./MealItem.module.css";
import AddToCartButton from "../UI/AddToCartButton";

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
          <span className={classes.strong}>4.9</span> rating (482)
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

  const moreInfoHandler = () => {
    setInfoHandler({
      id: meal.id,
      title: meal.title,
      image: meal.image,
      price: meal.price,
      time: meal.time,
      healthScore: meal.healthScore,
      calories: meal.calories,
      diets: meal.diets,
      servings: meal.servings,
      caloricBreakdown: meal.caloricBreakdown,
      ingredients: meal.ingredients,
      summary: meal.summary,
      nutrients: meal.nutrients,
    });
  };

  return (
    <Card
      key={Math.random()}
      className={classes.card}
      style={{ width: "18rem" }}
    >
      <Card.Img className={classes.img} variant="top" src={meal.image} />
      <Card.Body className={classes["card-body"]}>
        <Card.Title>{meal.title}</Card.Title>

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

          <Button
            onClick={moreInfoHandler}
            className={classes["btn-info"]}
            variant="primary"
          >
            More Info <FontAwesomeIcon className={classes.icon} icon={faPlus} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MealItem;

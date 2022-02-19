import React from "react";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import classes from "./MoreInfoButton.module.css";

const MoreInfoButton = (meal, setInfoHandler) => {
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
    <Button
      onClick={moreInfoHandler}
      className={classes["btn-info"]}
      variant="primary"
    >
      More Info <FontAwesomeIcon className={classes.icon} icon={faPlus} />
    </Button>
  );
};

export default MoreInfoButton;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faHeartbeat,
  faUtensils,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faCircleCheck } from "@fortawesome/free-regular-svg-icons";

import AddToCartButton from "../../buttons/AddToCartButton";

import classes from "./MealInformation.module.css";
import ModalComp from "../../UI/ModalComp";

const MealInformation = ({ info, closeMoreInfoHandler }) => {
  const ingredients = info.ingredients.map((ingredient) => (
    <li key={ingredient.id}>
      <FontAwesomeIcon className={classes.icon} icon={faCircleCheck} />{" "}
      {ingredient.name}
    </li>
  ));

  const nutrients = info.nutrients.map((nutrient) => (
    <span key={nutrient.id}>
      {nutrient.amount}
      {nutrient.unit} {nutrient.name} ({nutrient.percentOfDailyNeeds} %).{" "}
    </span>
  ));

  return (
    <ModalComp className={classes.modal}>
      <div className={`fx-cntr ${classes["img-box"]}`}>
        <img src={info.image} />
      </div>

      <div className={classes.content}>
        <div className={classes.title}>
          <h3>{info.title}</h3>
        </div>

        <ul className={classes["some-info"]}>
          <li>
            <FontAwesomeIcon icon={faReceipt} /> ${info.price}
          </li>
          <li>
            <FontAwesomeIcon icon={faUtensils} /> {info.servings} servings
          </li>
          <li>
            <FontAwesomeIcon icon={faClock} /> {info.time} min
          </li>
          <li>
            <FontAwesomeIcon icon={faHeartbeat} /> {info.healthScore} points
          </li>
        </ul>

        <ul className={classes.ingredients}>
          <h4>Ingredients</h4>
          {ingredients}
        </ul>

        <div className={classes.nutrients}>
          <p>Nutrients: {nutrients}</p>
        </div>

        <AddToCartButton meal={info} className={classes["btn-add"]} />
        <button className={classes["btn-close"]} onClick={closeMoreInfoHandler}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </ModalComp>
  );
};

export default MealInformation;

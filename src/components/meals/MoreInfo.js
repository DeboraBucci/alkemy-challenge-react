import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import classes from "./MoreInfo.module.css";
import {
  faCartPlus,
  faXmark,
  faHeartbeat,
  faUtensils,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";

import { faClock, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import CartContext from "../store/cart-context";

const MoreInfo = ({ info, setInfoIsShown }) => {
  const cartCtx = useContext(CartContext);

  const closeMoreInfoHandler = () => {
    setInfoIsShown(false);
  };

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: info.id,
      title: info.title,
      image: info.image,
      price: info.price,
      time: info.time,
      healthScore: info.healthScore,
    });
  };

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
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <div className={classes["img-box"]}>
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

          <button onClick={addToCartHandler} className={classes["btn-add"]}>
            Add to Cart <FontAwesomeIcon icon={faCartPlus} />
          </button>
          <button
            className={classes["btn-delete"]}
            onClick={closeMoreInfoHandler}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoreInfo;

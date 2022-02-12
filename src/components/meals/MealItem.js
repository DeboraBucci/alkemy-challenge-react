import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faFire,
  faHeartbeat,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { faStar, faClock } from "@fortawesome/free-regular-svg-icons";
import classes from "./MealItem.module.css";
import CartContext from "../store/cart-context";

const MealItem = ({ meal }) => {
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

  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: meal.id,
      title: meal.title,
      image: meal.image,
      price: meal.price,
      time: meal.time,
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
        <Card.Text>{meal.text}</Card.Text>

        <ul className={classes.list}>
          {info.map((mealInfo) => (
            <li key={mealInfo.key}>
              {mealInfo.icon}
              {mealInfo.text}
            </li>
          ))}
        </ul>

        <div className={classes.actions}>
          <Button
            onClick={addToCartHandler}
            className={classes["btn-add"]}
            variant="primary"
          >
            Add to Cart
            <FontAwesomeIcon className={classes.icon} icon={faCartPlus} />
          </Button>

          <Button className={classes["btn-info"]} variant="primary">
            More Info <FontAwesomeIcon className={classes.icon} icon={faPlus} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MealItem;

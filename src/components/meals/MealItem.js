import React from "react";
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

const MealItem = ({ meal }) => {
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
          <li>
            <FontAwesomeIcon className={classes.fire} icon={faFire} />
            <p>
              <span className={classes.strong}>{meal.calories}</span> calories
            </p>
          </li>
          <li>
            <FontAwesomeIcon className={classes.heart} icon={faHeartbeat} />
            <p>
              Health Score{" "}
              <span className={classes.strong}>{meal.healthScore}</span>
            </p>
          </li>
          <li>
            <FontAwesomeIcon className={classes.rate} icon={faStar} />
            <p>
              <span className={classes.strong}>4.9</span> rating (482)
            </p>
          </li>
          <li>
            <FontAwesomeIcon className={classes.time} icon={faClock} />
            <p>
              Cooking time{" "}
              <span className={classes.strong}>{meal.time} mins</span>
            </p>
          </li>
        </ul>

        <div className={classes.actions}>
          <Button className={classes["btn-add"]} variant="primary">
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

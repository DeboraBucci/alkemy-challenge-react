import React from "react";
import { Button, Card } from "react-bootstrap";
import classes from "./Meals.module.css";
import Meal1 from "../imgs/meal1.webp";

const Meals = () => {
  const meals = [
    {
      img: Meal1,
      title: "Mozzarella Pizza with Tomatoe",
      text: "this pizza has mozzarella, tomatoe, garlic...",
      tag: "",
      time: "",
      healthPoints: "",
      key: "meal1",
    },
    {
      img: Meal1,
      title: "Mozzarella Pizza with Tomatoe",
      text: "this pizza has mozzarella, tomatoe, garlic...",
      tags: "",
      time: "",
      healthPoints: "",
      key: "meal2",
    },
    {
      img: Meal1,
      title: "Mozzarella Pizza with Tomatoe",
      text: "this pizza has mozzarella, tomatoe, garlic...",
      tag: "",
      time: "",
      healthPoints: "",
      key: "meal3",
    },
    {
      img: Meal1,
      title: "Mozzarella Pizza with Tomatoe",
      text: "this pizza has mozzarella, tomatoe, garlic...",
      tag: "",
      time: "",
      healthPoints: "",
      key: "meal4",
    },
  ];

  return (
    <section className={classes.meals}>
      <div className={classes["meals-box"]}>
        {meals.map((meal) => (
          <Card
            key={Math.random()}
            className={classes.card}
            style={{ width: "18rem" }}
          >
            <Card.Img className={classes.img} variant="top" src={meal.img} />
            <Card.Body className={classes["card-body"]}>
              <Card.Title>{meal.title}</Card.Title>
              <Card.Text>{meal.text}</Card.Text>

              <ul className={classes.list}>
                <li>
                  <i className={`fas fa-fire-alt ${classes.fire}`}></i>{" "}
                  <p>
                    <span className={classes.strong}>2,200</span> calories
                  </p>
                </li>
                <li>
                  <i className={`fas fa-heartbeat ${classes.heart}`}></i>
                  <p>
                    Health Score <span className={classes.strong}>67</span>
                  </p>
                </li>
                <li>
                  <i className={`far fa-star ${classes.rate}`}></i>{" "}
                  <p>
                    <span className={classes.strong}>4.9</span> rating (482)
                  </p>
                </li>
                <li>
                  <i className={`far fa-clock ${classes.time}`}></i>{" "}
                  <p>
                    Cooking time <span className={classes.strong}>39 mins</span>
                  </p>
                </li>
              </ul>

              <Button className={classes.btn} variant="primary">
                Add to Cart <i className={`fas fa-plus ${classes.icon}`}></i>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Meals;

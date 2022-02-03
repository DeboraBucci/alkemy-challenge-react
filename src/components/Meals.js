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
    },
    {
      img: Meal1,
      title: "Mozzarella Pizza with Tomatoe",
      text: "this pizza has mozzarella, tomatoe, garlic...",
      tag: "",
      time: "",
      healthPoints: "",
    },
    {
      img: Meal1,
      title: "Mozzarella Pizza with Tomatoe",
      text: "this pizza has mozzarella, tomatoe, garlic...",
      tag: "",
      time: "",
      healthPoints: "",
    },
    {
      img: Meal1,
      title: "Mozzarella Pizza with Tomatoe",
      text: "this pizza has mozzarella, tomatoe, garlic...",
      tag: "",
      time: "",
      healthPoints: "",
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

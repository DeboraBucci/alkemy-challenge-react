import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import classes from "./Meals.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "react-bootstrap";

const Meals = ({ meals, waiting }) => {
  return (
    <section className={classes.meals}>
      <div className={classes["meals-box"]}>
        {waiting && meals.length === 0 && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {!waiting && meals.length === 0 ? (
          <p>No meals found.</p>
        ) : (
          meals.map((meal) => (
            <Card
              key={Math.random()}
              className={classes.card}
              style={{ width: "18rem" }}
            >
              <Card.Img
                className={classes.img}
                variant="top"
                src={meal.image}
              />
              <Card.Body className={classes["card-body"]}>
                <Card.Title>{meal.title}</Card.Title>
                <Card.Text>{meal.text}</Card.Text>

                <ul className={classes.list}>
                  <li>
                    <i className={`fas fa-fire-alt ${classes.fire}`}></i>{" "}
                    <p>
                      <span className={classes.strong}>{meal.calories}</span>{" "}
                      calories
                    </p>
                  </li>
                  <li>
                    <i className={`fas fa-heartbeat ${classes.heart}`}></i>
                    <p>
                      Health Score{" "}
                      <span className={classes.strong}>{meal.healthScore}</span>
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
                      Cooking time{" "}
                      <span className={classes.strong}>{meal.time} mins</span>
                    </p>
                  </li>
                </ul>

                <div className={classes.actions}>
                  <Button className={classes["btn-add"]} variant="primary">
                    Add to Cart
                    <FontAwesomeIcon
                      className={classes.icon}
                      icon={faCartPlus}
                    />
                  </Button>

                  <Button className={classes["btn-info"]} variant="primary">
                    More Info <i className={`fas fa-plus ${classes.icon}`}></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </section>
  );
};

export default Meals;

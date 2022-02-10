import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import classes from "./Search.module.css";
import Axios from "axios";

const Search = (props) => {
  const [enteredInput, setEnteredInput] = useState();
  const [vegetarianCheck, setVegetarianCheck] = useState(false);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (meals.length < 1) return;

    props.onSearchMeals(meals);
  }, [meals]);

  const submitHandler = (e) => {
    e.preventDefault();
    let diet = "";

    if (enteredInput.trim().length < 2) return;

    if (vegetarianCheck) diet = "vegetarian";

    Axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${enteredInput.trim()}&diet=${diet}&apiKey=602e462c798141faa4b7fd415ba7a619`
    ).then(function (response) {
      setMeals([]);

      const mealsArr = [];
      const mealsData = response.data.results;
      mealsData.map((meal) =>
        mealsArr.push({
          id: meal.id,
          title: meal.title,
          image: meal.image,
        })
      );

      setMeals(mealsArr);
    });
  };

  const inputHandler = (e) => {
    setEnteredInput(e.target.value);
  };

  const vegetarianCheckHandler = (e) => {
    if (e.target.checked) {
      setVegetarianCheck(true);
    } else {
      setVegetarianCheck(false);
    }
  };

  return (
    <section className={classes.search}>
      <h1>Lily's Cuisine</h1>
      <p>Your meal in one click</p>

      <Form onSubmit={submitHandler}>
        <InputGroup className={`mb-3 ${classes["input-group"]}`}>
          <FormControl
            onChange={inputHandler}
            placeholder="search for meals ..."
            aria-label="search for meals ..."
            aria-describedby="basic-addon2"
          />
          <Button
            type="submit"
            className={classes.btn}
            variant="outline-secondary"
            id="button-addon2"
          >
            Search
          </Button>
        </InputGroup>
      </Form>
      <Form.Check
        onChange={vegetarianCheckHandler}
        type="switch"
        id="custom-switch"
        label="Vegetarian"
      />
    </section>
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import classes from "./Search.module.css";
import Axios from "axios";

const Search = (props) => {
  const [enteredInput, setEnteredInput] = useState();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    props.onSearchMeals(meals);
  }, [meals]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredInput.trim().length < 2) return;

    Axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${enteredInput.trim()}&apiKey=602e462c798141faa4b7fd415ba7a619`
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

  return (
    <section className={classes.search}>
      <h1>Lily's Cuisine</h1>
      <p>Your meal in one click</p>

      <form onSubmit={submitHandler}>
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
      </form>
    </section>
  );
};

export default Search;

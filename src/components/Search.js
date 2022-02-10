import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import classes from "./Search.module.css";
import Axios from "axios";

const Search = (props) => {
  const [enteredInput, setEnteredInput] = useState();
  const [selectedDiet, setSelectedDiet] = useState("");

  const [meals, setMeals] = useState([]);

  const dropdownOpt = [
    "None",
    "African",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ];

  const dietOpt = [
    "All",
    "Whole30",
    "Paleo",
    "Vegan",
    "Vegetarian",
    "Gluten Free",
    "Ketogenic",
    "Lacto-Vegetarian",
    "Ovo-Vegetarian",
    "Pescetarian",
    "Primal",
    "Low FODMAP",
  ];

  useEffect(() => {
    if (meals.length < 1) return;

    props.onSearchMeals(meals);
  }, [meals]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredInput.trim().length < 2) return;

    Axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${enteredInput.trim()}&diet=${selectedDiet}&addRecipeInformation=true&addRecipeNutrition=true&number=1&apiKey=d4d951265a704dc49ac9ee0d5a116060`
    ).then(function (response) {
      const mealsArr = [];
      console.log(response.data.results);
      const mealsData = response.data.results;
      mealsData.map((meal) => {
        mealsArr.push({
          id: meal.id,
          title: meal.title,
          image: meal.image,
          calories: `${Math.round(meal.nutrition.nutrients[0].amount)} ${
            meal.nutrition.nutrients[0].unit
          }`,
          healthScore: meal.healthScore,
          vegan: meal.vegan,
          vegetarian: meal.vegetarian,
          price: meal.pricePerServing * meal.pricePerServing,
          time: meal.readyInMinutes,
          servings: meal.pricePerServing,
        });
      });

      setMeals(mealsArr);
    });
  };

  const inputHandler = (e) => {
    setEnteredInput(e.target.value);
  };

  const dietCheckHandler = (e) => {
    if (selectedDiet === "all") setSelectedDiet("");
    setSelectedDiet(e.target.value);
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

        <InputGroup>
          <Form.Label visuallyHidden>cuisine</Form.Label>
          <InputGroup.Text>Cuisine</InputGroup.Text>
          <Form.Select aria-label="Default select example">
            {dropdownOpt.map((opt, i) => (
              <option value={i + 1} key={`${opt} cuisine`}>
                {opt}
              </option>
            ))}
          </Form.Select>
        </InputGroup>

        <InputGroup>
          <Form.Label visuallyHidden>diet</Form.Label>
          <InputGroup.Text>Diet</InputGroup.Text>
          <Form.Select
            onChange={dietCheckHandler}
            aria-label="Default select example"
          >
            {dietOpt.map((opt, i) => (
              <option value={opt} key={`${opt} diet`}>
                {opt}
              </option>
            ))}
          </Form.Select>
        </InputGroup>
      </Form>
    </section>
  );
};

export default Search;

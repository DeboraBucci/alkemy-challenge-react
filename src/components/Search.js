import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import classes from "./Search.module.css";
import Axios from "axios";

const Search = (props) => {
  const [enteredInput, setEnteredInput] = useState();
  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedCuisine, setSelecteCuisine] = useState("");

  const [noSugar, setNoSugar] = useState(false);
  const [noEggs, setNoEggs] = useState(false);

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
    props.onSearchMeals(props.meals);
  }, [props.meals]);

  const submitHandler = (e) => {
    e.preventDefault();
    props.setIsWait(true);

    if (!enteredInput || enteredInput.trim().length < 2) return;

    Axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${enteredInput.trim()}&cuisine=${selectedCuisine}
      &diet=${selectedDiet}${noSugar ? `&excludeIngredients=sugar` : ""}${
        noEggs ? `&excludeIngredients=eggs` : ""
      }&addRecipeInformation=true&addRecipeNutrition=true&number=100&apiKey=e78e76391dfa45abb3ea5a277c917c29`
    ).then(function (response) {
      const mealsArr = [];
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
          diets: meal.diets,
          price: meal.pricePerServing,
          time: meal.readyInMinutes,
          servings: meal.servings,
        });
      });

      props.setMeals(mealsArr);
    });
  };

  const inputHandler = (e) => {
    setEnteredInput(e.target.value);
  };

  const dietCheckHandler = (e) => {
    if (selectedDiet === "All") setSelectedDiet("");
    setSelectedDiet(e.target.value);
  };

  const cuisineCheckHandler = (e) => {
    if (selectedCuisine === "None") setSelecteCuisine("");
    setSelecteCuisine(e.target.value);
  };

  const sugarHandler = (e) => {
    if (e.target.checked) {
      setNoSugar(true);
    } else {
      setNoSugar(false);
    }
  };

  const eggsHandler = (e) => {
    if (e.target.checked) {
      setNoEggs(true);
    } else {
      setNoEggs(false);
    }
  };

  return (
    <section className={classes.search}>
      <h1>Lily's Cuisine</h1>
      <p>Your meal in one click</p>

      <Form className={classes.form} onSubmit={submitHandler}>
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

        <div className={classes.options}>
          <InputGroup>
            <Form.Label visuallyHidden>cuisine</Form.Label>
            <InputGroup.Text>Cuisine</InputGroup.Text>
            <Form.Select
              onChange={cuisineCheckHandler}
              aria-label="Default select example"
            >
              {dropdownOpt.map((opt) => (
                <option value={opt} key={`${opt} cuisine`}>
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
        </div>

        <div className={classes.checkboxes}>
          <Form.Check
            onChange={sugarHandler}
            type="switch"
            id="custom-switch"
            label="No Added sugar"
          />
          <Form.Check
            onChange={eggsHandler}
            type="switch"
            id="custom-switch"
            label="No Eggs"
          />
        </div>
      </Form>
    </section>
  );
};

export default Search;

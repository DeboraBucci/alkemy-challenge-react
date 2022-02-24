import React, { useEffect, useState } from "react";
import classes from "./Search.module.css";
import Axios from "axios";
import SweetAlert from "../UI/SweetAlert";
import FormikForm from "./FormikForm";

const Search = ({
  onSearchMeals,
  meals,
  setIsWaiting,
  waiting,
  setIsMealsShown,
  setMeals,
}) => {
  const [slogan, setSlogan] = useState();

  useEffect(() => {
    onSearchMeals(meals);
  }, [meals]);

  useEffect(() => {
    const randomNum = Math.round(Math.random() * 3);

    if (randomNum === 1) setSlogan("Your meal in one click!");

    if (randomNum === 2) setSlogan("We cook, you enjoy!");

    if (randomNum === 3) setSlogan("Your meal, one click away!");
  }, []);

  const onSubmit = async (text, preferences) => {
    setIsWaiting(true);
    setIsMealsShown(true);

    const cuisine = `&cuisine=${preferences.selectedCuisine}`;
    const diet = `&diet=${preferences.selectedDiet}`;
    const excludedIngredients = `&excludeIngredients=${preferences.excludedIng}`;
    const sort = `&sort=${preferences.sort}`;
    const direction = `&sortDirection=${preferences.direction}`;

    const apiKey = "d4d951265a704dc49ac9ee0d5a116060";

    const link = `https://api.spoonacular.com/recipes/complexSearch?query=${
      text + cuisine + diet + excludedIngredients + sort + direction
    }&addRecipeInformation=true&addRecipeNutrition=true&number=100&apiKey=${apiKey}`;

    const mealsArr = [];

    try {
      const response = await Axios.get(link);
      const data = await response.data.results;

      await data.forEach(async (meal) => {
        const rating = (3 + Math.random() * 2).toFixed(2);
        const raters = Math.floor(Math.random() * 3000 + 2);

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
          ingredients: meal.nutrition.ingredients,
          caloricBreakdown: meal.nutrition.caloricBreakdown,
          summary: meal.summary,
          nutrients: meal.nutrition.nutrients,
          isVegan: meal.vegan,
          rating: rating,
          raters: raters,
        });
      });

      await setMeals(mealsArr);
    } catch (err) {
      setMeals([]);

      if (err.message.includes("402")) {
        SweetAlert({
          title: "Error 402",
          text: "The search limit have been reached for today, try again tomorrow. Sorry!",
        });
        return;
      }

      SweetAlert({
        title: err.name,
        text: err.message,
      });
    }
  };

  return (
    <section id="search" className={classes.search}>
      <div className={classes.brand}>
        <h1>Lily's Cuisine</h1>
        <p>{slogan}</p>
      </div>
      <FormikForm onSubmit={onSubmit} waiting={waiting} />
      <p>You have to choose two vegan and two non vegan meals for your menu.</p>
    </section>
  );
};

export default Search;

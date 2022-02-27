import React, { useEffect } from "react";
import classes from "./Search.module.css";
import Axios from "axios";
import SweetAlert from "../../UI/SweetAlert";
import FormikForm from "./FormikForm";
import SearchHeader from "./SearchHeader";
import { mealSearchLinkModifier } from "../../../Data";

const { randomNumGenerator } = require("../../functions/randomNumGenerator");

const Search = ({
  onSearchMeals,
  meals,
  setIsWaiting,
  waiting,
  setIsMealsShown,
  setMeals,
}) => {
  useEffect(() => {
    onSearchMeals(meals);
  }, [meals]);

  const onSubmit = async (text, preferences) => {
    setIsWaiting(true);
    setIsMealsShown(true);

    const link = mealSearchLinkModifier(text, preferences);

    const mealsArr = [];

    try {
      const response = await Axios.get(link);
      const data = await response.data.results;

      await data.forEach(async (meal) => {
        const rating = randomNumGenerator(3, 5).toFixed(2);
        const raters = Math.floor(randomNumGenerator(2, 3000));

        const calories = `${Math.round(meal.nutrition.nutrients[0].amount)} ${
          meal.nutrition.nutrients[0].unit
        }`;

        mealsArr.push({
          id: meal.id,
          title: meal.title,
          image: meal.image,
          calories: calories,
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
      <SearchHeader />
      <FormikForm onSubmit={onSubmit} waiting={waiting} />
      <p>You have to choose two vegan and two non vegan meals for your menu.</p>
    </section>
  );
};

export default Search;

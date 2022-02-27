import React from "react";

import FormikForm from "./FormikForm";
import SearchHeader from "./SearchHeader";

import {
  mealSearchLinkModifier,
  getMealsData,
  setMealsArray,
} from "../../../functions/mealsDataManagement";

import classes from "./Search.module.css";

const Search = ({ onSearchMeals, setIsWaiting, waiting, setIsMealsShown }) => {
  const onSubmit = async (text, preferences) => {
    setIsWaiting(true);
    setIsMealsShown(true);

    const link = mealSearchLinkModifier(text, preferences);
    const data = await getMealsData(link);
    const meals = await setMealsArray(data);

    await onSearchMeals(meals);
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

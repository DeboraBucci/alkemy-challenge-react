import axios from "axios";
import SweetAlert from "../UI/SweetAlert";
const { randomNumGenerator } = require("./randomNumGenerator");

// SET LINK
// -----------------------------------------------------------------------------
const mealSearchLinkModifier = (text, preferences) => {
  const cuisine = `&cuisine=${preferences.selectedCuisine}`;
  const diet = `&diet=${preferences.selectedDiet}`;
  const excludedIngredients = `&excludeIngredients=${preferences.excludedIng}`;
  const sort = `&sort=${preferences.sort}`;
  const direction = `&sortDirection=${preferences.direction}`;

  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const link = `https://api.spoonacular.com/recipes/complexSearch?query=${
    text + cuisine + diet + excludedIngredients + sort + direction
  }&addRecipeInformation=true&addRecipeNutrition=true&number=100&apiKey=${apiKey}`;

  return link;
};

// GET MEALS DATA
// -----------------------------------------------------------------------------
const getMealsData = async (link) => {
  try {
    const response = await axios.get(link);

    const data = await response.data.results;

    return data;
  } catch (err) {
    if (err.message.includes("402")) {
      SweetAlert({
        title: "Error 402",
        text: "The search's limit has been reached for today, try again tomorrow. Sorry!",
      });
      return;
    }

    SweetAlert({
      title: err.name,
      text: err.message,
    });
  }
};

// SET MEALS
// -----------------------------------------------------------------------------
const setMealsArray = async (data = []) => {
  const mealsArr = [];

  data.forEach((meal) => {
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

  return mealsArr;
};

export { mealSearchLinkModifier, getMealsData, setMealsArray };

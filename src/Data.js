import { faFire, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faStar, faClock } from "@fortawesome/free-regular-svg-icons";

const cuisineOpt = [
  "All...",
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
  "All...",
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

const defaultObj = {
  item: {
    id: null,
    title: null,
    image: null,
  },
};

const mealInfoHandler = (meal) => {
  return {
    id: meal.id + Math.random(),
    title: meal.title,
    image: meal.image,
    price: meal.price,
    time: meal.time,
    healthScore: meal.healthScore,
    calories: meal.calories,
    diets: meal.diets,
    servings: meal.servings,
    caloricBreakdown: meal.caloricBreakdown,
    ingredients: meal.ingredients,
    summary: meal.summary,
    nutrients: meal.nutrients,
    isVegan: meal.isVegan,
    rating: meal.rating,
    raters: meal.raters,
  };
};

const info = [
  {
    icon: faFire,
    iconClass: "fire",
    finalText: " calories",
    feature: "calories",
  },
  {
    icon: faHeartbeat,
    iconClass: "heart",
    startingText: "Health Score ",
    feature: "healthScore",
  },
  {
    icon: faStar,
    iconClass: "rate",
    finalText: " rating",
    feature: "rating",
  },
  {
    icon: faClock,
    iconClass: "time",
    startingText: "Cooking time ",
    spanText: ` mins`,
    feature: "time",
  },
];

const mealSearchLinkModifier = (text, preferences) => {
  const cuisine = `&cuisine=${preferences.selectedCuisine}`;
  const diet = `&diet=${preferences.selectedDiet}`;
  const excludedIngredients = `&excludeIngredients=${preferences.excludedIng}`;
  const sort = `&sort=${preferences.sort}`;
  const direction = `&sortDirection=${preferences.direction}`;

  const apiKey = "d4d951265a704dc49ac9ee0d5a116060";

  const link = `https://api.spoonacular.com/recipes/complexSearch?query=${
    text + cuisine + diet + excludedIngredients + sort + direction
  }&addRecipeInformation=true&addRecipeNutrition=true&number=100&apiKey=${apiKey}`;

  return link;
};

export {
  cuisineOpt,
  dietOpt,
  defaultObj,
  mealInfoHandler,
  info,
  mealSearchLinkModifier,
};

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

const defaultObj = {
  item: {
    id: null,
    title: null,
    image: null,
  },
};

const mealInfoHandler = (meal) => {
  return {
    id: meal.id,
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
  };
};

export { dropdownOpt, dietOpt, defaultObj, mealInfoHandler };

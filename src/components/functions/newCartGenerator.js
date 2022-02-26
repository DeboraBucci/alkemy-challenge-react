exports.newCartGenerator = (
  dishes,
  price,
  time,
  healthScore,
  servings,
  veganMeals,
  nonVeganMeals
) => {
  return {
    totalDishes: dishes,
    totalPrice: price,
    totalTime: time,
    totalHealthScore: healthScore,
    totalServings: servings,
    veganMeals: veganMeals,
    nonVeganMeals: nonVeganMeals,
  };
};

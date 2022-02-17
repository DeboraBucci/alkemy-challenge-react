import React, { useState } from "react";
import BootstrapNavbar from "./navbar/BootstrapNavbar";
import classes from "./Home.module.css";
import Meals from "./meals/Meals";
import Search from "./search/Search";
import Bar from "./bar/Bar";

const Home = ({ onLogout, onOpenCart }) => {
  const [meals, setMeals] = useState([]);
  const [isMealsShown, setIsMealsShown] = useState(null);
  const [isWait, setIsWait] = useState(false);

  const searchMealsHandler = (meals) => {
    setTimeout(() => {
      setMeals(meals);
      setIsWait(false);
    }, 2000);
  };

  return (
    <main className={classes.home}>
      <BootstrapNavbar onLogout={onLogout} onOpenCart={onOpenCart} />
      <div className={classes["navbar-space"]}></div>
      <Search
        setIsMealsShown={setIsMealsShown}
        onSearchMeals={searchMealsHandler}
        setIsWait={setIsWait}
        setMeals={setMeals}
        meals={meals}
      />
      {isMealsShown && <Meals meals={meals} waiting={isWait} />}
      <Bar />
    </main>
  );
};

export default Home;

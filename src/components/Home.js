import React, { useState } from "react";
import BootstrapNavbar from "./navbar/BootstrapNavbar";
import classes from "./Home.module.css";
import Meals from "./Meals";
import Search from "./Search";
import Menu from "./menu/Menu";
import Bar from "./bar/Bar";

const Home = ({ onLogout, onOpenCart }) => {
  const [meals, setMeals] = useState([]);
  const [isWait, setIsWait] = useState(false);

  const searchMealsHandler = (meals) => {
    setTimeout(() => {
      setMeals(meals);
      setIsWait(false);
    }, 1000);
  };

  return (
    <main className={classes.home}>
      <BootstrapNavbar onLogout={onLogout} />
      <div className={classes["navbar-space"]}></div>
      <Search
        onSearchMeals={searchMealsHandler}
        setIsWait={setIsWait}
        setMeals={setMeals}
        meals={meals}
      />
      <Meals meals={meals} waiting={isWait} />
      <Menu />
      <Bar />
    </main>
  );
};

export default Home;

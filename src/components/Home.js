import React, { useState } from "react";
import BootstrapNavbar from "./navbar/BootstrapNavbar";
import classes from "./Home.module.css";
import Meals from "./meals/Meals";
import Search from "./Search";
import Bar from "./bar/Bar";

const Home = ({ onLogout, onOpenCart }) => {
  const [meals, setMeals] = useState([]);
  const [isWait, setIsWait] = useState(false);
  const [sectionShown, setSectionShown] = useState(false);

  const searchMealsHandler = (meals) => {
    setSectionShown(true);

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
        onSearchMeals={searchMealsHandler}
        setIsWait={setIsWait}
        setMeals={setMeals}
        meals={meals}
      />
      {sectionShown && <Meals meals={meals} waiting={isWait} />}
      <Bar />
    </main>
  );
};

export default Home;

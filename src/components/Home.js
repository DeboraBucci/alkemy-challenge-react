import React, { useState } from "react";
import BootstrapNavbar from "./navbar/BootstrapNavbar";
import classes from "./Home.module.css";
import Meals from "./meals/Meals";
import Search from "./search/Search";
import Bar from "./bar/Bar";
import Cart from "./cart/Cart";
import MoreInfo from "./meals/MoreInfo";
import Menu from "./menu/Menu";

const Home = ({ onLogout }) => {
  const [meals, setMeals] = useState([]);
  const [isMealsShown, setIsMealsShown] = useState(null);
  const [isWait, setIsWait] = useState(false);
  const [cartIsOpened, setCartIsOpened] = useState(false);
  const [extraInfo, setExtraInfo] = useState({});
  const [extraInfoIsShown, setExtraInfoIsShown] = useState(false);

  const searchMealsHandler = (meals) => {
    setMeals(meals);
    setIsWait(false);
  };

  const openCartHandler = () => {
    setCartIsOpened(true);
  };

  const closeCartHandler = () => {
    setCartIsOpened(false);
  };

  const setInfoHandler = (info) => {
    setExtraInfo(info);
    setExtraInfoIsShown(true);
  };

  return (
    <main className={classes.home}>
      <BootstrapNavbar onLogout={onLogout} onOpenCart={openCartHandler} />
      <div className={classes["navbar-space"]}></div>
      <Search
        setIsMealsShown={setIsMealsShown}
        onSearchMeals={searchMealsHandler}
        setIsWait={setIsWait}
        setMeals={setMeals}
        meals={meals}
        waiting={isWait}
      />

      <Meals
        isMealsShown={isMealsShown}
        meals={meals}
        waiting={isWait}
        extraInfo={extraInfo}
        extraInfoIsShown={extraInfoIsShown}
        setExtraInfoIsShown={setExtraInfoIsShown}
        setInfoHandler={setInfoHandler}
      />

      <Menu setInfoHandler={setInfoHandler} />
      {cartIsOpened && <Cart onCloseCart={closeCartHandler} />}
      {extraInfoIsShown && (
        <MoreInfo info={extraInfo} setInfoIsShown={setExtraInfoIsShown} />
      )}
      <Bar />
    </main>
  );
};

export default Home;

import React, { useContext, useEffect, useState } from "react";

import classes from "./Home.module.css";

import BootstrapNavbar from "./navbar/BootstrapNavbar";
import Meals from "./meals/Meals";
import Search from "./search/Search";
import Bar from "./bar/Bar";
import Cart from "./cart/Cart";
import MoreInfo from "./meals/MoreInfo";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";

import CartContext from "./store/cart-context";
import { defaultObj } from "../Data";

const Home = ({ onLogout }) => {
  const [searchedMeals, setSearchedMeals] = useState([]);
  const [isMealsShown, setIsMealsShown] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [cartIsOpened, setCartIsOpened] = useState(false);
  const [extraInfo, setExtraInfo] = useState({});
  const [extraInfoIsShown, setExtraInfoIsShown] = useState(false);

  const [cartMeals, setCartMeals] = useState([]);

  const cartCtx = useContext(CartContext);
  const dishesAmount = cartCtx.totalDishes.length;

  useEffect(() => {
    const mealArr = [];

    cartCtx.totalDishes.forEach((dish) => {
      mealArr.push(dish);
    });

    const defaultObjArr = new Array(4 - dishesAmount);
    defaultObjArr.fill(defaultObj);

    const finalArr = mealArr.concat(defaultObjArr);

    setCartMeals(finalArr);
  }, [cartCtx]);

  const searchMealsHandler = (meals) => {
    setSearchedMeals(meals);
    setIsWaiting(false);
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
        setIsWaiting={setIsWaiting}
        setMeals={setSearchedMeals}
        meals={searchedMeals}
        waiting={isWaiting}
      />

      <Meals
        isMealsShown={isMealsShown}
        meals={searchedMeals}
        waiting={isWaiting}
        extraInfo={extraInfo}
        extraInfoIsShown={extraInfoIsShown}
        setExtraInfoIsShown={setExtraInfoIsShown}
        setInfoHandler={setInfoHandler}
      />

      <Menu setInfoHandler={setInfoHandler} meals={cartMeals} />
      {cartIsOpened && (
        <Cart meals={cartMeals} onCloseCart={closeCartHandler} />
      )}
      {extraInfoIsShown && (
        <MoreInfo info={extraInfo} setInfoIsShown={setExtraInfoIsShown} />
      )}
      <Bar />
      <Footer />
    </main>
  );
};

export default Home;

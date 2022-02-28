import React, { useContext, useEffect, useState } from "react";

import classes from "./Home.module.css";

import { defaultObj } from "../../Data";

import CartContext from "../../store/cart-context";

import InformationOverlay from "./meal-information/InformationOverlay";
import CartOverlay from "./cart/CartOverlay";
import Bar from "./bar/Bar";

import NavbarComp from "./navbar/NavbarComp";
import Search from "./search/Search";
import Meals from "./meals/Meals";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";

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
      <NavbarComp onLogout={onLogout} onOpenCart={openCartHandler} />
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
        <CartOverlay meals={cartMeals} onCloseCart={closeCartHandler} />
      )}
      {extraInfoIsShown && (
        <InformationOverlay
          info={extraInfo}
          setInfoIsShown={setExtraInfoIsShown}
        />
      )}
      <Bar />
      <Footer />
    </main>
  );
};

export default Home;

import React from "react";
import BootstrapNavbar from "./navbar/BootstrapNavbar";
import classes from "./Home.module.css";
import Meals from "./Meals";
import Search from "./Search";
import Menu from "./menu/Menu";
import Bar from "./bar/Bar";

const Home = ({ onLogout }) => {
  return (
    <main className={classes.home}>
      <BootstrapNavbar onLogout={onLogout} />
      <div className={classes["navbar-space"]}></div>
      <Search />
      <Meals />
      <Menu />
      <Bar />
    </main>
  );
};

export default Home;

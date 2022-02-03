import React from "react";
import BootstrapNavbar from "./BootstrapNavbar";
import classes from "./Home.module.css";
import Meals from "./Meals";
import Search from "./Search";

const Home = ({ onLogout }) => {
  return (
    <main className={classes.home}>
      <BootstrapNavbar onLogout={onLogout} />
      <Search />
      <Meals />
    </main>
  );
};

export default Home;

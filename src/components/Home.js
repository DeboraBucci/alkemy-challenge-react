import React from "react";
import classes from "./Home.module.css";
import Search from "./Search";

const Home = (props) => {
  return (
    <main className={classes.home}>
      <Search />
    </main>
  );
};

export default Home;

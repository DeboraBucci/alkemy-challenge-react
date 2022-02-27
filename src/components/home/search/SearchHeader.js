import React, { useEffect, useState } from "react";
import classes from "./SearchHeader.module.css";

const { randomNumGenerator } = require("../../functions/randomNumGenerator");

const SearchHeader = () => {
  const [slogan, setSlogan] = useState();

  useEffect(() => {
    const randomNum = Math.round(randomNumGenerator(1, 3));
    randomNum === 1 && setSlogan("Your meal in one click!");
    randomNum === 2 && setSlogan("We cook, you enjoy!");
    randomNum === 3 && setSlogan("Your meal, one click away!");
  }, []);

  return (
    <header className={classes.brand}>
      <h1>Lily's Cuisine</h1>
      <p>{slogan}</p>
    </header>
  );
};

export default SearchHeader;

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classes from "./Greeting.module.css";

const Greeting = () => {
  const [isNameChanging, setIsNameChanging] = useState(false);
  const [name, setName] = useState("user");

  const changeNameHandler = () => {
    setIsNameChanging(true);
  };

  const setNameHandler = (e) => {
    const enteredText = e.target.value;

    if (e.code === "Enter" || e._reactName === "onBlur") {
      !(enteredText === "" || enteredText.length >= 14) && setName(enteredText);

      setIsNameChanging(false);
    }
  };

  const changeNameInput = (
    <input
      autoFocus
      placeholder="your name"
      className={classes["change-name-input"]}
      onKeyPress={setNameHandler}
      onBlur={setNameHandler}
    />
  );

  const changeNameButton = (
    <button aria-label="edit name" onClick={changeNameHandler}>
      <FontAwesomeIcon icon={faPenToSquare} />
    </button>
  );

  const dynamicParagraphContent = !isNameChanging ? name : changeNameInput;

  return (
    <div className={classes.greeting}>
      <p>Welcome, {dynamicParagraphContent}!</p>

      {!isNameChanging && changeNameButton}
    </div>
  );
};

export default Greeting;

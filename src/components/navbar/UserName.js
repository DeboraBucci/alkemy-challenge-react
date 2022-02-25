import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classes from "./UserName.module.css";

const UserName = () => {
  const [isNameChanging, setIsNameChanging] = useState(false);
  const [name, setName] = useState("user");

  const changeNameHandler = () => {
    setIsNameChanging(true);
  };

  const setNameHandler = (e) => {
    const enteredText = e.target.value;

    if (e.code === "Enter" || e._reactName === "onBlur") {
      !(enteredText === "") && setName(enteredText);

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
    <button onClick={changeNameHandler}>
      <FontAwesomeIcon icon={faPenToSquare} />
    </button>
  );

  const dynamicParagraphContent = !isNameChanging ? name : changeNameInput;

  return (
    <div className={classes.greeting}>
      <p>Hello, {dynamicParagraphContent}!</p>

      {!isNameChanging && changeNameButton}
    </div>
  );
};

export default UserName;

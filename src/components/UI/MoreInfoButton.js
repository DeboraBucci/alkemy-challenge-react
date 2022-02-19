import React from "react";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import classes from "./MoreInfoButton.module.css";

import { mealInfoHandler } from "../../Data";

const MoreInfoButton = ({ meal, setInfoHandler }) => {
  const moreInfoHandler = () => {
    const mealInfo = mealInfoHandler(meal);
    setInfoHandler(mealInfo);
  };

  return (
    <Button
      onClick={moreInfoHandler}
      className={classes["btn-info"]}
      variant="primary"
    >
      More Info <FontAwesomeIcon className={classes.icon} icon={faPlus} />
    </Button>
  );
};

export default MoreInfoButton;

import React from "react";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import classes from "./MoreInfoButton.module.css";

import { mealInfoHandler } from "../../Data";

const MoreInfoButton = ({ meal, setInfoHandler, className }) => {
  const moreInfoHandler = () => {
    const mealInfo = mealInfoHandler(meal);
    setInfoHandler(mealInfo);
  };

  return (
    <Button
      onClick={moreInfoHandler}
      className={`${classes["btn-info"]} ${className}`}
      variant="primary"
    >
      More Info <FontAwesomeIcon icon={faCircleInfo} />
    </Button>
  );
};

export default MoreInfoButton;

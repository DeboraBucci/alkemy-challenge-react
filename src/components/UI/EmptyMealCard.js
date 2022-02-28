import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./EmptyMealCard.module.css";

const EmptyMealCard = ({ className }) => {
  return (
    <div className={`fx-cntr ${classes.fallback} ${className}`}>
      <div className={`fx-cntr ${classes.circle}`}>
        <FontAwesomeIcon icon={faUtensils} />
      </div>
    </div>
  );
};

export default EmptyMealCard;

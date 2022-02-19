import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import classes from "./RemoveFromCartButton.module.css";

const RemoveFromCartButton = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes["btn-delete"]} ${className}`}
    >
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
};

export default RemoveFromCartButton;

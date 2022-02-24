import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = ({ onClick }) => {
  return <div onClick={onClick} className={classes.backdrop}></div>;
};

export default Backdrop;

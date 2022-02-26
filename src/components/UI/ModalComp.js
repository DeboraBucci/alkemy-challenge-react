import React from "react";

import classes from "./ModalComp.module.css";

const ModalComp = ({ className, children }) => {
  return <div className={`${classes.cart} ${className}`}>{children}</div>;
};

export default ModalComp;

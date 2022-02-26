import React from "react";

import classes from "./ModalComp.module.css";

const ModalComp = ({ className, children }) => {
  return <div className={`${classes.modal} ${className}`}>{children}</div>;
};

export default ModalComp;

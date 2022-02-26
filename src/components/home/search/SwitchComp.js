import React from "react";
import { Field } from "formik";

const SwitchComp = ({ title, name }) => {
  return (
    <div className="form-check form-switch">
      <Field
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={`no${name}`}
        name={`no${name}`}
      />
      <label className="form-check-label" htmlFor={`no${name}`}>
        {title}
      </label>
    </div>
  );
};

export default SwitchComp;

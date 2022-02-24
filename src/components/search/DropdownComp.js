import React from "react";
import { Field } from "formik";

const DropdownComp = ({ title, arr }) => {
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor={title}>
        {title[0].toUpperCase() + title.slice(1)}
      </label>
      <Field as="select" className="form-select" name={title} id={title}>
        {arr.map((opt, i) => (
          <option
            defaultValue={i === 0}
            value={opt.toLowerCase()}
            key={`${opt} cuisine`}
          >
            {opt}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default DropdownComp;

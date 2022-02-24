import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { cuisineOpt, dietOpt } from "../../Data";

import classes from "./FormikForm.module.css";

import ErrorText from "./ErrorText";
import DropdownComp from "./DropdownComp";

const FormikForm = ({ onSubmit: onSubmitHandler, waiting }) => {
  const initialValues = {
    search: "",
    cuisine: "",
    diet: "",
    noSugar: "",
    noEggs: "",
  };

  const onSubmit = (values) => {
    const checker = (opt) => (opt === "all..." ? "" : opt);

    const noSugar = values.noSugar ? "sugar" : "";
    const noEggs = values.noEggs ? "eggs" : "";
    const comma = noSugar && noEggs ? "," : "";

    const excludedIng = noSugar + comma + noEggs;

    const preferences = {
      selectedDiet: checker(values.diet),
      selectedCuisine: checker(values.cuisine),
      excludedIng: excludedIng,
    };

    onSubmitHandler(values.search, preferences);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.search || values.search.length < 3) {
      errors.search = "You need to type two or more characters.";
    }

    return errors;
  };

  const switchHandler = (title, name) => {
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

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form className={classes.form}>
        <div className={classes.search}>
          <label htmlFor="text" id="search">
            Search
          </label>
          <div className="input-group mb-3">
            <Field
              type="text"
              id="search"
              name="search"
              className="form-control"
              placeholder="search for meals..."
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              disabled={waiting}
            >
              Search
            </button>
          </div>
          <ErrorMessage name="search" component={ErrorText} />
        </div>

        <div className={classes.dropdowns}>
          <DropdownComp title="cuisine" arr={cuisineOpt} />
          <DropdownComp title="diet" arr={dietOpt} />
        </div>

        <div className={classes.checkboxes}>
          {switchHandler("No Added Sugar", "Sugar")}
          {switchHandler("No Eggs", "Eggs")}
        </div>
      </Form>
    </Formik>
  );
};

export default FormikForm;

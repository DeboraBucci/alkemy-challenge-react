import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { cuisineOpt, dietOpt } from "../../../Data";

import classes from "./FormikForm.module.css";

import ErrorText from "./ErrorText";
import DropdownComp from "./DropdownComp";
import SwitchComp from "./SwitchComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const FormikForm = ({ onSubmit: onSubmitHandler, waiting }) => {
  const [direction, setDirection] = useState("asc");

  const initialValues = {
    search: "",
    cuisine: "",
    diet: "",
    noSugar: "",
    noEggs: "",
    sort: "",
    direction: "",
  };

  const onSubmit = (values) => {
    const checker = (opt) => (opt === "all..." ? "" : opt);

    const noSugar = values.noSugar ? "sugar" : "";
    const noEggs = values.noEggs ? "eggs" : "";
    const comma = noSugar && noEggs ? "," : "";

    const excludedIng = noSugar + comma + noEggs;

    const finalSort = values.sort === "sort by..." ? "" : values.sort;

    const preferences = {
      selectedDiet: checker(values.diet),
      selectedCuisine: checker(values.cuisine),
      excludedIng: excludedIng,
      sort: finalSort,
      direction: direction,
    };

    onSubmitHandler(values.search, preferences);
  };

  const validationSchema = Yup.object({
    search: Yup.string()
      .min(3, "You need to type two or more characters.")
      .required("Required field."),
  });

  const directionHandler = () => {
    setDirection((prev) => {
      if (prev === "asc") return "desc";
      if (prev === "desc") return "asc";
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
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

        <div className={classes.box}>
          <div className={classes.checkboxes}>
            <SwitchComp name="Sugar" title="No Added Sugar" />
            <SwitchComp name="Eggs" title="No Eggs" />
          </div>

          <Field
            as="select"
            className="form-select"
            aria-label="sort"
            name="sort"
            id="sort"
          >
            <option defaultValue>Sort by...</option>
            <option value="popularity">Popularity</option>
            <option value="healthiness">Healthiness</option>
            <option value="price">Price</option>
          </Field>
          <button
            type="button"
            name="direction"
            className="btn btn-outline-secondary"
            onClick={directionHandler}
          >
            {direction === "desc" && <FontAwesomeIcon icon={faArrowDown} />}
            {direction === "asc" && <FontAwesomeIcon icon={faArrowUp} />}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormikForm;

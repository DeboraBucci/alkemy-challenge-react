import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

import classes from "./SearchForm.module.css";

import SearchDropdown from "./SearchDropdown";

import { dropdownOpt, dietOpt } from "../../Data";

const SearchForm = ({ onSubmit, waiting }) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [validEnteredInput, setValidEnteredInput] = useState();

  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");

  const [noSugar, setNoSugar] = useState(false);
  const [noEggs, setNoEggs] = useState(false);

  // SUBMIT FUNCTION
  // ---------------------------------------------------------------------------
  const submitHandler = (e) => {
    e.preventDefault();

    setEnteredInput("");
    if (!validEnteredInput || validEnteredInput === undefined) return;

    let excludedIng;

    if (noSugar && noEggs) {
      excludedIng = "sugar,eggs";
    } else {
      if (noSugar) excludedIng = "sugar";
      if (noEggs) excludedIng = "eggs";
    }

    const preferences = {
      selectedDiet: selectedDiet,
      selectedCuisine: selectedCuisine,
      excludedIng: excludedIng,
    };
    const text = enteredInput.trim();

    onSubmit(text, preferences);
  };

  // INPUT FUNCTION
  // ---------------------------------------------------------------------------
  const inputHandler = (e) => {
    setEnteredInput(e.target.value);

    if (e.target.value === undefined || e.target.value.trim().length < 2) {
      setValidEnteredInput(false);
      return;
    }

    setValidEnteredInput(true);
  };

  // PREFERENCES FUNCTIONS
  // ---------------------------------------------------------------------------
  const dietCheckHandler = (e) => {
    if (e.target.value === "All") {
      setSelectedDiet("");
      return;
    }

    const diet = e.target.value.toLowerCase();
    setSelectedDiet(diet);
  };

  const cuisineCheckHandler = (e) => {
    if (e.target.value === "None") {
      setSelectedCuisine("");
      return;
    }

    const cuisine = e.target.value.toLowerCase();
    setSelectedCuisine(cuisine);
  };

  const sugarHandler = (e) => {
    if (e.target.checked) {
      setNoSugar(true);
    } else {
      setNoSugar(false);
    }
  };

  const eggsHandler = (e) => {
    if (e.target.checked) {
      setNoEggs(true);
    } else {
      setNoEggs(false);
    }
  };

  // RETURN
  // ---------------------------------------------------------------------------
  return (
    <Form className={classes.form} onSubmit={submitHandler}>
      <InputGroup className={`mb-3 ${classes["input-group"]}`}>
        <FormControl
          onChange={inputHandler}
          placeholder="search for meals ..."
          aria-label="search for meals ..."
          aria-describedby="basic-addon2"
          value={enteredInput}
        />
        <Button
          type="submit"
          className={classes.btn}
          variant="outline-secondary"
          id="button-addon2"
          disabled={waiting}
        >
          Search
        </Button>
      </InputGroup>

      <div className={classes.options}>
        <SearchDropdown
          onClick={cuisineCheckHandler}
          dropdownOpt={dropdownOpt}
          label={"cuisine"}
          text={"Cuisine"}
        />
        <SearchDropdown
          onClick={dietCheckHandler}
          dropdownOpt={dietOpt}
          label={"diets"}
          text={"Diet"}
        />
      </div>

      <div className={classes.checkboxes}>
        <Form.Check
          onChange={sugarHandler}
          type="switch"
          id="custom-switch"
          label="No Added sugar"
        />
        <Form.Check
          onChange={eggsHandler}
          type="switch"
          id="custom-switch"
          label="No Eggs"
        />
      </div>
    </Form>
  );
};

export default SearchForm;

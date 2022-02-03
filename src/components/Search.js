import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import classes from "./Search.module.css";

const Search = (props) => {
  return (
    <section className={classes.search}>
      <h1>Lily's Cuisine</h1>
      <p>Your meal in one click</p>

      <InputGroup className={`mb-3 ${classes["input-group"]}`}>
        <FormControl
          placeholder="search for meals ..."
          aria-label="search for meals ..."
          aria-describedby="basic-addon2"
        />
        <Button
          className={classes.btn}
          variant="outline-secondary"
          id="button-addon2"
        >
          Search
        </Button>
      </InputGroup>
    </section>
  );
};

export default Search;

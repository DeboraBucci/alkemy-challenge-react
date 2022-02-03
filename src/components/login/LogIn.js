import React, { useState } from "react";
import { Button, Form, FormSelect, Spinner } from "react-bootstrap";
import classes from "./Login.module.css";
import logo from "../../imgs/cuisine.webp";

const LogIn = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [formIsValid, setFormIsValid] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      enteredEmail.trim().toLocaleLowerCase() === "challenge@alkemy.org" &&
      enteredPassword === "react"
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  return (
    <section className={classes.login}>
      <div className={classes.title}>
        <img src={logo} />
      </div>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            className={`${classes.control} ${
              formIsValid === false ? classes.invalid : ""
            }`}
            disabled={formIsValid === true}
          />
          <Form.Text className="text-muted">
            we'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={enteredPassword}
            onChange={passwordChangeHandler}
            className={`${classes.control} ${
              formIsValid === false ? classes.invalid : ""
            }`}
            type="password"
            disabled={formIsValid === true}
            placeholder="Password"
            required
          />
        </Form.Group>
        <div className={classes.actions}>
          <Button
            className={classes.btn}
            disabled={formIsValid === true}
            variant="primary"
            type="submit"
          >
            Sign In
          </Button>

          {formIsValid === false && <p>wrong email or password</p>}
          {formIsValid === true && (
            <Spinner className={classes.spinner} animation="border" />
          )}
        </div>
      </Form>
    </section>
  );
};

export default LogIn;

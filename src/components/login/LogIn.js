import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import classes from "./Login.module.css";
import logo from "../../imgs/brand.webp";

const LogIn = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
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
              props.isValid === false ? classes.invalid : ""
            }`}
            disabled={props.isWaiting === true}
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
              props.isValid === false ? classes.invalid : ""
            }`}
            type="password"
            disabled={props.isWaiting === true}
            placeholder="Password"
            required
          />
        </Form.Group>
        <div className={classes.actions}>
          <Button
            className={classes.btn}
            disabled={props.isWaiting === true}
            variant="primary"
            type="submit"
          >
            Sign In
          </Button>

          {props.isWaiting === false && props.isValid === false && (
            <p>wrong credentials</p>
          )}
          {props.isWaiting === true && (
            <Spinner className={classes.spinner} animation="border" />
          )}
        </div>
      </Form>
    </section>
  );
};

export default LogIn;

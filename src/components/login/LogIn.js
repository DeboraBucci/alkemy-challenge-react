import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import classes from "./Login.module.css";
import logo from "../../imgs/cuisine.webp";

const LogIn = () => {
  const [isClicked, setIsClicked] = useState(false);

  const spinnerHandler = () => {
    setIsClicked(true);
  };

  return (
    <section className={classes.login}>
      <div className={classes.title}>
        <img src={logo} />
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className={classes.control}
            type="email"
            placeholder="Enter email"
            disabled={isClicked}
            required
          />
          <Form.Text className="text-muted">
            we'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={classes.control}
            type="password"
            disabled={isClicked}
            placeholder="Password"
            required
          />
        </Form.Group>
        <div className={classes.actions}>
          <Button
            onClick={spinnerHandler}
            className={classes.btn}
            disabled={isClicked}
            variant="primary"
            type="submit"
          >
            Sign In
          </Button>
          {isClicked && (
            <Spinner className={classes.spinner} animation="border" />
          )}
        </div>
      </Form>
    </section>
  );
};

export default LogIn;

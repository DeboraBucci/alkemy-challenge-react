import React from "react";
import { Button, Form } from "react-bootstrap";
import classes from "./Login.module.css";
import logo from "../../imgs/cuisine.webp";
const LogIn = () => {
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
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button className={classes.btn} variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </section>
  );
};

export default LogIn;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Footer.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes["copyright-box"]}>
        <p>
          &copy;Copyright 2022 Lily's Cuisine | Created by{" "}
          <a
            className={classes.underline}
            target="_blank"
            href="https://deborabucci.com/"
          >
            Débora Bucci
          </a>
        </p>
        <a target="_blank" href="https://github.com/DeboraBucci">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/d%C3%A9bora-bucci-13a07a212/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p>
        This project is based upon a challenge by{" "}
        <a
          className={classes.underline}
          target="_blank"
          href="https://www.alkemy.org/"
        >
          Alkemy
        </a>
        .
      </p>
    </section>
  );
};

export default Footer;

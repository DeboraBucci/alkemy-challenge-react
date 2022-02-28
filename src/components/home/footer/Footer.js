import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import classes from "./Footer.module.css";

import Link from "../../UI/Link";

const Footer = () => {
  return (
    <section className={`fx-cntr ${classes.footer}`}>
      <div className={classes["copyright-box"]}>
        <p>
          &copy;Copyright 2022 Lily's Cuisine | Created by{" "}
          <Link className={classes.underline} href="https://deborabucci.com/">
            Débora Bucci
          </Link>
        </p>

        <Link href="https://github.com/DeboraBucci" name="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/d%C3%A9bora-bucci-13a07a212/"
          name="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>

      <p>
        This project is based on a challenge by{" "}
        <Link className={classes.underline} href="https://www.alkemy.org/">
          Alkemy
        </Link>
        .
      </p>
    </section>
  );
};

export default Footer;

import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSignOut } from "@fortawesome/free-solid-svg-icons";

import { Container, Nav, Navbar } from "react-bootstrap";

import CartContext from "../../../store/cart-context";
import UserName from "./UserName";

import brand from "../../../assets/brand.webp";

import classes from "./BootstrapNavbar.module.css";

const BootstrapNavbar = ({ onLogout, onOpenCart }) => {
  const cartCtx = useContext(CartContext);

  return (
    <Navbar
      className={classes.navbar}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <img
          src={brand}
          style={{ height: 70, width: 214 }}
          alt="Logo of Lily's Cuisine"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className={classes.links} id="responsive-navbar-nav">
          <Nav className={classes.nav}>
            <div className={classes["links-container"]}>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#meals">Meals</Nav.Link>
              <Nav.Link href="#search">Search</Nav.Link>
            </div>

            <button className={classes.cart} onClick={onOpenCart}>
              {cartCtx.totalDishes.length} items{" "}
              <FontAwesomeIcon icon={faCartShopping} />
            </button>

            <div className={classes["links-container"]}>
              <UserName />

              <Nav.Link className={classes.logout} onClick={onLogout}>
                Log Out <FontAwesomeIcon icon={faSignOut} />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BootstrapNavbar;

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
              <Nav.Link href="#menu-section">Menu</Nav.Link>
              <Nav.Link href="#meals-section">Meals</Nav.Link>
              <Nav.Link href="#search-section">Search</Nav.Link>
            </div>

            <button
              aria-label="open cart"
              className={classes.cart}
              onClick={onOpenCart}
            >
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

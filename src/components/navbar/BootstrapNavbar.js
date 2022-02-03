import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import brand from "../../imgs/brand.webp";
import classes from "./BootstrapNavbar.module.css";

const BootstrapNavbar = ({ onLogout }) => {
  return (
    <Navbar
      className={classes.navbar}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={brand} style={{ height: 70 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#meals">Meals</Nav.Link>
            <Nav.Link eventKey={2} href="#cart">
              $ 0.00 <i className="fab fa-opencart"></i>
            </Nav.Link>
            <NavDropdown title="User" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <i className="far fa-user"></i> Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <i className="fas fa-cog"></i> Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={onLogout} href="#action/3.3">
                <i className="fas fa-sign-out-alt"></i> Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BootstrapNavbar;

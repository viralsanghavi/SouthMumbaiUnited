import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import logo from "../../assets/Smulogo.png";
import { Link } from "react-router-dom";
import { NAVBAR_MENU } from "../../utils/constants";
import "../../App.css";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <Navbar
      expand="md"
      className={`Navbar ${show && "nav__short"}`}
      color="white"
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "5px",
        }}
      >
        <img
          alt=""
          src={logo}
          className={`${show && "nav__hide"} Navbar__logo`}
        />
        {/* <NavbarBrand href="/" >
        </NavbarBrand> */}
        <NavbarText> SOUTH MUMBAI UNITED</NavbarText>
      </Link>
      <NavbarToggler onClick={toggle} className="mr-2 nav-item">
        <div id="close-icon" className={collapsed ? "open" : "close"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </NavbarToggler>
      <Collapse navbar isOpen={collapsed}>
        <Nav className="ml-auto" navbar>
          {NAVBAR_MENU.map(({ name, to }, index) => (
            <NavItem className="nav-item" key={index}>
              <NavLink
                tag={Link}
                to={to}
                onClick={() => (collapsed ? setCollapsed(false) : "")}
                className="Navbar__pages"
              >
                {name}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;

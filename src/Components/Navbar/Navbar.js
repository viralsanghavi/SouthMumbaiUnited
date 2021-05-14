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
import logo from "../../assets/Smulogo.jpeg";
import { Link, useLocation } from "react-router-dom";
import { NAVBAR_MENU } from "../../utils/constants";
import "./Navbar.css";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);
  const [show, handleShow] = useState(false);
  const location = useLocation();
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);
  return (
    <div className={`navbar__comp ${show && "navbar__compHov"}`}>
      <Navbar expand="md" className="navbar__container" color="white">
        <Link to="/">
          <div className="navbar__navigation">
            <img alt="" src={logo} className="navbar__logo" />
            <NavbarText className="navbar__title">
              SOUTH MUMBAI UNITED
            </NavbarText>
          </div>
        </Link>
        <NavbarToggler onClick={toggle}>
          <div id="close-icon" className={collapsed ? "open" : "close"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </NavbarToggler>
        <Collapse navbar isOpen={collapsed}>
          <Nav className="pages__container" navbar>
            {NAVBAR_MENU.map(({ name, to }, index) => (
              <NavItem className={`${collapsed && "nav__item"}`} key={index}>
                <NavLink
                  tag={Link}
                  to={to}
                  onClick={() => (collapsed ? setCollapsed(false) : "")}
                  className={`${
                    location?.pathname.includes(to) && "navbar__pageActive"
                  } navbar__pages`}
                >
                  {name}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

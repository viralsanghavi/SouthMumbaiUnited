import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText

} from 'reactstrap';
import logo from '../assets/Smulogo.png'
import { Link } from 'react-router-dom';



const NavBar = () => {

  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => setCollapsed(!collapsed)
  const [show, handleShow] = useState(false)

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])
  return (
    <Navbar expand="md" className={`Navbar ${show && "nav__short"}`} color="white"  >
      <Link to="/" style={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
        <NavbarBrand className={`${show && "nav__hide"}`}>
          <img alt="" src={logo} className="Navbar__logo" />
        </NavbarBrand>
        <NavbarText> SOUTH MUMBAI UNITED</NavbarText>
      </Link>
      <NavbarToggler onClick={toggle} className="mr-2 nav-item">
        <div id="close-icon" className={collapsed ? "open" : ""}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </NavbarToggler>
      <Collapse navbar isOpen={collapsed}>
        <Nav className="ml-auto" navbar>
          <NavItem className='nav-item'>

            <NavLink tag={Link} to="/" className="Navbar__pages">Home</NavLink>

          </NavItem>

          <NavItem>
            <NavLink tag={Link} to='/about' className="Navbar__pages">About</NavLink>
          </NavItem>


          <NavItem>
            <NavLink tag={Link} to='/team' active className="Navbar__pages">
              Team
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to='/contact' className="Navbar__pages">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to='/buyNow' className="Navbar__pages">Shop</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink tag={Link} to='/blog' className="Navbar__pages">Blog</NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink tag={Link} to='/staff' className="Navbar__pages">Staff</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>



  );
}

export default NavBar;

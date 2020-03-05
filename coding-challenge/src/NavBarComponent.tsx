import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";

const NavBarComponent = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Grocery List</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/lists">View Grocery Lists</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/newlist">Create Grocery List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/newitem">Add Item to Database</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>HUNGRY!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;

import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


function Navbar() {
  return (

      <Nav tabs>
        <NavItem>
          <NavLink href="/" className="text-primary">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about" className="text-primary">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/map" className="text-primary">Map</NavLink>
        </NavItem>
      </Nav>

  );


}

export default Navbar;
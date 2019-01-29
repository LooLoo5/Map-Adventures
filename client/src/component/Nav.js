import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import "./../App.css"



export default class NavBar extends React.Component {

  render() {
    return (
      <div className="container">
          <Nav tabs>
            <NavItem>
              <NavLink href="/" className="text-primary">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About" className="text-primary">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Map" className="text-primary">Map</NavLink>
            </NavItem>
          </Nav>
      </div>
      )
    }
  }
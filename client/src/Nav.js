import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


export default class This extends React.Component {

  render() {
    return (
      <div className="container">
          <Nav tabs>
            <NavItem>
              <NavLink className="text-primary" href="#" active>Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-primary" href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-primary" href="#">Link</NavLink>
            </NavItem>
          </Nav>
      </div>
      )
    }
  }
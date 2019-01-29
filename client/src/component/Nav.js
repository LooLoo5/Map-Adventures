import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../App';
import About from './Map';


export default class This extends React.Component {

  render() {
    return (
    <Router>
      <div className="container">
          <Nav tabs>
            <NavItem>
              <NavLink to="/" className="text-primary" active>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/About" className="text-primary">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Map" className="text-primary">Map</NavLink>
            </NavItem>
          </Nav>
          <Route path="/" exact component={App} />
        <Route path="/about/" component={About} />
      <Route path="/users/" component={Map} />
      </div>
      </Router>
      )
    }
  }
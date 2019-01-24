import React from 'react';
import {Container} from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';

export default class This extends React.Component {

  render() {
    return (
      <div>
        <Container>
        <Nav tabs>
          <NavItem>
            <NavLink className="text-success" href="#" active>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-success" href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-success" href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-success" href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-success" href="#">Sign Up Here!</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-success" href="#">Login Here!</NavLink>
          </NavItem>
        </Nav>
        </Container>
      </div>,
      <div>
      <Container>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
        </Container>
      </div>
      )
    }
  }
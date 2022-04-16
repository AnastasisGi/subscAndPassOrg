import React, { Component } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Routes} from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";



export default class NavbarComponent extends Component {
  render() {
    return (


<>      
          <div id='sub-navbar'>
          <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Subscription and password organiser</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link exact="true" as={Link} to={"/signin"}>Sign in</Nav.Link>
              <Nav.Link exact="true" as={Link} to={"/about"}>About</Nav.Link>
              <Nav.Link exact="true" as={Link} to={"/signup"}>Sign up</Nav.Link>
            </Nav>
          </Container>
          </Navbar>
        </div>

</>
    )
  }
}

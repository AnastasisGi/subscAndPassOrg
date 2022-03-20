import React, { Component } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';




export default class NavbarComponent extends Component {
  render() {
    return (
      <div id='sub-navbar'><>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Subscription and password organiser</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#signup">Sign in</Nav.Link>
      <Nav.Link href="#signin">Sign up</Nav.Link>
      <Nav.Link href="#home">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>



</></div>
    )
  }
}

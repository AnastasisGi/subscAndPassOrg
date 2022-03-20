import React, { Component } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
// import { Router } from 'react-router-dom';
import {Routes} from 'react-router-dom';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import { About } from '../components/About'
import { SignIn } from '../components/SignIn'
import  { SignUp }  from '../components/SignUp'



export default class NavbarComponent extends Component {
  render() {
    return (


     <Router>
      

          <div id='sub-navbar'>
          <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Subscription and password organiser</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/signup"}>Sign up</Nav.Link>
              <Nav.Link as={Link} to={"/signin"}>Sign in</Nav.Link>
              <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            </Nav>
          </Container>
          </Navbar>
        </div>



        <div>
          <Routes>
            <Route  path="/about">
            <About />
            </Route>
            <Route  path="/signup">
            <SignUp />
            </Route>
            <Route  path="/signin">
            <SignIn />
            </Route>
            </Routes>
        </div>




 </Router>
    )
  }
}

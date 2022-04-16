import {Navbar,Nav,Container} from 'react-bootstrap';
import React, { Component } from 'react';
import {Routes} from 'react-router-dom';
import { useSelector } from 'react-redux';


import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const NavbarComponent = () =>{

  const {auth} = useSelector((state)=>({...state}));

return (
<>      
          <div id='sub-navbar'>
          <Navbar bg="dark" variant="dark">
          <Container>




            <Navbar.Brand href="#home">Subscription and password organiser</Navbar.Brand>
            <Nav className="me-auto">

              


              {auth === null && (
                <>
                <Nav.Link exact="true" as={Link} to={"/signin"}>Sign in</Nav.Link>
                <Nav.Link exact="true" as={Link} to={"/signup"}>Sign up</Nav.Link>
                
                </>
              )}

              {auth !== null && (<>
              
              <Nav.Link exact="true" as={Link} to={"/home"}>Home</Nav.Link>

              </>)}


     
            
            </Nav>
          </Container>
          </Navbar>
        </div>

</>


)


}

export default NavbarComponent;



// export default class NavbarComponent extends Component {
  

//   render() {
//     return (
      

// <>      
//           <div id='sub-navbar'>
//           <Navbar bg="dark" variant="dark">
//           <Container>




//             <Navbar.Brand href="#home">Subscription and password organiser</Navbar.Brand>
//             <Nav className="me-auto">


//               <Nav.Link exact="true" as={Link} to={"/signin"}>Sign in</Nav.Link>

//               <Nav.Link exact="true" as={Link} to={"/about"}>About</Nav.Link>
              
              
//               <Nav.Link exact="true" as={Link} to={"/signup"}>Sign up</Nav.Link>
            
            
//             </Nav>
//           </Container>
//           </Navbar>
//         </div>

// </>
//     )
//   }
// }

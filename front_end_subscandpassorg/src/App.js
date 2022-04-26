import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import PrivateRoute from './components/PrivateRoute';

import  Home  from './components/Home'
import  SignIn  from './components/SignIn'
import   SignUp   from './components/SignUp'
import Dashboard from './components/DashBoard';
import Dashboardnav from './components/Dashboardnav';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">

<Router>
      <NavbarComponent/>
      <Routes>
            <Route exact path="/signup" element={<SignUp />}/>
            <Route exact path="/home" element={<Home />}/>
            <Route exact path="/signin" element={<SignIn />}/>
            <Route exact path="/dashboard" element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>

            }/>
             <Route exact path="/dashboard" element={
              <PrivateRoute>
                <Dashboardnav/>
              </PrivateRoute>

            }/>



            </Routes>
</Router>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({children}) =>{
    const {auth} = useSelector((state)=>({...state}));

    return auth && auth.token ? children : <Navigate to="/signin"/>;





}

export default PrivateRoute;
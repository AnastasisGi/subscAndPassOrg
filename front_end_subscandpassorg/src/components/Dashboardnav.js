import { Link } from 'react-router-dom';

const Dashboardnav =()=>{


  const activepath = window.location.pathname;
  // console.log('actipath', activepath);
  return (
    
        <ul className='nav nav-tabs'>

        <li className='nav-item'>
          <Link
            className={`nav-link ${activepath==="/credentials" && "active"}`}
            to="/credentials"
          >Credentials</Link>
        </li>

        <li className='nav-item'>
          <Link
            className={`nav-link ${activepath==="/subscriptions" && "active"}`}
            to="/subscriptions"
          >Subscriptions</Link>
        </li>




        </ul>


)


}

export default Dashboardnav;
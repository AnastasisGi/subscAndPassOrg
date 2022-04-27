import { Link } from 'react-router-dom';

const Dashboardnav =()=>{


  const activepath = window.location.pathname;

    return (

        <ul className='nav nav-tabs'>

        <li className='nav-item'>
          <Link
            className={`nav-link active ${activepath==="/credentials" && "active"}`}
            to="/credentials"
          >Credentials</Link>
        </li>

        <li className='nav-item'>
          <Link
            className={`nav-link active ${activepath==="/subscriptions" && "active"}`}
            to="/subscriptions"
          >Subscriptions</Link>
        </li>




        </ul>


)


}

export default Dashboardnav;
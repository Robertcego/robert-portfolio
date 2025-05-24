import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NavBar.scss';


import { faHome } from '@fortawesome/free-solid-svg-icons';



const NavBar = ({ children }) => {
  return (
    <div className='navbar-container'>
      <div>
        <nav className='nav-container'>
          <NavLink className='home-link' to='/'>
            <FontAwesomeIcon icon={faHome} size='2x' title='Home' />
          </NavLink>
        </nav>
      </div>

      {children}
    </div>
  );
};

export default NavBar;

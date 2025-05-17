import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NavBar.scss';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { faHome } from '@fortawesome/free-solid-svg-icons';

const codeWarsIcon = 'https://raw.githubusercontent.com/codewars/branding/refs/heads/master/logo.png';



const NavBar = ({ children }) => {
  return (
    <div className='navbar-container'>
      <div>
        <nav className='nav-container'>
          <NavLink className='home-link' to='/'>
            <FontAwesomeIcon icon={faHome} size='2x' title='Home' />
          </NavLink>
          {/* <NavLink className='about-link' to='/about' title='About'>
            <FontAwesomeIcon icon={faUser} size='2x' />
          </NavLink>
          <NavLink className='contact-link' to='/contact' title='Contact'>
            <FontAwesomeIcon icon={faPortrait} size='2x' />
          </NavLink> */}
        </nav>
      </div>
      {/* <div className='socials-container'>
        <ul>
          <li>
            <a href='https://github.com/Robertcego' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </a>
          </li>
          <li>
            <a href='http://linkedin.com/in/robertcego' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
          </li>
          <li>
            <a href='https://www.codewars.com/users/Robertcego' target='_blank' rel='noopener noreferrer'>
              <img
                src={codeWarsIcon}
                alt='Codewars'
                title='Codewars'
                style={{ width: '32px', height: '32px' }}
              />
            </a>
          </li>
        </ul>
      </div> */}
      {children}
    </div>
  );
};

export default NavBar;

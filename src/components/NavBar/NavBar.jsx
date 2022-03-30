import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NavBar.scss';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { faHome, faPortrait, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ children }) => {
  return (
    <div className='navbar-container'>
      <div>
        <nav className='nav-container'>
          <Link className='home-link' to='/'>
            <FontAwesomeIcon icon={faHome} size='2x' title='Home' />
          </Link>
          <Link className='about-link' to='/about' title='About'>
            <FontAwesomeIcon icon={faUser} size='2x' />
          </Link>
          <Link className='contact-link' to='/contact' title='Contact'>
            <FontAwesomeIcon icon={faPortrait} size='2x' />
          </Link>
        </nav>
      </div>
      <div className='socials-container'>
        <ul>
          <li>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </a>
          </li>
          <li>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
          </li>
          <li>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faTwitter} size='2x' />
            </a>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default NavBar;

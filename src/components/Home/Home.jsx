import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../helpers/AnimatedLetters/AnimatedLetters';
import Avatar from './Avatar/Avatar.jsx';
import './Home.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['R', 'o', 'b', 'e', 'r', 't'];
  const titleArray = [
    'a',
    ' ',
    'f',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div>
      <div className='home-container'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _11`}>i</span>
            <span className={`${letterClass} _12`}>👋🏽</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titleArray}
              index={16}
            />
          </h1>
          <h2>
            Frontend Developer | React | JavaScript | HTML5 | CSS3 | NodeJS
          </h2>
          <Link to='/contact' className='flat-button'>
            Contact Me
          </Link>
        </div>
        <div className='home-avatar-container'>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Home;

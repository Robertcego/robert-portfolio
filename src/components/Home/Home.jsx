import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';

import AnimatedLetters from '../../helpers/AnimatedLetters/AnimatedLetters';
import Avatar from './Avatar/Avatar.jsx';
import About from '../About/About.jsx';
import Timeline from '../Timeline/Timeline.jsx';
import Footer from '../Footer/Footer.jsx';


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
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      <div className='home-container'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _11`}>e</span>
            <span className={`${letterClass} _11`}>l</span>
            <span className={`${letterClass} _11`}>l</span>
            <span className={`${letterClass} _11`}>o</span>
            <span className={`${letterClass} _11`}></span>
            <span className={`${letterClass} _11`}>t</span>
            <span className={`${letterClass} _11`}>h</span>
            <span className={`${letterClass} _11`}>e</span>
            <span className={`${letterClass} _11`}>r</span>
            <span className={`${letterClass} _11`}>e</span>
            <span className={`${letterClass} _12`}>🖖🏽👽</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'</span>
            <span className={`${letterClass} _15`}>m</span>
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
          <h2>HTML5 | CSS3 | JavaScript | TypeScript | React | GraphQL </h2>
          <Link to='https://www.linkedin.com/in/robertcego/' target='_blank' className='flat-button'>
            Contact Me
          </Link>
        </div>
        <About />
        <Timeline />
        <Footer />
        <Loader type='ball-spin-fade-loader' />
      </div>
    </div>
  );
};

export default Home;

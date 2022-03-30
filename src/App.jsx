import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar>
        <div className='content-wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </NavBar>
    </div>
  );
}

export default App;

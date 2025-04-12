import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <div className='content-wrapper'>
        <div className='navbar-container'>
          <NavBar />
        </div>
        <div className='routes-container'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

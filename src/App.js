// src/App.js
import React from 'react';
import Hero from './components/hero';
import Programs from './components/Programs'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tracker from './components/Tracker';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';
import Community from './components/Community';
import Footer from './components/Footer'
import Header from './components/header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<><Header /><Hero /><Programs /><Footer /></>} />
          <Route path='/tracker' element={<><Header /><Tracker /><Footer /></>} />
          <Route path="/community" element={<><Header /><Community /><Footer /></>} />
          <Route path="/chatbot" element={<><Header /><Chatbot /><Footer /></>} />
          <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

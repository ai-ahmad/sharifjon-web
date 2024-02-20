import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navigation from './components/component/Navigation/Navigation';
import './App.css';
import Images from './components/component/images/Images';
import Instruments from './components/component/Navigation/instruments/Instruments';
import { Home } from './components/pages/Home';

const App = () => { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inst" element={<Instruments />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

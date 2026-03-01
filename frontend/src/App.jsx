import React, { useState, useEffect, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import Home from './components/home.jsx'


function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;

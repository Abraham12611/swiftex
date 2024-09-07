import React from 'react';
import './index.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';  // Assuming you already created this
import HomePage from './pages/HomePage';        // New Dashboard page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />    {/* Landing page route */}
        <Route path="/dashboard" element={<HomePage />} /> {/* Dashboard/Home Page route */}
      </Routes>
    </Router>
  );
};

export default App;

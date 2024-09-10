import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';  
import HomePage from './pages/HomePage';       

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />    {/* Landing page route */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<HomePage />} /> {/* Dashboard/Home Page route */}
      </Routes>
    </Router>
  );
};

export default App;

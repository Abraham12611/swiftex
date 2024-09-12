// App.js
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';  
import HomePage from './pages/HomePage';   
import SignUp from './pages/SignUp';    
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<LandingPage />} />    {/* Landing page route */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<HomePage />} /> {/* Dashboard/Home Page route */}
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;

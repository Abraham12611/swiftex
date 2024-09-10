import React from 'react';
import UserProfileSummary from '../components/UserProfileSummary';
import TransactionOverview from '../components/TransactionOverview';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/authUtils';
  

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/signup'); // Redirect to signup if not authenticated
    }
  }, [navigate]);

  return (
    <div>
      {/* Dashboard Content */}
      <UserProfileSummary />
      <TransactionOverview />
      {/* Other sections like Transaction Overview, Available PFIs, etc. */}
    </div>
  );
};

export default HomePage;

import React from 'react';
import UserProfileSummary from '../components/UserProfileSummary';

const HomePage = () => {
  return (
    <div>
      {/* Dashboard Content */}
      <UserProfileSummary />
      {/* Other sections like Transaction Overview, Available PFIs, etc. */}
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import { createDID, requestVC } from '../services/didService'; // service functions for tbDEX interaction

const SignUp = () => {
  const [did, setDid] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const newDID = await createDID(); // Call tbDEX to create a DID
      setDid(newDID);
      const verification = await requestVC(newDID); // Request VC for the DID
      setVerificationStatus(verification.status); // Check if VC was successfully issued
      // After successful verification
      if (verification.status === 'verified') {
        localStorage.setItem('did', newDID);
        localStorage.setItem('vc', JSON.stringify(verification));
      }
    } catch (error) {
      console.error('Error creating DID:', error);
      setVerificationStatus('Failed to verify');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up for SwiftEx</h2>
      {did ? (
        <div>
          <p>Your DID: {did}</p>
          <p>Verification Status: {verificationStatus}</p>
        </div>
      ) : (
        <button onClick={handleSignUp} disabled={loading}>
          {loading ? 'Creating DID...' : 'Sign Up with DID'}
        </button>
      )}
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';
import { createDID, requestVC } from '../services/didService'; // service functions for tbDEX interaction

const SignUp = () => {
  const [did, setDid] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('');
  const [name, setName] = useState(''); // State to collect user's name

  const handleSignUp = async () => {
    if (!name) {
      alert("Please enter your name before signing up.");
      return;
    }

    setLoading(true);
    try {
      const newDID = await createDID(); // Call tbDEX to create a DID
      console.log('DID Created:', newDID);  // Debugging output
      setDid(newDID);

      const verification = await requestVC(newDID, name); // Pass the user's name to request VC
      console.log('VC Verification:', verification);  // Debugging output
      setVerificationStatus(verification.status); // Check if VC was successfully issued

      // After successful verification
      if (verification.status === 'verified') {
        localStorage.setItem('did', newDID);
        localStorage.setItem('vc', JSON.stringify(verification));
      }
    } catch (error) {
      console.error('Error creating DID or issuing VC:', error);
      setVerificationStatus('Failed to verify');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up for SwiftEx</h2>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
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

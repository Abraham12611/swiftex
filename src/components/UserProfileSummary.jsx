import React from 'react';
import { FaCopy, FaCog } from 'react-icons/fa'; 
import '../styles/UserProfileSummary.css'; 

const UserProfileSummary = ({ user }) => {
  const handleCopyDID = () => {
    navigator.clipboard.writeText(user.did);
    alert('DID copied to clipboard');
  };

  return (
    <div className="user-profile-summary">
      <div className="profile-left">
        <div className="profile-picture">
          {user.profilePicture ? (
            <img src={user.profilePicture} alt="Profile" />
          ) : (
            <div className="profile-placeholder">{user.initials}</div>
          )}
        </div>
        <div className="profile-details">
          <h2 className="user-name">{user.name}</h2>
          <div className="did-section">
            <p className="user-did">{user.did}</p>
            <FaCopy className="copy-icon" onClick={handleCopyDID} />
          </div>
          <div className={`vc-status vc-${user.vcStatus.toLowerCase()}`}>
            {user.vcStatus === 'Verified' && 'Verified'}
            {user.vcStatus === 'Pending' && 'Pending Verification'}
            {user.vcStatus === 'Expired' && 'Verification Expired'}
          </div>
        </div>
      </div>
      <div className="settings-button">
        <FaCog className="settings-icon" />
        <div className="settings-dropdown">
          <ul>
            <li>Profile Management</li>
            <li>Security Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSummary;

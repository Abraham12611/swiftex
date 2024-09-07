import React from 'react';
import { FaUser, FaExchangeAlt, FaShieldAlt, FaWallet, FaBell } from 'react-icons/fa'; // Importing React icons
import '../styles/HowItWorksSection.css'; // Import the CSS file for styling

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section">
      <h2 className="section-heading">How SwiftEx Enables Global Payments</h2>
      <div className="content-container">
        <div className="steps">
          <div className="step">
            <div className="icon-container">
              <FaUser className="icon" />
            </div>
            <h3 className="step-title">User Initiates Payment</h3>
            <p className="step-description">
              A user initiates a payment on the SwiftEx platform, selecting their preferred currency and entering the recipient’s details.
            </p>
          </div>
          <div className="step">
            <div className="icon-container">
              <FaExchangeAlt className="icon" />
            </div>
            <h3 className="step-title">SwiftEx Converts Currency</h3>
            <p className="step-description">
              SwiftEx converts the user’s currency to the recipient’s preferred currency using our built-in currency conversion engine, ensuring competitive exchange rates.
            </p>
          </div>
          <div className="step">
            <div className="icon-container">
              <FaShieldAlt className="icon" />
            </div>
            <h3 className="step-title">Payment Processed Securely</h3>
            <p className="step-description">
              The payment is processed through SwiftEx’s secure, decentralized network, ensuring high levels of encryption and privacy for all parties involved.
            </p>
          </div>
          <div className="step">
            <div className="icon-container">
              <FaWallet className="icon" />
            </div>
            <h3 className="step-title">Payment Reaches Recipient</h3>
            <p className="step-description">
              The recipient receives the payment in their preferred currency, which can be deposited into their bank account or digital wallet.
            </p>
          </div>
          <div className="step">
            <div className="icon-container">
              <FaBell className="icon" />
            </div>
            <h3 className="step-title">Confirmation & Notification</h3>
            <p className="step-description">
              Both the sender and recipient receive notifications confirming the transaction, along with a detailed breakdown of the exchange rate and fees.
            </p>
          </div>
        </div>
        <div className="visuals">
          {/* Add visuals or diagrams here */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

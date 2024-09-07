import React from 'react';
import { FaBolt, FaShieldAlt, FaGlobe } from 'react-icons/fa'; 
import '../styles/BenefitsSection.css';

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <h2 className="section-heading">The Benefits of Using SwiftEx</h2>
      <div className="benefit-cards">
        {/* Fast Transactions */}
        <div className="benefit-card">
          <div className="icon-container">
            <FaBolt className="icon" />
          </div>
          <h3 className="benefit-title">Fast Transactions</h3>
          <p className="benefit-description">
            SwiftEx processes transactions at lightning speed, ensuring your payments reach their destination in record time, regardless of geographic location.
          </p>
        </div>
        {/* Secure Payment Gateway */}
        <div className="benefit-card">
          <div className="icon-container">
            <FaShieldAlt className="icon" />
          </div>
          <h3 className="benefit-title">Secure Payment Gateway</h3>
          <p className="benefit-description">
            SwiftEx ensures that all transactions are fully encrypted, providing a secure payment gateway that keeps your financial information safe from unauthorized access.
          </p>
        </div>
        {/* Decentralized Identifiers (DIDs) */}
        <div className="benefit-card">
          <div className="icon-container">
            <FaGlobe className="icon" />
          </div>
          <h3 className="benefit-title">Decentralized Identifiers (DIDs)</h3>
          <p className="benefit-description">
            By utilizing DIDs, SwiftEx allows users to take full control of their identities, ensuring privacy and ownership without relying on centralized authorities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

import React from 'react';
import '../styles/FeaturesSection.css'; 

const features = [
  {
    icon: 'currency-icon.svg', // Placeholder for currency icon
    title: 'Multi-Currency Support',
    description: 'SwiftEx provides seamless multi-currency transactions, enabling users to send and receive payments in over 100 supported currencies, from USD and EUR to emerging market currencies.',
    color: '#14FFEC',
  },
  {
    icon: 'lock-shield-icon.svg', // Placeholder for security icon
    title: 'Secure Transactions',
    description: 'SwiftEx ensures your transactions are secured with end-to-end encryption, safeguarding sensitive data with the highest security standards, including TLS and secure decentralized identifiers (DIDs).',
    color: '#2979FF',
  },
  {
    icon: 'integration-icon.svg', // Placeholder for integration icon
    title: 'PFI Integration',
    description: 'SwiftEx integrates seamlessly with major Payment Facilitation Infrastructures, offering easy-to-implement solutions for merchants and businesses to process payments at scale.',
    color: '#14FFEC',
  },
  {
    icon: 'decentralized-icon.svg', // Placeholder for decentralized icon
    title: 'Decentralized Identifiers (DIDs)',
    description: 'SwiftEx uses decentralized identifiers (DIDs) to enhance user privacy and security by eliminating centralized data storage, providing a self-sovereign identity management system.',
    color: '#2979FF',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="section-title">Core Features of SwiftEx</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.icon} alt={`${feature.title} icon`} className="feature-icon" style={{ borderColor: feature.color }} />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

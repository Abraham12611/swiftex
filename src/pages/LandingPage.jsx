import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BenefitsSection from '../components/BenefitsSection';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
      <div>
        <Header />
        <main>
          <Hero />
          <FeaturesSection />
          <HowItWorksSection />
          <BenefitsSection />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default LandingPage;

import React from 'react';
/* Import Web5 SDK
import { Web5 } from '@tbd54566975/web5';


  // Function to handle DID Sign-Up process
  const handleSignUp = async () => {
    try {
      // Initialize Web5 SDK
      const web5 = new Web5();
      
      // Create a new DID
      const { did } = await web5.did.create();
      
      // Store DID in localStorage (or sessionStorage if needed)
      localStorage.setItem('userDID', did);
      
      // Trigger verification process (depends on your logic)
      alert('DID created and stored! Proceed with verification.');
      
    } catch (error) {
      console.error('Error creating DID:', error);
      alert('Failed to create DID. Please try again.');
    }
  };*/
  const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#121212] shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <div className="logo cursor-pointer transform hover:scale-105 transition-transform duration-300">
          <img src="/logo.png" alt="SwiftEx Logo" className="h-10" />
        </div>
        
        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Features', 'How it Works', 'Resources', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="text-white hover:text-[#14FFEC] hover:underline transform hover:translate-y-[-2px] transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Call to Action (CTA) Button */}
        <div className="cta hidden md:block">
          <button
            onClick={handleSignUp}
            className="bg-[#0D7377] text-white font-bold py-2 px-6 rounded-md hover:bg-[#14FFEC] transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

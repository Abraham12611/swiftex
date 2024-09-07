import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-[#121212] h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212]"></div>

      {/* Background Map/Globe (You can replace this with an actual image or animated SVG) */}
      <div className="absolute inset-0">
        <svg className="w-full h-full object-cover">
          {/* Placeholder for animated globe/map */}
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl px-6">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] tracking-wide mb-6 animate-fadeInUp">
          Decentralized payments for a borderless world.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-[#CCCCCC] mb-8 animate-fadeInUp delay-300">
          SwiftEx provides fast, secure, and decentralized multi-currency payments, enabling borderless transactions for e-commerce and more.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-4 animate-fadeInUp delay-600">
          <button className="bg-[#0D7377] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#14FFEC] transition duration-300 transform hover:scale-105">
            Sign Up
          </button>
          <button className="border-2 border-[#14FFEC] text-[#14FFEC] font-bold py-3 px-6 rounded-lg hover:bg-[#14FFEC] hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

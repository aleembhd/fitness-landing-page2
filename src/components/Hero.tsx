import React from 'react';
import { triggerConfetti } from '../utils/confetti';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Transform Your Body, Transform Your Life</h2>
          <p className="text-xl mb-6">Join our fitness program and achieve the results you've always dreamed of.</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={triggerConfetti}
          >
            Start Your Journey
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://source.unsplash.com/featured/?fitness,transformation"
            alt="Before and after transformation"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
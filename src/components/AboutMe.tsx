import React from 'react';
import { Youtube, Instagram } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://source.unsplash.com/featured/?fitness,coach"
            alt="Fitness Coach"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            As a self-taught fitness enthusiast, I've experienced my own incredible transformation. 
            This journey ignited my passion for helping others achieve their fitness goals. 
            With years of experience and a proven track record, I'm here to guide you on your path to a healthier, 
            stronger you.
          </p>
          <div className="flex space-x-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
              <Youtube size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
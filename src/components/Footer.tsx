import React from 'react';
import { Youtube, Instagram, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">saifc6m</h3>
            <p>&copy; 2023 All rights reserved</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Youtube size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Instagram size={24} />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
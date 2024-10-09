import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsMobileMenuOpen }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">saifc6m</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#services" className="text-gray-600 hover:text-gray-800">Services</a>
          <a href="#resources" className="text-gray-600 hover:text-gray-800">Resources</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        <button
          className="md:hidden text-gray-600 hover:text-gray-800"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
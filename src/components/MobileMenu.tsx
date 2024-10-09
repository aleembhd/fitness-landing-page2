import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
      <div className="flex justify-end p-4">
        <button onClick={() => setIsOpen(false)} className="text-white">
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-4 mt-16">
        <a href="#about" className="text-white text-xl" onClick={() => setIsOpen(false)}>About</a>
        <a href="#services" className="text-white text-xl" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#resources" className="text-white text-xl" onClick={() => setIsOpen(false)}>Resources</a>
        <a href="#testimonials" className="text-white text-xl" onClick={() => setIsOpen(false)}>Testimonials</a>
        <a href="#contact" className="text-white text-xl" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
    </div>
  );
};

export default MobileMenu;
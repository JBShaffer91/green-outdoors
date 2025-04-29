/* src/components/Navbar.jsx */
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['Air', 'Land', 'Sea'];

export function Navbar({ selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-charcoal bg-opacity-90 backdrop-blur-sm z-30 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-heading uppercase tracking-widest text-xl text-white">
          Green Outdoors Co
        </span>
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={`${
            isOpen ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden md:overflow-visible md:max-h-full w-full md:w-auto transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6 bg-charcoal md:bg-transparent bg-opacity-95 md:bg-opacity-0 p-4 md:p-0">
            {links.map(link => (
              <button
                key={link}
                onClick={() => {
                  onSelect(link);
                  setIsOpen(false);
                }}
                className={`uppercase text-sm font-semibold tracking-wide transition my-2 md:my-0 ${
                  selected === link
                    ? 'text-signalRed'
                    : 'text-white hover:text-signalRed'
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

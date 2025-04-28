/* src/components/Navbar.jsx */
import React from 'react';

const links = ['Air', 'Land', 'Sea'];

export function Navbar({ selected, onSelect }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-charcoal bg-opacity-80 backdrop-blur-md z-20">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-heading uppercase tracking-wide text-xl text-white">
          Green Outdoors Co
        </span>
        <div className="flex space-x-6">
          {links.map(link => (
            <button
              key={link}
              onClick={() => onSelect(link)}
              className={`
                uppercase text-sm font-semibold tracking-wide transition
                ${selected === link
                  ? 'text-signalRed'
                  : 'text-white hover:text-signalRed'}
              `}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

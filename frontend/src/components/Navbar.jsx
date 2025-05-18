// src/components/Navbar.jsx
// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';      // ← add this line

const domains = ['Air', 'Land', 'Sea'];

export function Navbar({ selected, onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow mb-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Brand */}
        <a
          href="#"
          className="font-heading text-2xl text-militaryGreen uppercase"
          onClick={() => {
            onSelect('Land'); // default home
            setOpen(false);
          }}
        >
          Green Outdoors Co
        </a>

        {/* Mobile toggle */}
        <button
          className="block sm:hidden text-charcoal focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`w-full sm:flex sm:items-center sm:w-auto ${
            open ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-6 mt-2 sm:mt-0">
            {domains.map((dom) => (
              <li key={dom}>
                <button
                  onClick={() => {
                    onSelect(dom);
                    setOpen(false);
                  }}
                  className={`block px-3 py-2 rounded 
                    ${
                      selected === dom
                        ? 'bg-desertTan text-charcoal'
                        : 'text-charcoal hover:bg-slate hover:text-white'
                    } transition`}
                >
                  {dom}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

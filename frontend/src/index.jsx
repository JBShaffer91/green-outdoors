// src/index.jsx
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Import Leaflet styles correctly from node_modules
import 'leaflet/dist/leaflet.css';

import activities from './data/activities.json';
import { Navbar }         from './components/Navbar';
import { ActivityFilter } from './components/ActivityFilter';
import { WeatherWidget }  from './components/WeatherWidget';

function App() {
  const [selected, setSelected] = useState('Land');
  const heroRef = useRef(null);

  // Find the first activity in the selected category
  const featured = activities.find(a => a.category === selected);

  // Whenever selected changes, scroll hero into view
  useEffect(() => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selected]);

  return (
    <>
      {/* Top Nav */}
      <Navbar selected={selected} onSelect={setSelected} />

      {/* Hero */}
      <header
        ref={heroRef}
        className="hero-bg relative h-screen flex flex-col justify-center items-center text-white text-center px-4"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 space-y-6 max-w-xl">
          {/* Dynamic headline */}
          <h1 className="font-heading uppercase tracking-widest text-6xl">
            {selected} Conditions
          </h1>
          <p className="text-lg">
            Real-time weather & recommendations for your next {selected.toLowerCase()} adventure.
          </p>

          {/* Domain filter */}
          <ActivityFilter selected={selected} onChange={setSelected} />

          {/* Live weather */}
          {featured && (
            <div className="mt-6">
              <WeatherWidget
                lat={featured.coords[0]}
                lon={featured.coords[1]}
              />
            </div>
          )}
        </div>
      </header>

      <main className="pt-20 min-h-screen" />

    </>
  );
}

const container = document.getElementById('root');
createRoot(container).render(<App />);

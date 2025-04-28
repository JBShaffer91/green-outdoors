// src/index.jsx

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// data & components
import activities from './data/activities.json';
import { ActivityFilter } from './components/ActivityFilter';
import { ActivityCard }   from './components/ActivityCard';

function App() {
  const [selected, setSelected] = useState('Land');
  const filtered = activities.filter(a => a.category === selected);

  return (
    <div className="min-h-screen font-body">
      {/* HERO */}
      <header className="hero-bg h-screen flex flex-col justify-center items-center text-white text-center px-4">
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-heading uppercase tracking-widest text-5xl mb-4">
            Mission Briefing
          </h1>
          <p className="text-lg mb-6">
            Choose your domain: Air, Land, or Sea
          </p>
          <button className="px-6 py-3 bg-signalRed uppercase font-semibold tracking-wide rounded-md hover:bg-red-600 transition">
            Launch Recon
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="p-8 bg-green-50">
        <ActivityFilter selected={selected} onChange={setSelected} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {filtered.map(act => (
            <ActivityCard key={act.name} activity={act} />
          ))}
        </div>
      </main>
    </div>
  );
}

const container = document.getElementById('root');
createRoot(container).render(<App />);
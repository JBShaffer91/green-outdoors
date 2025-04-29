// src/index.jsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import activities from './data/activities.json';
import { Navbar } from './components/Navbar';
import { ActivityFilter } from './components/ActivityFilter';
import { ActivityCard } from './components/ActivityCard';

function App() {
  const [selected, setSelected] = useState('Land');
  const filtered = activities.filter(a => a.category === selected);

  return (
    <>
      <Navbar selected={selected} onSelect={setSelected} />
      <main className="pt-20 min-h-screen font-body text-charcoal container mx-auto px-6 py-8">
        <ActivityFilter selected={selected} onChange={setSelected} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {filtered.map(act => (
            <ActivityCard key={act.name} activity={act} />
          ))}
        </div>
      </main>
    </>
  );
}

const container = document.getElementById('root');
createRoot(container).render(<App />);
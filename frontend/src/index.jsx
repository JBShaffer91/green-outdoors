import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Pull in activities data
import activities from './data/activities.json';

// Pull in components
import { ActivityFilter } from './components/ActivityFilter';
import { ActivityCard }   from './components/ActivityCard';

function App() {
  // Add state for which category is selected
  const [selected, setSelected] = useState('Land');
  
  // Filter the activities array based on that state
  const filtered = activities.filter(a => a.category === selected);

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-800">
        Green Outdoors Co
      </h1>

      {/* Render filter buttons */}
      <ActivityFilter selected={selected} onChange={setSelected} />

      {/* Render a grid of cards for filtered activities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center mt-6">
        {filtered.map(act => (
          <ActivityCard key={act.name} activity={act} />
        ))}
      </div>
    </div>
  );
}

const container = document.getElementById('root');
createRoot(container).render(<App />);
// src/index.jsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import activities from './data/activities.json';
import { Navbar }            from './components/Navbar';
import { Hero }              from './components/Hero';
import { DomainMap }         from './components/DomainMap';
import { DomainDetailPanel } from './components/DomainDetailPanel';

function App() {
  const [domain, setDomain] = useState('Land');
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Only show markers for the chosen domain
  const spots = activities.filter(a => a.category === domain);

  return (
    <>
      <Navbar domain={domain} onDomainChange={setDomain} />
      <Hero   domain={domain} onDomainChange={setDomain} />
      <DomainMap
        activities={spots}
        onSelect={setSelectedActivity}
      />
      <DomainDetailPanel activity={selectedActivity} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);

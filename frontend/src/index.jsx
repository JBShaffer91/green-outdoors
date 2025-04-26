import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <h1 className="text-4xl font-bold text-green-800">
        Green Outdoors Co Landing Page
      </h1>
    </div>
  );
}

const container = document.getElementById('root');
createRoot(container).render(<App />);
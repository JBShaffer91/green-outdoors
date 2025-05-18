// src/components/ActivityFilter.jsx
import React from 'react';

const categories = ['Air', 'Land', 'Sea'];

export function ActivityFilter({ selected, onChange }) {
  return (
    <div className="flex space-x-4 justify-center my-4">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`
            px-5 py-2 uppercase font-heading tracking-wide rounded-full transition-colors
            ${
              selected === cat
                ? 'bg-militaryGreen text-white relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-1 after:bg-signalRed'
                : 'bg-charcoal text-desertTan hover:bg-slate hover:text-white'
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

/* src/components/ActivityFilter.jsx */
import React from 'react';

const categories = ['Air', 'Land', 'Sea'];

export function ActivityFilter({ selected, onChange }) {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2 rounded-full font-heading uppercase text-sm tracking-wide transition ${
            selected === cat
              ? 'bg-militaryGreen text-white'
              : 'bg-desertTan text-charcoal hover:bg-desertTan/80'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

import React from 'react';

const categories = ['Air', 'Land', 'Sea'];

export function ActivityFilter({ selected, onChange }) {
  return (
    <div className="flex space-x-4 justify-center my-4">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={
            `px-4 py-2 rounded-full font-semibold
            ${selected === cat
               ? 'bg-green-700 text-white'
               : 'bg-green-100 text-green-700 hover:bg-green-200'}`
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
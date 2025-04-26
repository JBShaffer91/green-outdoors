import React from 'react';

export function ActivityCard({ activity }) {
  return (
    <div className="w-40 p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
      {/* Replace with real icons as you add them */}
      <img src={activity.icon} alt={activity.name} className="h-12 mb-2" />
      <h3 className="font-bold text-lg text-gray-800 mb-1">{activity.name}</h3>
      <p className="text-sm text-gray-600">{activity.category}</p>
    </div>
  );
}
/* src/components/ActivityCard.jsx */
import React from 'react';

export function ActivityCard({ activity }) {
  return (
    <div className="
      bg-[#F4F4F4] border border-slate rounded-2xl p-6 flex flex-col items-center
      transform transition hover:-translate-y-1 hover:shadow-lg
    ">
      <img
        src={activity.icon}
        alt={activity.name}
        className="h-12 mb-4 filter grayscale hover:filter-none transition duration-300"
      />
      <h3 className="font-heading uppercase tracking-wide text-lg text-charcoal mb-2">
        {activity.name}
      </h3>
      <p className="text-sm text-slate">{activity.category}</p>
    </div>
  );
}

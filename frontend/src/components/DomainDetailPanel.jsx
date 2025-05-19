// src/components/DomainDetailPanel.jsx
import { AirWidget }  from './widgets/AirWidget';
import { LandWidget } from './widgets/LandWidget';
import { SeaWidget }  from './widgets/SeaWidget';

export function DomainDetailPanel({ activity }) {
  if (!activity) {
    return <p className="text-center">Click a map marker to see details.</p>;
  }
  switch (activity.category) {
    case 'Air':  return <AirWidget  coords={activity.coords} />;
    case 'Land': return <LandWidget coords={activity.coords} />;
    case 'Sea':  return <SeaWidget  coords={activity.coords} />;
    default:     return null;
  }
}

// src/components/DomainMap.jsx
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// (Optional) fix default icon paths if you haven’t already done so globally
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:   require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl:         require('leaflet/dist/images/marker-icon.png'),
  shadowUrl:       require('leaflet/dist/images/marker-shadow.png'),
});

export function DomainMap({ activities, onSelect }) {
  const mapRef = useRef();

  // Whenever activities change, fit the map bounds
  useEffect(() => {
    if (!mapRef.current || activities.length === 0) return;
    const map = mapRef.current;
    const group = L.featureGroup(
      activities.map(act => L.marker(act.coords))
    );
    map.fitBounds(group.getBounds(), { padding: [50, 50] });
  }, [activities]);

  return (
    <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
      <MapContainer
        whenCreated={mapInstance => { mapRef.current = mapInstance; }}
        center={activities[0]?.coords || [37.7749, -122.4194]}
        zoom={8}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {activities.map(act => (
          <Marker
            key={act.name}
            position={act.coords}
            eventHandlers={{
              click: () => onSelect(act),
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
}

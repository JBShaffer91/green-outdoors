// src/components/WeatherWidget.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Leaflet components
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// fix default icon paths (required for many bundlers)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:   require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl:         require('leaflet/dist/images/marker-icon.png'),
  shadowUrl:       require('leaflet/dist/images/marker-shadow.png'),
});

export function WeatherWidget({ lat, lon }) {
  const [weather, setWeather] = useState(null);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!lat || !lon) return;
    const key = import.meta.env.VITE_OPENWEATHER_API_KEY;
    if (!key) return setError('Missing API key');

    // Fetch basic weather + wind/humidity
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: { lat, lon, units: 'imperial', appid: key }
      })
      .then(({ data }) => {
        setWeather({
          temp:     Math.round(data.main.temp),
          desc:     data.weather[0].description,
          icon:     `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          location: data.name,
          wind:     data.wind.speed,
          humidity: data.main.humidity
        });
      })
      .catch((e) => {
        console.error(e);
        setError('Unable to load weather');
      });
  }, [lat, lon]);

  if (error)   return <p className="text-red-600">{error}</p>;
  if (!weather) return <p>Loading weather…</p>;

  return (
    <div className="space-y-4 max-w-lg w-full">
      {/* Map */}
      <MapContainer 
        center={[lat, lon]} 
        zoom={10} 
        scrollWheelZoom={false}
        className="h-64 w-full rounded-lg shadow-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[lat, lon]}>
          <Popup>
            <div className="text-center">
              <img src={weather.icon} alt={weather.desc} className="mx-auto w-12 h-12" />
              <p className="font-heading">{weather.location}</p>
              <p className="text-xl font-semibold">{weather.temp}°F</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Data panel */}
      <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow-md">
        <div>
          <p className="text-sm text-gray-500">Wind Speed</p>
          <p className="font-heading">{weather.wind} mph</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Humidity</p>
          <p className="font-heading">{weather.humidity}%</p>
        </div>
      </div>
    </div>
  );
}

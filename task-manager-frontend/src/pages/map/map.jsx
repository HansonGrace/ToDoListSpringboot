// src/pages/map/map.jsx
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

function MapPage() {
  return (
    <>
      <div className="top-bar">
        <h1></h1>
      </div>

      <div className="leaflet-map-wrapper">
        <MapContainer
          center={[38.0, -98.0]}
          zoom={4}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </>
  );
}

export default MapPage;

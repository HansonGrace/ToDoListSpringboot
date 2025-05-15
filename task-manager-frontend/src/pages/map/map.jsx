import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

function MapPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-bar">
        <div className="top-left">
          <h1>Flight</h1>
        </div>
        <div className="top-right">
          <span onClick={() => navigate('/submit')}>Submit a Spot</span>
          <span onClick={() => navigate('/faq')}>FAQ</span>
          <span onClick={() => navigate('/about')}>About</span>
          <span onClick={() => navigate('/login')}>Login</span>
        </div>
      </div>

      <div className="leaflet-map-wrapper">
        <MapContainer center={[38.0, -98.0]} zoom={4} scrollWheelZoom={true}>
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

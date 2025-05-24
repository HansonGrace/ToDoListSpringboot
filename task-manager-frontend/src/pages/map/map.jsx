import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

function MapPage() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  const toggleSecondDropdown = () => setSecondOpen(prev => !prev);

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

      {/* FLOATING DROPDOWNS WITH CLEAN SPACING */}
      <div className="floating-dropdown">
        <div style={{ display: 'flex', columnGap: '80px' }}>
          {/* First Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
              Distance ▼
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <div>1 mile</div>
                <div>5 miles</div>
                <div>10 miles</div>
              </div>
            )}
          </div>

          {/* Second Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleSecondDropdown}>
              Type ▼
            </button>
            {secondOpen && (
              <div className="dropdown-content">
                <div>Lake</div>
                <div>River</div>
                <div>Spring</div>
                <div>Ocean</div>
                <div>Swim Hole</div>
                <div>Waterfall</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="leaflet-map-wrapper">
        <MapContainer center={[38.0, -98.0]} zoom={4} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>

       <div className="side-info">
  <h2 className="side-info-title">Explore Locations</h2>
 
</div>
</div>
    </>
  );
}

export default MapPage;

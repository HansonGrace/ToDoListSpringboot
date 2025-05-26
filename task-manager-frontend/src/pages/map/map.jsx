import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
const [userLocation, setUserLocation] = useState(null);


function OceanPolygons(){
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('/oceans.geojson')
      .then((res) => res.json())
      .then((data) => setGeoData(data));
  }, []);

  const oceanStyle = {
    fillColor: '#a0d8ff',     // light blue fill
    color: '#005f73',         // dark blue border
    weight: 1.5,
    fillOpacity: 0.6,
  };

  return geoData ? <GeoJSON data={geoData} style={oceanStyle} /> : null;
}
function LakePolygons() {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('/lakes.geojson')
      .then((res) => res.json())
      .then((data) => setGeoData(data));
  }, []);

  const lakeStyle = {
    fillColor: '#dddddd',     // light gray fill
    color: '#444444',         // dark gray border
    weight: 1.5,
    fillOpacity: 0.6,
  };

  return geoData ? <GeoJSON data={geoData} style={lakeStyle} /> : null;
}

function MapPage() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleSecondDropdown = () => setSecondOpen((prev) => !prev);

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
          {/* Distance Dropdown */}
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

          {/* Type Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleSecondDropdown}>
              Type ▼
            </button>
            {secondOpen && (
              <div className="dropdown-content">
                <div onClick={() => setSelectedType('Lake')}>Lake</div>
                <div onClick={() => setSelectedType('River')}>River</div>
                <div onClick={() => setSelectedType('Spring')}>Spring</div>
                <div onClick={() => setSelectedType('Ocean')}>Ocean</div>
                <div onClick={() => setSelectedType('Swim Hole')}>Swim Hole</div>
                <div onClick={() => setSelectedType('Waterfall')}>Waterfall</div>
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
          {selectedType === 'Lake' && <LakePolygons />}
          {selectedType === 'Ocean' && <OceanPolygons />}
        </MapContainer>

        <div className="side-info">
          <h2 className="side-info-title">Explore Locations</h2>
        </div>
      </div>
    </>
  );
}

export default MapPage;

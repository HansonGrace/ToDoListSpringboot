// src/pages/map/map.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import { geoCentroid } from 'd3-geo';
import './map.css';
import '../home/home.css';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

function MapPage() {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState([-98, 38]);
  const [allGeos, setAllGeos] = useState([]);
  const [searchState, setSearchState] = useState('');

  const handleStateClick = (geo) => {
    const centroid = geoCentroid(geo);
    setSelectedState(geo.properties.name);
    setCenter(centroid);
    setZoom(3);
  };

  const handleStateSearch = () => {
    const geo = allGeos.find((g) =>
      g.properties.name.toLowerCase() === searchState.toLowerCase()
    );
    if (geo) {
      handleStateClick(geo);
    } else {
      alert('State not found.');
    }
  };

  const resetView = () => {
    setSelectedState(null);
    setCenter([-98, 38]);
    setZoom(1);
  };

  return (
    <>
      {/* Top-left back to home nav */}
      <div className="nav-buttons" style={{ left: '30px', right: 'auto' }}>
        <span onClick={() => navigate('/home')}>← Back to Home</span>
      </div>

      <div className="map-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>{selectedState ? selectedState : 'Select a state'}</h2>

          {/* State Search */}
          <div className="state-search">
            <input
              type="text"
              placeholder="Search state..."
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
            />
            <button onClick={handleStateSearch}>Go</button>
          </div>

          {selectedState ? (
            <p>
              Swimming holes and hot springs will show up here for {selectedState}. (Coming soon!)
            </p>
          ) : (
            <p>Click or search a state to begin exploring.</p>
          )}
          {selectedState && <button onClick={resetView}>Back to US view</button>}
        </div>

        {/* Interactive map */}
        <ComposableMap projection="geoAlbersUsa" className="us-map">
          <ZoomableGroup center={center} zoom={zoom}>
            <Geographies geography={geoUrl}>
              {({ geographies }) => {
                if (allGeos.length === 0) {
                  setAllGeos(geographies);
                }
                return geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleStateClick(geo)}
                    style={{
                      default: {
                        fill: '#B2DFDB',
                        stroke: '#607D8B',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                      hover: {
                        fill: '#80CBC4',
                        cursor: 'pointer',
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#4DB6AC',
                        outline: 'none',
                      },
                    }}
                  />
                ));
              }}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </>
  );
}

export default MapPage;

// src/pages/map/map.jsx
import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import './map.css';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

function MapPage() {
  const [selectedState, setSelectedState] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState([-98, 38]);

  const handleStateClick = (geo) => {
    setSelectedState(geo.properties.name);
    const centroid = geo.properties?.centroid || geoCentroid(geo);
    setCenter(centroid);
    setZoom(3);
  };

  const resetView = () => {
    setSelectedState(null);
    setCenter([-98, 38]);
    setZoom(1);
  };

  return (
    <div className="map-container">
      <div className="sidebar">
        <h2>{selectedState ? selectedState : 'Select a state'}</h2>
        {selectedState ? (
          <p>Swimming holes and hot springs will show up here for {selectedState}. (Coming soon!)</p>
        ) : (
          <p>Click a state to begin exploring.</p>
        )}
        {selectedState && <button onClick={resetView}>Back to US view</button>}
      </div>

      <ComposableMap projection="geoAlbersUsa" className="us-map">
        <ZoomableGroup center={center} zoom={zoom}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleStateClick(geo)}
                  className="state"
                  style={{
                    default: {
                      fill: "#B2DFDB",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none"
                    },
                    hover: {
                      fill: "#80CBC4",
                      cursor: "pointer",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#4DB6AC",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default MapPage;

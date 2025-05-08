import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import birdBackground from './birdgreen.jpg';

function Dashboard() {

      const navigate = useNavigate();

       return (
          <div className="dashcontainer">
            <img src={birdBackground} alt="Bird Forest" className="background-image" />
            <div className="dark-overlay"></div>
            </div>
       );
    
}

export default Dashboard;
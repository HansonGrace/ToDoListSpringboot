// src/pages/home/home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="landing-page" style={{ backgroundColor: '#F3F3E0', height: '100vh' }}>
            <div className="top-bar">
                Task Manager
            </div>
            <div className="get-started-container">
                <button
                    className="get-started-button"
                    onClick={() => navigate('/register')}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default Home;

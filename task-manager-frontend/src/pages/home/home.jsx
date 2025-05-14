// src/pages/home/home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import birdBackground from './birdgreen.jpg';

function Home() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    const fName = document.getElementById('fName').value.trim();
    const lName = document.getElementById('lName').value.trim();
    const email = document.getElementById('emailF').value.trim();
    const password = document.getElementById('passF').value.trim();

    if (!fName || !lName || !email || !password) {
      alert('Please enter all fields');
    } else {
      localStorage.setItem('firstName', fName);
      localStorage.setItem('lastName', lName);
      window.location = '/dashboard';
    }
  };

  return (
    <div className="container">
      <img src={birdBackground} alt="Bird Forest" className="background-image" />
      <div className="dark-overlay"></div>

      {/* Top-right nav links */}
      <div className="nav-buttons">
        <span onClick={() => navigate('/login')}>Login</span>
        <span onClick={() => navigate('/about')}>About</span>
        <span onClick={() => navigate('/faq')}>FAQ</span>
      </div>

      {/* Centered title and form */}
      <div className="center-wrapper">
        <div>
          <div className="home-title">
            <h1>Flight</h1>
            <p>Swimming Holes and Hot Springs in the U.S.</p>
          </div>

          <div className="wrapper">
            <div className="input_box">
              <input type="text" id="fName" placeholder="First Name" />
            </div>
            <div className="input_box">
              <input type="text" id="lName" placeholder="Last Name" />
            </div>
            <div className="input_box">
              <input type="email" id="emailF" placeholder="Email Address" />
            </div>
            <div className="input_box">
              <input type="password" id="passF" placeholder="Password" />
            </div>
            <button id="submit" onClick={handleSubmit}>
              Register
            </button>
          </div>

          <div className="below-wrapper">
            <span onClick={() => navigate('/map')}>Continue as guest</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

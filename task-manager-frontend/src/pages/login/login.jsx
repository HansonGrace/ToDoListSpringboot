// src/pages/login/login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../home/home.css';
import birdBackground from '../home/birdgreen.jpg';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const email = document.getElementById('emailF').value.trim();
    const password = document.getElementById('passF').value.trim();

    if (!email || !password) {
      alert('Please enter both email and password');
    } else {
      // Add real login logic here
      alert('Logged in!');
      navigate('/dashboard');
    }
  };

  return (
    <div className="container">
      <img src={birdBackground} alt="Bird Forest" className="background-image" />
      <div className="dark-overlay"></div>

      {/* Back to home button */}
      <div className="nav-buttons" style={{ left: '30px', right: 'auto' }}>
        <span onClick={() => navigate('/home')}>← Back to Home</span>
      </div>

      <div className="center-wrapper">
        <div className="wrapper">
          <div className="input_box">
            <input type="email" id="emailF" placeholder="Email Address" />
          </div>
          <div className="input_box">
            <input type="password" id="passF" placeholder="Password" />
          </div>
          <button id="login" onClick={handleLogin}>
            Login
          </button>
          <p
          /*TODO: fix so it highlights when you hover instead */
            className="forgot-password?"
            style={{
              color: 'white',
              fontSize: '11px',
              textAlign: 'right',
              marginTop: '8px',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
            onClick={() => {}}
          >
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
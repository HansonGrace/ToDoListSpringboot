// src/pages/home/home.jsx
import React from 'react';
import './home.css';
import birdBackground from './birdgreen.jpg';

function Home() {
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
      window.location = '/thanks'; 
    }
  };

  return (
    <div className="container">
      {/* Background image */}
      <img src={birdBackground} alt="Bird Forest" className="background-image" />

      {/* Dark overlay for readability */}
      <div className="dark-overlay"></div>

      {/* Registration form */}
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
    </div>
  );
}

export default Home;

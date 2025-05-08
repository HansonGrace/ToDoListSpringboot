// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import Register from './pages/register/register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Landing Page */}
        <Route path="/home" element={<Home />} />
        
        {/* Register/Login Page */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

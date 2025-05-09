// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import Register from './pages/register/register';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';



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

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />


      </Routes>
    </Router>
  );
}

export default App;

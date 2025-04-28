import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
    const navigate = useNavigate(); 

    const handleGetStarted = () => {
        navigate('/register'); 
    };

    return (
        <div className="home">
            <div className="home-container">
                <div className="home-top">
                    <h1 className="home-title">Task Manager</h1>
                    <p className="home-subtitle">Organize. Prioritize. Succeed.</p>
                </div>
                <div className="home-bottom">
                    <h2>Welcome!</h2>
                    <p>Manage your daily tasks with ease and efficiency.</p>
                    <p>Create, update, and stay on top of your to-do list.</p>
                    <button className="home-button" onClick={handleGetStarted}>Get Started</button>

                    {/* already have an account? hyperlink */}
                    <p className="home-login-text">
                        Already have an account? <a href="/login" className="login-link">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;

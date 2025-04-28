import React from 'react';
import './home.css';

function Home() {
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
                    <button className="home-button">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Home;

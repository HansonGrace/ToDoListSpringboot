import React from 'react';
import './home.css';

function Home() {
    return (
        <div className="home">
            <div className='home-container'>
                <div className='home-top'>
                    <h1>Task Manager</h1>
                    <p>Manage your tasks efficiently</p>
                </div>
                <div className='home-bottom'>
                    <h2>Welcome to the Task Manager App</h2>
                    <p>Here you can create, update, and delete tasks.</p>
                    <p>Get started by adding your first task!</p>
                </div>
            </div>
        </div>
    );
}

export default Home

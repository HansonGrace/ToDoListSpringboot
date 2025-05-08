import React from 'react';
import './home.css';

function Home() {
    return (
        <div
            className="background-wrapper"
            style={{
                backgroundImage: 'url("/mountainimage.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <div className="wrapper">
                <div className="card login-size">
                    <div className="login-form">
                        <h2>Login</h2>
                        <div className="input-group">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                        <button className="btn btn-login">Login</button>
                        <p className="toggle-text">
                            Don't have an account? <a href="#" className="toggle">Register Now</a>
                        </p>
                    </div>
                </div>

                <div className="content">
                    <h2>Registration</h2>
                    <div className="input-group">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="First Name" />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" />
                    </div>
                    <button className="btn">Register</button>
                    <p className="toggle-text">
                        Already have an account? <a href="#" className="toggle">Login Now</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;

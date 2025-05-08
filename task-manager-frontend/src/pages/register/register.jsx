import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../home/home.css';

function Register() {
    const [isRegistering, setIsRegistering] = useState(true);
    const navigate = useNavigate();

    return (
        <div className="auth-page">
            <div className={`auth-box ${isRegistering ? 'register' : 'login'}`}>
                {isRegistering ? (
                    <>
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
                            Already have an account?{' '}
                            <span className="toggle" onClick={() => setIsRegistering(false)}>
                                Login Now
                            </span>
                        </p>
                    </>
                ) : (
                    <>
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
                            Don't have an account?{' '}
                            <span className="toggle" onClick={() => setIsRegistering(true)}>
                                Register Now
                            </span>
                        </p>
                    </>
                )}

                {/* Back to Home Link */}
                <p className="toggle-text" style={{ marginTop: '20px' }}>
                    <span className="toggle" onClick={() => navigate('/home')}>
                        ← Back to Home
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Register;

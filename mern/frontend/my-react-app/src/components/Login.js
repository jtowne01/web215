import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://jauntytegu.onrender.com/api/auth/login',
                { username, password }
            );

            localStorage.setItem('token', response.data.token);
            setMessage("Login successful!");
            setTimeout(() => {
        navigate('/dashboard');
    }, 1000);
        } catch (error) {
            setMessage("Invalid login credentials.");
        }
    };

    return (
        <div id="logreg">
            <h2>Login</h2>
            {message && <h3 className="message">{message}</h3>}
            <form id ="LoginReg" onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button id="account" type="submit">Login</button>
            </form>
             <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('https://jauntytegu.onrender.com/api/auth/register', {
                username,
                password
            });

        setMessage("Registration successful!");
        navigate('/login');

        } catch (error) {
            console.error(error);
            setMessage("Registration failed. Try a different username!");
        }
    };

    return (
        <div id="logreg">
            <h2>Register</h2>
        
        <form id="LoginReg" onSubmit={handleSubmit}>
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

            <button id="account" type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
};

export default Register;



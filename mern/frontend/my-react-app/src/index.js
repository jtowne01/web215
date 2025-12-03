import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <h2>Welcome to Jaunty Tegu's Music Market</h2>
      <nav>
        <ul>
            <li><a href="https://jtowne01.github.io/web215/index.html">GitHub Page</a></li> 
            <li><a href="https://musicmarket215.onrender.com/dashboard">Dashboard</a></li> 
            <li>
                <a href="#">Account ▾</a>
                <ul class="dropdown">
                <li><a href="https://musicmarket215.onrender.com/login">Login</a></li>
                <li><a href="https://musicmarket215.onrender.com/profile">Profile</a></li>
                </ul>
            </li>
        </ul>
      </nav>
    </header>
    <App />
  </React.StrictMode>

);

  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

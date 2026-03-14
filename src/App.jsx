import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container" style={{ padding: '48px 40px' }}>
      <nav className="navbar" style={{ height: '70px' }}>
        <ul className="nav-list">
          <li className="nav-item" style={{ fontSize: '20px', padding: '10px 20px' }}>
            <a href="#">Home</a>
          </li>
          <li className="nav-item" style={{ fontSize: '14px', padding: '10px 20px' }}>
            <a href="#">About</a>
          </li>
          <li className="nav-item" style={{ fontSize: '14px', padding: '10px 20px' }}>
            <a href="#">Services</a>
          </li>
          <li className="nav-item" style={{ fontSize: '14px', padding: '10px 20px' }}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <h1 style={{ fontSize: '24px' }}>Welcome to the App!</h1>
        <button className="main-button" style={{ padding: '12px 24px', fontSize: '14px' }}>Click Me</button>
      </main>
      <footer className="bottom-nav">
        <div className="nav-icon" style={{ fontSize: '22px' }}>🏠</div>
        <div className="nav-icon" style={{ fontSize: '22px' }}>ℹ️</div>
        <div className="nav-icon" style={{ fontSize: '22px' }}>💼</div>
        <div className="nav-icon" style={{ fontSize: '22px' }}>✉️</div>
      </footer>
    </div>
  );
}

export default App;

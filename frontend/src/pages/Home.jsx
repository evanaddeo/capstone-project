import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure this CSS file exists

function Home() {
  return (
    <div className="home-container">
      <main>
        <h1>Welcome to Trail-Blazers</h1>
        <p>This is the hiring site for Trail-Blazers</p>
        <p>Copyright 2030 Trail-Blazers</p>
        <p> <Link to="/login-signup" className="nav-button">Go to Login/Signup</Link></p>
      </main>
    </div>
  );
}

export default Home;



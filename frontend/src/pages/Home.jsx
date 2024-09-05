import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; 
import '../styles/Home.css'; // Ensure this CSS file exists
import { getAllUsers } from '../crud.js';

function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
      getAllUsers()
      .then(users => setUsers(users))
  }, []);

  return (
    <>
      <div className="home-container">
        <main>
          <h1>Welcome to Trail-Blazers</h1>
          <p>This is the hiring site for Trail-Blazers</p>
          <p> <Link to="/login-signup" className="nav-button">Go to Login/Signup</Link></p>
        </main>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
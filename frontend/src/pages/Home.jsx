import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <p>Copyright 2030 Trail-Blazers</p>
          <p> <Link to="/login-signup" className="nav-button">Go to Login/Signup</Link></p>
        </main>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.type}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
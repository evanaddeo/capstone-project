import React, { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/users')
      .then((res) => {
        if(!res.ok) {
          throw new Error("failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching users");
      })
  }, []);

  return (
    <>
      <h1>Trail-Blazers</h1>
      <div className="card">
        <p>
          This is the hiring site for Trail-Blazers
        </p>
      </div>
      <p className="read-the-docs">
        Copyright 2030 Trail-Blazers
      </p>
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
          {users.map((user) => (
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
  )
}

export default App


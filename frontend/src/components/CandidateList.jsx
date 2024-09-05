// src/components/CandidateList.jsx
import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../crud.js'; // Adjust the import path based on your project structure
import '../styles/CandidateList.css';

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const users = await getAllUsers();
        const filteredCandidates = users.filter(user => user.role === 'candidate');
        setCandidates(filteredCandidates);
      } catch (error) {
        console.error('Failed to fetch candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <div className="candidate-list-container">
      <h1>Candidate List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {candidates.length ? (
            candidates.map(candidate => (
              <tr key={candidate.id}>
                <td>{candidate.id}</td>
                <td>{candidate.username}</td>
                <td>{candidate.email}</td>
                <td>{candidate.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No candidates found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateList;

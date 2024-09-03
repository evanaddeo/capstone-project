import React from 'react';
import '../styles/CandidateDash.css';

const CandidateDash = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Candidate Dashboard</h1>
      </header>
      <section className="dashboard-info">
        <div className="info-card">
          <h2>Overview:</h2>
          <p>Total Applications: <span className="info-value">n/a</span></p>
          <p>Pending Applications: <span className="info-value">n/a</span></p>
        </div>
      </section>
      <section className="dashboard-links">
        <h2>Applications:</h2>
        <ul>
          <li><a href="/create-job" className="link-button">Apply</a></li>
          <li><a href="/update-job" className="link-button">Update Application</a></li>
          <li><a href="/view-applications" className="link-button">View Applications</a></li>
        </ul>
      </section>
    </div>
  );
};

export default CandidateDash;
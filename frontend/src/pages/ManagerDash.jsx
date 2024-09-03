import React from 'react';
import '../styles/ManagerDash.css';

const ManagerDash = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Manager Dashboard</h1>
      </header>
      <section className="dashboard-info">
        <div className="info-card">
          <h2>Overview:</h2>
          <p>Total Job Listings: <span className="info-value">n/a</span></p>
          <p>Pending Applications: <span className="info-value">n/a</span></p>
          <p>Active Openings: <span className="info-value">n/a</span></p>
        </div>
      </section>
      <section className="dashboard-links">
        <h2>Manage Job Listings:</h2>
        <ul>
          <li><a href="/create-job" className="link-button">Create Job Listing</a></li>
          <li><a href="/update-job" className="link-button">Update Job Listing</a></li>
          <li><a href="/view-applications" className="link-button">View Applications</a></li>
        </ul>
      </section>
    </div>
  );
};

export default ManagerDash;

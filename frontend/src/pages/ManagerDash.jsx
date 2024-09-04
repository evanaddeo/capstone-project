import React from 'react';
import '../styles/DashRight.css';
import '../styles/DashLeft.css';

const ManagerDash = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container-left">
        <header className="dashboard-header-left">
          <h1>Welcome *Get Manager Name*</h1>
        </header>
        <section className="dashboard-info-left">
          <div className="info-card-left">
            <h2>Candidate Info:</h2>
            <p>Name: <span className="info-value-left">n/a</span></p>
            <p>Email: <span className="info-value-left">n/a</span></p>
            <p>Phone Number: <span className="info-value-left">n/a</span></p>
          </div>
        </section>
        <section className="dashboard-links-left">
          <h2>Applications:</h2>
          <ul>
            <li><a href="/create-job" className="link-button-left">Apply</a></li>
            <li><a href="/update-job" className="link-button-left">Update Application</a></li>
            <li><a href="/view-applications" className="link-button-left">View Applications</a></li>
          </ul>
        </section>
      </div>

      <div className="dashboard-container-right">
        <header className="dashboard-header-right">
          <h1>Welcome *Get Manager Name*</h1>
        </header>
        <section className="dashboard-info-right">
          <div className="info-card-right">
            <h2>Candidate Info:</h2>
            <p>Name: <span className="info-value-right">n/a</span></p>
            <p>Email: <span className="info-value-right">n/a</span></p>
            <p>Phone Number: <span className="info-value-right">n/a</span></p>
          </div>
        </section>
        <section className="dashboard-links-right">
          <h2>Applications:</h2>
          <ul>
            <li><a href="/create-job" className="link-button-right">Apply</a></li>
            <li><a href="/update-job" className="link-button-right">Update Application</a></li>
            <li><a href="/view-applications" className="link-button-right">View Applications</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ManagerDash;

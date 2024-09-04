import React, { useState } from 'react';
import UpdateUserForm from '../components/UpdateUserForm'; // Import the updated form component
import '../styles/DashRight.css';
import '../styles/DashLeft.css';

const CandidateDash = () => {
  const [candidateInfo, setCandidateInfo] = useState({
    name: 'n/a',
    email: 'n/a',
    phone: 'n/a',
  });

  const handleSave = (updatedInfo) => {
    setCandidateInfo(updatedInfo);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container-left">
        <header className="dashboard-header-left">
          <h1>Job Listings:</h1>
        </header>
        <section className="dashboard-links-left">
          <li><a href="/create-job" className="link-button-left">Apply</a></li>
          <li><a href="/update-job" className="link-button-left">Update</a></li>
          <li><a href="/view-applications" className="link-button-left">View Applications</a></li>
        </section>
      </div>

      <div className="dashboard-container-right">
        <header className="dashboard-header-right">
          <h1>Welcome *Get Candidate Name*</h1>
        </header>
        <section className="dashboard-info-right">
          <div className="info-card-right">
            <h2>Candidate Info:</h2>
            <UpdateUserForm initialInfo={candidateInfo} onSave={handleSave} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CandidateDash;

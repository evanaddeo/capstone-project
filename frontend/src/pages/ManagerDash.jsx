import React, { useState } from 'react';
import UpdateUserForm from '../components/UpdateUserForm'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import '../styles/DashRight.css';
import '../styles/DashLeft.css';

const ManagerDash = () => {
  const [candidateInfo, setCandidateInfo] = useState({
    name: 'N/A',
    email: 'N/A',
    phone: 'N/A',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedInfo) => {
    setCandidateInfo(updatedInfo);
    setIsEditing(false);
  };

  return (
    <>
      <Header />
      <div className="dashboard-wrapper">
        <div className="dashboard-container-left">
          <header className="dashboard-header-left">
            <h1>My Job Listings:</h1>
          </header>
          <section className="dashboard-links-left">
            <li><a className="link-button-left">View Applications</a></li>
            <li><a className="link-button-left">New</a></li>
            <li><a className="link-button-left">Edit</a></li>
            <li><a className="link-button-left">Delete</a></li>
          </section>
        </div>

        <div className="dashboard-container-right">
          <header className="dashboard-header-right">
            <h1>Welcome, {candidateInfo.name}</h1>
          </header>
          <section className="dashboard-info-right">
            <div className="info-card-right">
              <h2>Candidate Info:</h2>
              {!isEditing ? (
                <>
                  <p>Name: <span>{candidateInfo.name}</span></p>
                  <p>Email: <span>{candidateInfo.email}</span></p>
                  <p>Phone Number: <span>{candidateInfo.phone}</span></p>
                  <button className="edit-button" onClick={handleEditClick}>Edit</button>
                </>
              ) : (
                <UpdateUserForm initialInfo={candidateInfo} onSave={handleSave} />
              )}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManagerDash;


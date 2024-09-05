import React, { useState, useEffect } from 'react';
import UpdateUserForm from '../components/UpdateUserForm';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import '../styles/DashRight.css';
import '../styles/DashLeft.css';

import { getAllJobs, postApplication } from '../crud';

const CandidateDash = () => {

  const [jobs, setJobs] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const [candidateInfo, setCandidateInfo] = useState({
    name: 'N/A',
    email: 'N/A',
    phone: 'N/A',
  });

  const handleRowSelect = (index, job) => {
    if (selectedRow === index) {
      setSelectedRow(null);
    } else {
      setSelectedRow(index);
    }

    setSelectedJob(job);
  }

  const handleApply = () => {
    console.log("first in handle apply");
    const application = 
    {
      "user_id": 5,
      "date_applied": "2024-09-04T13:55:30.000+00:00",
      "cover_letter": "example cover letter",
      "custom_resume": "example resume",
      "application_status": "Pending"
    }

    console.log("in handle apply")

    postApplication(application);
  }

  useEffect(() => {
      getAllJobs()
      .then(jobs => setJobs(jobs))
  }, []);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedInfo) => {
    setCandidateInfo(updatedInfo);
    setIsEditing(false);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container-left">
        <header className="dashboard-header-left">
          <h1>Job Listings:</h1>
        </header>

        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs?.map((job, index) => (
              <tr 
                key={job.id} 
                onClick={() => {
                  setSelectedRow(index);
                  handleRowSelect(index, job);
                }}
              >
                <td style={{backgroundColor: selectedRow === index ? 'rgba(55, 70, 23, .25)' : 'inherit'}}>{job.department}</td>
                <td style={{backgroundColor: selectedRow === index ? 'rgba(55, 70, 23, .25)' : 'inherit'}}>{job.listing_title}</td>
                <td style={{backgroundColor: selectedRow === index ? 'rgba(55, 70, 23, .25)' : 'inherit'}}>{job.job_description}</td>
                <td style={{backgroundColor: selectedRow === index ? 'rgba(55, 70, 23, .25)' : 'inherit'}}>{job.listing_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <section className="dashboard-links-left">
          <li><a onClick={() => {handleApply()}} className="link-button-left">Apply </a></li>
          <li><a href="/update-job" className="link-button-left">Update</a></li>
          <li><a href="/view-applications" className="link-button-left">View Applications</a></li>
        </section>
      </div>
    <>
      <Header />
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

export default CandidateDash;


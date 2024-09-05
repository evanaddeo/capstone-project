import React, { useState, useEffect } from 'react';
import UpdateUserForm from '../components/UpdateUserForm'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import '../styles/DashRight.css';
import '../styles/DashLeft.css';

import { getAllJobs, getApplicationByJobId } from "../crud.js";

const ManagerDash = () => {

  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedRow, setSelectedRow] = useState(null)

  useEffect(() => {
      getAllJobs()
      .then(jobs => setJobs(jobs))
  }, []);

  const showApplications = (id) => {
    getApplicationByJobId(id)
    .then(applications => setApplications(applications))

    console.log("jobid", id)
  }


  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container-left">
        
        {/* <header className="dashboard-header-left">
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
        </section> */}

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
            {jobs?.map((job) => (
              <tr 
                key={job.id} 
                onClick={() => {
                  setSelectedJob(job.listing_title);
                  setSelectedRow(job.id);
                  showApplications(job.id);
                }}
              >
                <td>{job.department}</td>
                <td>{job.listing_title}</td>
                <td>{job.job_description}</td>
                <td>{job.listing_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dashboard-container-right">

        {(applications.length === 0) ? (
          <p>Empty</p>
        ) : (
          <>
          <h3>{selectedJob}</h3>
          <table>
          <thead>
            <tr>
              <th>Date Applied</th>
              <th>Cover Letter</th>
              <th>Resume</th>
              <th>Application Status</th>
            </tr>
          </thead>
          <tbody>
            {applications?.map((application) => (
              <tr key={application.id}>
                <td>{application.date_applied}</td>
                <td>{application.cover_letter}</td>
                <td>{application.custom_resume}</td>
                <td>{application.application_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
        )}
      
      
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


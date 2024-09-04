import React, { useState, useEffect } from 'react';
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
      
      
      </div>
    </div>
  );
};

export default ManagerDash;

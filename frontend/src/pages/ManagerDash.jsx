import React, { useState, useEffect } from 'react';
import UpdateUserForm from '../components/UpdateUserForm';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import '../styles/DashRight.css';
import '../styles/DashLeft.css';
import '../styles/CandidateDash.css';

import ApplicantForm from '../components/ApplicantForm';

import { getJobsByManagerId, postApplication } from '../crud';
import { getCookie } from '../utils/auth'

const ManagerDash = () => {

  const [jobs, setJobs] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const [parentRefreshKey, setParentRefreshKey] = useState(0);

  const handleRowSelect = (job, index) => {
    if (selectedRow === index) {
      setSelectedRow(null);
    } else {
      setSelectedRow(index);
    }

    console.log(selectedRow);

    setSelectedJob(job);
  }

  const handleApply = () => {
    const application = 
    {
      "user_id": 5,
      "date_applied": "2024-09-04T13:55:30.000+00:00",
      "cover_letter": "example cover letter",
      "custom_resume": "example resume",
      "application_status": "Pending"
    }

    postApplication(application);
  }

  useEffect(() => {
      const managerId = getCookie('user_id');

      getJobsByManagerId(managerId)
      .then(filteredJobs => setJobs(filteredJobs))
  }, []);


  return (
    <>
      <div className="hdr-wrapper">
        <h3 className="hdr">Manager Home</h3>
        <a href="/ApplicationList">My Applications</a>
        <a style={{textDecoration: "underline", marginLeft: "15px"}}>My Listings</a>
      </div>
    
      <div className="wrapper">
        <div className="left-container">
          
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <div
                className="card-wrapper"
                key={job.id}
                job={job}
                onClick={() => {
                  handleRowSelect(job, index);
                }}
                style={{
                  backgroundColor: selectedRow === index ? "rgba(35, 59, 194, 0.4)" : "rgba(255, 255, 255, 0.5)"
                }}
              >
                <div className="job-details">
                  <h4 style={{ color: "rgba(0, 0, 255, .7)" }} className="job-company">{job.department}</h4>
                  <h5 className="job-title">{job.listing_title}</h5>
                </div>
                <div className="job-status">
                  <h6 style={{color: (job.listing_status === "Open") ? "green" : "red"}}>{job.listing_status}</h6>
                </div>
              </div>
                
            ))
          ) : (
            <p>No job listings available to display.</p>
          )}
        </div>
        <div className="right-container">
          {selectedJob ? (
            <div className="right-body">
              <ApplicantForm job={selectedJob} setParentRefreshKey={setParentRefreshKey}/>
            </div>
          ) : (
            <p>Select a job listing to display information.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ManagerDash;
import React, { useState, useEffect } from 'react';
import UpdateUserForm from '../components/UpdateUserForm';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import '../styles/DashRight.css';
import '../styles/DashLeft.css';
import '../styles/CandidateDash.css';

import JobDetails from '../components/JobDetails';

import { getAllJobs } from '../crud';

const CandidateDash = () => {

  const [jobs, setJobs] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleRowSelect = (job, index) => {
    if (selectedRow === index) {
      setSelectedRow(null);
    } else {
      setSelectedRow(index);
    }

    console.log(selectedRow);

    setSelectedJob(job);
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
    <>
      <div className="hdr-wrapper">
        <h3 className="hdr">Candidate Home</h3>
        <button></button>
        <a href="/ApplicationList">My Applications</a>
        <a style={{textDecoration: "underline", marginLeft: "15px"}}>Jobs</a>
        <a style={{marginLeft: "15px"}} href="/Profile">My Profile</a>
      </div>
    
      <div className="wrapper">
        <div className="left-container">
          
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <div 
                className= "card-wrapper"
                key={job.id}
                job={job}
                onClick={() => {
                  handleRowSelect(job, index);
                }}
                style={{backgroundColor: (selectedRow === index) ? "rgba(35, 59, 194, 0.4)" : "rgba(255, 255, 255, 0.5)"}}
              >
                <h4 style={{color: "rgba(0, 0, 255, .7)"}}className="job-company">{job.department}</h4>
                
                <h5 className="job-title">{job.listing_title}</h5>
              </div>
                
            ))
          ) : (
            <p>Empty</p>
          )}
        </div>
        <div className="right-container">
          {selectedJob ? (
            <div className="right-body">
              <JobDetails job={selectedJob} />
            </div>
          ) : (
            <p>Empty</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CandidateDash;
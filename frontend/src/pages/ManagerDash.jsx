import React, { useState, useEffect } from 'react';
import UpdateUserForm from '../components/UpdateUserForm';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import '../styles/DashRight.css';
import '../styles/DashLeft.css';
import '../styles/CandidateDash.css';

import JobDetails from '../components/JobDetails';

import { getAllJobs, postApplication } from '../crud';

const ManagerDash = () => {

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
      getAllJobs()
      .then(jobs => setJobs(jobs))

      document.cookie= "user_id=19; path=/;";
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
        <h3 className="hdr">Manager Home</h3>
        <a href="/Profile">My Profile</a>
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
                style={{border: (selectedRow === index) ? "1px solid gray" : "0px solid transparent"}}
              >
                <h4 className="job-company">{job.department}</h4>
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

export default ManagerDash;
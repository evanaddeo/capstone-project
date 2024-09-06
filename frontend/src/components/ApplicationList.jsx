import React, { useState, useEffect } from 'react';
import '../styles/ApplicationList.css';
import { getCookie } from '../utils/auth';
import { getJobById } from '../crud.js'; 

const ApplicationList = ({ jobId, managerId }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Function to fetch applications and associated job data
  const fetchApplications = async () => {
    setLoading(true);
    try {
      const userId = getCookie('user_id');
      if (!userId) {
        throw new Error('User ID not found in cookie.');
      }

      const response = await fetch(`http://localhost:8080/applications/byUser/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch applications.');
      }
      const data = await response.json();

      
      const applicationsWithJobs = await Promise.all(
        data.map(async (application) => {
          try {
            const job = await getJobById(application.job_id);
            return { ...application, job }; 
          } catch (jobError) {
            console.error('Failed to fetch job details:', jobError);
            return { ...application, job: { department: 'Unknown', listing_title: 'Unknown' } }; // Handle job fetch error
          }
        })
      );

      setApplications(applicationsWithJobs);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [jobId, managerId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <>
      <div className="hdr-wrapper">
        <h3 className="hdr">Candidate Home</h3>
        <a style={{textDecoration: "underline"}}>My Applications</a>
        <a style={{marginLeft: "15px"}} href="/CandidateDash">Jobs</a>
        <a style={{marginLeft: "15px"}} href="/Profile">My Profile</a>
      </div>
      <div className="application-list">
        <h2>Applications</h2>
        <table>
          <thead>
            <tr>
              <th>Company (Department)</th>
              <th>Role (Listing Title)</th>
              <th>Resume</th>
              <th>Cover Letter</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
          <table className="scroll-list"><thead></thead>
          <tbody>
            {applications.length > 0 ? (
              applications.map((application) => (
                <tr key={application.id}>
                  <td>{application.job?.department}</td> {/* Display Department */}
                  <td>{application.job?.listing_title}</td> {/* Display Listing Title */}
                  <td>
                    <a href={application.custom_resume} target="_blank" rel="noopener noreferrer">
                      View Resume
                    </a>
                  </td>
                  <td>
                    <a href={application.cover_letter} target="_blank" rel="noopener noreferrer">
                      View Cover Letter
                    </a>
                  </td>
                  <td style={{color: (application.application_status === 'Rejected' ? "red" : "green")}}>{application.application_status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No applications found.</td>
              </tr>
            )}
          </tbody>
          </table>
      </div>
    </>
  );
};

export default ApplicationList;

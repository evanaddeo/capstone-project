import React, { useState, useEffect } from 'react';
import '../styles/ApplicationList.css';

const ApplicationList = ({ jobId, managerId }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  

  useEffect(() => {
    // Import getCookie from ../utils/auth
    //
    // save getCookie("user_id") in a const
    //
    // make a fetch for http://localhost:8080/byUser/{userId}
    //
    // display the returned applications, displaymsg if there are none

    const fetchApplications = async () => {
      setLoading(true);
      try {
        // Replace this URL with your API endpoint for fetching applications
        const response = await fetch(`/api/applications?jobId=${jobId}&managerId=${managerId}`);
        const data = await response.json();
        setApplications(data);
      } catch (err) {
        setError('Failed to fetch applications.');
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [jobId, managerId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="application-list">
      <h2>Applications for Job ID: {jobId}</h2>
      <table>
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Candidate Name</th>
            <th>Resume</th>
            <th>Cover Letter</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.length > 0 ? (
            applications.map((application) => (
              <tr key={application.id}>
                <td>{application.id}</td>
                <td>{application.candidateName}</td>
                <td><a href={application.resumeUrl} target="_blank" rel="noopener noreferrer">View Resume</a></td>
                <td><a href={application.coverLetterUrl} target="_blank" rel="noopener noreferrer">View Cover Letter</a></td>
                <td>{application.status}</td>
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
  );
};

export default ApplicationList;

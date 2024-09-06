import React, { useState, useEffect } from 'react';

import { getApplicationByJobId, getCandidateByUserId } from "../crud"

import "../styles/ApplicantForm.css"

const ApplicantForm = ({ job }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchApplicationsAndCandidates = async () => {
    setLoading(true);
    try {
      const applications = await getApplicationByJobId(job.id);
      const applicationsWithCandidates = await Promise.all(applications.map(async (application) => {
        const candidate = await getCandidateByUserId(application.user_id);

        return { ...application, candidate };
      }));
      setApplications(applicationsWithCandidates);
    } catch (err) {
      setError('Failed to load applications.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (job) {
      fetchApplicationsAndCandidates();
    }
  }, [job, refreshKey]);

  const handleCardClick = (applicationId) => {
    setSelectedCardId(applicationId === selectedCardId ? null : applicationId);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  const handleAccept = (application) => {
    const putApplication = {
        "job_id": application.job_id,
        "user_id": application.user_id,
        "application_status": "Accepted"
      };
    
      fetch(`http://localhost:8080/applications/${application.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(putApplication)
      })
      .then(response => response.json())
      .then(() => {
        setRefreshKey(prevKey => prevKey + 1);
      })
      .then(() => {
        const jobPut =
        {
            "manager_id": job.manager_id,
            "department": job.department,
            "listing_title": job.listing_title,
            "job_title": job.job_title,
            "job_description": job.job_description,
            "additional_information": job.additional_information,
            "listing_status": "Closed"
        }
        fetch(`http://localhost:8080/jobs/${job.id}`, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobPut)
          })
          .then(() => {
            setTimeout(() => {
                window.location.reload();
              }, 2000); 
          })
      })
      .catch(error => {
        console.error('Error updating application:', error);
      });

  }

  const handleDeny = (application) => {

    const putApplication = {
        "application_status": "Denied"
      };
    
      fetch(`http://localhost:8080/applications/${application.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(putApplication)
      })
      .then(response => response.json())
      .then(() => {
        setRefreshKey(prevKey => prevKey + 1);
      })
      .then(() => {
        const jobPut =
        {
            "manager_id": job.manager_id,
            "department": job.department,
            "listing_title": job.listing_title,
            "job_title": job.job_title,
            "job_description": job.job_description,
            "additional_information": job.additional_information,
            "listing_status": "Closed"
        }
        fetch(`http://localhost:8080/jobs/${job.id}`, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobPut)
          })
          .then(() => {
            setTimeout(() => {
                window.location.reload();
              }, 2000); 
          })
      })
      .catch(error => {
        console.error('Error updating application:', error);
      });
    
  }

  return (
    <div className="applicant-form">
      {applications.length > 0 ? (
        <div className="card-grid">
          {applications.map((application) => (
            <div
              className={`card ${selectedCardId === application.id ? 'selected' : ''}`}
              key={application.id}
              onClick={() => handleCardClick(application.id)}
            >
              <h3 className="candidate-name">{application.candidate[0]?.full_name}</h3>
              <p className="candidate-email">{application.candidate[0]?.email}</p>
              <p className="candidate-phone">{application.candidate[0]?.phone}</p>
              <div className='bottom-info'>
                <p 
                    className="application-status"
                    style={{color: (application.application_status === "Denied" ? "red" : 
                        (application.application_status === "Accepted" ? "green" : "gray")
                    )}}>{application.application_status}</p>
                <div className="links">
                    <a href={`/${application.cover_letter}`} download className="link">Cover Letter</a>
                    <a href={`/${application.resume}`} download className="link">Resume</a>
                </div>
              </div>
              <div className="actions">
                <button
                  className={`btn accept ${selectedCardId === application.id ? 'active' : ''}`}
                  disabled={selectedCardId !== application.id}
                  onClick={() => handleAccept(application)}
                >
                  Accept
                </button>
                <button
                  className={`btn deny ${selectedCardId === application.id ? 'active' : ''}`}
                  disabled={selectedCardId !== application.id}
                  onClick={() => handleDeny(application)}
                >
                  Deny
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No applications found.</p>
    )}
  </div>
);
};

export default ApplicantForm;


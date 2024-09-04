import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch job listings from an API or data source
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/jobs'); // Replace with your API endpoint
        setJobs(response.data);
      } catch (err) {
        setError('Failed to fetch job listings');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.length === 0 ? (
          <p>No job listings available</p>
        ) : (
          jobs.map(job => (
            <li key={job.id}>
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <p><strong>Posted by:</strong> {job.managerName}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default JobList;

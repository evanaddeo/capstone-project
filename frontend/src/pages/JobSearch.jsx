import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import '../styles/JobSearch.css';

// Function to simulate fetching job listings
const fetchJobListings = async (searchQuery, jobType) => {
    // Replace with actual API call
    const response = await fetch(`/api/jobs?query=${searchQuery}&type=${jobType}`);
    const data = await response.json();
    return data;
};

const JobSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [jobType, setJobType] = useState('All');
    const [jobListings, setJobListings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadJobs = async () => {
            setLoading(true);
            try {
                const jobs = await fetchJobListings(searchQuery, jobType);
                setJobListings(jobs);
            } catch (err) {
                setError('Failed to fetch job listings.');
            } finally {
                setLoading(false);
            }
        };
        loadJobs();
    }, [searchQuery, jobType]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleJobTypeChange = (event) => {
        setJobType(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Optionally perform additional actions on search submit
    };

    return (
        <>
            <Header />
            <div className="job-search-container">
                <div className="filters">
                    <h1>Job Search</h1>
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search for jobs..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button type="submit">Search</button>
                    </form>
                    <label>
                        Job Type:
                        <select value={jobType} onChange={handleJobTypeChange}>
                            <option value="All">All</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </label>
                </div>

                <div className="job-listings">
                    {loading && <p>Loading...</p>}
                    {error && <p className="error">{error}</p>}

                    <ul>
                        {jobListings.length ? (
                            jobListings.map(job => (
                                <li key={job.id} className="job-listing">
                                    <h2>{job.title}</h2>
                                    <p>{job.company}</p>
                                    <p>{job.location}</p>
                                    <a href={`/jobs/${job.id}`}>View Details</a>
                                </li>
                            ))
                        ) : (
                            !loading && <p>No job listings found.</p>
                        )}
                    </ul>
                </div>
            </div>
            <Footer /> 
        </>
    );
};

export default JobSearch;

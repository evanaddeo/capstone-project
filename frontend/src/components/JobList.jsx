import React, { useState } from 'react';
import job_data from '../jobs.json'; // Import the JSON data

function JobListings() {
    // State variable to hold the list of jobs, initialized with data from JSON file
    const [jobs, setJobs] = useState(job_data);

    return (
        <>
            <h1>Job Listings</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Posted by</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job => (
                        <tr key={job.id}>
                            <td>{job.title}</td>
                            <td>{job.description}</td>
                            <td>{job.managerName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default JobListings;

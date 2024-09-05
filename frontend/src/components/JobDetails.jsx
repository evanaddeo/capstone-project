import React, { useState} from 'react'
import Box from '@mui/material/Box';
import { TextField, Button, Stack } from '@mui/material';

import { getCookie } from "../utils/auth.js"

import "../styles/JobDetails.css"

export default function JobDetails(props) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        resume: null,
        cover_letter: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formDataToSend = 
        {
            'user_id': getCookie("user_id"),
            'job_id': props.job.id,
            'cover_letter': formData.cover_letter,
            'custom_resume': formData.custom_resume,
            'application_status': Pending
        }

        // POST
    }

    return (
        <div className="detail-container" style={{marginLeft: "25px"}}>
            <h2 style={{marginBottom: "-15px"}}>{props.job.listing_title}</h2>
            <h3>{props.job.department}</h3>

            <h4 className="section">Description:</h4>
            <p>{props.job.job_description}</p>

            <h4 className="section">Requirements:</h4>
            <p>{props.job.additional_information}</p>

            <div className="job-status">
                <h4 style={{marginRight: "10px"}}>Status:</h4>
                <p style={{color: (props.job.listing_status === "Open") ? "green" : "inherit"}}>
                    {props.job.listing_status}
                </p>
            </div>

            <form onSubmit={handleSubmit} style={{margin: "auto"}}>
                <Stack spacing={3}>
                    <TextField
                        name="name"
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        name="address"
                        label="Address"
                        variant="outlined"
                        fullWidth
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        name="phone"
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload Resume
                        <input
                            type="file"
                            name="resume"
                            hidden
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                        />
                    </Button>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload Cover Letter
                        <input
                            type="file"
                            name="cover_letter"
                            hidden
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                        />
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                    >
                        Submit
                    </Button>
                </Stack>
            </form>
        </div>
    )
}
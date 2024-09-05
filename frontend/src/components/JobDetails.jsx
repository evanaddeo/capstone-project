import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import { TextField, Button, Stack } from '@mui/material';

import { getCookie } from "../utils/auth.js"
import { postApplication } from "../crud.js"

import "../styles/JobDetails.css"

export default function JobDetails(props) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: getCookie("full_name"),
        email: getCookie("email"),
        address: getCookie("address"),
        phone: getCookie("phone"),
        date_applied: "2024-03-24T12:34:55.000+00:00",
        custom_resume: null,
        cover_letter: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleFileChange = (e) => {
        const { name, files } = e.target;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formDataToSend = 
        {
            'user_id': getCookie("user_id"),
            'job_id': props.job.id,
            'cover_letter': formData.cover_letter,
            'custom_resume': formData.custom_resume,
            'application_status': "Pending"
        }

        postApplication(formDataToSend)
        .then((res) => {
            console.log(res);
        })
        .then((data) => {
            console.log(data);
            window.location.reload();
        })
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

            <h3>Apply Here:</h3>

            <form onSubmit={handleSubmit} style={{margin: "auto"}}>
                <Stack spacing={3}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <TextField
                            name="name"
                            label="Full Name"
                            variant="outlined"
                            
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            name="email"
                            label="Email"
                            variant="outlined"
                            
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
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
                    </div>
                    
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Button
                            className="file-btn"
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
                            component="label"
                            className="file-btn"
                            style={{marginLeft: "10px"}}
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
                    </div>
                    
                    <button
                        type="submit"
                        className="submit-btn"
                        style={{width: "100%", height: "40px", marginBottom: "45px"}}
                    >
                        Submit
                    </button>
                </Stack>
            </form>
        </div>
    )
}
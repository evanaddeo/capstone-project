import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { verifySignupCredentials, getCookie, clearAllCookies } from '../utils/auth';
import {getLoggedInUser} from '../crud';
import '../styles/LoginSignup.css';

export default function SignupForm(props) {
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errField, setErrField] = useState("")

    
    const handleSignup = () => {
        const { errorField, errorMsg } = verifySignupCredentials(name, password, confirmPassword);
    
        if (!errorField && !errorMsg) {
            const user = {
                'username': name,
                'password': password,
                'type': "Candidate"
            };
    
            // First, create the user
            fetch('http://localhost:8080/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(userResponse => {
                
                return fetch('http://localhost:8080/candidates', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'user_id': userResponse.id,
                        'full_name': name,
                        'email': email,
                        'address': address,
                        'phone': phone,
                        'resume': null
                    })
                })
                .then(res => console.log(res))
                .then((candidateResponse) => {
                    
                    console.log(userResponse.id);
                    document.cookie = `user_id=${userResponse.id}; path=/; SameSite=Lax;`;
                    document.cookie = `full_name=${name}; path=/;`;
                    document.cookie = `email=${email}; path=/;`;
                    document.cookie = `address=${address}; path=/;`;
                    document.cookie = `phone=${phone}; path=/;`;
    
                    // Navigate to the dashboard
                    navigate("/CandidateDash");
                });
            })
            .catch(error => {
                console.error("Error:", error);
            });
        } else {
            setErrField(errorField);
            console.log("Would be a popup with the message: " + errorMsg);
        }
    };
    
    

    return (

        <div className="signup-form">
            <h2>Register</h2>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '45ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <div style={{display: "flex", flexDirection: "row",}}>
                        <TextField 
                            onChange={(e) => {setName(e.target.value)}} 
                            label="Username" 
                            variant="outlined"
                            error={errField === "username"}
                        />
                        <TextField 
                            onChange={(e) => {setEmail(e.target.value)}} 
                            label="Email" 
                            variant="outlined"
                            sx={{marginLeft: "5px"}}
                        />
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <TextField 
                            onChange={(e) => {setAddress(e.target.value)}} 
                            label="Address" 
                            variant="outlined"
                        />
                        <TextField 
                            onChange={(e) => {setPhone(e.target.value)}} 
                            label="Phone" 
                            variant="outlined"
                            sx={{marginLeft: "5px"}}
                        />
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <TextField 
                            onChange={(e) => {setPassword(e.target.value)}} 
                            label="Password" 
                            variant="outlined" 
                            type="password"
                            error={errField === "password"}
                        />
                        <TextField 
                            onChange={(e) => {setConfirmPassword(e.target.value)}}
                            label="Confirm Password" 
                            variant="outlined" 
                            type="password"
                            error={errField === "confirmPassword"}
                            sx={{marginLeft: "5px"}}
                        />
                    </div>
                    
                </Box>

                <button className="submit-btn" type="submit" onClick={handleSignup}>Signup</button>
            <p>
            Already have an account?{' '}
            <button onClick={() => props.setShowLogin(true)}>Login</button>
            </p>
        </div>
    );
}
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { verifySignupCredentials } from '../utils/auth';
import '../styles/LoginSignup.css';

export default function SignupForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errField, setErrField] = useState("")

    const handleSignup = () => {
        const {errorField, errorMsg} = verifySignupCredentials(username, password, confirmPassword);

        if (!errorField && !errorMsg) {
            console.log("Would be a successful signup...");
        } else {
            setErrField(errorField);
            console.log("Would be a popup with the message: " + errorMsg);
        }
    }

    return (

        <div className="signup-form">
            <h2>Register</h2>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField 
                        onChange={(e) => {setUsername(e.target.value)}} 
                        label="Username" 
                        variant="outlined"
                        error={errField === "username"}
                    />
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
                    />
                </Box>

                <button type="submit" onClick={handleSignup}>Signup</button>
            <p>
            Already have an account?{' '}
            <button onClick={() => props.setShowLogin(true)}>Login</button>
            </p>
        </div>
    );
}
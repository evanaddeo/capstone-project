import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { verifyLoginCredentials } from "../utils/auth";
import '../styles/LoginSignup.css';

export default function LoginForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errField, setErrField] = useState("")

    const handleLogin = () => {
        const {errorField, errorMsg} = verifyLoginCredentials(username, password);

        if (!errorField && !errorMsg) {
            console.log("Would be a successful login...");
        } else {
            setErrField(errorField);
            console.log(errorField)
            console.log("Would be a popup with the message: " + errorMsg);
        }
    }

    return (
        <div className="login-form">
          <h2>Login</h2>
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
            </Box>

            <button type="submit" onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{' '}
            <button onClick={() => props.setShowLogin(false)}>Register</button>
          </p>
        </div>
    );
}
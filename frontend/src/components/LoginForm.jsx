import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { verifyLoginCredentials } from "../utils/auth";
import '../styles/LoginSignup.css';
import { getCandidateByUserId, getManagerByUserId, getLoggedInUser } from '../crud';

export default function LoginForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errField, setErrField] = useState("")

    const navigate = useNavigate();

    const handleLogin = () => {
        const {errorField, errorMsg} = verifyLoginCredentials(username, password);

        if (!errorField && !errorMsg) {
            getLoggedInUser(username, password)
        .then(user => {
            if (user) {
                if (user.type === "Candidate") {
                    console.log("candidate")
                    return getCandidateByUserId(user.id);
                } else {

                    return getManagerByUserId(user.id);
                }
            } else {
                console.log("failed");
                return null; 
            }
        })
        .then(candidateOrManager => {
            if (candidateOrManager) {
                if (candidateOrManager[0].user_id) {
                    
                    document.cookie = `user_id=${candidateOrManager[0].user_id}; path=/;`;
                    document.cookie = `full_name=${candidateOrManager[0].full_name}; path=/;`;
                    document.cookie = `email=${candidateOrManager[0].email}; path=/;`;
                    document.cookie = `address=${candidateOrManager[0].address}; path=/;`;
                    document.cookie = `phone=${candidateOrManager[0].phone}; path=/;`;

                    navigate("/CandidateDash")
                } else {
                    document.cookie = `user_id=${candidateOrManager[0].user_id}; path=/;`;
                    document.cookie = `full_name=${candidateOrManager[0].full_name}; path=/;`;
                    document.cookie = `email=${candidateOrManager[0].email}; path=/;`;
                    document.cookie = `department=${candidateOrManager[0].department}; path=/;`;
                    document.cookie = `phone=${candidateOrManager[0].phone}; path=/;`;

                    navigate("/ManagerDash")
                }
            }
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });


            
        } else {
            setErrField(errorField);
            console.log("Would be a popup with the message: " + errorMsg);
        }
    }

    return (
        <div className="login-form">
          <h2>Login</h2>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '45ch' } }}
                noValidate
                autoComplete="off"
            >
                <div style={{display: "flex", flexDirection: "row",}}>
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
                        sx={{marginLeft: "5px"}}
                    />
                </div>
            </Box>

            <button className="submit-btn" type="submit" onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{' '}
            <button onClick={() => props.setShowLogin(false)}>Register</button>
          </p>
        </div>
    );
}
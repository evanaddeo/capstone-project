import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import '../styles/LoginSignup.css'; 

function LoginSignup() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login-signup-container">
      {showLogin ? (
        <LoginForm setShowLogin={setShowLogin}/>
      ) : (
        <SignupForm setShowLogin={setShowLogin}/>
      )}
    </div>
  );
}

export default LoginSignup;


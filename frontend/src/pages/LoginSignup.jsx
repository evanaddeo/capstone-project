import React, { useState } from 'react';
import '../styles/LoginSignup.css'; // Ensure this CSS file exists

function LoginSignup() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login-signup-container">
      {showLogin ? (
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{' '}
            <button onClick={() => setShowLogin(false)}>Register</button>
          </p>
        </div>
      ) : (
        <div className="signup-form">
          <h2>Register</h2>
          <form>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account?{' '}
            <button onClick={() => setShowLogin(true)}>Login</button>
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginSignup;


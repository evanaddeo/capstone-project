import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginSignup from './pages/LoginSignup';
import './App.css'; 

function App() {

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
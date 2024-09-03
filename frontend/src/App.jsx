import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginSignup from './pages/LoginSignup';
import AdminDash from './pages/AdminDash';
import ManagerDash from './pages/ManagerDash';
import CandidateDash from './pages/CandidateDash'
import JobSearch from './pages/JobSearch';
import UpdateApp from './components/UpdateApp';
import './styles/App.css'; 

function App() {

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<AdminDash />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginSignup from './pages/LoginSignup';
import AdminDash from './pages/AdminDash';
import ManagerDash from './pages/ManagerDash';
import CandidateDash from './pages/CandidateDash'
import JobSearch from './pages/JobSearch';
import JobList from './components/JobList';
import UpdateApp from './components/UpdateApp';
import './styles/App.css'; 
import CandidateList from './components/CandidateList';
import ApplicationList from './components/ApplicationList';

function App() {

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login-Signup" element={<LoginSignup />} />
          <Route path="/ManagerDash" element={<ManagerDash />} />
          <Route path="/CandidateDash" element={<CandidateDash />} />
          <Route path="/JobSearch" element={<JobSearch />} />
          <Route path="/JobList" element={<JobList />} />
          <Route path="/CandidateList" element={<CandidateList />} />
          <Route path="/ApplicationList" element={<ApplicationList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
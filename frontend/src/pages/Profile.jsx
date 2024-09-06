import React, { useState, useEffect } from 'react';
import { getCookie } from '../utils/auth'; // Utility to get the cookie
import { getCandidateByUserId, updateCandidate } from '../crud'; // Fetch function

const Profile = () => {
  const [candidate, setCandidate] = useState({
    full_name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [candidateId, setCandidateId] = useState(null);

  const fetchCandidateProfile = async () => {
    setLoading(true);
    try {
      const user_id = getCookie('user_id'); // Fetch user ID from cookie

      if (!user_id) {
        throw new Error('User ID not found in cookie.');
      }

      const fetchedCandidate = await getCandidateByUserId(user_id);
      if (fetchedCandidate && fetchedCandidate[0]) {
        setCandidate(fetchedCandidate[0]);
        setCandidateId(fetchedCandidate[0].id);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidateProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCandidate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const candidateForm = 
    {
        "address": candidate.address,
        "phone": candidate.phone,
        "email": candidate.email,
        "full_name": candidate.full_name,
        "resume": null
    }
    // Submit the updated candidate data here, such as calling an update API.
    console.log('Before updating Candidate:', candidate);
    console.log("cid: ", candidateId);
    updateCandidate(candidateForm, candidateId);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <>
        <div className="hdr-wrapper">
            <h3 className="hdr">Candidate Home</h3>
            <a href="/ApplicationList">My Applications</a>
            <a style={{marginLeft: "15px"}} href="/CandidateDash">Jobs</a>
            <a style={{textDecoration: "underline", marginLeft: "15px"}} href="/Profile">My Profile</a>
        </div>
        <div className="profile-container">
        <h1>Candidate Profile</h1>
        {candidate ? (
            <form className="profile-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label>Full Name:</label>
                <input
                className="form-input"
                type="text"
                name="full_name"
                value={candidate.full_name}
                onChange={handleInputChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                className="form-input"
                type="email"
                name="email"
                value={candidate.email}
                onChange={handleInputChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Address:</label>
                <input
                className="form-input"
                type="text"
                name="address"
                value={candidate.address}
                onChange={handleInputChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Phone:</label>
                <input
                className="form-input"
                type="tel"
                name="phone"
                value={candidate.phone}
                onChange={handleInputChange}
                required
                />
            </div>
            <button type="submit">Update Profile</button>
            </form>
        ) : (
            <p>No candidate profile found.</p>
        )}
        </div>
    </>
  );
};

export default Profile;
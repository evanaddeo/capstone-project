import React, { useState, useEffect } from 'react';
import { getUserById, updateUser } from '../crud.js'; // Assuming updateUser is defined in crud.js
import { getCookie } from '../utils/auth';
//import '../styles/Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = getCookie('user_id');
        if (userId) {
          const fetchedUser = await getUserById(userId);
          setUser(fetchedUser);
          setFormData({
            full_name: fetchedUser.full_name || '',
            email: fetchedUser.email || '',
            phone: fetchedUser.phone || '',
            address: fetchedUser.address || '',
          });
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      const userId = getCookie('user_id');
      const updatedUser = { ...user, ...formData };
      await updateUser(userId, updatedUser); // Assuming updateUser takes userId and new data
      setUser(updatedUser);
      setEditing(false);
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {user ? (
        <div className="profile-details">
          <div className="profile-field">
            <label>Full Name:</label>
            {editing ? (
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
              />
            ) : (
              <span>{user.full_name}</span>
            )}
          </div>
          <div className="profile-field">
            <label>Email:</label>
            {editing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            ) : (
              <span>{user.email}</span>
            )}
          </div>
          <div className="profile-field">
            <label>Phone:</label>
            {editing ? (
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            ) : (
              <span>{user.phone}</span>
            )}
          </div>
          <div className="profile-field">
            <label>Address:</label>
            {editing ? (
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            ) : (
              <span>{user.address}</span>
            )}
          </div>
          {editing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={() => setEditing(true)}>Edit</button>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

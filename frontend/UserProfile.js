// src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../features/userSlice';
import './UserProfile.css';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { userInfo, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    if (userInfo) {
      setFormData({
        name: userInfo.name,
        email: userInfo.email,
      });
      // Set profile picture if available in userInfo
      if (userInfo.profilePic) {
        setProfilePic(userInfo.profilePic);
      }
    }
  }, [userInfo]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = URL.createObjectURL(e.target.files[0]);
      setProfilePic(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You might want to include profilePic in the payload
    dispatch(updateUserProfile({ ...formData, profilePic }));
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {loading && <p>Updating...</p>}
      {error && <p>Error: {error}</p>}
      <div className="profile-pic-container">
        <img 
          src={profilePic || 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg'} 
          alt="Profile" 
          className="profile-pic" 
        />
        <input 
          type="file" 
          onChange={handleImageChange} 
          className="profile-pic-input" 
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;

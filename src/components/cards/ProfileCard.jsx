// src/components/cards/ProfileCard.jsx
import React from 'react';

const ProfileCard = ({ username, bio, profilePicture }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center' }}>
      <img src={profilePicture} alt={`${username}'s profile`} style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover', marginBottom: '8px' }} />
      <h3 style={{ margin: '0 0 8px' }}>{username}</h3>
      <p style={{ margin: '0' }}>{bio}</p>
    </div>
  );
};

export default ProfileCard;

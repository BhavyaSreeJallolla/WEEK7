// src/components/cards/JobCard.jsx
import React from 'react';

const JobCard = ({ jobTitle, companyName, location }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ margin: '0 0 8px' }}>{jobTitle}</h3>
      <p style={{ margin: '0 0 8px' }}>Company: {companyName}</p>
      <p style={{ margin: '0' }}>Location: {location}</p>
    </div>
  );
};

export default JobCard;

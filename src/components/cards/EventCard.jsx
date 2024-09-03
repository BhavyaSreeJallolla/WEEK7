// src/components/cards/EventCard.jsx
import React from 'react';

const EventCard = ({ eventName, date, location }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ margin: '0 0 8px' }}>{eventName}</h3>
      <p style={{ margin: '0 0 8px' }}>Date: {date}</p>
      <p style={{ margin: '0' }}>Location: {location}</p>
    </div>
  );
};

export default EventCard;

import React from 'react';

const Event = ({ event }) => {
  return (
    <div>
      <h3>{event.name}</h3>
      <p>Date: {event.date}</p>
    </div>
  );
};

export default Event;

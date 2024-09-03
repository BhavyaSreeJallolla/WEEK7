import React from 'react';
import Event from './Event';

const EventList = ({ events }) => {
  return (
    <div>
      <h1>Event List</h1>
      {events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;

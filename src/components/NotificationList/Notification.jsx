import React from 'react';

const Notification = ({ notification }) => {
  return (
    <div>
      <p>{notification.message}</p>
    </div>
  );
};

export default Notification;

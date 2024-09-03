import React from 'react';
import Notification from './Notification';

const NotificationList = ({ notifications }) => {
  return (
    <div>
      <h1>Notification List</h1>
      {notifications.map(notification => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;

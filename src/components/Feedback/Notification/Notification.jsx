import React from 'react';
import css from './Notification.module.css';

const Notification = ({ notification }) => {
  return (
    <div>
      <h2 className={css.notification}>{notification}</h2>
    </div>
  );
};

export default Notification;

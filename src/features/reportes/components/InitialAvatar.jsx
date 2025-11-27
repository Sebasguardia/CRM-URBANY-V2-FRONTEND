import React from 'react';
import styles from './InitialAvatar.module.css';

const getInitials = (name = '') => {
  const parts = name.trim().split(' ');
  const first = parts[0] || '';
  const last = parts.length > 1 ? parts[parts.length - 1] : '';
  return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
};

export const InitialAvatar = ({ name }) => {
  return <div className={styles.avatar}>{getInitials(name)}</div>;
};

export default InitialAvatar;


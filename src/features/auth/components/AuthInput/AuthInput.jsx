import React from 'react';
import styles from './AuthInput.module.css';

const AuthInput = ({ type = 'text', label, value, onChange, icon: Icon, className = '', ...props }) => {
  return (
    <div className={`${styles.inputBox} ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        {...props}
      />
      <label>{label}</label>
      {Icon && <Icon className={styles.icon} />}
    </div>
  );
};

export default AuthInput;


import React from 'react';
import styles from './Textarea.module.css';

const Textarea = ({ placeholder, value, onChange, className = '', ...props }) => {
  return (
    <textarea
      className={`${styles.textarea} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Textarea;


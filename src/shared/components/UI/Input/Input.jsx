import React from 'react';
import styles from './Input.module.css';

const Input = ({
    type = 'text',
    placeholder,
    value,
    onChange,
    icon,
    className = '',
    ...props
}) => {
    return (
        <div className={`${styles.inputWrapper} ${className}`}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <input
                type={type}
                className={`${styles.input} ${icon ? styles.hasIcon : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    );
};

export default Input;

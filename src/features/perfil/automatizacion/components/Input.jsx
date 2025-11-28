import React from 'react';
import styles from './Input.module.css';
import { Search } from 'lucide-react';

const Input = ({
    type = 'text',
    placeholder,
    value,
    defaultValue,
    onChange,
    icon,
    label,
    className = '',
    ...props
}) => {
    const iconElement = icon === 'search' ? <Search size={16} /> : icon;

    return (
        <div className={`${styles.inputWrapper} ${className}`}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputContainer}>
                {iconElement && <span className={styles.icon}>{iconElement}</span>}
                <input
                    type={type}
                    className={`${styles.input} ${iconElement ? styles.hasIcon : ''}`}
                    placeholder={placeholder}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    {...props}
                />
            </div>
        </div>
    );
};

export default Input;


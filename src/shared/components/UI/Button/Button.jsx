import React from 'react';
import styles from './Button.module.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    ...props
}) => {
    const variantClass = styles[variant] || styles.primary;
    const sizeClass = styles[size] || styles.md;

    return (
        <button
            className={`${styles.button} ${variantClass} ${sizeClass} ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

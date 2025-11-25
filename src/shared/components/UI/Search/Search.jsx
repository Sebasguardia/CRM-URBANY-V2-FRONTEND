import React from 'react';
import Input from '../Input/Input';
import styles from './Search.module.css';

const SearchIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const Search = ({ placeholder = 'Buscar...', ...props }) => {
    return (
        <div className={styles.searchContainer}>
            <Input
                icon={<SearchIcon />}
                placeholder={placeholder}
                className={styles.searchInput}
                {...props}
            />
        </div>
    );
};

export default Search;

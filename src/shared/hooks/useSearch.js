import { useState, useEffect, useMemo } from 'react';
import { useDebounce } from './useDebounce';

export const useSearch = (data, searchKeys = [], debounceMs = 300) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, debounceMs);

  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return data;

    const searchTerm = debouncedQuery.toLowerCase();

    return data.filter(item => {
      return searchKeys.some(key => {
        const value = getNestedValue(item, key);
        return value && value.toString().toLowerCase().includes(searchTerm);
      });
    });
  }, [data, debouncedQuery, searchKeys]);

  const clear = () => {
    setQuery('');
  };

  return {
    query,
    setQuery,
    debouncedQuery,
    results,
    clear
  };
};

// Helper para obtener valores anidados (ej: 'user.name')
const getNestedValue = (obj, path) => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};
import { useEffect, useMemo, useState } from 'react';

const getNestedValue = (obj, path) => {
  return path.split('.').reduce((current, key) => current && current[key], obj);
};

export const useLocalSearch = (data = [], searchKeys = [], query = '', debounceMs = 250) => {
  const [debounced, setDebounced] = useState(query);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query), debounceMs);
    return () => clearTimeout(t);
  }, [query, debounceMs]);

  const results = useMemo(() => {
    const q = (debounced || '').trim().toLowerCase();
    if (!q) return data;
    return data.filter(item => {
      return searchKeys.some(key => {
        const value = getNestedValue(item, key);
        return value && value.toString().toLowerCase().includes(q);
      });
    });
  }, [data, debounced, searchKeys]);

  return results;
};

export default useLocalSearch;


import { useEffect, useRef } from 'react';

export const useOutsideClick = (ref, callback) => {
  const callbackRef = useRef(callback);
  
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        callbackRef.current();
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 300);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
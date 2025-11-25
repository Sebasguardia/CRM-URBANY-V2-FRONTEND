import { useUIStore } from '../store/ui.slice';
import { useCallback } from 'react';

export const useToast = () => {
  const { addToast, removeToast } = useUIStore();

  const showToast = useCallback((message, type = 'info', duration = 5000) => {
    const id = Date.now() + Math.random();
    addToast({ id, message, type, duration });
    
    // Auto remove
    setTimeout(() => {
      removeToast(id);
    }, duration);

    return id;
  }, [addToast, removeToast]);

  const toastSuccess = useCallback((message, duration) => {
    return showToast(message, 'success', duration);
  }, [showToast]);

  const toastError = useCallback((message, duration) => {
    return showToast(message, 'error', duration);
  }, [showToast]);

  const toastWarning = useCallback((message, duration) => {
    return showToast(message, 'warning', duration);
  }, [showToast]);

  const toastInfo = useCallback((message, duration) => {
    return showToast(message, 'info', duration);
  }, [showToast]);

  const remove = useCallback((id) => {
    removeToast(id);
  }, [removeToast]);

  return {
    showToast,
    toastSuccess,
    toastError,
    toastWarning,
    toastInfo,
    removeToast: remove
  };
};
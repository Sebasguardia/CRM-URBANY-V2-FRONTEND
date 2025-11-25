import { useState, useCallback } from 'react';
import { useUIStore } from '../store/ui.slice';

export const useModal = (modalId) => {
  const { modals, openModal, closeModal } = useUIStore();

  const isOpen = modals[modalId] || false;

  const open = useCallback(() => {
    openModal(modalId);
  }, [openModal, modalId]);

  const close = useCallback(() => {
    closeModal(modalId);
  }, [closeModal, modalId]);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  return {
    isOpen,
    open,
    close,
    toggle
  };
};
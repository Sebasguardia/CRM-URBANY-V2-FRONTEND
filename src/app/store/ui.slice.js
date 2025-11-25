import { createSlice } from '@reduxjs/toolkit';

/**
 * Slice global para UI
 * Maneja modales, toasts, loaders y sidebar
 */
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    // Modales
    modals: {
      deal: { isOpen: false, data: null },
      property: { isOpen: false, data: null },
      contact: { isOpen: false, data: null },
    },
    // Toasts
    toasts: [],
    // Loader global
    isLoading: false,
    // Sidebar
    sidebar: {
      isCollapsed: false,
      activeItem: '/dashboard',
    },
  },
  reducers: {
    openModal: (state, action) => {
      const { modalType, data } = action.payload;
      state.modals[modalType] = { isOpen: true, data };
    },
    closeModal: (state, action) => {
      const { modalType } = action.payload;
      state.modals[modalType] = { isOpen: false, data: null };
    },
    addToast: (state, action) => {
      const toast = {
        id: Date.now(),
        message: action.payload.message,
        type: action.payload.type || 'info',
        duration: action.payload.duration || 5000,
      };
      state.toasts.push(toast);
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter(t => t.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebar.isCollapsed = !state.sidebar.isCollapsed;
    },
    setActiveSidebarItem: (state, action) => {
      state.sidebar.activeItem = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  addToast,
  removeToast,
  setLoading,
  toggleSidebar,
  setActiveSidebarItem,
} = uiSlice.actions;
export default uiSlice.reducer;
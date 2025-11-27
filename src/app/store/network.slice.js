import { createSlice } from '@reduxjs/toolkit';

const networkSlice = createSlice({
  name: 'network',
  initialState: {
    agents: [
      { id: '1', name: 'Juan Pérez' },
      { id: '2', name: 'María García' },
      { id: '3', name: 'Carlos López' }
    ],
    selectedAgent: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedAgent: (state, action) => {
      state.selectedAgent = action.payload;
    },
  },
});

export const { setSelectedAgent } = networkSlice.actions;
export default networkSlice.reducer;
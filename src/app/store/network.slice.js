import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { networkService } from '../../features/network/services/network.api';

/**
 * Slice global para Network
 * Maneja agentes y colaboradores
 */
export const fetchAgents = createAsyncThunk(
  'network/fetchAgents',
  async (_, { rejectWithValue }) => {
    try {
      const response = await networkService.getAgents();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const networkSlice = createSlice({
  name: 'network',
  initialState: {
    agents: [],
    selectedAgent: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedAgent: (state, action) => {
      state.selectedAgent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAgents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAgents.fulfilled, (state, action) => {
        state.loading = false;
        state.agents = action.payload;
      })
      .addCase(fetchAgents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedAgent } = networkSlice.actions;
export default networkSlice.reducer;
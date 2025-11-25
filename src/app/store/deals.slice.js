import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dealsService } from '../../features/deals/services/deals.api';

/**
 * Slice global para Deals
 * Maneja estado de pipeline y deals seleccionados
 */
export const fetchDeals = createAsyncThunk(
  'deals/fetchAll',
  async (params, { rejectWithValue }) => {
    try {
      const response = await dealsService.getAll(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const dealsSlice = createSlice({
  name: 'deals',
  initialState: {
    items: [],
    selectedDeal: null,
    filters: {
      stage: null,
      agent: null,
      dateRange: null,
    },
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedDeal: (state, action) => {
      state.selectedDeal = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    updateDealStage: (state, action) => {
      const { dealId, newStage } = action.payload;
      const deal = state.items.find(d => d.id === dealId);
      if (deal) deal.stage = newStage;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedDeal, setFilters, updateDealStage } = dealsSlice.actions;
export default dealsSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

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
});

export const { setSelectedDeal, setFilters, updateDealStage } = dealsSlice.actions;
export default dealsSlice.reducer;
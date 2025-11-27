import { createSlice } from '@reduxjs/toolkit';

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    items: [],
    selectedProperty: null,
    total: 0,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedProperty: (state, action) => {
      state.selectedProperty = action.payload;
    },
    updatePropertyStatus: (state, action) => {
      const { propertyId, status } = action.payload;
      const property = state.items.find(p => p.id === propertyId);
      if (property) property.status = status;
    },
  },
});

export const { setSelectedProperty, updatePropertyStatus } = propertiesSlice.actions;
export default propertiesSlice.reducer;
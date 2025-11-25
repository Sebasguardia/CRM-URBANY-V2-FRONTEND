import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { propertiesService } from '../../features/properties/services/properties.api';

/**
 * Slice global para Properties
 * Maneja inventario y propiedades destacadas
 */
export const fetchProperties = createAsyncThunk(
  'properties/fetchAll',
  async (params, { rejectWithValue }) => {
    try {
      const response = await propertiesService.getAll(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedProperty, updatePropertyStatus } = propertiesSlice.actions;
export default propertiesSlice.reducer;
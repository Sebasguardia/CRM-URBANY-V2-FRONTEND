import { createSlice } from '@reduxjs/toolkit';

const activitiesSlice = createSlice({
  name: 'activities',
  initialState: {
    items: [
      {
        id: 'activity-001',
        title: 'Llamada de seguimiento cliente premium',
        type: 'llamada',
        date: new Date('2025-11-28T10:30:00'),
        duration: 45,
        notes: 'Cliente interesado en ampliar su portafolio. Seguimiento necesario.',
        deal: { id: 'deal-015', title: 'Inversión Premium - Edificio Centro' },
        property: null,
        agent: { id: '1', name: 'Juan Pérez' },
        completed: false,
        createdAt: new Date('2025-11-25T14:00:00')
      },
      {
        id: 'activity-002',
        title: 'Reunión estratégica con equipo comercial',
        type: 'reunion',
        date: new Date('2025-11-29T14:00:00'),
        duration: 60,
        notes: 'Revisar estrategias de cierre para Q4. Analizar pipeline actual.',
        deal: null,
        property: null,
        agent: { id: '2', name: 'María García' },
        completed: false,
        createdAt: new Date('2025-11-26T09:00:00')
      },
      {
        id: 'activity-003',
        title: 'Visita técnica a propiedad en construcción',
        type: 'visita',
        date: new Date('2025-11-27T15:00:00'),
        duration: 90,
        notes: 'Verificar avances de construcción. Evaluar calidad de acabados.',
        deal: { id: 'deal-022', title: 'Proyecto Residencial Las Lomas' },
        property: { id: 'prop-078', title: 'Torre Residencial - Piso 12' },
        agent: { id: '3', name: 'Carlos López' },
        completed: false,
        createdAt: new Date('2025-11-24T11:30:00')
      },
      {
        id: 'activity-004',
        title: 'Envío de documentación legal',
        type: 'correo',
        date: new Date('2025-11-30T09:00:00'),
        duration: 30,
        notes: 'Enviar contratos y documentación necesaria para cierre de operación.',
        deal: { id: 'deal-015', title: 'Inversión Premium - Edificio Centro' },
        property: null,
        agent: { id: '1', name: 'Juan Pérez' },
        completed: false,
        createdAt: new Date('2025-11-28T16:00:00')
      },
      {
        id: 'activity-005',
        title: 'Tasación de propiedad residencial',
        type: 'tasacion',
        date: new Date('2025-12-01T11:00:00'),
        duration: 120,
        notes: 'Realizar tasación completa de la propiedad ubicada en zona norte.',
        deal: null,
        property: { id: 'prop-045', title: 'Casa Residencial Zona Norte' },
        agent: { id: '2', name: 'María García' },
        completed: false,
        createdAt: new Date('2025-11-29T10:00:00')
      },
      {
        id: 'activity-006',
        title: 'Firma de contrato de alquiler',
        type: 'firma',
        date: new Date('2025-12-02T15:00:00'),
        duration: 60,
        notes: 'Firma de contrato de alquiler con inquilino nuevo. Revisar garantías.',
        deal: { id: 'deal-033', title: 'Alquiler Departamento Centro' },
        property: { id: 'prop-089', title: 'Depto 2 Ambientes Centro' },
        agent: { id: '3', name: 'Carlos López' },
        completed: false,
        createdAt: new Date('2025-11-30T14:00:00')
      },
      {
        id: 'activity-007',
        title: 'Llamada de seguimiento post-visita',
        type: 'llamada',
        date: new Date('2025-12-03T10:00:00'),
        duration: 20,
        notes: 'Seguimiento con cliente después de visita. Resolver dudas pendientes.',
        deal: { id: 'deal-022', title: 'Proyecto Residencial Las Lomas' },
        property: null,
        agent: { id: '1', name: 'Juan Pérez' },
        completed: false,
        createdAt: new Date('2025-12-01T17:00:00')
      }
    ],
    filters: {
      agent: null,
      type: null,
      timeFilter: [],
      dateRange: null
    },
    pagination: {
      page: 1,
      limit: 5
    },
    selectedActivities: [],
    loading: false,
    error: null
  },
  reducers: {
    addActivity: (state, action) => {
      state.items.unshift(action.payload);
    },
    updateActivity: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
    deleteActivity: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.selectedActivities = state.selectedActivities.filter(id => id !== action.payload);
    },
    deleteMultipleActivities: (state, action) => {
      state.items = state.items.filter(item => !action.payload.includes(item.id));
      state.selectedActivities = [];
    },
    toggleComplete: (state, action) => {
      const activity = state.items.find(item => item.id === action.payload);
      if (activity) {
        activity.completed = !activity.completed;
      }
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.pagination.page = 1;
    },
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
    toggleSelectActivity: (state, action) => {
      const index = state.selectedActivities.indexOf(action.payload);
      if (index > -1) {
        state.selectedActivities.splice(index, 1);
      } else {
        state.selectedActivities.push(action.payload);
      }
    },
    selectAllActivities: (state, action) => {
      state.selectedActivities = action.payload;
    },
    clearSelection: (state) => {
      state.selectedActivities = [];
    }
  }
});

export const {
  addActivity,
  updateActivity,
  deleteActivity,
  deleteMultipleActivities,
  toggleComplete,
  setFilters,
  setPage,
  toggleSelectActivity,
  selectAllActivities,
  clearSelection
} = activitiesSlice.actions;

export default activitiesSlice.reducer;


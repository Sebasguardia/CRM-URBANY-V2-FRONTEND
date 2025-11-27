import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Calendar, X } from 'lucide-react';
import ActivityTypeFilter from '../components/ActivityTypeFilter/ActivityTypeFilter';
import TimeFilter from '../components/TimeFilter/TimeFilter';
import AddActivityButton from '../components/AddActivityButton/AddActivityButton';
import ActivitiesEmptyState from '../components/ActivitiesEmptyState/ActivitiesEmptyState';
import ActivityList from '../components/ActivityList/ActivityList';
import ActivitiesCalendar from '../components/ActivitiesCalendar/ActivitiesCalendar';
import ActivityModal from '../components/ActivityModal/ActivityModal';
import ViewActivityModal from '../components/ViewActivityModal/ViewActivityModal';
import Pagination from '../components/Pagination/Pagination';
import { setFilters } from '../store/activities.slice';
import { filterActivities } from '../utils/filterActivities';
import styles from './ActivitiesPage.module.css';

const ActivitiesPage = () => {
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities.items);
  const filters = useSelector(state => state.activities.filters);
  const pagination = useSelector(state => state.activities.pagination);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [viewingActivity, setViewingActivity] = useState(null);
  const [viewMode, setViewMode] = useState('list');

  const agents = [
    { id: '1', name: 'Juan Pérez' },
    { id: '2', name: 'María García' },
    { id: '3', name: 'Carlos López' }
  ];

  const filteredActivities = useMemo(() => {
    return filterActivities(activities, filters);
  }, [activities, filters]);

  const paginatedActivities = useMemo(() => {
    const start = (pagination.page - 1) * pagination.limit;
    const end = start + pagination.limit;
    return filteredActivities.slice(start, end);
  }, [filteredActivities, pagination]);

  const handleAddActivity = () => {
    setEditingActivity(null);
    setModalOpen(true);
  };

  const handleEditActivity = (activity) => {
    setEditingActivity(activity);
    setModalOpen(true);
  };

  const handleViewActivity = (activity) => {
    setViewingActivity(activity);
    setViewModalOpen(true);
  };

  const handleTypeChange = (typeId) => {
    dispatch(setFilters({ type: typeId === filters.type ? null : typeId }));
  };

  const handleAgentChange = (agentId) => {
    dispatch(setFilters({ agent: agentId === filters.agent ? null : agentId }));
  };

  const handleTimeFilterChange = (timeFilters) => {
    dispatch(setFilters({ timeFilter: timeFilters }));
  };

  const handleDateRangeChange = (startDate, endDate) => {
    if (startDate && endDate) {
      dispatch(setFilters({
        timeFilter: ['seleccionar_periodo'],
        dateRange: {
          startDate: startDate,
          endDate: endDate
        }
      }));
    } else {
      dispatch(setFilters({
        timeFilter: filters.timeFilter.filter(id => id !== 'seleccionar_periodo'),
        dateRange: null
      }));
    }
  };

  const handleClearFilters = () => {
    dispatch(setFilters({
      agent: null,
      type: null,
      timeFilter: [],
      dateRange: null
    }));
  };

  const hasActiveFilters = filters.agent || filters.type || (filters.timeFilter && filters.timeFilter.length > 0) || filters.dateRange;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.viewIcons}>
          <button 
            className={`${styles.iconButton} ${viewMode === 'list' ? styles.active : ''}`}
            onClick={() => setViewMode('list')}
          >
            <List size={24} />
          </button>
          <button 
            className={`${styles.iconButton} ${viewMode === 'calendar' ? styles.active : ''}`}
            onClick={() => setViewMode('calendar')}
          >
            <Calendar size={24} />
          </button>
        </div>
        <div className={styles.headerButtons}>
          {hasActiveFilters && (
            <button
              className={styles.clearFiltersButton}
              onClick={handleClearFilters}
              title="Limpiar filtros"
            >
              <X size={24} />
              Limpiar filtros
            </button>
          )}
          <AddActivityButton onClick={handleAddActivity} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.filtersSection}>
          <ActivityTypeFilter
            selectedType={filters.type}
            onTypeChange={handleTypeChange}
            selectedAgent={filters.agent}
            onAgentChange={handleAgentChange}
            agents={agents}
          />
        </div>

        <div className={styles.filtersSection}>
          <TimeFilter
            key={`timefilter-${filters.timeFilter.length}-${filters.dateRange ? '1' : '0'}`}
            selectedFilters={filters.timeFilter}
            onFilterChange={handleTimeFilterChange}
            dateRange={filters.dateRange}
            onDateRangeChange={handleDateRangeChange}
            onClearPeriod={() => {
              dispatch(setFilters({
                timeFilter: filters.timeFilter.filter(id => id !== 'seleccionar_periodo'),
                dateRange: null
              }));
            }}
          />
        </div>

        <div className={styles.mainContent}>
          {viewMode === 'calendar' ? (
            filteredActivities.length === 0 ? (
              <ActivitiesEmptyState onAddActivity={handleAddActivity} />
            ) : (
              <ActivitiesCalendar 
                activities={filteredActivities} 
                onActivityClick={handleViewActivity}
              />
            )
          ) : (
            filteredActivities.length === 0 ? (
              <ActivitiesEmptyState onAddActivity={handleAddActivity} />
            ) : (
              <>
                <ActivityList activities={paginatedActivities} onEdit={handleEditActivity} />
                <Pagination />
              </>
            )
          )}
        </div>
      </div>

      <ActivityModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingActivity(null);
        }}
        activity={editingActivity}
      />
      <ViewActivityModal
        isOpen={viewModalOpen}
        onClose={() => {
          setViewModalOpen(false);
          setViewingActivity(null);
        }}
        activity={viewingActivity}
      />
    </div>
  );
};

export default ActivitiesPage;


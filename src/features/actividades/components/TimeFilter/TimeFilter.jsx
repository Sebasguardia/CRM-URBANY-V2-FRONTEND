import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import FilterButton from '../FilterButton/FilterButton';
import PeriodRangePicker from '../PeriodRangePicker/PeriodRangePicker';
import { useOutsideClick } from '../../../../shared/hooks/useOutsideClick';
import styles from './TimeFilter.module.css';

const timeFilters = [
  { id: 'por_hacer', label: 'Por hacer' },
  { id: 'hoy', label: 'Hoy' },
  { id: 'vencido', label: 'Vencido' },
  { id: 'manana', label: 'Mañana' },
  { id: 'esta_semana', label: 'Esta semana' },
  { id: 'seleccionar_periodo', label: 'Seleccionar periodo' }
];

const TimeFilter = ({ selectedFilters = [], onFilterChange, dateRange, onDateRangeChange, onClearPeriod }) => {
  const [isPeriodPickerOpen, setIsPeriodPickerOpen] = useState(false);
  const periodContainerRef = useRef(null);

  useOutsideClick(periodContainerRef, () => {
    if (isPeriodPickerOpen) {
      setIsPeriodPickerOpen(false);
    }
  });

  useEffect(() => {
    setIsPeriodPickerOpen(false);
  }, []);

  useEffect(() => {
    if (!selectedFilters.includes('seleccionar_periodo')) {
      setIsPeriodPickerOpen(false);
    }
  }, [selectedFilters]);

  useEffect(() => {
    const handleScroll = () => {
      if (isPeriodPickerOpen) {
        setIsPeriodPickerOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, [isPeriodPickerOpen]);

  const handleFilterClick = (filterId, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    if (filterId === 'seleccionar_periodo') {
      setIsPeriodPickerOpen(!isPeriodPickerOpen);
      if (!isPeriodPickerOpen && !selectedFilters.includes(filterId)) {
        onFilterChange([filterId]);
      }
      return;
    }
    
    if (selectedFilters.includes(filterId)) {
      onFilterChange(selectedFilters.filter(id => id !== filterId));
    } else {
      onFilterChange([...selectedFilters.filter(id => id !== 'seleccionar_periodo'), filterId]);
      setIsPeriodPickerOpen(false);
      if (onDateRangeChange) {
        onDateRangeChange(null, null);
      }
    }
  };

  const handleDateRangeChange = (startDate, endDate) => {
    if (onDateRangeChange) {
      onDateRangeChange(startDate, endDate);
    }
  };

  const formatDateRange = () => {
    if (dateRange && dateRange.startDate && dateRange.endDate) {
      const start = dateRange.startDate.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' });
      const end = dateRange.endDate.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' });
      return `${start} - ${end}`;
    }
    return 'Seleccionar periodo';
  };

  return (
    <div className={styles.container}>
      <span className={styles.label}>Mostrar por:</span>
      <div className={styles.buttons}>
        {timeFilters.map((filter) => {
          if (filter.id === 'seleccionar_periodo') {
            return (
              <div key={filter.id} className={styles.periodContainer} ref={periodContainerRef}>
                <FilterButton
                  active={selectedFilters.includes(filter.id) || isPeriodPickerOpen}
                  onClick={(e) => handleFilterClick(filter.id, e)}
                  icon={<ChevronDown size={20} />}
                >
                  {dateRange && dateRange.startDate && dateRange.endDate
                    ? formatDateRange()
                    : filter.label}
                </FilterButton>
                {isPeriodPickerOpen && selectedFilters.includes('seleccionar_periodo') ? (
                  <PeriodRangePicker
                    key="period-picker-active"
                    startDate={dateRange?.startDate || null}
                    endDate={dateRange?.endDate || null}
                    onDateRangeChange={handleDateRangeChange}
                    onClose={() => {
                      setIsPeriodPickerOpen(false);
                    }}
                  />
                ) : null}
              </div>
            );
          }
          return (
            <FilterButton
              key={filter.id}
              active={selectedFilters.includes(filter.id)}
              onClick={() => handleFilterClick(filter.id)}
            >
              {filter.label}
            </FilterButton>
          );
        })}
      </div>
    </div>
  );
};

export default TimeFilter;


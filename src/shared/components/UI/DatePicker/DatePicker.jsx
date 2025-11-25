import React, { useState, useRef } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import styles from './DatePicker.module.css';

export const DatePicker = ({ 
  value, 
  onChange, 
  placeholder = 'Seleccionar fecha',
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const ref = useRef(null);
  
  useOutsideClick(ref, () => setIsOpen(false));

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    return days;
  };

  const isSameDay = (date1, date2) => {
    return date1 && date2 &&
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear();
  };

  const handleDateClick = (date) => {
    onChange(date);
    setIsOpen(false);
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const monthYear = currentMonth.toLocaleDateString('es-ES', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className={`${styles.datePickerContainer} ${className}`} ref={ref}>
      <button
        className={styles.datePickerInput}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className={styles.dateValue}>
          {value ? formatDate(value) : placeholder}
        </span>
        <Calendar size={18} className={styles.calendarIcon} />
      </button>

      {isOpen && (
        <div className={styles.calendarDropdown}>
          <div className={styles.calendarHeader}>
            <button onClick={handlePreviousMonth} type="button">
              <ChevronLeft size={16} />
            </button>
            <span className={styles.monthYear}>{monthYear}</span>
            <button onClick={handleNextMonth} type="button">
              <ChevronRight size={16} />
            </button>
          </div>

          <div className={styles.calendarGrid}>
            {['D', 'L', 'M', 'X', 'J', 'V', 'S'].map((day, index) => (
              <div key={index} className={styles.dayHeader}>
                {day}
              </div>
            ))}
            
            {getDaysInMonth(currentMonth).map((date, index) => (
              <button
                key={index}
                className={`${styles.dayCell} ${
                  date && isSameDay(date, value) ? styles.selected : ''
                }`}
                onClick={() => date && handleDateClick(date)}
                disabled={!date}
                type="button"
              >
                {date ? date.getDate() : ''}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const DateRangePicker = ({ start, end, onStartChange, onEndChange }) => {
  return (
    <div className={styles.dateRangeContainer}>
      <DatePicker value={start} onChange={onStartChange} placeholder="Desde" />
      <span className={styles.rangeSeparator}>→</span>
      <DatePicker value={end} onChange={onEndChange} placeholder="Hasta" />
    </div>
  );
};
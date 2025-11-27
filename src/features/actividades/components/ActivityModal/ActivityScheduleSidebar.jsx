import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ActivityScheduleSidebar.module.css';

const ActivityScheduleSidebar = ({ selectedDate, onDateChange, selectedTime, onTimeChange }) => {
  const hours = [
    '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.',
    '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.'
  ];

  const currentDate = selectedDate ? new Date(selectedDate) : new Date();
  
  const formatDateLabel = (date) => {
    const days = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
    const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    return `${dayName}, ${day} de ${month}`;
  };

  const handlePreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    onDateChange(newDate.toISOString().split('T')[0]);
  };

  const handleNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    onDateChange(newDate.toISOString().split('T')[0]);
  };

  const parseTime = (timeStr) => {
    if (!timeStr) return null;
    const match = timeStr.match(/(\d+)\s*(a\.m\.|p\.m\.)/);
    if (!match) return null;
    let hour = parseInt(match[1]);
    const period = match[2];
    if (period === 'p.m.' && hour !== 12) hour += 12;
    if (period === 'a.m.' && hour === 12) hour = 0;
    return hour;
  };

  const formatTime = (hour) => {
    if (hour === 0) return '12 a.m.';
    if (hour < 12) return `${hour} a.m.`;
    if (hour === 12) return '12 p.m.';
    return `${hour - 12} p.m.`;
  };

  const getTimeFromSelected = () => {
    if (!selectedTime) return null;
    const [hours, minutes] = selectedTime.split(':').map(Number);
    return formatTime(hours);
  };

  const handleHourClick = (hourStr) => {
    const hour = parseTime(hourStr);
    if (hour !== null) {
      const timeString = `${hour.toString().padStart(2, '0')}:00`;
      onTimeChange(timeString);
    }
  };

  const currentHourLabel = getTimeFromSelected();

  return (
    <div className={styles.sidebar}>
      <div className={styles.dateHeader}>
        <button
          type="button"
          className={styles.navButton}
          onClick={handlePreviousDay}
          aria-label="Día anterior"
        >
          <ChevronLeft size={16} />
        </button>
        <span className={styles.dateLabel}>{formatDateLabel(currentDate)}</span>
        <button
          type="button"
          className={styles.navButton}
          onClick={handleNextDay}
          aria-label="Día siguiente"
        >
          <ChevronRight size={16} />
        </button>
      </div>
      <div className={styles.hoursList}>
        {hours.map((hour) => {
          const isSelected = hour === currentHourLabel;
          return (
            <button
              key={hour}
              type="button"
              className={`${styles.hourItem} ${isSelected ? styles.selected : ''}`}
              onClick={() => handleHourClick(hour)}
            >
              {hour}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityScheduleSidebar;



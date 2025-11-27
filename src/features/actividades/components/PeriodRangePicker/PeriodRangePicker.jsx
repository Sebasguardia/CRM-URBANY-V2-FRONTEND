import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
import styles from './PeriodRangePicker.module.css';

const PeriodRangePicker = ({ startDate, endDate, onDateRangeChange, onClose }) => {
  const [localStartDate, setLocalStartDate] = useState(null);
  const [localEndDate, setLocalEndDate] = useState(null);
  const [selectingStart, setSelectingStart] = useState(true);
  const [leftMonth, setLeftMonth] = useState(new Date());
  const [rightMonth, setRightMonth] = useState(() => {
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    return nextMonth;
  });
  const containerRef = useRef(null);

  useEffect(() => {
    if (startDate) {
      try {
        const date = startDate instanceof Date ? new Date(startDate.getTime()) : new Date(startDate);
        if (!isNaN(date.getTime())) {
          setLocalStartDate(date);
          setLeftMonth(new Date(date.getFullYear(), date.getMonth(), 1));
        }
      } catch (e) {
        setLocalStartDate(null);
      }
    } else {
      setLocalStartDate(null);
    }
    if (endDate) {
      try {
        const date = endDate instanceof Date ? new Date(endDate.getTime()) : new Date(endDate);
        if (!isNaN(date.getTime())) {
          setLocalEndDate(date);
          const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
          setRightMonth(nextMonth);
        }
      } catch (e) {
        setLocalEndDate(null);
      }
    } else {
      setLocalEndDate(null);
    }
  }, [startDate, endDate]);

  const formatDateForInput = (date) => {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  };

  const formatDateForDisplay = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const handleDateClick = (date) => {
    if (selectingStart || !localStartDate) {
      setLocalStartDate(date);
      setLocalEndDate(null);
      setSelectingStart(false);
    } else {
      if (date < localStartDate) {
        setLocalStartDate(date);
        setLocalEndDate(null);
        setSelectingStart(false);
      } else {
        setLocalEndDate(date);
        setSelectingStart(true);
      }
    }
  };

  const handleApply = () => {
    if (localStartDate && localEndDate) {
      onDateRangeChange(localStartDate, localEndDate);
      onClose();
    }
  };

  const handleClear = () => {
    setLocalStartDate(null);
    setLocalEndDate(null);
    setSelectingStart(true);
    if (onDateRangeChange) {
      onDateRangeChange(null, null);
    }
    if (onClose) {
      onClose();
    }
  };

  const handleStartInputChange = (e) => {
    const dateValue = e.target.value;
    if (dateValue) {
      const date = new Date(dateValue);
      setLocalStartDate(date);
      setSelectingStart(false);
    }
  };

  const handleEndInputChange = (e) => {
    const dateValue = e.target.value;
    if (dateValue) {
      const date = new Date(dateValue);
      setLocalEndDate(date);
      setSelectingStart(true);
    }
  };

  const isDateInRange = (date) => {
    if (!localStartDate || !localEndDate) return false;
    return date >= localStartDate && date <= localEndDate;
  };

  const isDateSelected = (date) => {
    if (localStartDate && date.toDateString() === localStartDate.toDateString()) return true;
    if (localEndDate && date.toDateString() === localEndDate.toDateString()) return true;
    return false;
  };

  const renderCalendar = (month, side) => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    
    const firstDayOfMonth = new Date(year, monthIndex, 1);
    const lastDayOfMonth = new Date(year, monthIndex + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDayOfWeek = firstDayOfMonth.getDay();

    const days = [];
    const prevMonth = new Date(year, monthIndex - 1, 0);
    const daysInPrevMonth = prevMonth.getDate();

    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, monthIndex - 1, daysInPrevMonth - i);
      days.push({ date, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, monthIndex, i);
      days.push({ date, isCurrentMonth: true });
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, monthIndex + 1, i);
      days.push({ date, isCurrentMonth: false });
    }

    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];

    const handlePrevMonth = () => {
      const newMonth = new Date(month);
      newMonth.setMonth(newMonth.getMonth() - 1);
      if (side === 'left') {
        setLeftMonth(newMonth);
      } else {
        setRightMonth(newMonth);
      }
    };

    const handleNextMonth = () => {
      const newMonth = new Date(month);
      newMonth.setMonth(newMonth.getMonth() + 1);
      if (side === 'left') {
        setLeftMonth(newMonth);
      } else {
        setRightMonth(newMonth);
      }
    };

    return (
      <div className={styles.calendar}>
        <div className={styles.calendarHeader}>
          <button type="button" className={styles.navButton} onClick={handlePrevMonth}>
            <ChevronLeft size={18} />
          </button>
          <span className={styles.monthYear}>
            {monthNames[monthIndex]} {year}
          </span>
          <button type="button" className={styles.navButton} onClick={handleNextMonth}>
            <ChevronRight size={18} />
          </button>
        </div>
        <div className={styles.weekDays}>
          {weekDays.map((day, index) => (
            <div key={index} className={styles.weekDay}>{day}</div>
          ))}
        </div>
        <div className={styles.daysGrid}>
          {days.map((dayObj, index) => {
            const { date, isCurrentMonth } = dayObj;
            const inRange = isDateInRange(date);
            const selected = isDateSelected(date);
            const isToday = date.toDateString() === new Date().toDateString();

            return (
              <button
                key={index}
                type="button"
                className={`${styles.day} ${!isCurrentMonth ? styles.otherMonth : ''} ${inRange ? styles.inRange : ''} ${selected ? styles.selected : ''} ${isToday ? styles.today : ''}`}
                onClick={() => isCurrentMonth && handleDateClick(date)}
                disabled={!isCurrentMonth}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div 
      className={styles.container} 
      ref={containerRef}
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className={styles.inputsContainer}>
        <div className={styles.inputWrapper}>
          <label className={styles.inputLabel}>Desde - hasta</label>
          <div className={styles.dateInputs}>
            <div className={styles.dateInputContainer}>
              <input
                type="date"
                className={styles.dateInput}
                value={formatDateForInput(localStartDate)}
                onChange={handleStartInputChange}
                placeholder="Fecha inicial"
              />
              <CalendarIcon size={18} className={styles.calendarIcon} />
            </div>
            <ArrowRight size={18} className={styles.arrowIcon} />
            <div className={styles.dateInputContainer}>
              <input
                type="date"
                className={styles.dateInput}
                value={formatDateForInput(localEndDate)}
                onChange={handleEndInputChange}
                placeholder="Fecha final"
              />
              <CalendarIcon size={18} className={styles.calendarIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.calendarsContainer}>
        {renderCalendar(leftMonth, 'left')}
        {renderCalendar(rightMonth, 'right')}
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.clearButton} onClick={handleClear}>
          Limpiar
        </button>
        <button
          type="button"
          className={styles.applyButton}
          onClick={handleApply}
          disabled={!localStartDate || !localEndDate}
        >
          Aplicar
        </button>
      </div>
    </div>
  );
};

export default PeriodRangePicker;


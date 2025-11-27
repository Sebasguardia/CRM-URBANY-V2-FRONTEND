import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Users, FileText, FileCheck, MoreHorizontal } from 'lucide-react';
import styles from './ActivitiesCalendar.module.css';

const typeIcons = {
  llamada: Phone,
  correo: Mail,
  visita: MapPin,
  reunion: Users,
  tasacion: FileText,
  firma: FileCheck,
  otro: MoreHorizontal
};

const ActivitiesCalendar = ({ activities, onActivityClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  const activitiesByDate = useMemo(() => {
    const grouped = {};
    activities.forEach(activity => {
      const date = new Date(activity.date);
      const dateKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(activity);
    });
    return grouped;
  }, [activities]);

  const getActivitiesForDate = (date) => {
    const dateKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    return activitiesByDate[dateKey] || [];
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const days = [];
  const prevMonth = new Date(year, month - 1, 0);
  const daysInPrevMonth = prevMonth.getDate();

  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(year, month - 1, daysInPrevMonth - i);
    days.push({ date, isCurrentMonth: false });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    days.push({ date, isCurrentMonth: true });
  }

  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(year, month + 1, i);
    days.push({ date, isCurrentMonth: false });
  }

  const formatTime = (date) => {
    const d = new Date(date);
    return d.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <button type="button" className={styles.navButton} onClick={handlePrevMonth}>
            <ChevronLeft size={20} />
          </button>
          <h2 className={styles.monthYear}>
            {monthNames[month]} {year}
          </h2>
          <button type="button" className={styles.navButton} onClick={handleNextMonth}>
            <ChevronRight size={20} />
          </button>
        </div>
        <button type="button" className={styles.todayButton} onClick={handleToday}>
          Hoy
        </button>
      </div>

      <div className={styles.weekDaysHeader}>
        {weekDays.map((day, index) => (
          <div key={index} className={styles.weekDay}>
            {day.substring(0, 3)}
          </div>
        ))}
      </div>

      <div className={styles.daysGrid}>
        {days.map((dayObj, index) => {
          const { date, isCurrentMonth } = dayObj;
          const dayActivities = isCurrentMonth ? getActivitiesForDate(date) : [];
          const isToday = date.toDateString() === new Date().toDateString();

          return (
            <div
              key={index}
              className={`${styles.dayCell} ${!isCurrentMonth ? styles.otherMonth : ''} ${isToday ? styles.today : ''}`}
            >
              <div className={styles.dayNumber}>{date.getDate()}</div>
              <div className={styles.activities}>
                {dayActivities.slice(0, 4).map((activity) => {
                  const Icon = typeIcons[activity.type] || MoreHorizontal;
                  return (
                    <div
                      key={activity.id}
                      className={`${styles.activityItem} ${activity.completed ? styles.completed : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onActivityClick) {
                          onActivityClick(activity);
                        }
                      }}
                      title={`${formatTime(activity.date)} - ${activity.title}`}
                    >
                      <Icon size={14} className={styles.activityIcon} />
                      <div className={styles.activityContent}>
                        <span className={styles.activityTime}>{formatTime(activity.date)}</span>
                        <span className={styles.activityTitle}>{activity.title}</span>
                      </div>
                    </div>
                  );
                })}
                {dayActivities.length > 4 && (
                  <div className={styles.moreActivities}>
                    +{dayActivities.length - 4} más
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivitiesCalendar;


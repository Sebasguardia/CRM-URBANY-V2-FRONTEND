export const filterActivities = (activities, filters) => {
  let filtered = [...activities];

  if (filters.agent) {
    filtered = filtered.filter(activity => activity.agent?.id === filters.agent);
  }

  if (filters.type) {
    filtered = filtered.filter(activity => activity.type === filters.type);
  }

  if (filters.dateRange && filters.dateRange.startDate && filters.dateRange.endDate) {
    const startDate = new Date(filters.dateRange.startDate);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(filters.dateRange.endDate);
    endDate.setHours(23, 59, 59, 999);

    filtered = filtered.filter(activity => {
      const activityDate = new Date(activity.date);
      return activityDate >= startDate && activityDate <= endDate;
    });
  } else if (filters.timeFilter && filters.timeFilter.length > 0 && !filters.timeFilter.includes('seleccionar_periodo')) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const weekStart = new Date(today);
    weekStart.setDate(weekStart.getDate() - today.getDay());
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);

    filtered = filtered.filter(activity => {
      const activityDate = new Date(activity.date);
      const activityDateOnly = new Date(activityDate.getFullYear(), activityDate.getMonth(), activityDate.getDate());

      const conditions = [];

      if (filters.timeFilter.includes('por_hacer')) {
        conditions.push(!activity.completed);
      }

      if (filters.timeFilter.includes('hoy')) {
        conditions.push(activityDateOnly.getTime() === today.getTime() && !activity.completed);
      }

      if (filters.timeFilter.includes('vencido')) {
        conditions.push(activityDateOnly.getTime() < today.getTime() && !activity.completed);
      }

      if (filters.timeFilter.includes('manana')) {
        conditions.push(activityDateOnly.getTime() === tomorrow.getTime() && !activity.completed);
      }

      if (filters.timeFilter.includes('esta_semana')) {
        conditions.push(activityDateOnly >= weekStart && activityDateOnly <= weekEnd && !activity.completed);
      }

      return conditions.length > 0 ? conditions.some(condition => condition) : true;
    });
  }

  return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
};


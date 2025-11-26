import { useEffect } from "react";
import dashboardStore from "../store/dashboardStore";
import { getDashboardData } from "../services/dashboardService";

export default function useDashboardData() {
  const sales = dashboardStore((state) => state.sales);
  const setSales = dashboardStore((state) => state.setSales);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getDashboardData();
        setSales(data.sales);
      } catch (error) {
        console.error("Error cargando datos del dashboard:", error);
      }
    }

    loadData();
  }, []);

  return {
    sales,
  };
}

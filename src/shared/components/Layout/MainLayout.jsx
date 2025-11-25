import Sidebar from "./Sidebar";
import DashboardHeader from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useMemo } from "react";
import styles from './MainLayout.module.css';

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Mapeo de rutas a títulos
  const pageTitle = useMemo(() => {
    const path = location.pathname;
    const titleMap = {
      '/dashboard': 'Dashboard',
      '/actividades': 'Actividades',
      '/tasaciones': 'Tasaciones',
      '/propiedades': 'Propiedades',
      '/negocios': 'Negocios',
      '/mensajes': 'Mensajes',
      '/redes': 'Redes',
      '/mapas': 'Mapas',
      '/emprendimientos': 'Emprendimientos',
      '/contactos': 'Contactos',
      '/reportes': 'Reportes',
      '/comentarios': 'Enviar comentarios',
      '/configuracion': 'Configuración',
    };
    return titleMap[path] || 'Dashboard';
  }, [location.pathname]);

  return (
    <div className={styles.layout}>
      {/* SIDEBAR - Desktop */}
      <div className={styles.sidebarDesktop}>
        <Sidebar />
      </div>

      {/* SIDEBAR - Mobile */}
      {sidebarOpen && (
        <div className={styles.sidebarMobileOverlay}>
          <div
            className={styles.sidebarMobileBackdrop}
            onClick={() => setSidebarOpen(false)}
          />
          <div className={styles.sidebarMobile}>
            <Sidebar />
          </div>
        </div>
      )}

      {/* CONTENIDO PRINCIPAL */}
      <div className={styles.mainContent}>

        {/* HEADER FIJADO */}
        <div className={styles.headerFixed}>
          <DashboardHeader title={pageTitle} />
        </div>

        {/* CONTENIDO INTERNO CON MARGEN SUPERIOR */}
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
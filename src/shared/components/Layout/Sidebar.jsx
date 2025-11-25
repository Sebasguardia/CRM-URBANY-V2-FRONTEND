import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  CheckSquare,
  DollarSign,
  Building2,
  Briefcase,
  Mail,
  Send,
  MapPin,
  Building,
  Users,
  AlertTriangle,
  MessageSquare,
  Settings,
} from 'lucide-react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const menu = [
    { icon: <LayoutGrid className={styles.icon} />, label: "Dashboard", path: "/dashboard" },
    { icon: <CheckSquare className={styles.icon} />, label: "Actividades", path: "/actividades" },
    { icon: <DollarSign className={styles.icon} />, label: "Tasaciones", path: "/tasaciones" },
    { icon: <Building2 className={styles.icon} />, label: "Propiedades", path: "/propiedades" },
    { icon: <Briefcase className={styles.icon} />, label: "Negocios", path: "/negocios" },
    { icon: <Mail className={styles.icon} />, label: "Mensajes", path: "/mensajes" },
    { icon: <Send className={styles.icon} />, label: "Redes", path: "/redes" },
    { icon: <MapPin className={styles.icon} />, label: "Mapas", path: "/mapas" },
    { icon: <Building className={styles.icon} />, label: "Emprendimientos", path: "/emprendimientos" },
    { icon: <Users className={styles.icon} />, label: "Contactos", path: "/contactos" },
    { icon: <AlertTriangle className={styles.icon} />, label: "Reportes", path: "/reportes" },
    { icon: <MessageSquare className={styles.icon} />, label: "Enviar comentarios", path: "/comentarios" },
  ];

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <img
          src="https://i.ibb.co/84bzpL1C/imagen-2025-11-24-235947945.png"
          alt="CRM Urbany Logo"
          className={styles.logoImage}
        />
      </div>

      {/* Menú */}
      <div className={styles.menuContainer}>
        <div className={styles.menuTitle}>Menu</div>

        <nav className={styles.menu}>
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.menuItem} ${isActive ? styles.menuItemActive : ''}`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <NavLink
          to="/configuracion"
          className={({ isActive }) =>
            `${styles.menuItem} ${isActive ? styles.menuItemActive : ''}`
          }
        >
          <Settings className={styles.icon} />
          <span>Configuración</span>
        </NavLink>
      </div>
    </aside>
  );
}
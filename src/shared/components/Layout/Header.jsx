import { Search, Bell, ChevronDown, User, Settings, Wrench, Users, Zap, Newspaper, HelpCircle, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../app/providers/AuthProvider';
import styles from './Header.module.css';

export default function DashboardHeader({ title = "Negocios" }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      {/* Título de la página */}
      <h1 className={styles.title}>{title}</h1>

      {/* Barra de búsqueda */}
      <div className={styles.searchContainer}>
        <Search className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Buscar..."
          className={styles.searchInput}
        />
      </div>

      {/* Sección derecha */}
      <div className={styles.rightSection}>
        <button className={styles.premiumButton}>
          Ser premium
        </button>

        <button className={styles.notification}>
          <Bell className={styles.notificationIcon} />
        </button>

        {/* User Profile con Dropdown */}
        <div className={styles.userProfileContainer} ref={dropdownRef}>
          <div
            className={styles.userProfile}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src="https://i.pravatar.cc/150?img=47"
              alt="user"
              className={styles.userImage}
            />

            <div className={styles.userInfo}>
              <span className={styles.userName}>{user?.name || 'Usuario'}</span>
              <span className={styles.userRole}>{user?.role || 'Administrador'}</span>
            </div>

            <ChevronDown className={`${styles.chevronIcon} ${dropdownOpen ? styles.chevronOpen : ''}`} />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownHeader}>
                <User className={styles.dropdownHeaderIcon} />
                <span>Mi Perfil</span>
              </div>

              <div className={styles.dropdownDivider} />

              <a href="/perfil-inmobiliaria" className={styles.dropdownItem}>
                <Newspaper className={styles.dropdownIcon} />
                <span>Perfil de la Inmobiliaria</span>
              </a>

              <a href="/integraciones" className={styles.dropdownItem}>
                <Settings className={styles.dropdownIcon} />
                <span>Integraciones</span>
              </a>

              <a href="/gestion-usuarios" className={styles.dropdownItem}>
                <Users className={styles.dropdownIcon} />
                <span>Gestión de Usuarios</span>
              </a>

              <a href="/automatizacion" className={styles.dropdownItem}>
                <Zap className={styles.dropdownIcon} />
                <span>Automatización</span>
              </a>

              <a href="/optimizaciones" className={styles.dropdownItem}>
                <Wrench className={styles.dropdownIcon} />
                <span>Optimizaciones</span>
              </a>

              <a href="/sitio-web" className={styles.dropdownItem}>
                <Newspaper className={styles.dropdownIcon} />
                <span>Sitio Web (posterioridad)</span>
              </a>

              <a href="/blog" className={styles.dropdownItem}>
                <Newspaper className={styles.dropdownIcon} />
                <span>Blog</span>
              </a>

              <a href="/ayuda" className={styles.dropdownItem}>
                <HelpCircle className={styles.dropdownIcon} />
                <span>Ayuda</span>
              </a>

              <div className={styles.dropdownDivider} />

              <button className={styles.dropdownItem} onClick={handleLogout}>
                <LogOut className={styles.dropdownIcon} />
                <span>Cerrar sesión</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
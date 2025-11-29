import { useState, useRef, useEffect } from 'react';
import {ChevronDown, User, Settings, Wrench, Users, Zap, Newspaper, HelpCircle, LogOut } from 'lucide-react';

import styles from './DropDown.module.css';

function Dropdown({ label = "Tipo de operación" }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
  return (
        <div className={styles.userProfileContainer} ref={dropdownRef}>
        <div
            className={styles.userProfile}
            onClick={() => setDropdownOpen(!dropdownOpen)}
        >

            <div className={styles.userInfo}>
            <span className={styles.userName}>{label}</span>
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

            <button className={styles.dropdownItem}>
                <LogOut className={styles.dropdownIcon} />
                <span>Cerrar sesión</span>
            </button>
            </div>
        )}
        </div>
  );
}

export default Dropdown;

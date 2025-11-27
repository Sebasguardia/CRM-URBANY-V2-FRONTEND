import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Ventures.module.css';
import Search from '../../../shared/components/UI/Search/Search';
import Button from '../../../shared/components/UI/Button/Button';
import { Building } from 'lucide-react';

const Ventures = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simular carga de datos
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
      // Activar animación de entrada después de que termine la carga
      setTimeout(() => setIsVisible(true), 50);
    }, 800);

    return () => clearTimeout(loadTimer);
  }, []);

  const handleAdd = () => {
    navigate('/emprendimientos/nuevo');
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    console.log('Buscando:', query);
  };

  if (isLoading) {
    return (
      <section className={styles.container}>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Cargando emprendimientos...</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`${styles.container} ${isVisible ? styles.fadeIn : ''}`}>
      <h1 className={styles.title}>Emprendimientos</h1>

      <Search
        placeholder="Título del emprendimiento"
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.search}
      />

      <div className={styles.emptyState}>
        <div className={styles.iconWrapper}>
          <Building size={80} strokeWidth={1.5} className={styles.icon} />
        </div>
        <p className={styles.message}>
          No hemos encontrado ningún emprendimiento
        </p>
        <p className={styles.submessage}>
          Todavía no has cargado uno, ¿quieres añadirlo?
        </p>

        <Button
          size="lg"
          onClick={handleAdd}
          className={styles.addButton}
        >
          Añadir nuevo emprendimiento
        </Button>
      </div>
    </section>
  );
};

export default Ventures;

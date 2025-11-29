import {Search} from 'lucide-react';
import styles from './BoxSearch.module.css';

function BoxSearch() {
  return (
    <div className={styles.searchContainer}>
        <Search className={styles.searchIcon} />
        <input
        type="text"
        placeholder="Buscar..."
        className={styles.searchInput}
        />
    </div>
  );
}

export default BoxSearch;
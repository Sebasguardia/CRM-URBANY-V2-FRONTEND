// src/components/Card.jsx
import styles from './Card.module.css';

const Card = ({ children }) => {
  return (
    <div className={styles.cardContainer}>
      {children}
    </div>
  );
};

export default Card;


import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import styles from './Tooltip.module.css';

export const Tooltip = ({ 
  children, 
  content, 
  position = 'top',
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: styles.tooltipTop,
    bottom: styles.tooltipBottom,
    left: styles.tooltipLeft,
    right: styles.tooltipRight
  };

  return (
    <div className={`${styles.tooltipWrapper} ${className}`}>
      <div
        className={styles.tooltipTrigger}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children || <HelpCircle size={16} className={styles.tooltipIcon} />}
      </div>
      {isVisible && (
        <div className={`${styles.tooltip} ${positionClasses[position]}`}>
          <div className={styles.tooltipContent}>{content}</div>
        </div>
      )}
    </div>
  );
};
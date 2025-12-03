import React, { useRef, useEffect, useState } from 'react';
import Toggle from '../../../../shared/components/UI/Toggle/Toggle';
import styles from './CollapsibleModule.module.css';

const CollapsibleModule = ({
  id,
  title,
  icon,
  openId,
  setOpenId,
  children,
  hideHeader = false,
}) => {
  const isOpen = openId === id;
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, children]);

  const onToggle = () => {
    setOpenId(isOpen ? null : id);
  };

  return (
    <div className={styles.moduleContainer}>
      {hideHeader ? null : (
        <div className={styles.moduleHeader} onClick={onToggle} role="button" tabIndex={0}>
          <div className={styles.iconBox}>{icon}</div>
          <span className={styles.moduleTitle}>{title}</span>
          <Toggle checked={isOpen} onChange={onToggle} className={styles.toggle} />
        </div>
      )}

      <div
        className={`${styles.moduleContent} ${isOpen ? styles.open : ''}`}
        style={{ maxHeight: `${height}px` }}
      >
        <div ref={contentRef} className={styles.contentInner}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleModule;


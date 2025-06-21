import React from 'react';

import styles from '../modules/components/switcher.module.scss';

type Props = {
  isActive?: boolean;
  onClick?: () => void;
};

export const Switcher: React.FC<Props> = ({onClick, isActive}) => {
  return (
    <div
      className={
        styles.switcher +
        ' ' +
        (isActive ? styles.switcherActive : styles.switcherInactive)
      }
      onClick={onClick}
    >
      <div className={styles.switcherCircle} />
    </div>
  );
};

import React from 'react';

import {components} from '../components';
import styles from '../modules/profile-menu-item.module.scss';

type Props = {
  title: string;
  onClick?: () => void;
  checked?: boolean;
  onToggle?: (newValue: boolean) => void;
  leftSideIcon: React.ReactNode;
  rightSideIcon?: React.ReactNode;
};

export const ProfileMenuItem: React.FC<Props> = ({
  onClick,
  title,
  leftSideIcon,
  rightSideIcon,
  checked,
  onToggle,
}) => {
  const handleClick = () => {
    if (onToggle && typeof checked === 'boolean') {
      onToggle(!checked);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={styles.profileMenuItemButton}
      onClick={handleClick}
      type='button'
    >
      {leftSideIcon}
      <h5
        className={
          styles.profileMenuItemTitle +
          (title === 'Log Out' ? ' ' + styles.logout : '')
        }
      >
        {title}
      </h5>
      {title !== 'Log Out' && rightSideIcon}
      {onToggle && typeof checked === 'boolean' && (
        <components.Switcher
          onClick={() => {
            if (onToggle) {
              onToggle(!checked);
            }
          }}
          isActive={checked}
        />
      )}
    </button>
  );
};

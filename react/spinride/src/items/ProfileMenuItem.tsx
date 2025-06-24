import React from 'react';

type Props = {
  title: string;
  onClick?: () => void;
  leftSideIcon: React.ReactNode;
  rightSideIcon?: React.ReactNode;
  titleStyle?: React.CSSProperties;
};

export const ProfileMenuItem: React.FC<Props> = ({
  onClick,
  title,
  titleStyle,
  leftSideIcon,
  rightSideIcon,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        borderTop: '1px solid #E2E2E2',
        paddingTop: 10,
      }}
    >
      {leftSideIcon}
      <h5 style={{marginRight: 'auto', ...titleStyle}}>{title}</h5>
      {rightSideIcon}
    </button>
  );
};

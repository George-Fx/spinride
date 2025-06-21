import React from 'react';

import {svg} from '../assets/svg';

type Props = {
  title?: string;
  viewAllOnClick?: () => void;
  containerStyle?: React.CSSProperties;
};

export const BlockHeading: React.FC<Props> = ({
  title,
  viewAllOnClick,
  containerStyle,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        ...containerStyle,
      }}
    >
      <h3>{title}</h3>
      {viewAllOnClick && (
        <button onClick={viewAllOnClick}>
          <svg.ViewAllSvg />
        </button>
      )}
    </div>
  );
};

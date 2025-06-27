import React from 'react';

import {constants} from '../constants';

export const BackgroundImage: React.FC = () => {
  return (
    <img
      src={constants.images.bg01}
      alt="bg"
      style={{
        position: 'fixed',
        width: '100%',
        height: 'auto',
        zIndex: 1,
        maxWidth: 'var(--screen-width)',
        margin: '0 auto',
      }}
    />
  );
};

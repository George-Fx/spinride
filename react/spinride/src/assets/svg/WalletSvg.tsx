import * as React from 'react';

export const WalletSvg: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={14}
      height={14}
      fill='none'
    >
      <path
        stroke='var(--lavender-gray)'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 10.5v2a1 1 0 0 1-1 1H1.5a1 1 0 0 1-1-1V5a3 3 0 0 1 3-3H10v2.5'
      />
      <path
        stroke='var(--lavender-gray)'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M13 7.5H9.5A.5.5 0 0 0 9 8v2a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5ZM12 7.5v-2a1 1 0 0 0-1-1H3.5'
      />
    </svg>
  );
};

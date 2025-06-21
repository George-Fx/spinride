import * as React from 'react';

export const NetworkSvg: React.FC = () => {
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
        d='M7 10.5v3M2 13.5h10M7 10.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM2 5.5h10'
      />
      <path
        stroke='var(--lavender-gray)'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M7 10.5c3-3.42 3-6.76 0-10-2.94 3.12-3 6.44 0 10Z'
      />
    </svg>
  );
};

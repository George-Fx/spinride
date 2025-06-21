import React from 'react';

export const LogOutSvg: React.FC = () => {
  return (
    <svg
      width={14}
      height={14}
      fill='none'
    >
      <g>
        <path
          stroke='var(--lavender-gray)'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9.5 10.5v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2M6.5 7h7m0 0-2-2m2 2-2 2'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <rect
            width={14}
            height={14}
            fill='var(--lavender-gray)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

import * as React from 'react';

export const CopySvg: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={14}
      height={14}
      fill='none'
    >
      <g
        stroke='var(--lavender-gray)'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M4 13.5h8.5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1Z' />
        <path d='M.5 10.5v-9a1 1 0 0 1 1-1h9' />
      </g>
      <defs>
        <clipPath id='a'>
          <path
            fill='var(--lavender-gray)'
            d='M0 0h14v14H0z'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

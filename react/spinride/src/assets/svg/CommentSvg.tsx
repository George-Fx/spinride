import * as React from 'react';

export const CommentSvg: React.FC = () => {
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
        <path d='m4.5 12.5-4 1 1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8ZM4.5 5h6M4.5 8h4' />
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

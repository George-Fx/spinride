import * as React from 'react';

export const LockSvg: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={16}
      height={16}
      fill='none'
    >
      <path
        stroke='#FF5887'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M12.667 7.333H3.333C2.597 7.333 2 7.93 2 8.667v4.666c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V8.667c0-.737-.597-1.334-1.333-1.334ZM4.667 7.333V4.667a3.333 3.333 0 1 1 6.666 0v2.666'
      />
    </svg>
  );
};

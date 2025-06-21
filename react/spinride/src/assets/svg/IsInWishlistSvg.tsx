import * as React from 'react';

export const IsInWishlistSvg: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={33} height={33} fill="none">
      <rect width={32} height={32} x={0.5} y={0.5} fill="#fff" rx={16} />
      <rect width={32} height={32} x={0.5} y={0.5} stroke="#EEE" rx={16} />
      <path
        fill="#FF7557"
        stroke="#FF7557"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M22.762 11.265a3.896 3.896 0 0 0-5.51 0l-.751.751-.751-.75a3.897 3.897 0 0 0-5.511 5.51l.75.75 5.512 5.512 5.51-5.511.751-.75a3.896 3.896 0 0 0 0-5.512v0Z"
      />
    </svg>
  );
};

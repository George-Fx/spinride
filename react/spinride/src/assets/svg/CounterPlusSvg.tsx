import * as React from 'react';

export const CounterPlusSvg: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
      <rect width={29} height={29} x={0.5} y={0.5} fill="#fff" rx={14.5} />
      <rect width={29} height={29} x={0.5} y={0.5} stroke="#EEE" rx={14.5} />
      <path
        stroke="#161E2F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M14.955 10.916v8.167M10.898 15h8.114"
      />
    </svg>
  );
};

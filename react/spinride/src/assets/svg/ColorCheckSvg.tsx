import * as React from 'react';

export const ColorCheckSvg: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={10} fill="none">
      <g>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12.333 1 5 8.333 1.667 5"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h14v10H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

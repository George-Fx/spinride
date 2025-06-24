import * as React from 'react';

type Props = {iconColor?: string; circleColor?: string};

export const SmartphoneSvg: React.FC<Props> = ({
  iconColor = '#FF7557',
  circleColor = '#FF7557',
}) => {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none">
    //   <rect
    //     width={49}
    //     height={49}
    //     x={0.5}
    //     y={0.5}
    //     stroke={circleColor}
    //     rx={24.5}
    //   />
    //   <path
    //     stroke={iconColor}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={1.5}
    //     d="M29.167 16.667h-8.334c-.92 0-1.666.746-1.666 1.666v13.334c0 .92.746 1.666 1.666 1.666h8.334c.92 0 1.666-.746 1.666-1.666V18.333c0-.92-.746-1.666-1.666-1.666ZM25 30h.008"
    //   />
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none">
      <rect width={49} height={49} x={0.5} y={0.5} fill="#fff" rx={24.5} />
      <rect width={49} height={49} x={0.5} y={0.5} stroke="#EEE" rx={24.5} />
      <path
        stroke="#6B717D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M29.167 16.667h-8.334c-.92 0-1.666.746-1.666 1.666v13.334c0 .92.746 1.666 1.666 1.666h8.334c.92 0 1.666-.746 1.666-1.666V18.333c0-.92-.746-1.666-1.666-1.666ZM25 30h.008"
      />
    </svg>
  );
};

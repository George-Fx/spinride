import React from 'react';
import {useNavigate} from 'react-router-dom';

import {svg} from '../assets/svg';

type Props = {
  limit: {
    id: number;
    type: string;
    defaultLimit: string;
    icon: React.FC<{}>;
    link: string | null;
  };
};

export const LimitItem: React.FC<Props> = ({limit}) => {
  const navigate = useNavigate();

  // return (
  //   <li>
  //     <button
  //       className={styles.limitItemButton}
  //       onClick={() => {
  //         if (limit.link) {
  //           navigate(limit.link);
  //         } else {
  //           alert('This limit is not available for modification yet.');
  //         }
  //       }}
  //       type='button'
  //     >
  //       <div>
  //         <div className={styles.limitItemContent}>
  //           <limit.icon />
  //           <h5>{limit.type}</h5>
  //         </div>
  //         <span className='t12'>Default limit: {limit.defaultLimit}</span>
  //       </div>
  //       <svg.RightArrowSvg />
  //     </button>
  //   </li>
  // );

  return <></>;
};

import React from 'react';

import type {ReviewType} from '../types';
import {svg} from '../assets/svg';

type Props = {
  review: ReviewType;
};

export const ReviewItem: React.FC<Props> = ({review}) => {
  return (
    <li
      style={{
        backgroundColor: 'var(--white-color)',
        padding: 16,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <img
        src={review.photo}
        style={{borderRadius: '50%', width: 30, height: 30, marginRight: 10}}
      />
      <div style={{width: '100%'}}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: 6,
          }}
        >
          <h5>{review.name}</h5>
          <svg.RatingStarsSvg rating={review.rating} />
        </div>
        <span className="t10" style={{marginBottom: 10, display: 'block'}}>
          {review.date}
        </span>
        <p className="t14">{review.comment}</p>
      </div>
    </li>
  );
};

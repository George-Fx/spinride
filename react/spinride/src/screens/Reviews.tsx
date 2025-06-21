import React from 'react';

import {hooks} from '../hooks';
import {items} from '../items';
import {components} from '../components';

export const Reviews: React.FC = () => {
  const {reviews} = hooks.useGetReviews();

  const renderHeader = () => {
    return <components.Header showGoBack={true} title="Reviews" />;
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingTop: 'calc(var(--header-height) + 20px)',
          paddingBottom: 20,
        }}
      >
        <ul
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {reviews.map((review) => {
            return <items.ReviewItem key={review.id} review={review} />;
          })}
        </ul>
      </main>
    );
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderHeader()}
        {renderContent()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};

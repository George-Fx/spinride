import React from 'react';

import {hooks} from '../hooks';
import {components} from '../components';

export const OrderHistory: React.FC = () => {
  const {navigate} = hooks.useRouter();
  const {orders} = hooks.useGetOrders();

  const renderHeader = () => {
    return <components.Header title="Order History" showGoBack={true} />;
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 'calc(var(--header-height) + 0px)',
          marginTop: '10%',
          paddingBottom: 'calc(var(--bottom-tabbar-height) + 40px)',
        }}
      >
        {/* Content for editing profile goes here */}
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

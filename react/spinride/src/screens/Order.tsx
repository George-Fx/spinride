import React from 'react';
import {useAtomValue} from 'jotai';

import {items} from '../items';
import {components} from '../components';
import {cartAtom} from '../atoms/cart.atom';

export const Order: React.FC = () => {
  const cart = useAtomValue(cartAtom);

  const renderHeader = () => {
    return (
      <components.Header
        showBurger={true}
        showBasket={true}
        showBorder={true}
        title="Order"
      />
    );
  };

  const renderBottomBar = () => {
    return <components.BottomTabBar />;
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingTop: 'calc(var(--header-height) + 20px)',
          paddingBottom: 'calc(var(--bottom-tabbar-height) + 40px)',
        }}
      >
        <ul>
          {cart.list.map((bike) => {
            return <items.OrderItem bike={bike} />;
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
        {renderBottomBar()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};

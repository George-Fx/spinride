import React, {use, useEffect} from 'react';
import {useAtom} from 'jotai';

import {items} from '../items';
import {hooks} from '../hooks';
import {constants} from '../constants';
import {components} from '../components';
import {wishlistAtom} from '../atoms/wishlist.atom';

export const Wishlist: React.FC = () => {
  const {navigate} = hooks.useRouter();
  const [bikes] = useAtom(wishlistAtom);

  useEffect(() => {
    if (bikes.list.length === 0) {
      navigate(constants.routes.WISHLIST_EMPTY);
    }
  }, [bikes.list.length, navigate]);

  const renderHeader = () => {
    return (
      <components.Header showBurger={true} showBasket={true} title="Wishlist" />
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
          paddingTop: 'calc(var(--header-height) + 17px)',
          paddingBottom: 'calc(var(--bottom-tabbar-height) + 40px)',
        }}
      >
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          {bikes.list.map((bike, index, array) => {
            const isLast = index === array.length - 1;
            return <items.WishlistItem bike={bike} isLast={isLast} />;
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

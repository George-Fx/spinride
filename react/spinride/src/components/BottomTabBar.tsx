import React from 'react';
import {isMobile} from 'react-device-detect';

import {hooks} from '../hooks';
import {constants} from '../constants';
import {useAppSelector} from '../store';

type Props = {
  containerStyle?: React.CSSProperties;
  tabsContainerStyle?: React.CSSProperties;
};

export const BottomTabBar: React.FC<Props> = ({
  containerStyle,
  tabsContainerStyle,
}) => {
  const {location, navigate} = hooks.useRouter();
  const {list: wishlist} = useAppSelector((state) => state.wishlistSlice);
  const {list: cart} = useAppSelector((state) => state.cartSlice);

  console.log(cart);

  return (
    <div
      style={{
        maxWidth: isMobile ? '100%' : 'var(--screen-width)',
        zIndex: 100,
        position: 'fixed',
        left: 0,
        right: 0,
        margin: '0 auto',
        bottom: 0,
        paddingTop: 20,
        paddingBottom: 'calc(20px + env(safe-area-inset-bottom))',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#F3F3F3',
        ...containerStyle,
      }}
    >
      <footer
        style={{
          backgroundColor: 'var(--main-dark-color)',
          borderRadius: 70,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 'var(--bottom-tabbar-height)',
          paddingLeft: 30,
          paddingRight: 30,
          ...tabsContainerStyle,
        }}
      >
        {constants.tabs.map((tab, index) => {
          const color =
            location.pathname === tab.route
              ? 'var(--main-orange-color)'
              : 'rgba(255, 255, 255, 0.5)';
          const emptyWishlistColor =
            location.pathname === constants.routes.WISHLIST_EMPTY &&
            tab.route === constants.routes.WISHLIST;
          const emptyCartColor =
            location.pathname === constants.routes.CART_EMPTY &&
            tab.route === constants.routes.ORDER;
          const Icon = tab.icon;
          return (
            <button
              key={index}
              onClick={() => {
                // navigate(tab.route);
                if (
                  tab.route === constants.routes.WISHLIST &&
                  wishlist.length === 0
                ) {
                  navigate(constants.routes.WISHLIST_EMPTY);
                  return;
                }

                console.log('cart.length', cart.length);
                console.log('tab.route', tab.route);

                if (tab.route === constants.routes.ORDER && cart.length === 0) {
                  navigate(constants.routes.CART_EMPTY);
                  return;
                }

                navigate(tab.route);
              }}
              type="button"
            >
              <Icon
                color={
                  emptyWishlistColor || emptyCartColor
                    ? 'var(--main-orange-color)'
                    : color
                }
              />
            </button>
          );
        })}
      </footer>
    </div>
  );
};

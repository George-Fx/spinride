import React, {useEffect} from 'react';

import {items} from '../items';
import {hooks} from '../hooks';
import {constants} from '../constants';
import {useAppSelector} from '../store';
import {components} from '../components';

export const Wishlist: React.FC = () => {
  const {navigate} = hooks.useRouter();
  const {list: wishlist} = useAppSelector((state) => state.wishlistSlice);
  const {visible: isModalVisible} = useAppSelector((state) => state.modalSlice);

  useEffect(() => {
    if (wishlist.length === 0) {
      navigate(constants.routes.WISHLIST_EMPTY);
    }
  }, [wishlist.length, navigate]);

  useEffect(() => {
    if (isModalVisible) {
      let metaTag = document.querySelector('meta[name="theme-color"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'theme-color');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', '#161e2f');
    } else {
      let metaTag = document.querySelector('meta[name="theme-color"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'theme-color');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', '#F3F3F3');
    }
  }, [isModalVisible]);

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
          {wishlist.map((bike, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <items.WishlistItem bike={bike} isLast={isLast} key={bike.id} />
            );
          })}
        </ul>
      </main>
    );
  };

  const renderContacts = () => {
    return <components.BurgerContacts />;
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderHeader()}
        {renderContent()}
        {renderBottomBar()}
        {renderContacts()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};

import {useAtom} from 'jotai';
import React, {useEffect} from 'react';

import {hooks} from '../hooks';
import {atoms} from '../atoms';
import {constants} from '../constants';
import {components} from '../components';

export const Categories: React.FC = () => {
  const {navigate} = hooks.useRouter();
  const {categories, loading, error} = hooks.useGetCategories();

  const [isModalVisible, _] = useAtom(atoms.modalVisibleAtom);

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
      <components.Header
        showBurger={true}
        showBasket={true}
        showBorder={true}
      />
    );
  };

  const renderBottomBar = () => {
    return <components.BottomTabBar />;
  };

  const renderContent = () => {
    if (loading) return <components.Loader />;
    return (
      <main
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          overflowY: 'auto',
          paddingTop: 'calc(var(--header-height) + 20px)',
          paddingBottom: 'calc(var(--bottom-tabbar-height) + 40px)',
        }}
      >
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '15px',
          }}
        >
          {categories.map((item, index) => (
            <button
              key={item.id}
              style={{
                gridColumn: index % 3 === 2 ? 'span 2' : 'span 1',
                borderRadius: 12,
                overflow: 'hidden',
                position: 'relative',
              }}
              onClick={() => {
                navigate(constants.routes.SHOP);
              }}
            >
              <img
                src={item.image}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 20,
                }}
              >
                <h5
                  className="number-of-lines-1"
                  style={{color: 'var(--white-color)'}}
                >
                  {item.category}
                </h5>
              </div>
            </button>
          ))}
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

import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';

import {hooks} from '../hooks';
import {items} from '../items';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

const sortingByOptions = [
  {
    id: 1,
    name: 'Sale',
  },
  {
    id: 2,
    name: 'Top',
  },
  {
    id: 3,
    name: 'Newest',
  },
  {
    id: 4,
    name: 'Price: low to high',
  },
  {
    id: 5,
    name: 'Price: high to low',
  },
];

export const Shop: React.FC = () => {
  const {navigate} = hooks.useRouter();
  const {bikes, loading} = hooks.useGetBikes();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSortingOption, setSelectedSortingOption] = useState(
    sortingByOptions[0],
  );

  useEffect(() => {
    if (isModalVisible) {
      let metaTag = document.querySelector('meta[name="theme-color"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'theme-color');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', '#797979');
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
      <components.Header showGoBack={true} showBasket={true} title="Shop" />
    );
  };

  const renderFilterAndSort = () => {
    return (
      <section
        style={{
          paddingTop: 'var(--header-height)',
          position: 'fixed',
          zIndex: 1,

          width: '100%',
          top: 0,
          maxWidth: 'var(--screen-width)',
        }}
      >
        <div
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#F3F3F3',
            height: 50,
          }}
        >
          <button onClick={() => navigate(constants.routes.FILTER)}>
            <svg.FiltersSvg />
          </button>
          <button onClick={() => setIsModalVisible(!isModalVisible)}>
            <svg.SortingBySvg />
          </button>
        </div>
      </section>
    );
  };

  const renderContent = () => {
    return (
      <main
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          overflowY: 'auto',
          paddingTop: 'calc(var(--header-height) + 20px + 40px)',
          paddingBottom: 20,
        }}
      >
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '15px',
          }}
        >
          {bikes.map((bike) => {
            return <items.ShopItem key={bike.id} bike={bike} />;
          })}
        </ul>
      </main>
    );
  };

  const renderModal = () => {
    return (
      <AnimatePresence>
        {isModalVisible && (
          <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            style={{
              position: 'fixed',
              top: '25%',
              left: 0,
              right: 0,
              backgroundColor: 'var(--white-color)',
              borderRadius: 12,
              width: 'calc(100% - 40px)',
              margin: '0 auto',
              zIndex: 4,
              maxWidth: 'var(--screen-width)',
            }}
          >
            <ul style={{paddingTop: 7}}>
              {sortingByOptions.map((option) => (
                <li
                  key={option.id}
                  style={{
                    marginLeft: 20,
                    borderBottom: '1px solid #E2E2E2',
                    paddingBottom: 15,
                    paddingTop: 13,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingRight: 20,
                  }}
                  onClick={() => {
                    setSelectedSortingOption(option);
                    setIsModalVisible(false);
                  }}
                >
                  <span className="t16">{option.name}</span>
                  <div
                    style={{
                      width: 17,
                      height: 17,
                      border: '2px solid #E2E2E2',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {selectedSortingOption.id === option.id && (
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          backgroundColor: 'var(--main-orange-color)',
                        }}
                      />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const renderBlackBackground = () => {
    return (
      <AnimatePresence>
        {isModalVisible && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 3,
            }}
            onClick={() => setIsModalVisible(false)}
          />
        )}
      </AnimatePresence>
    );
  };

  if (loading) return <components.Loader />;

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderHeader()}
        {renderFilterAndSort()}
        {renderContent()}
        {renderBlackBackground()}
        {renderModal()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};

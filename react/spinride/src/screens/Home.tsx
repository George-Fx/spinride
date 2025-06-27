import React, {useEffect} from 'react';
import 'swiper/swiper-bundle.css';

import {hooks} from '../hooks';
import {constants} from '../constants';
import {components} from '../components';
import {useAppSelector} from '../store';

export const Home: React.FC = () => {
  const {navigate} = hooks.useRouter();
  const {data, loading} = hooks.useGetData();

  const {visible: isModalVisible} = useAppSelector((state) => state.modalSlice);

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

  if (loading) return <components.Loader />;

  const renderHeader = () => {
    return <components.Header showBurger={true} showBasket={true} />;
  };

  const renderBestSellers = () => {
    return (
      <section style={{marginBottom: 40}}>
        <components.BlockHeading
          title="Best sellers"
          viewAllOnClick={() => {
            navigate(constants.routes.SHOP);
          }}
        />
        <components.HomeBestSellers bikes={data.bikes} />
      </section>
    );
  };

  const renderBanners = () => {
    const dataBanner = data.banners[1];
    return (
      <section style={{paddingLeft: 20, paddingRight: 20, marginBottom: 40}}>
        <img
          src={dataBanner.image}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: 12,
          }}
        />
      </section>
    );
  };

  const renderFeatured = () => {
    return (
      <section>
        <components.BlockHeading
          title="Featured products"
          viewAllOnClick={() => {
            navigate(constants.routes.SHOP);
          }}
        />
        <components.HomeFeatured bikes={data.bikes} />
      </section>
    );
  };

  const renderBottomBar = () => {
    return <components.BottomTabBar />;
  };

  const renderContacts = () => {
    return <components.BurgerContacts />;
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
        {/* {renderCarousel()} */}
        {renderBestSellers()}
        {renderBanners()}
        {renderFeatured()}
      </main>
    );
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

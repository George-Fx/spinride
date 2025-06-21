import React from 'react';
import 'swiper/swiper-bundle.css';

import {hooks} from '../hooks';
import {constants} from '../constants';
import {components} from '../components';

export const Home: React.FC = () => {
  const {carousel, loading, error} = hooks.useGetCarousel();
  const {loading: bikesLoading, error: bikesError, bikes} = hooks.useGetBikes();
  const {
    loading: bannersLoading,
    error: bannersError,
    banners,
  } = hooks.useGetBanners();

  const {navigate} = hooks.useRouter();

  const renderHeader = () => {
    return <components.Header showBurger={true} showBasket={true} />;
  };

  const renderCarousel = () => {
    return <components.HomeCarousel carousel={carousel} />;
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
        <components.HomeBestSellers bikes={bikes} />
      </section>
    );
  };

  const renderBanners = () => {
    if (bannersLoading) return null;
    const banner = banners[1];
    return (
      <section style={{paddingLeft: 20, paddingRight: 20}}>
        <img
          src={banner.image}
          style={{
            width: '100%',
            height: 150,
            objectFit: 'cover',
            borderRadius: 12,
          }}
        />
      </section>
    );
  };

  const renderFeatured = () => {
    return (
      <section>
        <span>11</span>
      </section>
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
        {renderCarousel()}
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
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};

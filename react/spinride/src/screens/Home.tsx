import React from 'react';
import 'swiper/swiper-bundle.css';

import {hooks} from '../hooks';
import {constants} from '../constants';
import {components} from '../components';

export const Home: React.FC = () => {
  const {navigate} = hooks.useRouter();

  // const bikeId = bikes.find((bike) => bike.id === 3)?.id;

  const renderHeader = () => {
    return <components.Header showBurger={true} showBasket={true} />;
  };

  // const renderCarousel = () => {
  //   return <components.HomeCarousel carousel={carouselData} bikeId={bikeId} />;
  // };

  const renderBestSellers = () => {
    return (
      <section style={{marginBottom: 40}}>
        <components.BlockHeading
          title="Best sellers"
          viewAllOnClick={() => {
            navigate(constants.routes.SHOP);
          }}
        />
        {/* <components.HomeBestSellers bikes={bikes} /> */}
      </section>
    );
  };

  // const renderBanners = () => {
  //   const banner = banners[1];
  //   return (
  //     <section style={{paddingLeft: 20, paddingRight: 20, marginBottom: 40}}>
  //       <img
  //         src={banner.image}
  //         style={{
  //           width: '100%',
  //           height: 'auto',
  //           borderRadius: 12,
  //         }}
  //       />
  //     </section>
  //   );
  // };

  // const renderFeatured = () => {
  //   return (
  //     <section>
  //       <components.BlockHeading
  //         title="Featured products"
  //         viewAllOnClick={() => {
  //           navigate(constants.routes.SHOP);
  //         }}
  //       />
  //       <components.HomeFeatured bikes={bikes} />
  //     </section>
  //   );
  // };

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
        {/* {renderCarousel()}
        {renderBestSellers()}
        {renderBanners()}
        {renderFeatured()} */}
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

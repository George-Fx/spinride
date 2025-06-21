import React from 'react';

import {hooks} from '../hooks';
import {items} from '../items';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

export const Shop: React.FC = () => {
  const {navigate} = hooks.useRouter();
  const {bikes, loading, error} = hooks.useGetBikes();

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
          <button>
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

  if (loading) return <components.Loader />;

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderHeader()}
        {renderFilterAndSort()}
        {renderContent()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};

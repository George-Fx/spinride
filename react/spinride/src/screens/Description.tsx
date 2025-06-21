import React from 'react';

import {hooks} from '../hooks';
import {components} from '../components';

export const Description: React.FC = () => {
  const {location} = hooks.useRouter();
  const {bikeId} = location.state || {bikeId: null};
  const {bike} = hooks.useGetBike(bikeId);

  const renderHeader = () => {
    return <components.Header showGoBack={true} title="Description" />;
  };

  const renderContent = () => {
    return (
      <main
        style={{
          paddingTop: 'calc(var(--header-height) + 17px)',
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <h3 style={{marginBottom: 14}}>{bike?.name}</h3>
        <p className="t16">{bike?.description}</p>
      </main>
    );
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderHeader()}
        {renderContent()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};

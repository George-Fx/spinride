import React from 'react';
import {components} from '../components';

export const Profile: React.FC = () => {
  const renderBottomBar = () => {
    return <components.BottomTabBar />;
  };

  const renderContent = () => {
    return (
      <main>
        <div className="mt-[6px] flex flex-col rounded-[10px] border-[1px] border-solid border-gray-300 bg-orange-500 p-[10px]">
          <span className="text-red-500">this is the Profile screen1</span>
          <span className="t16">11122</span>
        </div>
      </main>
    );
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderContent()}
        {renderBottomBar()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};

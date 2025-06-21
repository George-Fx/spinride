import React from 'react';

import styles from '../modules/components/safe-area-view.module.scss';

type SafeAreaViewProps = {
  children: React.ReactNode;
};

export const SafeAreaView: React.FC<SafeAreaViewProps> = ({children}) => {
  return (
    <div
      className={styles.safeAreaView}
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingTop: 'env(safe-area-inset-top)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}
    >
      {children}
    </div>
  );
};

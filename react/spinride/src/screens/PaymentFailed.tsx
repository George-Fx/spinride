import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';
import styles from '../modules/payment-failed.module.scss';

import bg03 from '../assets/bg/03.png';

export const PaymentFailed: React.FC = () => {
  hooks.useThemeColor('#fff');
  hooks.useBodyColor('#fff');
  const location = useLocation();
  const {amount} = location.state ?? {};

  const navigate = useNavigate();

  const buttonsRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!amount) {
      navigate(constants.routes.TAB_NAVIGATOR, {
        replace: true,
      });
    }
  }, [amount, navigate]);

  useEffect(() => {
    if (buttonsRef.current) {
      const height = buttonsRef.current.offsetHeight;
      setHeight(height);
    }
  }, []);

  const renderBackground = () => {
    return (
      <img
        src={bg03}
        alt='bg'
        className={styles.paymentFailedBg}
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className={styles.paymentFailedMain}
        style={{marginBottom: height + 20}}
      >
        <svg.PaymentFailed />
        <h2 className={styles.paymentFailedTitle}>Oops!</h2>
        <div className={styles.paymentFailedAmountBlock}>
          <span className={styles.paymentFailedAmount}>
            $ {amount ? amount.toFixed(2) : '0'}
          </span>
        </div>
        <p className={'t16 ' + styles.paymentFailedText}>
          Something went wrong. Please try <br /> again or contact the support
          team.
        </p>
      </main>
    );
  };

  const renderButtons = () => {
    return (
      <section
        ref={buttonsRef}
        className={styles.paymentFailedButtons}
      >
        <components.Button
          title='Back to dashboard'
          colorScheme='secondary'
          containerStyle={{marginBottom: 14}}
          onClick={() => {
            navigate(constants.routes.TAB_NAVIGATOR, {
              replace: true,
            });
          }}
        />
        <components.Button
          title='Try Again'
          onClick={() => {
            navigate(constants.routes.TAB_NAVIGATOR, {
              replace: true,
            });
          }}
        />
      </section>
    );
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderBackground()}
        {renderContent()}
        {renderButtons()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};

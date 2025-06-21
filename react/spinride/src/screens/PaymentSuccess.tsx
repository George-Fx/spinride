import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

import bg03 from '../assets/bg/03.png';
import styles from '../modules/payment-success.module.scss';

export const PaymentSuccess: React.FC = () => {
  hooks.useThemeColor('#fff');
  hooks.useBodyColor('#fff');
  const location = useLocation();
  const {amount} = location.state ?? {};

  const navigate = useNavigate();

  const buttonsRef = useRef<HTMLDivElement>(null);
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
        className={styles.paymentSuccessBg}
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className={styles.paymentSuccessMain}
        style={{marginBottom: height + 20}}
      >
        <svg.SuccessCheckSvg />
        <h2 className={styles.paymentSuccessTitle}>Success!</h2>
        <div className={styles.paymentSuccessAmountBlock}>
          <span className={styles.paymentSuccessAmount}>
            $ {amount ? amount.toFixed(2) : '0'}
          </span>
        </div>
        <p className={'t16 ' + styles.paymentSuccessText}>
          Your payment has been <br /> processed!
        </p>
      </main>
    );
  };

  const renderButtons = () => {
    return (
      <section
        ref={buttonsRef}
        className={styles.paymentSuccessButtons}
      >
        <components.Button
          title='Send Receipt'
          colorScheme='secondary'
          containerStyle={{marginBottom: 14}}
          onClick={() => {
            alert('Receipt sent to your email!');
          }}
        />
        <components.Button
          title='Done'
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

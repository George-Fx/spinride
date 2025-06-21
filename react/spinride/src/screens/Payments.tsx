import React from 'react';
import {useNavigate} from 'react-router-dom';

import {constants} from '../constants';
import {components} from '../components';
import styles from '../modules/payments.module.scss';

import icon09 from '../assets/icons/09.png';
import icon10 from '../assets/icons/10.png';
import icon11 from '../assets/icons/11.png';
import icon12 from '../assets/icons/12.png';
import icon13 from '../assets/icons/13.png';
import icon14 from '../assets/icons/14.png';
import icon15 from '../assets/icons/15.png';
import icon16 from '../assets/icons/16.png';

export const Payments: React.FC = () => {
  const navigate = useNavigate();

  const payments = [
    {
      id: '1',
      title: 'Money transfer',
      icon: icon09,
      link: constants.routes.FUND_TRANSFER,
    },
    {
      id: '2',
      title: 'Mobile payment',
      icon: icon10,
      link: constants.routes.MOBILE_PAYMENT,
    },
    {
      id: '3',
      title: 'IBAN payment',
      icon: icon11,
      link: constants.routes.IBAN_PAYMENT,
    },
    {
      id: '4',
      title: 'Utility bills',
      icon: icon12,
      link: null,
    },
    {
      id: '5',
      title: 'Transport',
      icon: icon13,
      link: null,
    },
    {
      id: '6',
      title: 'Insurance',
      icon: icon14,
      link: null,
    },
    {
      id: '7',
      title: 'Penalties',
      icon: icon15,
      link: null,
    },
    {
      id: '8',
      title: 'Charity',
      icon: icon16,
      link: null,
    },
  ];

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Payments'
        headerStyle={{
          backgroundColor: 'var(--anti-flash-white)',
        }}
      />
    );
  };

  const renderContent = () => {
    return (
      <main className={styles.main}>
        <ul className={styles.list}>
          {payments.map((payment) => {
            return (
              <li key={payment.id}>
                <button
                  className={styles.button}
                  onClick={() => {
                    if (payment.link) {
                      navigate(payment.link);
                    } else {
                      alert(
                        'This feature is not available yet. Please check back later.',
                      );
                    }
                  }}
                >
                  <img
                    src={payment.icon}
                    alt={payment.title}
                    className={styles.icon}
                  />
                  <h6>{payment.title}</h6>
                </button>
              </li>
            );
          })}
        </ul>
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

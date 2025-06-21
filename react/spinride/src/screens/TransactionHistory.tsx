import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {constants} from '../constants';
import {components} from '../components';
import styles from '../modules/transaction-history.module.scss';

import icon09 from '../assets/icons/09.png';
import icon10 from '../assets/icons/10.png';
import icon12 from '../assets/icons/12.png';
import icon21 from '../assets/icons/21.png';
import icon23 from '../assets/icons/23.png';
import icon24 from '../assets/icons/24.png';
import icon25 from '../assets/icons/25.png';

export const TransactionHistory: React.FC = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState<string>('');

  const transactions = [
    {
      date: 'Today',
      name: 'Adalyn Roth',
      category: 'Money transfer',
      amount: 140.0,
      icon: icon09,
      type: 'outcome',
    },
    {
      date: 'Today',
      name: 'Amazon',
      category: 'Online payments',
      amount: 239.57,
      icon: icon23,
      type: 'outcome',
    },

    {
      date: 'Sep 10, 2022',
      name: 'Paypal',
      category: 'Deposits',
      amount: 700.0,
      icon: icon21,
      type: 'income',
    },
    {
      date: 'Sep 10, 2022',
      name: 'ATM',
      category: 'Cash withdrawal',
      amount: 1200.0,
      icon: icon24,
      type: 'outcome',
    },
    {
      date: 'Sep 10, 2022',
      name: 'eBay',
      category: 'Online payments',
      amount: 287.84,
      icon: icon25,
      type: 'outcome',
    },

    {
      date: 'Sep 5, 2022',
      name: '+17869871235',
      category: 'Mobile payment',
      amount: 10.0,
      icon: icon10,
      type: 'outcome',
    },
    {
      date: 'Sep 5, 2022',
      name: 'Maribel Farrell',
      category: 'Money transfer',
      amount: 568.0,
      icon: icon09,
      type: 'income',
    },
    {
      date: 'Sep 5, 2022',
      name: 'Electricity',
      category: 'Utility bills',
      amount: 198.27,
      icon: icon12,
      type: 'outcome',
    },
  ];

  const handleSetValue = () => {
    const result = window.prompt('Enter search term', value);
    if (result !== null) {
      setValue(result);
    }
  };

  const filtered = transactions.filter(
    (tx) =>
      !value ||
      tx.name.toLowerCase().includes(value.toLowerCase()) ||
      tx.category.toLowerCase().includes(value.toLowerCase()),
  );

  const grouped = filtered.reduce((acc, tx) => {
    if (!acc[tx.date]) acc[tx.date] = [];
    acc[tx.date].push(tx);
    return acc;
  }, {} as Record<string, typeof transactions>);

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Transaction history'
        headerStyle={{backgroundColor: 'var(--anti-flash-white)'}}
      />
    );
  };

  const renderContent = () => {
    return (
      <main className={styles.container}>
        {/* Search */}
        <section className={styles.searchSection}>
          <components.InputField
            placeholder='Search...'
            value={value}
            onClick={handleSetValue}
          />
        </section>
        {/* transactions */}
        {Object.entries(grouped)
          .filter(([_, txs]) => txs.length > 0)
          .map(([date, txs]) => (
            <section key={date}>
              <span className={`t12 ${styles.sectionDate}`}>{date}</span>
              <ul>
                {txs.map((tx, idx, array) => {
                  const isLast = idx === array.length - 1;
                  return (
                    <li key={idx}>
                      <button
                        className={
                          styles.transactionBtn +
                          ' ' +
                          (isLast
                            ? styles.transactionBtnLast
                            : styles.transactionBtnNotLast)
                        }
                        onClick={() =>
                          navigate(constants.routes.TRANSACTION_DETAILS, {
                            state: {transaction: tx},
                          })
                        }
                      >
                        <img
                          src={tx.icon}
                          alt={tx.name}
                          className={styles.transactionIcon}
                        />
                        <div>
                          <h6 className={styles.transactionName}>{tx.name}</h6>
                          <span className='t12'>{tx.category}</span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
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

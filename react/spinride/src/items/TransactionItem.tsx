import React from 'react';
import {useNavigate} from 'react-router-dom';

import {constants} from '../constants';
import styles from '../modules/transaction-item.module.scss';

type Props = {
  transaction: {
    name: string;
    category: string;
    amount: number;
    icon: string;
    type: string;
  };
};

export const TransactionItem: React.FC<Props> = ({transaction}) => {
  const navigate = useNavigate();
  return (
    <button
      className={styles.transactionItemButton}
      onClick={() => {
        navigate(constants.routes.TRANSACTION_DETAILS, {
          state: {transaction},
        });
      }}
      type='button'
    >
      <img
        src={transaction.icon}
        alt={transaction.name}
        className={styles.transactionItemIcon}
      />
      <div className={styles.transactionItemDetails}>
        <h6 className={styles.transactionItemName}>{transaction.name}</h6>
        <span className='t12'>{transaction.category}</span>
      </div>
      <h6
        className={
          styles.transactionItemAmount +
          (transaction.type === 'income' ? ' ' + styles.income : '')
        }
      >
        {transaction.type === 'income' ? '+' : '-'}{' '}
        {transaction.amount.toFixed(2)}
      </h6>
    </button>
  );
};

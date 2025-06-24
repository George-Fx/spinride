import React from 'react';
import {motion} from 'framer-motion';
import {useAtom} from 'jotai';

import {atoms} from '../atoms';

export const BurgerContacts: React.FC = () => {
  const [isModalVisible, setModalVisible] = useAtom(atoms.modalVisibleAtom);

  if (!isModalVisible) return null;

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: 9999,
        maxWidth: 'var(--screen-width)',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      onClick={() => setModalVisible(false)}
    >
      <motion.div
        initial={{x: '-100%'}}
        animate={{x: 0}}
        // exit={{x: '-100%'}}
        transition={{type: 'spring', stiffness: 300, damping: 30}}
        style={{
          maxWidth: 270,
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // zIndex: 1000,
          backgroundColor: 'var(--main-dark-color)',
        }}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
      </motion.div>
    </motion.div>
  );
};

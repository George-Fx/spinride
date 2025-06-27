import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

import {svg} from '../assets/svg';
import {useAppSelector} from '../store';
import {useAppDispatch} from '../store';
import {modalActions} from '../store/slices/modalSlice';

const menuItems = [
  {
    id: 1,
    titleLine1: '27 Division St, New York,',
    titleLine2: 'NY 10002, USA',
    icon: svg.MapPinSvg,
  },
  {
    id: 2,
    titleLine1: 'spinridesale@mail.com',
    titleLine2: 'spinridesupport@mail.com',
    icon: svg.MailSvg,
  },
  {
    id: 3,
    titleLine1: '+17  123456789',
    titleLine2: '+17  987654321',
    icon: svg.PhoneSvg,
  },
];

export const BurgerContacts: React.FC = () => {
  const dispatch = useAppDispatch();
  const {visible: isModalVisible} = useAppSelector((state) => state.modalSlice);
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
      onClick={() => dispatch(modalActions.setVisible(false))}
    >
      <motion.div
        initial={{x: '-100%'}}
        animate={{x: -1}}
        // exit={{x: '-100%'}}
        transition={{type: 'spring', stiffness: 300, damping: 30}}
        style={{
          maxWidth: 270,
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: '10%',
          backgroundColor: 'var(--main-dark-color)',
        }}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <h2
          style={{
            color: 'var(--white-color)',
            textTransform: 'capitalize',
            marginBottom: 30,
          }}
        >
          Contact us
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
          }}
        >
          {menuItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                borderBottom: '1px solid rgba(219, 227, 245, 0.2)',
                paddingBottom: 26,
              }}
            >
              <item.icon />
              <div style={{marginLeft: 10}}>
                <p className="t14" style={{color: 'var(--white-color)'}}>
                  {item.titleLine1}
                </p>
                <p className="t14" style={{color: 'var(--white-color)'}}>
                  {item.titleLine2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

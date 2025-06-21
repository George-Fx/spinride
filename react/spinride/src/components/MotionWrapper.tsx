import {motion} from 'framer-motion';
import {isMobile} from 'react-device-detect';

import styles from '../modules/components/motion-wrapper.module.scss';

const screenVariants = {
  initial: {opacity: 0, x: 20},
  animate: {opacity: 1, x: 0, transition: {duration: 0.2}},
  exit: {opacity: 0, x: -20, transition: {duration: 0.2}},
};

export const MotionWrapper: React.FC<{children: React.ReactNode}> = ({
  children,
}) => (
  <motion.div
    className={styles.motionWrapper}
    variants={screenVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <div
      id="screen"
      style={{
        maxWidth: isMobile ? '100%' : 'var(--screen-width)',
      }}
    >
      {children}
    </div>
  </motion.div>
);

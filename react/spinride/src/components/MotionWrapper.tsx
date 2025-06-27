import {motion} from 'framer-motion';
import {isMobile} from 'react-device-detect';

const screenVariants = {
  initial: {opacity: 0, x: 20, transition: {duration: 0.15}},
  animate: {opacity: 1, x: 0, transition: {duration: 0.15}},
  exit: {opacity: 0, x: -20, transition: {duration: 0.15}},
};

export const MotionWrapper: React.FC<{children: React.ReactNode}> = ({
  children,
}) => (
  <motion.div
    variants={screenVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    style={{
      width: '100%',
      height: '100%',
      willChange: 'transform, opacity',
    }}
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

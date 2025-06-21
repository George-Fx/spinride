import React, {useState} from 'react';

import {svg} from '../assets/svg';
import styles from '../modules/components/input-field.module.scss';

type Props = {
  onClick?: () => void;
  placeholder?: string;
  value?: string;
  isValid?: boolean;
  inputType?: 'text' | 'password';
  containerStyle?: React.CSSProperties;
  className?: string;
};

export const InputField: React.FC<Props> = ({
  placeholder,
  containerStyle,
  className,
  onClick,
  value,
  isValid = false,
  inputType = 'text',
}) => {
  const [visible, setVisible] = useState(false);

  const isPlaceholder = !value;

  return (
    <button
      className={`${styles.inputFieldContainer} ${className || ''}`}
      style={containerStyle}
      onClick={onClick}
      type='button'
    >
      <span
        className={
          styles.inputFieldText +
          (isPlaceholder ? ' ' + styles.placeholder : '')
        }
      >
        {inputType === 'password' && !visible
          ? value
            ? '•'.repeat(value.length)
            : placeholder || 'Enter text...'
          : value || placeholder || 'Enter text...'}
      </span>
      <div
        className={styles.inputFieldButton}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setVisible((v) => !v);
        }}
      >
        {inputType === 'password' && <svg.EyeOff />}
        {isValid && inputType === 'text' && <svg.CheckSvg />}
      </div>
    </button>
  );
};

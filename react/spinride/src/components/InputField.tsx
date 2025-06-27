import React, {useState} from 'react';

import {svg} from '../assets/svg';

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
      style={{
        backgroundColor: 'var(--white-color)',
        width: '100%',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: 20,
        border: '1px solid #EEEEEE',
        cursor: 'pointer',
        ...containerStyle,
      }}
      onClick={onClick}
      type="button"
    >
      <span
        style={{
          fontSize: 14,
          lineHeight: 1.6,
          marginRight: 'auto',
          paddingRight: 20,
          color: isPlaceholder
            ? 'var(--placeholder-color)'
            : 'var(--main-dark-color)',
          background: 'none',
          border: 'none',
        }}
      >
        {inputType === 'password' && !visible
          ? value
            ? '•'.repeat(value.length)
            : placeholder || 'Enter text...'
          : value || placeholder || 'Enter text...'}
      </span>
      <div
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setVisible((v) => !v);
        }}
        style={{
          height: '100%',
          width: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isPlaceholder
            ? 'var(--placeholder-color)'
            : 'var(--white-color)',
          borderRadius: 50,
          cursor: 'pointer',
          padding: 0,
        }}
      >
        {inputType === 'password' && <svg.EyeOff />}
        {isValid && inputType === 'text' && <svg.CheckSvg />}
      </div>
    </button>
  );
};

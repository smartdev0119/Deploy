import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  Icon?: React.ReactNode; // Assuming you're using react-icons
  onClick?: () => void;
  classname?: string
  // ... add any other props you need, like variants or sizes
}

const Button: React.FC<ButtonProps> = ({ text, Icon, onClick, classname, ...buttonProps }) => {
  return (
    <button
      onClick={onClick}
      className={classname}
      {...buttonProps}
    >
      {Icon}
      {text}
    </button>
  );
};

export default Button;
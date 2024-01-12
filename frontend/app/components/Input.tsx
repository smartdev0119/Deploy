import React from 'react';
import { InputHTMLAttributes } from 'react';
import Image from 'next/image';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  PrefixIcon?: React.ReactNode; // Icon component if using SVGs or font icons
  backIcon?: React.ReactNode;
  className?: string; // Extra Tailwind CSS classes
  label?: string;
  inputClass?: string;
  labelClass?: string;
  // rightCornerLabel?: string;
};

const Input: React.FC<InputProps> = ({
  PrefixIcon,
  backIcon,
  className,
  label,
  inputClass,
  labelClass,
  // rightCornerLabel,
  ...inputProps
}) => {

  return (
    <>
      {label && <div className={`${labelClass} text-neutral-600 text-sm`}>{label}</div>}
      <div className={`flex items-center border-2 text-black ${className}`}>
        {PrefixIcon && <span className="px-2 text-gray-500">{PrefixIcon}</span>}
        <input
          className={`${inputClass} py-2 pr-1 w-full outline-none h-7 text-sm`}
          {...inputProps}
        />
        {backIcon && <span className="pr-2">{backIcon}</span>}
      </div>
    </>
  );
};

export default Input;

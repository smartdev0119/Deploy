import React from 'react';
import { TextareaHTMLAttributes } from 'react';
import Image from 'next/image';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string; // Extra Tailwind CSS classes
  label?: string;
  labelClass?: string;
  row?: number;
  // rightCornerLabel?: string;
};

const TextArea: React.FC<InputProps> = ({
  className,
  label,
  labelClass,
  row,
  ...textAreaProps
}) => {

  return (
    <>
      {label && <div className={`${labelClass} text-neutral-600 text-sm`}>{label}</div>}
      <textarea rows={row} className={`${className} text-sm text-black px-4 py-2 w-full rounded-lg border-gray-300 border-2 outline-none`} placeholder='Please Input here.' {...textAreaProps}/>
    </>
  );
};

export default TextArea;

interface SwitchProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
};

const Switch: React.FC<SwitchProps> = ({ checked = true, onChange, className }) => {
  return (
    <label className={`${className} relative inline-block w-14 h-8`}>
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={`${checked ? 'bg-indigo-900' : 'bg-zinc-400'} absolute w-[34px] h-[18px] rounded-full shadow-inner transition duration-300 ease-in-out`}
      ></span>
      <span className={`${checked ? 'translate-x-[18px]' : 'translate-x-0'} absolute bg-white w-4 h-[18px] rounded-full shadow transition transform duration-300 ease-in-out`}
      ></span>
    </label>
  )
}

export default Switch;
import Image from "next/image";

interface MenuItemProps {
  text?: string;
  prefix?: React.ReactNode;
  iconSrc?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ text, prefix, iconSrc }) => {
  return (
    <div className="justify-center items-center gap-1.5 inline-flex cursor-pointer">
      {iconSrc && <Image width={20} height={20} src={iconSrc} alt="icon" />}
      <div className="text-blue-950 text-xl font-normal">{text}</div>
    </div>
  );
};

export default MenuItem;
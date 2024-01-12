import Image from "next/image";

interface AvatarProps {
  avatar?: string;
  fullName?: string;
  title?: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatar, fullName, title }) => {
  return (
    <div className="justify-start items-center gap-3 flex">
      { avatar && <Image width={40} height={40} src={avatar} alt="avatar" className="border-2 rounded-full border-slate-200"/> }
      <div className="flex-col justify-start items-start gap-1">
        <div className="text-neutral-600 text-md font-medium">{fullName}</div>
        <div className="text-zinc-400 text-xs font-normal">{title}</div>
      </div>
    </div>
  )
};

export default Avatar;
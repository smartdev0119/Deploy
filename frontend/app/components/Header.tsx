"use client"

import { IoLogOutOutline, IoSearch } from "react-icons/io5";
import Input from "./Input";
import MenuItem from "./MenuItem";
import Avatar from "./Avatar";
import { removeToken } from "../utils/Auth";
import { useRouter } from "next/navigation";

const Header = () => {

  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    router.push('/');
  }

  return (
    <div className="w-full grid py-3.5 bg-white justify-center items-center gap-8">
      <div className="basis-0 h-[47px] justify-start items-center gap-8 flex">
        <img src='/images/auth/logo.png' alt='Logo image' />
        <div className="basis-0 h-8 pl-20 justify-center items-start gap-[54px] flex">
          <MenuItem text="Hire" iconSrc="/images/jobs/iconoir_add-user.png" />
          <MenuItem text="Lead" iconSrc="/images/jobs/iconoir_reports.png" />
          <MenuItem text="Train" iconSrc="/images/jobs/Group.png" />
          <MenuItem text="Community" iconSrc="/images/jobs/iconoir_message.png" />
        </div>
        <Input placeholder="Search" PrefixIcon={<IoSearch size={20} className="text-white" />} type="search" className="pr-[4px] w-[217px] h-9 bg-slate-200 rounded-2xl" inputClass="bg-slate-200 placeholder-white" />
        <MenuItem iconSrc="/images/jobs/iconoir_bell-notification.png" />
        <Avatar avatar="/images/jobs/Avatar.jpg" fullName="Donald Jones" title="Fullstack Engineer" />
        <div onClick={handleLogout}><IoLogOutOutline size={30} className='text-black cursor-pointer'/></div>
      </div>
    </div>
  )
}

export default Header;
import Image from "next/image";

import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[184px] grid  bg-white  justify-center items-center gap-8 bg-[url('/images/jobs/bg2.png')]" >
        <div className="w-full h-[120px] flex-col justify-center items-start gap-6 inline-flex">
          <div className="justify-start items-center gap-6 inline-flex">
            <div className="p-2 bg-slate-200 rounded-2xl justify-start items-center gap-2.5 flex">
                <Image width={48} height={48} src="/images/jobs/iconoir_add-user_n.png" alt="user"/>
            </div>
            <div className="flex-col justify-center items-start gap-2 inline-flex">
              <div className="text-neutral-600 text-[32px] font-normal capitalize">My Jobs</div>
              <div className="text-black text-opacity-50 text-[12px] font-normal">Lorem ipsum dolor sit amet consectetur. Tellus nulla ipsum faucibus consectetur. Felis nunc in tempor aenean purus.</div>
            </div>
          </div>
          <div className="justify-start items-center gap-2.5 inline-flex">
            <Button className="bg-sky-700 py-2 px-6 rounded-lg" text="Dashboard" />
            <Button className="bg-slate-300 text-sky-700 py-2 px-6 rounded-lg" text="My Jobs" />
            <Button className="bg-slate-300 text-sky-700 py-2 px-6 rounded-lg" text="Applicants" />
            <Button className="bg-slate-300 text-sky-700 py-2 px-6 rounded-lg" text="Interviews" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
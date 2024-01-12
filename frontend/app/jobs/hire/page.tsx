"use client"

import Image from 'next/image';
import Input from '@/app/components/Input';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import { GoTriangleDown } from 'react-icons/go';
import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';
import List from '@/app/components/List';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { getToken } from '../../utils/Auth';

const Hire = () => {

  const router = useRouter();
  const cookie = useCookies();

  useEffect(() => {
    console.log(cookie);
  }, []);

  return (
    <div className="w-full grid justify-center items-start py-4 gap-4">
      <div className="w-[1400px] h-[732px] p-6 bg-white rounded-2xl flex-col justify-start items-start gap-3 inline-flex">
        <div className="self-stretch justify-start items-center gap-3 inline-flex">
          <div className="w-6 h-6 px-1 py-[3px] justify-center items-center flex">
            <div className="w-4 h-[18px] relative">
              <Image alt='group' width={16} height={16} src="/images/jobs/Group_all.jpg" />
            </div>
          </div>
          <div className="text-neutral-600 text-base font-normal">My All Jobs</div>
          <div className="grow shrink basis-0 h-8 justify-end items-start gap-2.5 flex">
            <Input className='h-8 rounded-lg pr-1 w-36' PrefixIcon={<FaSearch className='text-gray-300' />} placeholder='Search' />
            <Input className='w-32 h-8 rounded-lg' backIcon={<GoTriangleDown />} PrefixIcon={<FaFilter className='text-gray-300' />} placeholder='Filter' />
            <Button className='bg-indigo-900 rounded-lg px-6 py-2 flex text-sm justify-center items-center gap-2.5' Icon={<IoDocumentText size={20} className='pr-1'/>} onClick={() => router.push('/jobs/post')} text='Post new job'/>
          </div>
        </div>

        <List />

        {/* <div className="self-stretch h-8 flex-col justify-start items-center gap-2.5 flex">
          <div className="justify-start items-start gap-4 inline-flex">
            <div className="w-9 p-2 bg-white rounded-lg border border-indigo-900 justify-center items-center gap-2.5 flex">
              <div className="w-5 h-5 relative" >
                <img src="/iconoir_nav-arrow-left.jpg" />
              </div>
            </div>
            <div className="w-[38px] px-4 py-2 bg-gray-300 rounded-lg justify-center items-center gap-2.5 flex">
              <div className="text-indigo-900 text-sm font-normal capitalize">1</div>
            </div>
            <div className="w-[41px] px-4 py-2 rounded-lg justify-center items-center gap-2.5 flex">
              <div className="text-neutral-600 text-sm font-normal capitalize">2</div>
            </div>
            <div className="w-[41px] px-4 py-2 rounded-lg justify-center items-center gap-2.5 flex">
              <div className="text-neutral-600 text-sm font-normal capitalize">3</div>
            </div>
            <div className="w-9 p-2 bg-white rounded-lg border border-indigo-900 justify-center items-center gap-2.5 flex">
              <div className="w-5 h-5 relative" >
                <img src="/iconoir_nav-arrow-right.jpg" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Hire;

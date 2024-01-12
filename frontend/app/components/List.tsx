import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Http from '../utils/Http';
import { toast } from 'react-toastify';
import Avatar from './Avatar';
import Image from 'next/image';
import { IoDocumentText } from 'react-icons/io5';

interface Item {
  industry: string;
  description: string;
  salary: string;
}

const List: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  // const [pageSize] = useState(10);
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   Http.get('/job/', {})
  //     .then((res) => {
  //       setItems(res.data.data);
  //       setTotal(res.data.total);
  //     })
  //     .catch((err) => toast.error(err));
  // }, [page]);
  useEffect(() => {
    Http.get('/job')
      .then((res) => {
        console.log(res.data.data);
        setItems(res.data.data);
      })
      .catch((err) => toast.error(err));
  }, []);

  return (
    <div className='text-gray-700 pt-[6px]'>
      <Image src={'/images/jobs/Line 6.png'} width={62} height={0} alt='line' className='pb-[6px]'/>
      {items.map((item, index) => (
        <div key={index} className="w-[1352px] h-[73px] py-2 border-b border-black border-opacity-0 justify-start items-center gap-3 inline-flex">
          <Image alt='avatar' src={'/images/jobs/Avatar.png'} width={40} height={40} />
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 h-6 justify-between items-center flex">
                <div className="grow shrink basis-0 text-neutral-600 text-xl font-normal">{item.industry}</div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="justify-start items-center gap-2 flex">
                  <Image src={"/images/jobs/coin.png"} alt='coin' width={18} height={18} />
                  <div className="px-4 py-0.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 flex">
                    <div className="text-white text-xs font-normal">{item.salary}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="py-0.5 justify-start items-start flex">
                <Image src={'/images/jobs/Doc.png'} alt='doc' width={18} height={18} />
              </div>
              <div className="grow shrink basis-0 text-zinc-400 text-xs font-light">{item.description}</div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      {/* <Pagination page={page} total={total} onPageChange={setPage} /> */}
    </div>
  );
};

export default List;
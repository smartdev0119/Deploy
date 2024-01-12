'use client'

import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import Link from 'next/link';
import Switch from '@/app/components/Switch';
import { useState } from 'react';
import TextArea from '@/app/components/TextArea';

import { BsCheck } from 'react-icons/bs';
import Http from '@/app/utils/Http';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Post = () => {

  const [inboundLeads, setInboudLeads] = useState<boolean>(true);
  const [customSupport, setCustomSupport] = useState<boolean>(true);
  const router = useRouter();

  const [formData, setFormData] = useState({
    companyName: '',
    hiringName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    role: '',
    title: '',
    compensation: '',
    salary: '',
    ote: '',
    average: '',
    industry: '',
    description: '',
    creDate: '',
    expDate: '',
    status: '',
    companyDescription: '',
    companyUrl: '',
    imageUrl: ''
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('formData: ', formData);
    Http.post('/job', formData)
      .then((res) => {
        toast.success("Success", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
          hideProgressBar: true
        })
        router.push('/jobs/hire');
      })
      .catch((err) => toast.error(err));
  };

  const handleChange = (e: any) => {
    console.log(e.target.name, e.target.value);
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <div className="w-full justify-center items-start py-4 gap-4 inline-flex">
      <div className="w-[1400px] p-6 bg-white rounded-2xl flex-col justify-start items-center gap-3 inline-flex">
        <form onSubmit={handleSubmit} className='self-stretch p-6 rounded-lg border border-black border-opacity-10 flex-col justify-start items-start gap-3 flex'>
          <Input name='companyName' value={formData.companyName} onChange={handleChange} label='Company Name' labelClass='font-bold' placeholder='Please Input here.' className='mt-[-4px] self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <Input name='hiringName' value={formData.hiringName} onChange={handleChange} label='Hiring Manager Name' labelClass='font-bold' placeholder='Please Input here.' className='mt-[-4px] self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <Input name='email' value={formData.email} onChange={handleChange} label='Email' labelClass='font-bold' placeholder='Please Input here.' className='mt-[-4px] self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <Input name='address' value={formData.address} onChange={handleChange} label='Address' labelClass='font-bold' placeholder='Please Input here.' className='mt-[-4px] self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <Input name='city' value={formData.city} onChange={handleChange} label='City' labelClass='font-bold' placeholder='Please Input here.' className='mt-[-4px] self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <Input name='state' value={formData.state} onChange={handleChange} label='State' labelClass='font-bold' placeholder='Please Input here.' className='mt-[-4px] self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <Input name='zip' value={formData.zip} onChange={handleChange} label='Zip' labelClass='font-bold' placeholder='Please Input here.' className='mt-[-4px] self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <Input name='role' value={formData.role} onChange={handleChange} label='Role Type' labelClass='font-bold' placeholder='Please Input here.' className='mt-[-4px] self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <Input name='title' value={formData.title} onChange={handleChange} label='Title' labelClass='font-bold' placeholder='Please Input here.' className='mt-[-4px] self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <Input name='compensation' value={formData.compensation} onChange={handleChange} label='Compensation Type' labelClass='font-bold' placeholder='Please Input here.' className='mt-[-4px] self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <Input name='salary' value={formData.salary} onChange={handleChange} label='Salary Amount' labelClass='font-bold' placeholder='Please Input here.' className='self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <Input name='ote' value={formData.ote} onChange={handleChange} label='OTE' labelClass='font-bold' placeholder='Please Input here.' className='self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <div className='text-neutral-600 font-bold inline-flex justify-between w-full'>
            <span className='justify-start inline-flex items-start'>Inbound Leads?</span>
            <Switch className='pt-[5px] flex' checked={inboundLeads} onChange={setInboudLeads} />
          </div>
          <div className='text-neutral-600 font-bold inline-flex justify-between w-full'>
            <span className='justify-start inline-flex items-start'>Prospecting Required??</span>
            <Switch className='pt-[5px] flex' checked={inboundLeads} onChange={setInboudLeads} />
          </div>
          <Input name='average' value={formData.average} onChange={handleChange} label='Average Order' labelClass='font-bold' placeholder='Please Input here.' className='self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <Input name='industry' value={formData.industry} onChange={handleChange} label='Industry' labelClass='font-bold' placeholder='Please Input here.' className='self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
          <TextArea name='description' value={formData.description} onChange={handleChange} label='Job Description' labelClass='font-bold' rows={5} />
          <div className='text-neutral-600 font-bold inline-flex justify-between w-full'>
            <span className='justify-start inline-flex items-start'>Customer Service/ Success Support?</span>
            <Switch className='pt-[5px] flex' checked={customSupport} onChange={setCustomSupport} />
          </div>
          {customSupport &&
            <>
              <Input name='creDate' value={formData.creDate} onChange={handleChange} label='Created Date' labelClass='font-bold' placeholder='Please Input here.' className='self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
              <Input name='expDate' value={formData.expDate} onChange={handleChange} label='Expiration Date' labelClass='font-bold' placeholder='Please Input here.' className='self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
              <Input name='status' value={formData.status} onChange={handleChange} label='Status' labelClass='font-bold' placeholder='Please Input here.' className='self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
              <TextArea name='companyDescription' value={formData.companyDescription} onChange={handleChange} row={4} label='Company Description' labelClass='font-bold' />
              <Input name='companyUrl' value={formData.companyUrl} onChange={handleChange} label='Compony URL' labelClass='font-bold' placeholder='Please Input here.' className='self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
              <Input name='imageUrl' value={formData.imageUrl} onChange={handleChange} label='Header Image URL' labelClass='font-bold' placeholder='Please Input here.' className='self-stretch rounded-lg h-8 px-4 py-2 border border-gray-300' />
            </>
          }
          <div className='w-full'>
            <Button Icon={<BsCheck size={20} />} type='submit' text='Submit' className='flex text-sm bg-indigo-900 rounded-lg text-slate-200 w-32 px-6 py-2 float-right' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Post;
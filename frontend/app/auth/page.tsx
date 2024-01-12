"use client"

import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { IoEyeOutline, IoSearch } from "react-icons/io5";

import Input from '../components/Input'; ``
import Button from '../components/Button';

import Http from '../utils/Http';
import { useRouter } from 'next/navigation';
import { setToken } from '../utils/Auth';

const Auth = () => {

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();
    Http.post('/user/signin', { email, password })
      .then((res) => {
        console.log(res.data.data);
        setToken(res.data.data);
        toast.success("Success", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
          hideProgressBar: true
        })
        router.push('/jobs/hire');
      })
      .catch((err) => {
        const message = err?.response?.data?.message || "Internal Server Error.";
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
          hideProgressBar: true
        });
      });
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
    console.log(email, password);
    Http.post('/user/signup', { email, password })
      .then((res) => {
        setToken(res.data.data);
        toast.success("Success", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
          hideProgressBar: true
        })
        router.push('/jobs/hire');
      })
      .catch((err) => {
        const message = err?.response?.data?.message || "An unexpected problem occurred.";
        toast.warning(message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
          hideProgressBar: true
        })
      });

  };

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [isLogin]);

  const handleGoogleLogin = () => {
    window.location.href = `http://localhost:5000/api/v1/user/auth/google`;
  }

  return (
    <div className='h-screen justify-center bg-slate-200 p-[7%]'>
      <div className='bg-white p-6 rounded-lg flex flex-col md:flex-row gap-6 w-5/12 m-auto'>
        <div className='w-1/3'>
          <img className='rounded-lg h-full object-cover' src={`images/auth/${isLogin ? "login.png" : "signup.png"}`} alt='Login Image' />
        </div>
        <div className='w-2/3'>
          <img className='mt-6 w-[258px] m-auto' src='images/auth/logo.png' alt='Logo image' />
          <div className='mt-6 text-center font-semibold text-base text-[#0A50A4]'>{isLogin ? "Welcome to back" : "Create an account"}</div>
          <div className='mt-1 text-center font-normal text-xs text-[#B3B3B3]'>{isLogin ? "Sign in to continue" : "Create a new account"}</div>
          <form className='mt-6' name='myForm' onSubmit={(e) => { isLogin ? handleLogin(e) : handleRegister(e) }}>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} required type='email' PrefixIcon={<IoSearch />} className='mt-[10px] rounded-md' placeholder='Please Input here.' label='Email Address' name='mail' />
            <div className='mt-[10px]' />
            <Input value={password} onChange={(e) => setPassword(e.target.value)} required type='password' backIcon={<IoEyeOutline />} placeholder='Please Input here.' className='pl-4 mt-[10px] rounded-md' label='User Password' name='password' />

            <Button type='submit' text={isLogin ? "Login" : "Sign Up"} classname='w-full rounded-lg text-[14px] text-center py-2 bg-[#3b368d] mt-6' />
          </form>
          <div className='flex mt-6'>
            <hr className='flex-1 m-auto' />
            <div className='flex-none mx-3 text-black'>or</div>
            <hr className='flex-1 m-auto' />
          </div>
          <Button onClick={handleGoogleLogin} text='Google' Icon={<FcGoogle size={20} className='mr-[10px]' />} classname='text-indigo-900 text-sm w-full rounded-lg border-2 py-2 flex justify-center mt-3' />
          <Button text='Facdbook' Icon={<FaFacebook size={20} className='mr-[10px] text-[#1877F2]' />} classname='text-indigo-900 text-sm w-full rounded-lg border-2 py-2 flex justify-center mt-3' />
          <div className='text-center text-[14px] text-black w-full cursor-default'>
            {isLogin ? "Don't you have an account?" : "Already have an account?"}{' '}
            <a className='text-[#4193F6] cursor-pointer' onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign up" : "Log In"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

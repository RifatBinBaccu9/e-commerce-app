"use client";
import { ConfigProvider, Tabs } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { MdKeyboardArrowRight } from 'react-icons/md'
import SignIn from '../signin/page';
import SignUp from '../signup/page';

const LoginSignup = () => {
  const [isActive, setActive] = useState('1')
  return (
    <div className='loginSignup'>
        <div className=' bg-[#F2F4F5] py-[26px]'>
         <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <IoHomeOutline />
        <span>Home</span>
        </Link>
        <MdKeyboardArrowRight />
        <span>User Account</span>
        <MdKeyboardArrowRight />
        {
          isActive === "1" ? <span className='text-[#2DA5F3]'>Sign In</span> : <span className='text-[#2DA5F3]'>Sign Up</span>
        }
        </div>
        </div>

<div className='py-[100px] flex justify-center items-center select-none'>
<ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemActiveColor: "#000000",
            inkBarColor: "#FA8232",
          },
        },
      }}
    >
      <Tabs
        defaultActiveKey="1"
        onChange={(key) => setActive(key)}
        items={[
          {
            label: <span>Sign In</span>,
            key: "1",
            children: (<SignIn />),
          },
          {
            label: <span>Sign Up</span>,
            key: "3",
            children: (<SignUp />),
          },
        
        ]}
        className='!w-full'
      />
    </ConfigProvider>
</div>
     
    {/*  */}



  {/*  */}
    </div>
  )
}

export default LoginSignup
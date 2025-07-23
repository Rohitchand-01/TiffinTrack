'use client'
import React from 'react'
import { TbToolsKitchen2 } from 'react-icons/tb'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-2 px-8'>
      <div className='flex items-center gap-2 ml-8'>
          <TbToolsKitchen2 className='text-2xl' />
          <p className='text-xl'>TiffinTrack</p>
        </div>
        <div className='flex gap-8'>
          <p> Find Providers</p>
          <p>How It Works</p>
          <p>About</p>
        </div>
        <div className='flex gap-4'>
          <button className='px-4 py-1 rounded-2xl cursor-pointer'>
            Login as User
          </button>
          <button className='hover:bg-yellow-400 px-4 py-1 rounded-2xl hover:text-white text-black cursor-pointer'>
            Login as Provider
          </button>
        </div>
      </div>
  );
};

export default Navbar;
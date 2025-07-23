'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TbToolsKitchen2 } from 'react-icons/tb'

const Navbar = () => {
    const router = useRouter();
  return (
   <div className="fixed top-0 left-0 right-0 bg-white/40 backdrop-blur-sm shadow-md z-50">
  <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
    
    {/* Logo */}
    <div className="flex items-center gap-2">
      <TbToolsKitchen2 className="text-2xl text-yellow-500" onClick={() => router.push('/home')}/>
      <p className="text-xl font-semibold text-gray-800" onClick={() => router.push('/home')}>TiffinTrack</p>
    </div>

    {/* Nav Items */}
    <div className="hidden md:flex gap-8 text-gray-700 font-medium">
      <p className="cursor-pointer hover:text-yellow-500 transition" onClick={() => router.push('/provider')}>Find Providers</p>
      <p className="cursor-pointer hover:text-yellow-500 transition" onClick={() => router.push('/how-it-works')}>How It Works</p>
      <p className="cursor-pointer hover:text-yellow-500 transition" onClick={() => router.push('/about')}>About</p>
    </div>

    {/* Buttons */}
    <div className="flex gap-3">
      <button className="px-4 py-1 text-sm font-medium rounded-full border border-gray-300 hover:border-yellow-400 transition cursor-pointer">
        Login as User
      </button>
      <button className="px-4 py-1 text-sm font-medium rounded-full bg-yellow-400 text-white hover:bg-yellow-500 transition cursor-pointer">
        Login as Provider
      </button>
    </div>
  </div>
</div>

  );
};

export default Navbar;
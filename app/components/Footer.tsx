 'use client';
 import { TbToolsKitchen2 } from 'react-icons/tb'
 import { useRouter } from 'next/navigation';
 import { useEffect } from 'react';
const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 px-8 py-8 gap-12 place-items-center text-sm px-18 border-t border-b border-gray-200'>
        {/* Branding Section */}
        <div className='flex flex-col space-y-2 w-[250px]'>
          <div className='flex items-center gap-2'>
            <TbToolsKitchen2 className='text-xl text-yellow-500' />
            <p className='font-semibold text-base'>TiffinTrack</p>
          </div>
          <p className='text-gray-600 text-xs leading-relaxed'>
            Connecting students with quality tiffin services across the city.
            Fresh meals, delivered daily.
          </p>
        </div>

        {/* For Users */}
        <div className='flex flex-col space-y-1'>
          <p className='font-semibold mb-1'>For Users</p>
          <p className='text-gray-600 cursor-pointer'>Find Providers</p>
          <p className='text-gray-600 cursor-pointer' onClick={()=> router.push('/student/dashboard')}>My Dashboard</p>
          <p className='text-gray-600 cursor-pointer'>Subscriptions</p>
          <p className='text-gray-600 cursor-pointer'>Profile</p>
        </div>

        {/* For Providers */}
        <div className='flex flex-col space-y-1'>
          <p className='font-semibold mb-1 '>For Providers</p>
          <p className='text-gray-600 cursor-pointer' onClick={() => router.push('/provider/dashboard')}>Provider Dashboard</p>
          <p className='text-gray-600 cursor-pointer ' onClick={()=> router.push('/provider/orders')}>Manage Orders</p>
          <p className='text-gray-600 cursor-pointer' onClick={()=> router.push('/provider/menu')}>Update Menu</p>
          <p className='text-gray-600 cursor-pointer' onClick={()=> router.push('/provider/customers')}>Customer Management</p>
        </div>

        {/* Support */}
        <div className='flex flex-col space-y-1'>
          <p className='font-semibold mb-1'>Support</p>
          <p className='text-gray-600 cursor-pointer' onClick={()=> router.push('/contact')}>Contact Us</p>
          <p className='text-gray-600 cursor-pointer' onClick={()=> router.push('/faq')} >FAQ</p>
          <p className='text-gray-600 cursor-pointer' onClick={()=> router.push('/T&C')}>Terms of Service</p>
          <p className='text-gray-600 cursor-pointer' onClick={()=> router.push('/policy')}>Privacy Policy</p>
        </div>
      </div>
      <div className=' '>
        <p className='text-center text-gray-500 text-xs py-4'>
          © 2024 TiffinTrack. All rights reserved. Made with ❤️ for students and
          providers.
        </p>
      </div>
    </>
  )
}
export default Footer

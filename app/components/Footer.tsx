 import { TbToolsKitchen2 } from 'react-icons/tb'
const Footer = () => {
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
          <p className='text-gray-600'>Find Providers</p>
          <p className='text-gray-600'>My Dashboard</p>
          <p className='text-gray-600'>Subscriptions</p>
          <p className='text-gray-600'>Profile</p>
        </div>

        {/* For Providers */}
        <div className='flex flex-col space-y-1'>
          <p className='font-semibold mb-1'>For Providers</p>
          <p className='text-gray-600'>Provider Dashboard</p>
          <p className='text-gray-600'>Manage Orders</p>
          <p className='text-gray-600'>Update Menu</p>
          <p className='text-gray-600'>Customer Management</p>
        </div>

        {/* Support */}
        <div className='flex flex-col space-y-1'>
          <p className='font-semibold mb-1'>Support</p>
          <p className='text-gray-600'>Contact Us</p>
          <p className='text-gray-600'>FAQ</p>
          <p className='text-gray-600'>Terms of Service</p>
          <p className='text-gray-600'>Privacy Policy</p>
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

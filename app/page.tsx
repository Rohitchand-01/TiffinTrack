'use client';
import Image from 'next/image'
import { CiLocationOn } from 'react-icons/ci'
import { GrPlan } from 'react-icons/gr'
import { FaRegHeart } from 'react-icons/fa'
import { useState, useEffect, use } from 'react';


export default function Home () {
  useEffect(() => {
    document.title = "TiffinTrack";
  }, []); 
  return (
    <>
      <div className='relative w-full h-[681px] mt-13'>
        <Image
          src='/Hero.jpg'
          alt='TiffinTrack Logo'
          fill
          className='object-cover w-full h-full'
        />

        <div className='absolute inset-0 z-10 bg-gradient-to-r from-white/90 via-white/20 to-transparent'></div>

        <div className='absolute z-20 left-20 bottom-60 max-w-xl'>
          <h1 className='text-5xl font-bold text-gray-800 leading-tight'>
            Home-Style Tiffin <br />
            <span className=''>Services for Students</span>
          </h1>
          <p className='mt-4 text-lg '>
            Connect with trusted local tiffin providers offering fresh,
            home-cooked meals. Daily delivery, flexible subscriptions, and
            authentic flavors from home.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-1 mt-18'>
        <p className='text-2xl font-semibold'>Why Choose TiffinTrack?</p>
        <p className='text-gray-600'>
          Making daily meals simple and delicious for Users
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 p-8 place-items-center'>
        <div className='flex flex-col items-center justify-center gap-4 hover:shadow-2xl rounded-xl p-5 text-center max-w-xs'>
          <CiLocationOn size={32} />
          <p className='font-semibold'>Local Providers</p>
          <p className='text-gray-600'>
            Find verified tiffin services in your neighborhood with ratings and
            reviews from fellow students.
          </p>
        </div>

        <div className='flex flex-col items-center justify-center gap-4 hover:shadow-2xl rounded-xl p-5 text-center max-w-xs'>
          <GrPlan size={32} />
          <p className='font-semibold'>Flexible Plans</p>
          <p className='text-gray-600'>
            Choose from daily, weekly, or monthly subscriptions. Pause during
            holidays or breaks easily.
          </p>
        </div>

        <div className='flex flex-col items-center justify-center gap-4 hover:shadow-2xl rounded-xl p-5 text-center max-w-xs'>
          <div className='bg-yellow-100 p-2 rounded-full'>
            <FaRegHeart className='text-red-500' size={24} />
          </div>
          <p className='font-semibold'>Home-Style Cooking</p>
          <p className='text-gray-600'>
            Enjoy authentic, home-cooked meals prepared by experienced local
            cooks with love and care.
          </p>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-1 mt-18'>
        <p className='text-2xl font-semibold'>How TiffinTrack Works</p>
        <p className='text-gray-600'>
          Simple steps to get your daily tiffin delivered
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-12 p-8 gap-8 place-items-center'>
        {/* For Users */}
        <div className='w-full max-w-lg'>
          <p className='font-semibold text-2xl mb-6 text-center'>For Users</p>
          <ol className='space-y-6'>
            <li className='flex items-start'>
              <span className='text-l w-6 flex-shrink-0'>1.</span>
              <div className='ml-4'>
                <p className='font-semibold text-gray-800'>Set Your Location</p>
                <p className='text-sm text-gray-600'>
                  Enter your pincode or let us detect your location to find
                  nearby providers.
                </p>
              </div>
            </li>
            <li className='flex items-start'>
              <span className='text-l w-6 flex-shrink-0'>2.</span>
              <div className='ml-4'>
                <p className='font-semibold text-gray-800'>Browse & Compare</p>
                <p className='text-sm text-gray-600'>
                  View ratings, menus, and pricing from verified tiffin
                  providers in your area.
                </p>
              </div>
            </li>
            <li className='flex items-start'>
              <span className='text-l w-6 flex-shrink-0'>3.</span>
              <div className='ml-4'>
                <p className='font-semibold text-gray-800'>Subscribe & Enjoy</p>
                <p className='text-sm text-gray-600'>
                  Choose your plan, customize delivery schedule, and enjoy fresh
                  meals daily.
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* For Providers */}
        <div className='w-full max-w-lg'>
          <p className='font-semibold text-2xl mb-6 text-center'>
            For Providers
          </p>
          <ol className='space-y-6'>
            <li className='flex items-start'>
              <span className='text-l w-6 flex-shrink-0'>1.</span>
              <div className='ml-4'>
                <p className='font-semibold text-gray-800'>
                  Register Your Service
                </p>
                <p className='text-sm text-gray-600'>
                  Sign up with your business details and get verified by our
                  team.
                </p>
              </div>
            </li>
            <li className='flex items-start'>
              <span className='text-l w-6 flex-shrink-0'>2.</span>
              <div className='ml-4'>
                <p className='font-semibold text-gray-800'>Manage Your Menu</p>
                <p className='text-sm text-gray-600'>
                  Update daily menus, set pricing, and manage your service area.
                </p>
              </div>
            </li>
            <li className='flex items-start'>
              <span className='text-l w-6 flex-shrink-0'>3.</span>
              <div className='ml-4'>
                <p className='font-semibold text-gray-800'>Track Deliveries</p>
                <p className='text-sm text-gray-600'>
                  Get real-time updates on your tiffin deliveries and customer
                  feedback.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-1 mt-18'>
        <p className='text-2xl font-semibold'>
          Ready to Start Your Tiffin Journey?
        </p>
        <p className='text-gray-600'>
          Join thousands of students enjoying home-cooked meals daily
        </p>
      </div>
      <div className='flex justify-center gap-6 mt-2 p-8'>
        {/* For Users */}
        <button className='px-6 py-2  rounded-full hover:bg-yellow-400 hover:text-white'>
          Get started as a user
        </button>

        {/* For Providers */}
        <button className='px-6 py-2 border border-gray-300 rounded-full '>
          Register as a provider
        </button>
      </div>
      
    </>
  )
}

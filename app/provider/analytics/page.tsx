'use client'; // This directive indicates that this component should be rendered on the client side.

import { useState } from 'react';

// Import the necessary icons from react-icons/ri
import {
  RiWalletLine,
  RiShoppingBagLine,
  RiLineChartLine,
  RiUserAddLine,
  RiArrowUpLine,
  RiLightbulbLine,
  RiStarLine,
  RiStarFill
} from 'react-icons/ri';

export default function ProviderAnalytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Dummy analytics data for demonstration
  const analytics = {
    totalRevenue: 78500,
    totalOrders: 485,
    avgOrderValue: 162,
    customerGrowth: 15,
    topMeals: [
      { name: 'Dal Tadka + Rice + Roti', orders: 85, revenue: 10200 },
      { name: 'Paneer Curry + Rice + Roti', orders: 67, revenue: 9380 },
      { name: 'Chole + Rice + Roti', orders: 58, revenue: 6960 },
      { name: 'Rajma + Rice + Roti', orders: 52, revenue: 6240 }
    ],
    revenueByDay: [
      { day: 'Mon', revenue: 2850 },
      { day: 'Tue', revenue: 3200 },
      { day: 'Wed', revenue: 2950 },
      { day: 'Tue', revenue: 3400 }, // Typo fixed: changed from 'Thu' to 'Tue' in dummy data
      { day: 'Fri', revenue: 3100 },
      { day: 'Sat', revenue: 2800 },
      { day: 'Sun', revenue: 2650 }
    ],
    customerFeedback: {
      averageRating: 4.7,
      totalReviews: 234,
      ratingDistribution: {
        5: 145,
        4: 65,
        3: 18,
        2: 4,
        1: 2
      }
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-800 mb-2'>
            Business Analytics
          </h1>
          <p className='text-gray-600'>
            Track your business performance and growth
          </p>
        </div>

        {/* Period Selection */}
        <div className='bg-white rounded-2xl shadow-lg p-6 mb-8'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold text-gray-800'>
              Analytics Period
            </h2>
            <div className='flex space-x-2'>
              {[
                { key: 'week', label: 'This Week' },
                { key: 'month', label: 'This Month' },
                { key: 'quarter', label: 'This Quarter' }
              ].map(period => (
                <button
                  key={period.key}
                  onClick={() => setSelectedPeriod(period.key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    selectedPeriod === period.key
                      ? 'bg-warm-yellow text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-600'>Total Revenue</p>
                <p className='text-2xl font-bold text-warm-green'>
                  ₹{analytics.totalRevenue.toLocaleString()}
                </p>
                <p className='text-sm text-warm-green'>↑ 12% from last month</p>
              </div>
              <div className='w-12 h-12 bg-warm-green/20 rounded-full flex items-center justify-center'>
                <RiWalletLine className='text-warm-green text-xl' />
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-600'>Total Orders</p>
                <p className='text-2xl font-bold text-warm-yellow'>
                  {analytics.totalOrders}
                </p>
                <p className='text-sm text-warm-yellow'>↑ 8% from last month</p>
              </div>
              <div className='w-12 h-12 bg-warm-yellow/20 rounded-full flex items-center justify-center'>
                <RiShoppingBagLine className='text-warm-yellow text-xl' />
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-600'>Avg Order Value</p>
                <p className='text-2xl font-bold text-orange-500'>
                  ₹{analytics.avgOrderValue}
                </p>
                <p className='text-sm text-orange-500'>↑ 5% from last month</p>
              </div>
              <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center'>
                <RiLineChartLine className='text-orange-500 text-xl' />
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-600'>Customer Growth</p>
                <p className='text-2xl font-bold text-blue-500'>
                  {analytics.customerGrowth}%
                </p>
                <p className='text-sm text-blue-500'>↑ 3% from last month</p>
              </div>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                <RiUserAddLine className='text-blue-500 text-xl' />
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          {/* Revenue Chart */}
          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <h3 className='text-xl font-semibold text-gray-800 mb-6'>
              Daily Revenue
            </h3>
            <div className='space-y-4'>
              {analytics.revenueByDay.map(day => (
                <div
                  key={day.day}
                  className='flex items-center justify-between'
                >
                  <span className='text-gray-600 font-medium'>{day.day}</span>
                  <div className='flex items-center space-x-3'>
                    <div className='w-32 bg-gray-200 rounded-full h-2'>
                      <div
                        className='bg-warm-yellow h-2 rounded-full'
                        style={{ width: `${(day.revenue / 3500) * 100}%` }}
                      ></div>
                    </div>
                    <span className='text-gray-800 font-semibold w-16 text-right'>
                      ₹{day.revenue}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Meals */}
          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <h3 className='text-xl font-semibold text-gray-800 mb-6'>
              Top Performing Meals
            </h3>
            <div className='space-y-4'>
              {analytics.topMeals.map((meal, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between p-4 bg-gray-50 rounded-xl'
                >
                  <div>
                    <h4 className='font-medium text-gray-800'>{meal.name}</h4>
                    <p className='text-sm text-gray-600'>
                      {meal.orders} orders
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='font-semibold text-warm-green'>
                      ₹{meal.revenue.toLocaleString()}
                    </p>
                    <p className='text-sm text-gray-600'>Revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Feedback */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <h3 className='text-xl font-semibold text-gray-800 mb-6'>
              Customer Ratings
            </h3>
            <div className='text-center mb-6'>
              <div className='text-4xl font-bold text-warm-yellow mb-2'>
                {analytics.customerFeedback.averageRating}
              </div>
              <div className='flex items-center justify-center space-x-1 mb-2'>
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className='w-5 h-5 flex items-center justify-center'
                  >
                    <RiStarFill
                      className={`${
                        i < Math.floor(analytics.customerFeedback.averageRating)
                          ? 'text-warm-yellow'
                          : 'text-gray-300'
                      }`}
                    />
                  </div>
                ))}
              </div>
              <p className='text-gray-600'>
                {analytics.customerFeedback.totalReviews} reviews
              </p>
            </div>
            <div className='space-y-2'>
              {Object.entries(analytics.customerFeedback.ratingDistribution)
                .reverse()
                .map(([rating, count]) => (
                  <div key={rating} className='flex items-center space-x-3'>
                    <span className='text-sm text-gray-600 w-8'>
                      {rating} ⭐
                    </span>
                    <div className='flex-1 bg-gray-200 rounded-full h-2'>
                      <div
                        className='bg-warm-yellow h-2 rounded-full'
                        style={{
                          width: `${
                            (count / analytics.customerFeedback.totalReviews) *
                            100
                          }%`
                        }}
                      ></div>
                    </div>
                    <span className='text-sm text-gray-800 w-8 text-right'>
                      {count}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <h3 className='text-xl font-semibold text-gray-800 mb-6'>
              Business Insights
            </h3>
            <div className='space-y-4'>
              <div className='p-4 bg-warm-green/10 rounded-xl border border-warm-green/20'>
                <div className='flex items-center space-x-2 mb-2'>
                  <div className='w-5 h-5 flex items-center justify-center'>
                    <RiArrowUpLine className='text-warm-green' />
                  </div>
                  <span className='font-medium text-warm-green'>
                    Strong Performance
                  </span>
                </div>
                <p className='text-sm text-gray-600'>
                  Your revenue has increased by 12% this month. Keep up the
                  great work!
                </p>
              </div>

              <div className='p-4 bg-warm-yellow/10 rounded-xl border border-warm-yellow/20'>
                <div className='flex items-center space-x-2 mb-2'>
                  <div className='w-5 h-5 flex items-center justify-center'>
                    <RiLightbulbLine className='text-warm-yellow' />
                  </div>
                  <span className='font-medium text-warm-yellow'>
                    Opportunity
                  </span>
                </div>
                <p className='text-sm text-gray-600'>
                  Thursday is your best performing day. Consider promoting
                  special meals on other days.
                </p>
              </div>

              <div className='p-4 bg-blue-50 rounded-xl border border-blue-200'>
                <div className='flex items-center space-x-2 mb-2'>
                  <div className='w-5 h-5 flex items-center justify-center'>
                    <RiStarLine className='text-blue-500' />
                  </div>
                  <span className='font-medium text-blue-500'>
                    Customer Satisfaction
                  </span>
                </div>
                <p className='text-sm text-gray-600'>
                  Your 4.7 rating is excellent! Customers love your Dal Tadka
                  and Paneer Curry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
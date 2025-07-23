'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function ProviderDashboard () {
  const [activeTab, setActiveTab] = useState('overview')

  const todaysOrders = [
    {
      id: 1,
      customer: 'Priya Sharma',
      address: 'A-102, Sector 15, Noida',
      meal: 'Lunch',
      items: 'Dal Tadka, Jeera Rice, Roti, Aloo Sabzi',
      time: '12:30 PM',
      status: 'Delivered',
      phone: '+91 9876543210'
    },
    {
      id: 2,
      customer: 'Rahul Kumar',
      address: 'B-205, Sector 18, Noida',
      meal: 'Dinner',
      items: 'Chole, Rice, Roti, Bhindi Masala',
      time: '7:00 PM',
      status: 'Preparing',
      phone: '+91 9876543211'
    },
    {
      id: 3,
      customer: 'Anjali Patel',
      address: 'C-301, Sector 22, Noida',
      meal: 'Lunch',
      items: 'Rajma, Roti, Rice, Mixed Veg',
      time: '1:00 PM',
      status: 'Ready',
      phone: '+91 9876543212'
    }
  ]

  const activeSubscriptions = [
    {
      id: 1,
      customer: 'Priya Sharma',
      plan: 'Monthly',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      remainingMeals: 18,
      totalMeals: 30,
      revenue: '₹3200'
    },
    {
      id: 2,
      customer: 'Rahul Kumar',
      plan: 'Weekly',
      startDate: '2024-01-20',
      endDate: '2024-01-27',
      remainingMeals: 2,
      totalMeals: 7,
      revenue: '₹900'
    },
    {
      id: 3,
      customer: 'Anjali Patel',
      plan: 'Monthly',
      startDate: '2024-01-10',
      endDate: '2024-02-10',
      remainingMeals: 25,
      totalMeals: 30,
      revenue: '₹3200'
    }
  ]

  const updateOrderStatus = (orderId: number, newStatus: string) => {
    // Handle status update logic
    console.log(`Order ${orderId} updated to ${newStatus}`)
  }

  return (
    <div className=' bg-gray-50 mt-13 '>
      <div className='container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-800 mb-2'>
            Provider Dashboard
          </h1>
          <p className='text-gray-600'>
            Welcome back! Manage your tiffin service and track your business.
          </p>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-600'>Today's Orders</p>
                <p className='text-2xl font-bold text-warm-yellow'>12</p>
              </div>
              <div className='w-12 h-12 bg-warm-yellow/20 rounded-full flex items-center justify-center'>
                <i className='ri-shopping-bag-line text-warm-yellow text-xl'></i>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-600'>Active Customers</p>
                <p className='text-2xl font-bold text-warm-green'>45</p>
              </div>
              <div className='w-12 h-12 bg-warm-green/20 rounded-full flex items-center justify-center'>
                <i className='ri-user-line text-warm-green text-xl'></i>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-600'>Monthly Revenue</p>
                <p className='text-2xl font-bold text-orange-500'>₹78,500</p>
              </div>
              <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center'>
                <i className='ri-wallet-line text-orange-500 text-xl'></i>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-600'>Avg Rating</p>
                <p className='text-2xl font-bold text-blue-500'>4.8</p>
              </div>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                <i className='ri-star-line text-blue-500 text-xl'></i>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className='flex space-x-1 bg-white/80 backdrop-blur-sm rounded-full p-1 w-fit mb-8'>
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'orders', label: "Today's Orders" },
            { id: 'customers', label: 'Active Customers' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-warm-green text-white'
                  : 'text-gray-600 hover:text-warm-green'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Main Content */}
            <div className='lg:col-span-2'>
              {/* Quick Actions */}
              <div className='bg-white rounded-2xl shadow-lg p-6 mb-6'>
                <h2 className='text-xl font-semibold text-gray-800 mb-4'>
                  Quick Actions
                </h2>
                <div className='grid grid-cols-2 gap-4'>
                  <Link
                    href='/provider/menu'
                    className='flex items-center space-x-3 p-4 bg-warm-yellow/10 rounded-xl hover:bg-warm-yellow/20 transition-colors cursor-pointer'
                  >
                    <div className='w-10 h-10 bg-warm-yellow/20 rounded-full flex items-center justify-center'>
                      <i className='ri-restaurant-line text-warm-yellow'></i>
                    </div>
                    <span className='font-medium text-gray-800'>
                      Update Menu
                    </span>
                  </Link>

                  <Link
                    href='/provider/orders'
                    className='flex items-center space-x-3 p-4 bg-warm-green/10 rounded-xl hover:bg-warm-green/20 transition-colors cursor-pointer'
                  >
                    <div className='w-10 h-10 bg-warm-green/20 rounded-full flex items-center justify-center'>
                      <i className='ri-list-check text-warm-green'></i>
                    </div>
                    <span className='font-medium text-gray-800'>
                      View Orders
                    </span>
                  </Link>

                  <Link
                    href='/provider/customers'
                    className='flex items-center space-x-3 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors cursor-pointer'
                  >
                    <div className='w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center'>
                      <i className='ri-user-settings-line text-orange-500'></i>
                    </div>
                    <span className='font-medium text-gray-800'>
                      Manage Customers
                    </span>
                  </Link>

                  <Link
                    href='/provider/analytics'
                    className='flex items-center space-x-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer'
                  >
                    <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
                      <i className='ri-bar-chart-line text-blue-500'></i>
                    </div>
                    <span className='font-medium text-gray-800'>
                      View Analytics
                    </span>
                  </Link>
                </div>
              </div>

              {/* Recent Orders */}
              <div className='bg-white rounded-2xl shadow-lg p-6'>
                <h2 className='text-xl font-semibold text-gray-800 mb-4'>
                  Recent Orders
                </h2>
                <div className='space-y-4'>
                  {todaysOrders.slice(0, 3).map(order => (
                    <div
                      key={order.id}
                      className='flex items-center justify-between p-4 bg-gray-50 rounded-xl'
                    >
                      <div className='flex items-center space-x-4'>
                        <div className='w-10 h-10 bg-warm-green/20 rounded-full flex items-center justify-center'>
                          <i className='ri-user-line text-warm-green'></i>
                        </div>
                        <div>
                          <h3 className='font-semibold text-gray-800'>
                            {order.customer}
                          </h3>
                          <p className='text-sm text-gray-600'>
                            {order.meal} • {order.time}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.status === 'Delivered'
                            ? 'bg-warm-green/20 text-warm-green'
                            : order.status === 'Ready'
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-warm-yellow/20 text-warm-yellow'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className='space-y-6'>
              {/* Today's Summary */}
              <div className='bg-white rounded-2xl shadow-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                  Today's Summary
                </h3>
                <div className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-600'>Prepared</span>
                    <span className='font-semibold text-warm-green'>8</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-600'>Ready</span>
                    <span className='font-semibold text-blue-500'>2</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-600'>Delivered</span>
                    <span className='font-semibold text-warm-yellow'>10</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-600'>Revenue</span>
                    <span className='font-semibold text-orange-500'>
                      ₹1,850
                    </span>
                  </div>
                </div>
              </div>

              {/* Business Stats */}
              <div className='bg-white rounded-2xl shadow-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                  Business Growth
                </h3>
                <div className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-600'>New Customers</span>
                    <span className='font-semibold text-warm-green'>+3</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-600'>
                      Monthly Growth
                    </span>
                    <span className='font-semibold text-blue-500'>+15%</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-600'>Reviews</span>
                    <span className='font-semibold text-warm-yellow'>
                      4.8 ⭐
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className='space-y-6'>
            {todaysOrders.map(order => (
              <div
                key={order.id}
                className='bg-white rounded-2xl shadow-lg p-6'
              >
                <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
                  <div className='flex-1'>
                    <div className='flex items-center space-x-4 mb-3'>
                      <h3 className='text-xl font-semibold text-gray-800'>
                        {order.customer}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.status === 'Delivered'
                            ? 'bg-warm-green/20 text-warm-green'
                            : order.status === 'Ready'
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-warm-yellow/20 text-warm-yellow'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                      <div>
                        <p className='text-sm text-gray-600'>Address</p>
                        <p className='font-medium text-sm'>{order.address}</p>
                      </div>
                      <div>
                        <p className='text-sm text-gray-600'>Meal & Time</p>
                        <p className='font-medium'>
                          {order.meal} • {order.time}
                        </p>
                      </div>
                      <div>
                        <p className='text-sm text-gray-600'>Items</p>
                        <p className='font-medium text-sm'>{order.items}</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <div className='w-4 h-4 flex items-center justify-center'>
                        <i className='ri-phone-line text-gray-500'></i>
                      </div>
                      <span className='text-sm text-gray-600'>
                        {order.phone}
                      </span>
                    </div>
                  </div>
                  <div className='flex space-x-2 mt-4 lg:mt-0'>
                    {order.status === 'Preparing' && (
                      <button
                        onClick={() => updateOrderStatus(order.id, 'Ready')}
                        className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap cursor-pointer'
                      >
                        Mark Ready
                      </button>
                    )}
                    {order.status === 'Ready' && (
                      <button
                        onClick={() => updateOrderStatus(order.id, 'Delivered')}
                        className='px-4 py-2 bg-warm-green text-white rounded-lg hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer'
                      >
                        Mark Delivered
                      </button>
                    )}
                    <button className='px-4 py-2 text-warm-yellow border border-warm-yellow rounded-lg hover:bg-warm-yellow hover:text-white transition-colors whitespace-nowrap cursor-pointer'>
                      Call Customer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'customers' && (
          <div className='space-y-6'>
            {activeSubscriptions.map(subscription => (
              <div
                key={subscription.id}
                className='bg-white rounded-2xl shadow-lg p-6'
              >
                <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
                  <div className='flex-1'>
                    <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                      {subscription.customer}
                    </h3>
                    <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 mb-4'>
                      <div>
                        <p className='text-sm text-gray-600'>Plan</p>
                        <p className='font-medium'>{subscription.plan}</p>
                      </div>
                      <div>
                        <p className='text-sm text-gray-600'>Revenue</p>
                        <p className='font-medium'>{subscription.revenue}</p>
                      </div>
                      <div>
                        <p className='text-sm text-gray-600'>Remaining</p>
                        <p className='font-medium'>
                          {subscription.remainingMeals}/
                          {subscription.totalMeals}
                        </p>
                      </div>
                      <div>
                        <p className='text-sm text-gray-600'>Start Date</p>
                        <p className='font-medium'>{subscription.startDate}</p>
                      </div>
                      <div>
                        <p className='text-sm text-gray-600'>End Date</p>
                        <p className='font-medium'>{subscription.endDate}</p>
                      </div>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-2'>
                      <div
                        className='bg-warm-green h-2 rounded-full'
                        style={{
                          width: `${
                            ((subscription.totalMeals -
                              subscription.remainingMeals) /
                              subscription.totalMeals) *
                            100
                          }%`
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className='flex space-x-2 mt-4 lg:mt-0'>
                    <button className='px-4 py-2 text-warm-green border border-warm-green rounded-lg hover:bg-warm-green hover:text-white transition-colors whitespace-nowrap cursor-pointer'>
                      View Profile
                    </button>
                    <button className='px-4 py-2 bg-warm-yellow text-white rounded-lg hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer'>
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

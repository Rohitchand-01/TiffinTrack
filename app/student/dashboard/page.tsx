'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const currentSubscriptions = [
    {
      id: 1,
      provider: "Sharma's Home Kitchen",
      plan: "Monthly",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      status: "Active",
      price: "₹3200",
      mealsLeft: 18,
      totalMeals: 30
    },
    {
      id: 2,
      provider: "Aunty's Tiffin Service",
      plan: "Weekly",
      startDate: "2024-01-20",
      endDate: "2024-01-27",
      status: "Expiring Soon",
      price: "₹900",
      mealsLeft: 2,
      totalMeals: 7
    }
  ];

  const recentOrders = [
    {
      id: 1,
      provider: "Sharma's Home Kitchen",
      date: "2024-01-25",
      meal: "Lunch",
      status: "Delivered",
      items: "Dal Tadka, Jeera Rice, Roti, Aloo Sabzi"
    },
    {
      id: 2,
      provider: "Aunty's Tiffin Service",
      date: "2024-01-25",
      meal: "Dinner",
      status: "Preparing",
      items: "Chole, Rice, Roti, Bhindi Masala"
    },
    {
      id: 3,
      provider: "Sharma's Home Kitchen",
      date: "2024-01-24",
      meal: "Lunch",
      status: "Delivered",
      items: "Rajma, Roti, Rice, Mixed Veg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-13">
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Student Dashboard</h1>
          <p className="text-gray-600">Welcome back, Priya! Manage your tiffin subscriptions and orders.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Subscriptions</p>
                <p className="text-2xl font-bold text-warm-yellow">2</p>
              </div>
              <div className="w-12 h-12 bg-warm-yellow/20 rounded-full flex items-center justify-center">
                <i className="ri-restaurant-line text-warm-yellow text-xl"></i>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Meals Remaining</p>
                <p className="text-2xl font-bold text-warm-green">20</p>
              </div>
              <div className="w-12 h-12 bg-warm-green/20 rounded-full flex items-center justify-center">
                <i className="ri-bowl-line text-warm-green text-xl"></i>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month Spent</p>
                <p className="text-2xl font-bold text-orange-500">₹4100</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="ri-wallet-line text-orange-500 text-xl"></i>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-blue-500">47</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-shopping-bag-line text-blue-500 text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-white/80 backdrop-blur-sm rounded-full p-1 w-fit mb-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'subscriptions', label: 'Subscriptions' },
            { id: 'orders', label: 'Recent Orders' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-warm-yellow text-white'
                  : 'text-gray-600 hover:text-warm-yellow'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Today's Meals */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Today's Meals</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-warm-yellow/10 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-warm-yellow/20 rounded-full flex items-center justify-center">
                        <i className="ri-sun-line text-warm-yellow text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Lunch</h3>
                        <p className="text-sm text-gray-600">Sharma's Home Kitchen</p>
                        <p className="text-xs text-gray-500">Dal Tadka, Jeera Rice, Roti, Aloo Sabzi</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-warm-green/20 text-warm-green text-sm rounded-full">Delivered</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <i className="ri-moon-line text-orange-500 text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Dinner</h3>
                        <p className="text-sm text-gray-600">Aunty's Tiffin Service</p>
                        <p className="text-xs text-gray-500">Chole, Rice, Roti, Bhindi Masala</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-warm-yellow/20 text-warm-yellow text-sm rounded-full">Preparing</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/providers" className="flex items-center space-x-3 p-4 bg-warm-yellow/10 rounded-xl hover:bg-warm-yellow/20 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-warm-yellow/20 rounded-full flex items-center justify-center">
                      <i className="ri-search-line text-warm-yellow"></i>
                    </div>
                    <span className="font-medium text-gray-800">Find Providers</span>
                  </Link>
                  
                  <Link href="/student/profile" className="flex items-center space-x-3 p-4 bg-warm-green/10 rounded-xl hover:bg-warm-green/20 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-warm-green/20 rounded-full flex items-center justify-center">
                      <i className="ri-user-line text-warm-green"></i>
                    </div>
                    <span className="font-medium text-gray-800">Edit Profile</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Subscription Status */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Subscription Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Active Plans</span>
                    <span className="font-semibold text-warm-yellow">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Expiring Soon</span>
                    <span className="font-semibold text-orange-500">1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Saved</span>
                    <span className="font-semibold text-warm-green">₹850</span>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <Link href="/contact" className="flex items-center space-x-3 text-gray-600 hover:text-warm-yellow transition-colors cursor-pointer">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className="ri-customer-service-line"></i>
                    </div>
                    <span>Contact Support</span>
                  </Link>
                  <Link href="/faq" className="flex items-center space-x-3 text-gray-600 hover:text-warm-yellow transition-colors cursor-pointer">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className="ri-question-line"></i>
                    </div>
                    <span>FAQs</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'subscriptions' && (
          <div className="space-y-6">
            {currentSubscriptions.map((subscription) => (
              <div key={subscription.id} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">{subscription.provider}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        subscription.status === 'Active' 
                          ? 'bg-warm-green/20 text-warm-green' 
                          : 'bg-orange-100 text-orange-500'
                      }`}>
                        {subscription.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Plan</p>
                        <p className="font-medium">{subscription.plan}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Price</p>
                        <p className="font-medium">{subscription.price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Meals Left</p>
                        <p className="font-medium">{subscription.mealsLeft}/{subscription.totalMeals}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">End Date</p>
                        <p className="font-medium">{subscription.endDate}</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-warm-yellow h-2 rounded-full" 
                        style={{ width: `${(subscription.mealsLeft / subscription.totalMeals) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4 md:mt-0">
                    <button className="px-4 py-2 text-warm-yellow border border-warm-yellow rounded-lg hover:bg-warm-yellow hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                      Pause
                    </button>
                    <button className="px-4 py-2 bg-warm-yellow text-white rounded-lg hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer">
                      Renew
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{order.provider}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'Delivered' 
                          ? 'bg-warm-green/20 text-warm-green' 
                          : 'bg-warm-yellow/20 text-warm-yellow'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Date</p>
                        <p className="font-medium">{order.date}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Meal</p>
                        <p className="font-medium">{order.meal}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Items</p>
                        <p className="font-medium text-sm">{order.items}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button className="px-4 py-2 text-warm-yellow border border-warm-yellow rounded-lg hover:bg-warm-yellow hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                      Rate Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
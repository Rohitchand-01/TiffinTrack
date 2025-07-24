'use client';

import { useState } from 'react';

// Import the necessary icons from react-icons/ri
import { RiSearchLine, RiUserLine, RiCheckboxCircleLine, RiPauseCircleLine, RiWalletLine, RiMailLine, RiPhoneLine, RiMapPinLine, RiStarFill } from 'react-icons/ri';

export default function ProviderCustomers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const customers = [
    {
      id: 1,
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 9876543210',
      address: 'A-102, Sector 15, Noida',
      subscriptionPlan: 'Monthly',
      subscriptionStatus: 'active',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      totalOrders: 45,
      totalRevenue: 3200,
      lastOrder: '2024-01-25',
      rating: 4.8,
      preferences: 'Vegetarian, No Spicy',
      avatar: 'https://readdy.ai/api/search-image?query=Indian%20young%20woman%20student%20smiling%20portrait%20professional%20headshot%20simple%20background&width=60&height=60&seq=customer1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      email: 'rahul.kumar@email.com',
      phone: '+91 9876543211',
      address: 'B-205, Sector 18, Noida',
      subscriptionPlan: 'Weekly',
      subscriptionStatus: 'active',
      startDate: '2024-01-20',
      endDate: '2024-01-27',
      totalOrders: 12,
      totalRevenue: 900,
      lastOrder: '2024-01-25',
      rating: 4.6,
      preferences: 'Non-Vegetarian, Medium Spicy',
      avatar: 'https://readdy.ai/api/search-image?query=Indian%20young%20man%20student%20smiling%20portrait%20professional%20headshot%20simple%20background&width=60&height=60&seq=customer2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Anjali Patel',
      email: 'anjali.patel@email.com',
      phone: '+91 9876543212',
      address: 'C-301, Sector 22, Noida',
      subscriptionPlan: 'Monthly',
      subscriptionStatus: 'paused',
      startDate: '2024-01-10',
      endDate: '2024-02-10',
      totalOrders: 35,
      totalRevenue: 2800,
      lastOrder: '2024-01-22',
      rating: 4.9,
      preferences: 'Jain, No Onion/Garlic',
      avatar: 'https://readdy.ai/api/search-image?query=Indian%20young%20woman%20student%20smiling%20portrait%20professional%20headshot%20simple%20background&width=60&height=60&seq=customer3&orientation=squarish'
    },
    {
      id: 4,
      name: 'Vikash Singh',
      email: 'vikash.singh@email.com',
      phone: '+91 9876543213',
      address: 'D-404, Sector 12, Noida',
      subscriptionPlan: 'Daily',
      subscriptionStatus: 'expired',
      startDate: '2024-01-18',
      endDate: '2024-01-24',
      totalOrders: 6,
      totalRevenue: 840,
      lastOrder: '2024-01-24',
      rating: 4.2,
      preferences: 'Vegetarian, Less Oil',
      avatar: 'https://readdy.ai/api/search-image?query=Indian%20young%20man%20student%20smiling%20portrait%20professional%20headshot%20simple%20background&width=60&height=60&seq=customer4&orientation=squarish'
    }
  ];

  // Define color mapping for subscription statuses
  const statusColors = {
    active: 'bg-warm-green/20 text-warm-green',
    paused: 'bg-warm-yellow/20 text-warm-yellow',
    expired: 'bg-red-100 text-red-600'
  };

  // Filter customers based on search term and selected status
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          customer.phone.includes(searchTerm);
    const matchesStatus = filterStatus === 'all' || customer.subscriptionStatus === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 mt-13">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Customer Management</h1>
          <p className="text-gray-600">Manage your customers and their subscriptions</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Customers</label>
              <div className="relative">
                {/* Search icon */}
                <div className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                  <RiSearchLine className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50 pr-8"
              >
                <option value="all">All Customers</option>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="expired">Expired</option>
              </select>
            </div>
          </div>
        </div>

        {/* Customer Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total Customers Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Customers</p>
                <p className="text-2xl font-bold text-gray-800">{customers.length}</p>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <RiUserLine className="text-gray-600 text-xl" />
              </div>
            </div>
          </div>
          
          {/* Active Customers Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active</p>
                <p className="text-2xl font-bold text-warm-green">{customers.filter(c => c.subscriptionStatus === 'active').length}</p>
              </div>
              <div className="w-12 h-12 bg-warm-green/20 rounded-full flex items-center justify-center">
                <RiCheckboxCircleLine className="text-warm-green text-xl" />
              </div>
            </div>
          </div>
          
          {/* Paused Customers Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Paused</p>
                <p className="text-2xl font-bold text-warm-yellow">{customers.filter(c => c.subscriptionStatus === 'paused').length}</p>
              </div>
              <div className="w-12 h-12 bg-warm-yellow/20 rounded-full flex items-center justify-center">
                <RiPauseCircleLine className="text-warm-yellow text-xl" />
              </div>
            </div>
          </div>
          
          {/* Total Revenue Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-orange-500">₹{customers.reduce((sum, c) => sum + c.totalRevenue, 0).toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <RiWalletLine className="text-orange-500 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Customers List Section */}
        <div className="space-y-6">
          {filteredCustomers.map((customer) => (
            <div key={customer.id} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex items-start space-x-4">
                  {/* Customer Avatar */}
                  <img
                    src={customer.avatar}
                    alt={customer.name}
                    className="w-16 h-16 rounded-full object-cover object-top"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{customer.name}</h3>
                      {/* Subscription Status Badge */}
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[customer.subscriptionStatus as keyof typeof statusColors]}`}>
                        {customer.subscriptionStatus.charAt(0).toUpperCase() + customer.subscriptionStatus.slice(1)}
                      </span>
                    </div>
                    {/* Contact Information */}
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <RiMailLine />
                        </div>
                        <span>{customer.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <RiPhoneLine />
                        </div>
                        <span>{customer.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <RiMapPinLine />
                        </div>
                        <span>{customer.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Customer Details */}
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Plan</p>
                    <p className="font-medium text-gray-800">{customer.subscriptionPlan}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                    <p className="font-medium text-gray-800">{customer.totalOrders}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Revenue</p>
                    <p className="font-medium text-warm-green">₹{customer.totalRevenue.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Rating</p>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <RiStarFill className="text-warm-yellow text-sm" />
                      </div>
                      <span className="font-medium text-gray-800">{customer.rating}</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col space-y-2 lg:w-48">
                  <button className="bg-warm-yellow text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer">
                    Send Message
                  </button>
                  <button className="border border-warm-green text-warm-green px-4 py-2 rounded-lg font-medium hover:bg-warm-green hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                    View Orders
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
                    Call Customer
                  </button>
                </div>
              </div>
              
              {/* Additional Customer Information */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Subscription:</span>
                    <span className="ml-2 font-medium">{customer.startDate} to {customer.endDate}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Last Order:</span>
                    <span className="ml-2 font-medium">{customer.lastOrder}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Preferences:</span>
                    <span className="ml-2 font-medium">{customer.preferences}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Customers Found Message */}
        {filteredCustomers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RiUserLine className="text-gray-400 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Customers Found</h3>
            <p className="text-gray-600">No customers match your search criteria.</p>
          </div>
        )}
      </div>

    </div>
  );
}
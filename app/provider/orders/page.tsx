
'use client';

import { useState } from 'react';

export default function ProviderOrders() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [filterStatus, setFilterStatus] = useState('all');

  const orders = [
    {
      id: 1,
      customer: 'Priya Sharma',
      address: 'A-102, Sector 15, Noida',
      phone: '+91 9876543210',
      meal: 'Lunch',
      items: 'Dal Tadka, Jeera Rice, Roti, Aloo Sabzi, Salad',
      orderTime: '10:30 AM',
      deliveryTime: '12:30 PM',
      status: 'delivered',
      amount: 120,
      rating: 5
    },
    {
      id: 2,
      customer: 'Rahul Kumar',
      address: 'B-205, Sector 18, Noida',
      phone: '+91 9876543211',
      meal: 'Dinner',
      items: 'Chole, Rice, Roti, Bhindi Masala, Pickle',
      orderTime: '5:00 PM',
      deliveryTime: '7:00 PM',
      status: 'preparing',
      amount: 130,
      rating: null
    },
    {
      id: 3,
      customer: 'Anjali Patel',
      address: 'C-301, Sector 22, Noida',
      phone: '+91 9876543212',
      meal: 'Lunch',
      items: 'Kadhi Chawal, Roti, Aloo Gobi, Papad',
      orderTime: '11:00 AM',
      deliveryTime: '1:00 PM',
      status: 'ready',
      amount: 120,
      rating: null
    },
    {
      id: 4,
      customer: 'Vikash Singh',
      address: 'D-404, Sector 12, Noida',
      phone: '+91 9876543213',
      meal: 'Dinner',
      items: 'Paneer Curry, Roti, Rice, Green Beans, Curd',
      orderTime: '6:00 PM',
      deliveryTime: '8:00 PM',
      status: 'cancelled',
      amount: 140,
      rating: null
    }
  ];

  const statusColors = {
    preparing: 'bg-warm-yellow/20 text-warm-yellow',
    ready: 'bg-blue-100 text-blue-600',
    delivered: 'bg-warm-green/20 text-warm-green',
    cancelled: 'bg-red-100 text-red-600'
  };

  const statusIcons = {
    preparing: 'ri-restaurant-line',
    ready: 'ri-checkbox-circle-line',
    delivered: 'ri-truck-line',
    cancelled: 'ri-close-circle-line'
  };

  const updateOrderStatus = (orderId: number, newStatus: string) => {
    console.log(`Order ${orderId} updated to ${newStatus}`);
  };

  const filteredOrders = orders.filter(order => 
    filterStatus === 'all' || order.status === filterStatus
  );

  return (
    <div className="min-h-screen bg-gray-50 mt-13">
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Management</h1>
          <p className="text-gray-600">Track and manage your daily orders</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50 pr-8"
              >
                <option value="all">All Orders</option>
                <option value="preparing">Preparing</option>
                <option value="ready">Ready</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-800">{orders.length}</p>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <i className="ri-shopping-bag-line text-gray-600 text-xl"></i>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Preparing</p>
                <p className="text-2xl font-bold text-warm-yellow">{orders.filter(o => o.status === 'preparing').length}</p>
              </div>
              <div className="w-12 h-12 bg-warm-yellow/20 rounded-full flex items-center justify-center">
                <i className="ri-restaurant-line text-warm-yellow text-xl"></i>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ready</p>
                <p className="text-2xl font-bold text-blue-500">{orders.filter(o => o.status === 'ready').length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-checkbox-circle-line text-blue-500 text-xl"></i>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Delivered</p>
                <p className="text-2xl font-bold text-warm-green">{orders.filter(o => o.status === 'delivered').length}</p>
              </div>
              <div className="w-12 h-12 bg-warm-green/20 rounded-full flex items-center justify-center">
                <i className="ri-truck-line text-warm-green text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{order.customer}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status as keyof typeof statusColors]}`}>
                        <i className={`${statusIcons[order.status as keyof typeof statusIcons]} mr-1`}></i>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                      <span className="text-lg font-bold text-warm-green">₹{order.amount}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Address</p>
                      <p className="font-medium text-gray-800">{order.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <p className="font-medium text-gray-800">{order.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Order Time</p>
                      <p className="font-medium text-gray-800">{order.orderTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Delivery Time</p>
                      <p className="font-medium text-gray-800">{order.deliveryTime}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Items ({order.meal})</p>
                    <p className="text-gray-800">{order.items}</p>
                  </div>
                  
                  {order.rating && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Customer Rating:</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-4 h-4 flex items-center justify-center">
                            <i className={`ri-star-fill text-sm ${i < order.rating! ? 'text-warm-yellow' : 'text-gray-300'}`}></i>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col space-y-2 lg:w-48">
                  {order.status === 'preparing' && (
                    <button
                      onClick={() => updateOrderStatus(order.id, 'ready')}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Mark Ready
                    </button>
                  )}
                  {order.status === 'ready' && (
                    <button
                      onClick={() => updateOrderStatus(order.id, 'delivered')}
                      className="bg-warm-green text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Mark Delivered
                    </button>
                  )}
                  <button className="border border-warm-yellow text-warm-yellow px-4 py-2 rounded-lg font-medium hover:bg-warm-yellow hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                    Call Customer
                  </button>
                  {order.status === 'delivered' && (
                    <button className="border border-warm-green text-warm-green px-4 py-2 rounded-lg font-medium hover:bg-warm-green hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shopping-bag-line text-gray-400 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Orders Found</h3>
            <p className="text-gray-600">No orders found for the selected date and status filter.</p>
          </div>
        )}
      </div>
    </div>

  );
}

'use client';
import Link from 'next/link';
import { useState } from 'react';

interface ProviderDetailProps {
  providerId: string;
}

export default function ProviderDetail({ providerId }: ProviderDetailProps) {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [activeTab, setActiveTab] = useState('menu');

  const provider = {
    id: providerId,
    name: "Sharma's Home Kitchen",
    rating: 4.8,
    reviews: 234,
    location: "Sector 15, Noida",
    phone: "+91 9876543210",
    image: "https://readdy.ai/api/search-image?query=Indian%20home%20kitchen%20with%20fresh%20vegetables%20and%20traditional%20cooking%20setup%20warm%20lighting%20cozy%20atmosphere%20homemade%20food%20preparation%20healthy%20ingredients%20on%20wooden%20countertop&width=600&height=400&seq=providerdetail1&orientation=landscape",
    description: "We provide authentic home-style meals prepared with fresh ingredients and traditional recipes. Our kitchen follows strict hygiene standards and we use only quality ingredients sourced from local markets.",
    specialties: ["North Indian", "Punjabi", "Home-style"],
    delivery: "Free delivery within 3km",
    time: "7:00 AM - 9:00 PM",
    established: "2019",
    totalCustomers: "500+"
  };

  const plans = [
    {
      id: 'daily',
      name: 'Daily',
      price: '₹150',
      description: 'Perfect for trying our service',
      features: ['1 meal per day', 'Free delivery', 'Cancel anytime']
    },
    {
      id: 'weekly',
      name: 'Weekly',
      price: '₹900',
      description: 'Great for short-term stays',
      features: ['7 meals included', 'Free delivery', '10% discount', 'Flexible timing']
    },
    {
      id: 'monthly',
      name: 'Monthly',
      price: '₹3200',
      description: 'Most popular choice',
      features: ['30 meals included', 'Free delivery', '20% discount', 'Priority support', 'Custom menu options']
    }
  ];

  const menu = [
    {
      day: 'Monday',
      lunch: 'Dal Tadka, Jeera Rice, Roti, Aloo Sabzi, Salad',
      dinner: 'Rajma, Roti, Rice, Mixed Veg, Curd'
    },
    {
      day: 'Tuesday',
      lunch: 'Chole, Rice, Roti, Bhindi Masala, Pickle',
      dinner: 'Dal Makhani, Roti, Rice, Cauliflower Sabzi, Raita'
    },
    {
      day: 'Wednesday',
      lunch: 'Kadhi Chawal, Roti, Aloo Gobi, Papad',
      dinner: 'Paneer Curry, Roti, Rice, Green Beans, Curd'
    },
    {
      day: 'Thursday',
      lunch: 'Sambhar, Rice, Roti, Cabbage Sabzi, Chutney',
      dinner: 'Moong Dal, Roti, Rice, Okra Fry, Pickle'
    },
    {
      day: 'Friday',
      lunch: 'Rajma, Rice, Roti, Karela Sabzi, Salad',
      dinner: 'Chana Dal, Roti, Rice, Potato Curry, Raita'
    },
    {
      day: 'Saturday',
      lunch: 'Chole, Rice, Roti, Spinach Sabzi, Papad',
      dinner: 'Dal Fry, Roti, Rice, Mixed Vegetables, Curd'
    },
    {
      day: 'Sunday',
      lunch: 'Special Thali - Paneer, Dal, Rice, Roti, Sabzi, Sweet',
      dinner: 'Kadhi, Rice, Roti, Seasonal Vegetable, Pickle'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      date: '2 days ago',
      comment: 'Amazing food quality! Tastes just like home-cooked meals. The delivery is always on time and the portions are generous.',
      avatar: 'https://readdy.ai/api/search-image?query=Indian%20young%20woman%20student%20smiling%20portrait%20professional%20headshot%20simple%20background&width=50&height=50&seq=review1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      rating: 4,
      date: '1 week ago',
      comment: 'Good service and tasty food. The monthly plan is very affordable for students. Sometimes delivery gets delayed but overall satisfied.',
      avatar: 'https://readdy.ai/api/search-image?query=Indian%20young%20man%20student%20smiling%20portrait%20professional%20headshot%20simple%20background&width=50&height=50&seq=review2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Anjali Patel',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Best tiffin service in the area! The food is fresh, healthy and very tasty. Customer service is also excellent.',
      avatar: 'https://readdy.ai/api/search-image?query=Indian%20young%20woman%20student%20smiling%20portrait%20professional%20headshot%20simple%20background&width=50&height=50&seq=review3&orientation=squarish'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Provider Header */}
      <section className="bg-white/80 backdrop-blur-sm border-b border-warm-yellow/20 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src={provider.image} 
                  alt={provider.name}
                  className="w-full md:w-64 h-48 object-cover object-top rounded-2xl"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h1 className="text-3xl font-bold text-gray-800">{provider.name}</h1>
                    <div className="flex items-center space-x-1">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-star-fill text-warm-yellow text-lg"></i>
                      </div>
                      <span className="text-lg font-medium text-gray-800">{provider.rating}</span>
                      <span className="text-gray-500">({provider.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-map-pin-line text-gray-500"></i>
                      </div>
                      <span className="text-gray-600">{provider.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-time-line text-gray-500"></i>
                      </div>
                      <span className="text-gray-600">{provider.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-truck-line text-gray-500"></i>
                      </div>
                      <span className="text-warm-green font-medium">{provider.delivery}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {provider.specialties.map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-warm-yellow/10 text-warm-yellow text-sm rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{provider.description}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Established</span>
                    <span className="font-medium">{provider.established}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Customers</span>
                    <span className="font-medium">{provider.totalCustomers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Contact</span>
                    <span className="font-medium">{provider.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 bg-white/80 backdrop-blur-sm rounded-full p-1 w-fit mx-auto">
            {[
              { id: 'menu', label: 'Weekly Menu' },
              { id: 'plans', label: 'Subscription Plans' },
              { id: 'reviews', label: 'Reviews' }
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
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {activeTab === 'menu' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">This Week's Menu</h2>
              <div className="grid gap-4">
                {menu.map((day, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-warm-yellow mb-4">{day.day}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Lunch</h4>
                        <p className="text-gray-600">{day.lunch}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Dinner</h4>
                        <p className="text-gray-600">{day.dinner}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'plans' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Choose Your Plan</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <div key={plan.id} className={`bg-white rounded-2xl shadow-lg p-6 relative ${
                    plan.id === 'monthly' ? 'ring-2 ring-warm-yellow' : ''
                  }`}>
                    {plan.id === 'monthly' && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-warm-yellow text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
                      <div className="text-3xl font-bold text-warm-yellow mb-2">{plan.price}</div>
                      <p className="text-gray-600 text-sm">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-check-line text-warm-green"></i>
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-warm-yellow text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer">
                      Subscribe Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Customer Reviews</h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover object-top"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-800">{review.name}</h4>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="w-4 h-4 flex items-center justify-center">
                                <i className={`ri-star-fill text-sm ${
                                  i < review.rating ? 'text-warm-yellow' : 'text-gray-300'
                                }`}></i>
                              </div>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">{review.comment}</p>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
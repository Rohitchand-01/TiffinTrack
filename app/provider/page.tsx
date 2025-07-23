'use client';
import Link from 'next/link';
import { CiLocationOn } from "react-icons/ci";
import { useState , useEffect } from 'react';

export default function Providers() {
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    document.title = "TiffinTrack - Find Tiffin Providers";
  }, []);

  const providers = [
    {
      id: 1,
      name: "Sharma's Home Kitchen",
      rating: 4.8,
      reviews: 234,
      location: "Sector 15, Noida",
      price: "₹120/meal",
      image: "https://readdy.ai/api/search-image?query=Indian%20home%20kitchen%20with%20fresh%20vegetables%20and%20traditional%20cooking%20setup%20warm%20lighting%20cozy%20atmosphere%20homemade%20food%20preparation%20healthy%20ingredients%20on%20wooden%20countertop&width=300&height=200&seq=provider1&orientation=landscape",
      specialties: ["North Indian", "Punjabi", "Home-style"],
      delivery: "Free delivery",
      time: "7:00 AM - 9:00 PM"
    },
    {
      id: 2,
      name: "Aunty's Tiffin Service",
      rating: 4.6,
      reviews: 189,
      location: "Sector 22, Noida",
      price: "₹100/meal",
      image: "https://readdy.ai/api/search-image?query=Traditional%20Indian%20tiffin%20boxes%20with%20homemade%20curry%20rice%20dal%20vegetables%20authentic%20home%20cooking%20warm%20lighting%20simple%20background&width=300&height=200&seq=provider2&orientation=landscape",
      specialties: ["South Indian", "Gujarati", "Vegetarian"],
      delivery: "Free delivery",
      time: "6:30 AM - 8:30 PM"
    },
    {
      id: 3,
      name: "Student's Choice Meals",
      rating: 4.7,
      reviews: 312,
      location: "Sector 18, Noida",
      price: "₹130/meal",
      image: "https://readdy.ai/api/search-image?query=Modern%20Indian%20kitchen%20with%20variety%20of%20freshly%20prepared%20meals%20colorful%20dishes%20arranged%20neatly%20clean%20preparation%20area%20warm%20ambient%20lighting&width=300&height=200&seq=provider3&orientation=landscape",
      specialties: ["Multi-cuisine", "Jain", "Customizable"],
      delivery: "₹10 delivery",
      time: "7:30 AM - 9:30 PM"
    },
    {
      id: 4,
      name: "Homely Bites",
      rating: 4.9,
      reviews: 156,
      location: "Sector 12, Noida",
      price: "₹140/meal",
      image: "https://readdy.ai/api/search-image?query=Cozy%20home%20kitchen%20with%20fresh%20Indian%20meals%20being%20prepared%20traditional%20cooking%20utensils%20warm%20lighting%20homemade%20food%20setup&width=300&height=200&seq=provider4&orientation=landscape",
      specialties: ["Bengali", "North Indian", "Healthy"],
      delivery: "Free delivery",
      time: "6:00 AM - 10:00 PM"
    },
    {
      id: 5,
      name: "Mama's Kitchen",
      rating: 4.5,
      reviews: 278,
      location: "Sector 25, Noida",
      price: "₹110/meal",
      image: "https://readdy.ai/api/search-image?query=Traditional%20Indian%20home%20kitchen%20with%20fresh%20vegetables%20spices%20and%20cooking%20preparation%20warm%20lighting%20authentic%20cooking%20setup&width=300&height=200&seq=provider5&orientation=landscape",
      specialties: ["Maharashtrian", "Punjabi", "Comfort food"],
      delivery: "Free delivery",
      time: "7:00 AM - 9:00 PM"
    },
    {
      id: 6,
      name: "Fresh Meal Co.",
      rating: 4.4,
      reviews: 201,
      location: "Sector 19, Noida",
      price: "₹125/meal",
      image: "https://readdy.ai/api/search-image?query=Clean%20modern%20kitchen%20with%20fresh%20healthy%20Indian%20meals%20being%20prepared%20colorful%20vegetables%20organized%20cooking%20space%20warm%20lighting&width=300&height=200&seq=provider6&orientation=landscape",
      specialties: ["Healthy", "Organic", "Diet-friendly"],
      delivery: "₹15 delivery",
      time: "8:00 AM - 8:00 PM"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Providers' },
    { id: 'north', name: 'North Indian' },
    { id: 'south', name: 'South Indian' },
    { id: 'gujarati', name: 'Gujarati' },
    { id: 'healthy', name: 'Healthy Options' },
    { id: 'vegetarian', name: 'Pure Vegetarian' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-13">
      
      {/* Search Header */}
      <section className="bg-white/80 backdrop-blur-sm border-b border-warm-yellow/20 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Find Tiffin Providers Near You</h1>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                  <i className="ri-map-pin-line text-warm-yellow text-lg"><CiLocationOn />
</i>
                </div>
                <input
                  type="text"
                  placeholder="Enter your location (e.g., Sector 15, Noida)"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50 text-sm"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button className="bg-warm-yellow px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer">
                Search Providers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-warm-yellow text-white'
                    : 'bg-white text-gray-700 hover:bg-warm-yellow/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Providers Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider) => (
              <div key={provider.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={provider.image} 
                    alt={provider.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-sm font-semibold text-warm-yellow">{provider.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{provider.name}</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-star-fill text-warm-yellow text-sm"></i>
                      </div>
                      <span className="text-sm font-medium text-gray-800">{provider.rating}</span>
                      <span className="text-sm text-gray-500">({provider.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-map-pin-line text-gray-500 text-sm"></i>
                    </div>
                    <span className="text-sm text-gray-600">{provider.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-time-line text-gray-500 text-sm"></i>
                    </div>
                    <span className="text-sm text-gray-600">{provider.time}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {provider.specialties.map((specialty, index) => (
                      <span key={index} className="px-2 py-1 bg-warm-yellow/10 text-warm-yellow text-xs rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-warm-green font-medium">{provider.delivery}</span>
                    <Link 
                      href={`/providers/${provider.id}`}
                      className="bg-warm-yellow text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
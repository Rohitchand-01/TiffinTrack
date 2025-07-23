
'use client';

import { useState } from 'react';

export default function ProviderMenu() {
  const [selectedDay, setSelectedDay] = useState('monday');
  const [isEditing, setIsEditing] = useState(false);

  const [weeklyMenu, setWeeklyMenu] = useState({
    monday: {
      lunch: 'Dal Tadka, Jeera Rice, Roti, Aloo Sabzi, Salad',
      dinner: 'Rajma, Roti, Rice, Mixed Veg, Curd',
      lunchPrice: 120,
      dinnerPrice: 130
    },
    tuesday: {
      lunch: 'Chole, Rice, Roti, Bhindi Masala, Pickle',
      dinner: 'Dal Makhani, Roti, Rice, Cauliflower Sabzi, Raita',
      lunchPrice: 120,
      dinnerPrice: 130
    },
    wednesday: {
      lunch: 'Kadhi Chawal, Roti, Aloo Gobi, Papad',
      dinner: 'Paneer Curry, Roti, Rice, Green Beans, Curd',
      lunchPrice: 120,
      dinnerPrice: 140
    },
    thursday: {
      lunch: 'Sambhar, Rice, Roti, Cabbage Sabzi, Chutney',
      dinner: 'Moong Dal, Roti, Rice, Okra Fry, Pickle',
      lunchPrice: 120,
      dinnerPrice: 130
    },
    friday: {
      lunch: 'Rajma, Rice, Roti, Karela Sabzi, Salad',
      dinner: 'Chana Dal, Roti, Rice, Potato Curry, Raita',
      lunchPrice: 120,
      dinnerPrice: 130
    },
    saturday: {
      lunch: 'Chole, Rice, Roti, Spinach Sabzi, Papad',
      dinner: 'Dal Fry, Roti, Rice, Mixed Vegetables, Curd',
      lunchPrice: 120,
      dinnerPrice: 130
    },
    sunday: {
      lunch: 'Special Thali - Paneer, Dal, Rice, Roti, Sabzi, Sweet',
      dinner: 'Kadhi, Rice, Roti, Seasonal Vegetable, Pickle',
      lunchPrice: 150,
      dinnerPrice: 140
    }
  });

  const days = [
    { key: 'monday', name: 'Monday' },
    { key: 'tuesday', name: 'Tuesday' },
    { key: 'wednesday', name: 'Wednesday' },
    { key: 'thursday', name: 'Thursday' },
    { key: 'friday', name: 'Friday' },
    { key: 'saturday', name: 'Saturday' },
    { key: 'sunday', name: 'Sunday' }
  ];

  const handleMenuChange = (day: string, mealType: string, value: string) => {
    setWeeklyMenu(prev => ({
      ...prev,
      [day]: {
        ...prev[day as keyof typeof prev],
        [mealType]: value
      }
    }));
  };

  const handlePriceChange = (day: string, priceType: string, value: number) => {
    setWeeklyMenu(prev => ({
      ...prev,
      [day]: {
        ...prev[day as keyof typeof prev],
        [priceType]: value
      }
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Menu saved:', weeklyMenu);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Weekly Menu Management</h1>
          <p className="text-gray-600">Update your weekly menu and pricing</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {days.map((day) => (
              <button
                key={day.key}
                onClick={() => setSelectedDay(day.key)}
                className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  selectedDay === day.key
                    ? 'bg-warm-yellow text-white'
                    : 'bg-white text-gray-700 hover:bg-warm-yellow/10'
                }`}
              >
                {day.name}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 capitalize">
                {selectedDay} Menu
              </h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  isEditing
                    ? 'bg-warm-green text-white hover:bg-green-600'
                    : 'bg-warm-yellow text-white hover:bg-yellow-500'
                }`}
              >
                {isEditing ? 'Cancel' : 'Edit Menu'}
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-warm-yellow flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    <i className="ri-sun-line"></i>
                  </div>
                  Lunch
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Menu Items</label>
                  <textarea
                    value={weeklyMenu[selectedDay as keyof typeof weeklyMenu].lunch}
                    onChange={(e) => handleMenuChange(selectedDay, 'lunch', e.target.value)}
                    disabled={!isEditing}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50 disabled:bg-gray-50 resize-none"
                    placeholder="Enter lunch menu items separated by commas"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)</label>
                  <input
                    type="number"
                    value={weeklyMenu[selectedDay as keyof typeof weeklyMenu].lunchPrice}
                    onChange={(e) => handlePriceChange(selectedDay, 'lunchPrice', parseInt(e.target.value))}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50 disabled:bg-gray-50"
                    min="50"
                    max="500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-500 flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    <i className="ri-moon-line"></i>
                  </div>
                  Dinner
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Menu Items</label>
                  <textarea
                    value={weeklyMenu[selectedDay as keyof typeof weeklyMenu].dinner}
                    onChange={(e) => handleMenuChange(selectedDay, 'dinner', e.target.value)}
                    disabled={!isEditing}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50 disabled:bg-gray-50 resize-none"
                    placeholder="Enter dinner menu items separated by commas"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)</label>
                  <input
                    type="number"
                    value={weeklyMenu[selectedDay as keyof typeof weeklyMenu].dinnerPrice}
                    onChange={(e) => handlePriceChange(selectedDay, 'dinnerPrice', parseInt(e.target.value))}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50 disabled:bg-gray-50"
                    min="50"
                    max="500"
                  />
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleSave}
                  className="bg-warm-yellow text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Save Menu Changes
                </button>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Weekly Menu Overview</h3>
            <div className="grid gap-4">
              {days.map((day) => (
                <div key={day.key} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-800 mb-2">{day.name}</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-warm-yellow font-medium">Lunch</span>
                        <span className="text-gray-600">₹{weeklyMenu[day.key as keyof typeof weeklyMenu].lunchPrice}</span>
                      </div>
                      <p className="text-gray-600">{weeklyMenu[day.key as keyof typeof weeklyMenu].lunch}</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-orange-500 font-medium">Dinner</span>
                        <span className="text-gray-600">₹{weeklyMenu[day.key as keyof typeof weeklyMenu].dinnerPrice}</span>
                      </div>
                      <p className="text-gray-600">{weeklyMenu[day.key as keyof typeof weeklyMenu].dinner}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

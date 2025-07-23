'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function StudentLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    address: '',
    pincode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-warm-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-line text-warm-yellow text-2xl"></i>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {isLogin ? 'Welcome Back, Student!' : 'Join as Student'}
                </h1>
                <p className="text-gray-600">
                  {isLogin ? 'Login to access your tiffin subscriptions' : 'Create your account to start ordering'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {!isLogin && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50"
                        placeholder="Enter your address"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow/50"
                        placeholder="Enter your pincode"
                        required
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full bg-warm-yellow text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer"
                >
                  {isLogin ? 'Login' : 'Create Account'}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-warm-yellow hover:text-yellow-500 transition-colors cursor-pointer"
                  >
                    {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
                  </button>
                </div>
              </form>

              <div className="mt-8 text-center">
                <Link href="/login/provider" className="text-gray-600 hover:text-warm-yellow transition-colors">
                  Are you a provider? Login here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
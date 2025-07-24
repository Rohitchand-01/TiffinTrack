'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProviderLogin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    businessName: '',
    ownerName: '',
    phone: '',
    address: '',
    pincode: '',
    licenseNumber: '',
    experience: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            role: 'provider'
          })
        });

        const data = await response.json();

        if (!response.ok) {
          alert(data.message || 'Login failed');
          return;
        }

        // Store token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('userRole', 'provider');
        
        alert('Login successful');
        console.log(data);
        
        // Redirect to provider dashboard
        router.push('/provider/dashboard');
      } else {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            name: formData.ownerName, // Map ownerName to name for consistency
            role: 'provider'
          })
        });

        const data = await response.json();

        if (!response.ok) {
          alert(data.message || 'Registration failed');
          return;
        }

        alert('Registration successful! Please login now.');
        console.log(data);
        
        // Switch to login mode after successful registration
        setIsLogin(true);
        // Clear form data
        setFormData({
          email: '',
          password: '',
          businessName: '',
          ownerName: '',
          phone: '',
          address: '',
          pincode: '',
          licenseNumber: '',
          experience: ''
        });
      }
    } catch (error: any) {
      alert('Network error. Please try again.');
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                <div className="w-16 h-16 bg-warm-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-restaurant-line text-warm-green text-2xl"></i>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {isLogin ? 'Welcome Back, Provider!' : 'Join as Provider'}
                </h1>
                <p className="text-gray-600">
                  {isLogin ? 'Login to manage your tiffin service' : 'Register your tiffin service with us'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-green/50"
                        placeholder="Enter your business name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Owner Name</label>
                      <input
                        type="text"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-green/50"
                        placeholder="Enter owner name"
                        required
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-green/50"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-green/50"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-green/50"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Kitchen Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-green/50"
                        placeholder="Enter your kitchen address"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-green/50"
                        placeholder="Enter your pincode"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Food License Number</label>
                      <input
                        type="text"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-green/50"
                        placeholder="Enter your food license number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experience in Years</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-green/50 pr-8"
                        required
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full bg-warm-green text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  {isLogin ? 'Login' : 'Register Business'}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-warm-green hover:text-green-600 transition-colors cursor-pointer"
                  >
                    {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                  </button>
                </div>
              </form>

              <div className="mt-8 text-center">
                <Link href="/login/student" className="text-gray-600 hover:text-warm-green transition-colors">
                  Are you a student? Login here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
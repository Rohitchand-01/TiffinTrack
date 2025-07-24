'use client'; // This directive is crucial for client-side components in Next.js App Router
import { useState } from 'react';

// Main App component to render the StudentProfile
export default function App() {
  return (
    // Load Tailwind CSS and Inter font
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      {/* Remix Icon CDN for icons */}
      <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />

      <style>{`
        body {
          font-family: 'Inter', sans-serif;
        }
        /* Custom Tailwind colors based on the provided dashboard code */
        .text-warm-yellow { color: #facc15; } /* Tailwind yellow-400 */
        .bg-warm-yellow { background-color: #facc15; }
        .hover\\:bg-yellow-500:hover { background-color: #eab308; } /* Tailwind yellow-500 */
        .border-warm-yellow { border-color: #facc15; }
        .bg-warm-yellow\\/10 { background-color: rgba(250, 204, 21, 0.1); }
        .bg-warm-yellow\\/20 { background-color: rgba(250, 204, 21, 0.2); }

        .text-warm-green { color: #22c55e; } /* Tailwind green-500 */
        .bg-warm-green\\/10 { background-color: rgba(34, 197, 94, 0.1); }
        .bg-warm-green\\/20 { background-color: rgba(34, 197, 94, 0.2); }
      `}</style>

      <StudentProfile />
    </>
  );
}

// StudentProfile component
function StudentProfile() {
  // State for profile data
  const [profile, setProfile] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+91 98765 43210",
    addressLine1: "123, Gandhi Marg",
    addressLine2: "Near City Park",
    city: "New Delhi",
    state: "Delhi",
    zipCode: "110001",
    foodPreference: "Vegetarian",
    allergies: "Nuts, Gluten",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  });

  // Handle input changes
  // Handle input changes - Replace your current handleChange function with this:
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setProfile(prevProfile => ({
    ...prevProfile,
    [name]: value
  }));
};

  // Handle saving changes
  const handleSaveChanges = () => {
    // In a real application, you would send this data to a backend API
    console.log("Saving changes:", profile);
    // Replace alert with a more robust message display in a real app (e.g., a toast notification)
    console.log("Profile changes saved successfully!"); 
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-8"> {/* Added padding top and bottom */}
      <div className="container mx-auto px-4 py-8 max-w-4xl"> {/* Increased max-width for better form layout */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Profile</h1>
          <p className="text-gray-600">Update your personal information, address, and dietary preferences.</p>
        </div>

        {/* Personal Information Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <i className="ri-user-line text-warm-yellow mr-2"></i> Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              />
            </div>
            <div className="md:col-span-2"> {/* Phone takes full width on md screens */}
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Address Details Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <i className="ri-map-pin-line text-warm-green mr-2"></i> Address Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                value={profile.addressLine1}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700 mb-1">Address Line 2 (Optional)</label>
              <input
                type="text"
                id="addressLine2"
                name="addressLine2"
                value={profile.addressLine2}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={profile.city}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={profile.state}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={profile.zipCode}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Dietary Preferences Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <i className="ri-restaurant-line text-orange-500 mr-2"></i> Dietary Preferences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="foodPreference" className="block text-sm font-medium text-gray-700 mb-1">Food Preference</label>
              <select
                id="foodPreference"
                name="foodPreference"
                value={profile.foodPreference}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              >
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
              </select>
            </div>
            <div>
              <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-1">Allergies (comma-separated)</label>
              <input
                type="text"
                id="allergies"
                name="allergies"
                value={profile.allergies}
                onChange={handleChange}
                placeholder="e.g., Peanuts, Dairy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Password Change Section (Optional) */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <i className="ri-lock-line text-blue-500 mr-2"></i> Change Password
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={profile.currentPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={profile.newPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                value={profile.confirmNewPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleSaveChanges}
            className="px-6 py-3 bg-warm-yellow text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-warm-yellow focus:ring-offset-2 cursor-pointer"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}

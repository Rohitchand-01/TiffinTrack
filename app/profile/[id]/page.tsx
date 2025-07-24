'use client'; // This directive is crucial for client-side components in Next.js App Router

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Import useParams for dynamic routes
import { TbToolsKitchen2 } from 'react-icons/tb'; // Assuming react-icons/tb is installed

// Define the type for the user profile data
interface UserProfile {
  name: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  foodPreference: string;
  allergies: string;
  currentPassword?: string; // Optional field
  newPassword?: string;     // Optional field
  confirmNewPassword?: string; // Optional field
}

// StudentProfile component
export default function StudentProfile() {
  // Get the dynamic 'id' parameter from the URL
  const params = useParams();
  const userId = params.id; // The ID from the URL (e.g., from /profile/123, userId will be '123')

  // State for profile data, initialized as null to indicate no data loaded yet
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null);   // Error state

  // Simulate fetching user data based on userId
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      setError("User ID not found in URL.");
      return;
    }

    setLoading(true);
    setError(null);

    // In a real application, you would make an API call here:
    // fetch(`/api/users/${userId}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     // Ensure data matches UserProfile type
    //     setProfile(data as UserProfile);
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     console.error("Failed to fetch profile:", err);
    //     setError("Failed to load profile data.");
    //     setLoading(false);
    //   });

    // For demonstration, use a mock fetch with a delay
    const mockFetchProfile = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

        let fetchedData: UserProfile | null = null; // Initialize as null or fully typed object
        if (userId === "priya") { // Example: user 'priya'
          fetchedData = {
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
          };
        } else if (userId === "raj") { // Example: user 'raj'
            fetchedData = {
              name: "Rajesh Kumar",
              email: "rajesh.kumar@example.com",
              phone: "+91 99887 76655",
              addressLine1: "456, Nehru Road",
              addressLine2: "Opposite Grand Mall",
              city: "Mumbai",
              state: "Maharashtra",
              zipCode: "400001",
              foodPreference: "Non-Vegetarian",
              allergies: "None", // Set to "None" or an empty string as appropriate
              currentPassword: "",
              newPassword: "",
              confirmNewPassword: ""
            };
        } else {
          // Default or "not found" data
          setError("User profile not found.");
          setProfile(null); // Explicitly set to null if not found
          setLoading(false); // Make sure to stop loading here as well
          return; // Exit early if user not found
        }
        setProfile(fetchedData);
      } catch (err) {
        console.error("Error during mock fetch:", err);
        setError("Failed to load profile data.");
      } finally {
        setLoading(false);
      }
    };

    mockFetchProfile();
  }, [userId]); // Re-run effect if userId changes

  // Handle input changes - Fixed with proper TypeScript typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Only update if profile is not null
    if (profile) {
      setProfile(prevProfile => {
        // prevProfile will be UserProfile | null, so we need to check
        if (prevProfile) {
          return {
            ...prevProfile,
            [name]: value
          };
        }
        return prevProfile; // Should not happen if profile is loaded, but for type safety
      });
    }
  };

  // Handle saving changes
  const handleSaveChanges = () => {
    // In a real application, you would send this updated data to a backend API for the specific userId
    console.log(`Saving changes for user ${userId}:`, profile);
    console.log("Profile changes saved successfully!");
    // You might want to provide a visual confirmation to the user here
  };

  // Display loading, error, or profile data
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-700 text-lg">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (!profile) {
    // This case should be covered by the error state or initial loading, but kept for explicit clarity.
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <p className="text-gray-700 text-lg">No profile data available.</p>
        </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-8">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Profile (User: {userId})</h1>
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
                value={profile.name || ''}
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
                value={profile.email || ''}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={profile.phone || ''}
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
                value={profile.addressLine1 || ''}
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
                value={profile.addressLine2 || ''}
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
                value={profile.city || ''}
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
                value={profile.state || ''}
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
                value={profile.zipCode || ''}
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
                value={profile.foodPreference || ''}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-warm-yellow focus:border-warm-yellow sm:text-sm"
              >
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="None">Prefer Not to Say</option> {/* Added a "None" option */}
              </select>
            </div>
            <div>
              <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-1">Allergies (comma-separated)</label>
              <input
                type="text"
                id="allergies"
                name="allergies"
                value={profile.allergies || ''}
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
                value={profile.currentPassword || ''}
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
                value={profile.newPassword || ''}
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
                value={profile.confirmNewPassword || ''}
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
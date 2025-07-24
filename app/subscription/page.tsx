'use client'; // This directive is crucial for client-side components in Next.js App Router
import { useState } from 'react';

// Define the type for subscription data
interface Subscription {
  id: number;
  provider: string;
  plan: string;
  startDate: string;
  endDate: string;
  status: string;
  price: string;
  mealsLeft: number;
  totalMeals: number;
}

// Main App component to render the SubscriptionsPage
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

        .text-orange-500 { color: #f97316; } /* Tailwind orange-500 */
        .bg-orange-100 { background-color: #ffedd5; } /* Tailwind orange-100 */
      `}</style>

      <SubscriptionsPage />
    </>
  );
}

// SubscriptionsPage component
function SubscriptionsPage() {
  // Mock data for current subscriptions, matching the structure from your dashboard
  const [currentSubscriptions, setCurrentSubscriptions] = useState<Subscription[]>([
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
  ]);

  // Handle pausing a subscription - Fixed with proper TypeScript typing
  const handlePauseSubscription = (id: number) => {
    console.log(`Pausing subscription with ID: ${id}`);
    // In a real application, you would update the subscription status via an API call
    // For demonstration, you could update state:
    // setCurrentSubscriptions(prevSubs => prevSubs.map(sub => 
    //   sub.id === id ? { ...sub, status: 'Paused' } : sub
    // ));
  };

  // Handle renewing a subscription - Fixed with proper TypeScript typing
  const handleRenewSubscription = (id: number) => {
    console.log(`Renewing subscription with ID: ${id}`);
    // In a real application, you would trigger a renewal process via an API call
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-8">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Subscriptions</h1>
          <p className="text-gray-600">View and manage all your active and past tiffin subscriptions.</p>
        </div>

        {/* Current Subscriptions Section */}
        <div className="space-y-6">
          {currentSubscriptions.length > 0 ? (
            currentSubscriptions.map((subscription) => (
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
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-warm-yellow h-2 rounded-full" 
                        style={{ width: `${(subscription.mealsLeft / subscription.totalMeals) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4 md:mt-0">
                    <button 
                      onClick={() => handlePauseSubscription(subscription.id)}
                      className="px-4 py-2 text-warm-yellow border border-warm-yellow rounded-lg hover:bg-warm-yellow hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Pause
                    </button>
                    <button 
                      onClick={() => handleRenewSubscription(subscription.id)}
                      className="px-4 py-2 bg-warm-yellow text-white rounded-lg hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Renew
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center text-gray-600">
              <p>You don't have any active subscriptions yet.</p>
              <button className="mt-4 px-6 py-2 bg-warm-yellow text-white rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer">
                Find Providers
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
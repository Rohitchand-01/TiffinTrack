RentNest
RentNest is a modern web application designed to connect students and other users seeking rental accommodations (apartments, PGs, studios, shared spaces) with property providers. It offers a streamlined platform for property listings, user profiles, subscription management for tiffin services (as seen in the student dashboard), and order management for providers.

✨ Features
For Users (Renters):

Property Listings: Browse a wide range of properties with detailed information, images, and amenities.

Search & Filter: Efficiently find properties using search terms, property type, price range, bedrooms, location, and amenities.

Property Details: View comprehensive details about each listing, including location, features, description, owner information, and nearby places.

Reviews & Ratings: Read existing reviews and submit your own ratings and comments for properties.

Favorites: Mark properties as favorites for easy access.

Student Dashboard:

Overview of active tiffin subscriptions and recent orders.

Track meals remaining and monthly spending.

Quick actions to find providers or edit profile.

Subscriptions Page: Dedicated section to view and manage current tiffin subscriptions (pause, renew).

User Profile: Update personal information, address, and dietary preferences.

For Providers (Property Owners / Tiffin Services):

Provider Dashboard:

Overview of today's orders, active customers, monthly revenue, and average ratings.

Quick actions for menu updates, order management, customer management, and analytics.

Order Management: View today's orders with customer details, meal items, and status updates (Preparing, Ready, Delivered).

Customer Management: See active subscriptions, customer details, and revenue generated.

General:

Authentication: Secure user and provider login/registration powered by Clerk.

Responsive Design: Optimized for seamless experience across various devices (desktop, tablet, mobile).

🚀 Technologies Used
Frontend:

Next.js (React Framework)

React

TypeScript

Tailwind CSS

Lucide React (for icons)

@shadcn/ui (for UI components like Switch, Textarea, Tabs - ensure these are installed if currently missing)

Backend:

Next.js API Routes (for API endpoints)

Clerk (Authentication)

Drizzle ORM (Type-safe ORM for database interaction)

MongoDB (Database - inferred from app/lib/mongoDb.ts)

🛠️ Setup and Installation
Follow these steps to get RentNest up and running on your local machine.

Prerequisites
Node.js (v18 or higher recommended)

npm or yarn

1. Clone the Repository
git clone <your-repo-url>
cd rentnest

2. Install Dependencies
npm install
# or
yarn install

3. Environment Variables
Create a .env.local file in the root of your project and add the following environment variables. Replace the placeholder values with your actual keys and connection strings.

# Clerk Authentication Keys (from your Clerk Dashboard)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=sk_test_YOUR_CLERK_SECRET_KEY

# MongoDB Connection (update with your MongoDB Atlas or local connection string)
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"

Important:

Ensure there are no spaces around the = signs.

Do not commit your .env.local file to version control. It's already ignored by .gitignore.

4. Database Setup (Drizzle & MongoDB)
Connect to MongoDB: Ensure your MongoDB instance is running and accessible from your DATABASE_URL.

Run Drizzle Migrations (if applicable): If you have Drizzle migrations set up, you might need to run them to sync your schema with the database. Consult your drizzle.config.ts or related files for specific commands (e.g., drizzle-kit push:pg or drizzle-kit generate).

5. Install shadcn/ui Components (if not already present)
If you're getting "Module not found" errors for shadcn/ui components (like switch, textarea, tabs), you need to add them to your project:

npx shadcn@latest add switch
npx shadcn@latest add textarea
npx shadcn@latest add tabs
# ... add any other missing shadcn components as needed

6. Run the Development Server
npm run dev
# or
yarn dev

The application should now be running at http://localhost:3000.

7. Build for Production
To create an optimized production build, run:

npm run build
# or
yarn build

This will generate the .next folder with the optimized production build.

💡 Usage
Open your browser to http://localhost:3000.

Register/Login: Use the authentication flow provided by Clerk.

Browse Listings: Navigate to /listings to see available properties.

Student Dashboard: If logged in as a student, visit /student/dashboard.

Provider Dashboard: If logged in as a provider, visit /provider/dashboard.

User Profile: Access your profile at /profile.

🤝 Contributing
Contributions are welcome! If you have suggestions or find issues, please open an issue or submit a pull request.


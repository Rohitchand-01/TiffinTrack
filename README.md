# 🍱 TiffinTrack

**TiffinTrack** is a modern web application designed to seamlessly connect students with local tiffin service providers. It simplifies the process of discovering, subscribing to, and managing daily meal services, while providing providers with robust tools to manage their orders, customers, and business operations.

---

## ✨ Features

### 🎓 For Students:
- **Tiffin Provider Discovery** – Easily find and browse various tiffin service providers.
- **Subscription Management** – View active subscriptions, track remaining meals, pause/renew services.
- **Order Tracking** – Monitor real-time meal order statuses: *Preparing, Ready, Delivered*.
- **Profile Management** – Update contact info, delivery address, and dietary preferences.
- **Spending Overview** – Track monthly spending on meals.

### 🧑‍🍳 For Providers:
- **Dashboard Overview** – View orders, active customers, revenue stats, and ratings.
- **Order Management** – Mark orders as Ready/Delivered and track delivery info.
- **Customer Insights** – Manage subscribers, track consumption, and view generated revenue.
- **Menu Control** – Update daily/weekly menu offerings.
- **Analytics** – Get business insights: customer acquisition, growth trends, and reviews.

### 🔐 General:
- **Secure Auth** – Authentication powered by [Clerk](https://clerk.dev).
- **Responsive UI** – Works smoothly on desktops, tablets, and mobile phones.

---

## 🚀 Tech Stack

### 🔧 Frontend:
- **Next.js** (React Framework)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- **@shadcn/ui** (components like Switch, Textarea, Tabs)

### 🗄️ Backend:
- **Next.js API Routes**
- **Clerk** for authentication
- **Drizzle ORM** (Type-safe DB interaction)
- **MongoDB** (Database)

---

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v18+)
- npm or yarn

---

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/tiffintrack.git
cd tiffintrack
```

### 2. Install Dependencies
```bash
# With npm
npm install

# Or with yarn
yarn install
```

### 3. Add Environment Variables

Create a `.env.local` file in the root:

```env
# Clerk Keys

# MongoDB URI
DATABASE_URI="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"
```

> ⚠️ Ensure no spaces around `=` and do **not** commit `.env.local` to version control.

---

### 4. Set Up Database (Drizzle + MongoDB)
Make sure your MongoDB instance is running and accessible from your `DATABASE_URI`.

If you use Drizzle migrations:
```bash
npx drizzle-kit push
# or
npx drizzle-kit generate
```

---

### 5. Install Missing shadcn/ui Components
If required, run:

```bash
npx shadcn@latest add switch
npx shadcn@latest add textarea
npx shadcn@latest add tabs
```

---

### 6. Run the Dev Server
```bash
npm run dev
# or
yarn dev
```

Your app should now be running at [http://localhost:3000](http://localhost:3000)

---

### 7. Build for Production
```bash
npm run build
# or
yarn build
```

---

## 💡 Usage

- Visit `http://localhost:3000`
- Register/Login using Clerk auth
- Navigate to `/student/dashboard` for student panel
- Go to `/provider/dashboard` for provider panel
- Update your profile at `/profile`

---

## 🤝 Contributing

We welcome contributions! Feel free to open issues or submit pull requests to improve the platform.

---

## 📄 License

MIT License © 2025 [Rohit Chand]

---

## 📧 Contact

Built with 💛 by [Rohit Chand](mailto:rohitchand010904@example.com)


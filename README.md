# 🛍️ WearHive - E-Commerce Website


## 🚀 Project Overview

**WearHive** is a modern and dynamic full-stack e-commerce platform tailored for fashion shopping. The website supports **three user roles** — **Customer**, **Seller**, and **Admin**, each with distinct interfaces and permissions. Additionally, a **Moderator** role is available to help manage seller-submitted products before they're published.

The platform is built with a focus on performance, security, scalability, and a great user experience. On the frontend, React and Tailwind CSS are used to deliver a clean, responsive design. The backend is powered by Node.js, Express, and MongoDB for handling APIs, authentication, and database operations. Key features include **real-time product filtering, search and sorting**, **secure payment via Stripe**, and an **AI-powered chatbot** for basic customer support and shopping guidance.

From user authentication using Firebase to JWT-secured APIs, from powerful product search filters to admin moderation capabilities — **WearHive** combines all the essentials of a production-grade e-commerce system.

---


![WearHive](https://i.ibb.co.com/KjVLP1QB/Screenshot-2025-05-09-002950.png)

## 🌐 Live Site URL
[Visit the live site here!](https://shopper-application-3cae2.web.app/)

## ✨ Features

### 👤 Customer
- Browse categorized products for men, women, and kids
- Dynamic **search**, **filter**, and **sorting** options
- Add products to cart and checkout securely
- View personal order history
- Get help from built-in **AI Chatbot** for basic queries
- Leave reviews and ratings on products to help other users

### 🛍️ Seller
- Add new products with image, description, and stock info
- Manage and update own products
- View product performance and sales history
- Receive product status updates (pending/approved/rejected)

### 🧑‍⚖️ Moderator
- View seller-submitted products
- Approve or reject products before publication
- Ensure product quality and relevance before display

### 🛠️ Admin
- View and manage all users (customers, sellers, moderators)
- Control platform-wide settings
- Monitor sales, user activity, and traffic stats
- Remove or block malicious users or sellers

### 🧠 AI Integration
- Built-in **AI Chatbot** to assist users with general questions, product discovery, and support
- Smart conversation handling to improve user engagement

### 💳 Payment & Security
- Stripe integration for secure, fast checkout
- JWT-based protected APIs
- Firebase Authentication for user login/registration
- Role-based route and feature access

---

## 🧰 Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- React Router DOM
- Recharts

**Backend:**
- Node.js
- Express.js
- MongoDB (NoSQL)

**Authentication & Security:**
- Firebase Authentication
- JWT (JSON Web Token)

**Payment Gateway:**
- Stripe

**Others:**
- Axios
- TanStack Query (React Query)
- Dotenv

---


## Dependencies

These are the required libraries and tools for the client-side of the project:

- `@heroicons/react`: 2.2.0 - A set of free, MIT-licensed, high-quality SVG icons for use in React projects.
- `@stripe/react-stripe-js`: 3.3.0 - A React component library for integrating Stripe's payment system.
- `@stripe/stripe-js`: 5.10.0 - Stripe's JavaScript library for integrating with the Stripe payment system.
- `@tanstack/react-query`: 5.66.0 - A powerful data-fetching and state management tool for React.
- `axios`: 1.7.9 - Promise-based HTTP client for the browser and Node.js.
- `calendar`: 0.1.1 - A lightweight JavaScript library for displaying calendars.
- `firebase`: 11.2.0 - Firebase JavaScript SDK for integrating authentication, databases, and other Firebase features.
- `framer-motion`: 12.0.6 - A popular animation library for React.
- `localforage`: 1.10.0 - A fast, simple storage solution for web browsers.
- `lucide-react`: 0.477.0 - A collection of icons for React.
- `match-sorter`: 8.0.0 - A utility for sorting and filtering data with matching.
- `motion`: 11.18.2 - Animation library used for creating rich animations in React applications.
- `react`: 18.3.1 - A JavaScript library for building user interfaces.
- `react-calendar`: 5.1.0 - A customizable calendar component for React.
- `react-dom`: 18.3.1 - The entry point for React DOM rendering.
- `react-fast-marquee`: 1.6.5 - A React component for creating smooth marquee (scrolling) text.
- `react-icons`: 5.5.0 - A set of React components for popular icons.
- `react-lazy-load`: 4.0.1 - Lazy loading of images and other elements in React.
- `react-router-dom`: 7.1.1 - Declarative routing for React applications.
- `react-toastify`: 11.0.5 - A React component for displaying toast notifications.
- `recharts`: 2.15.1 - A chart library built with React and D3.js.
- `sort-by`: 1.2.0 - A utility for sorting data.
- `sweetalert2`: 11.17.2 - A beautiful, responsive, customizable popup.
- `swiper`: 11.2.6 - A modern mobile touch slider with hardware accelerated transitions.

## DevDependencies

These are the development libraries and tools required to build and test the project:

- `@eslint/js`: 9.17.0 - JavaScript linting configuration for ESLint.
- `@types/react`: 18.3.18 - TypeScript types for React.
- `@types/react-dom`: 18.3.5 - TypeScript types for React DOM.
- `@vitejs/plugin-react`: 4.3.4 - A Vite plugin for React, enabling fast development.
- `autoprefixer`: 10.4.20 - A tool to parse CSS and add vendor prefixes.
- `daisyui`: 4.12.23 - A simple and easy-to-use component library built on top of Tailwind CSS.
- `eslint`: 9.17.0 - A static code analysis tool for identifying problematic patterns in JavaScript code.
- `eslint-plugin-react`: 7.37.2 - ESLint plugin for React-specific linting rules.
- `eslint-plugin-react-hooks`: 5.0.0 - ESLint plugin for enforcing React Hooks best practices.
- `eslint-plugin-react-refresh`: 0.4.16 - ESLint plugin for React Fast Refresh compatibility.
- `globals`: 15.14.0 - Provides global variables to ESLint for linting code.
- `postcss`: 8.4.49 - A tool for transforming CSS with JavaScript plugins.
- `tailwindcss`: 3.4.17 - A utility-first CSS framework for building custom designs.
- `vite`: 6.0.5 - A fast development server and build tool for modern web projects.


# 🛠 How to Run the Project Locally

## 📖 Table of Contents
- [Prerequisites](#prerequisites)
- [Step 1: Clone the Repository](#step-1-clone-the-repository)
- [Step 2: Install Dependencies](#step-2-install-dependencies)
- [Step 3: Set Up Environment Variables](#step-3-set-up-environment-variables)
- [Step 4: Start the Development Server](#step-4-start-the-development-server)
- [Step 5: Run the Backend (if applicable)](#step-5-run-the-backend-if-applicable)
- [Step 6: Test the Project](#step-6-test-the-project)
- [Step 7: Build for Production](#step-7-build-for-production)
- [Step 8: Troubleshooting](#step-8-troubleshooting)

---

## 🔧 Prerequisites

Before you start, make sure you have the following installed on your machine:

- **Node.js (v18+)** - [Download & Install](https://nodejs.org/)
- **Git** - [Download & Install](https://git-scm.com/)
- **MongoDB** - [Download & Install](https://www.mongodb.com/try/download/community) (or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **VS Code (or any code editor)** - [Download & Install](https://code.visualstudio.com/)
- **Vite** (optional, included in dependencies)

---

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jahidhasan6676/wearhive-e-commerce-client.git
cd wearhive-e-commerce-client
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following:

```env
VITE_apiKey=your_api_key_here
VITE_authDomain=your_auth_domain_here
VITE_projectId=your_project_id_here
VITE_storageBucket=your_storage_bucket_here
VITE_messagingSenderId=your_messaging_sender_id_here
VITE_appId=your_app_id_here
VITE_API_URL=your_api_url_here
VITE_IMGBB_API_KEY=your_imgbb_api_key_here
VITE_STRIPE_PAYMENT_KEY=your_stripe_payment_key_here
VITE_AICHATBOT_API_URL=your_aichatbot_api_url_here
```

4. Run the development server:

```bash
npm run dev
```
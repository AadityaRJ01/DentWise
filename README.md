# 🦷 DentWise – AI-Powered Dental Management System

DentWise is a comprehensive dental appointment management system that revolutionizes how patients book appointments and interact with dental professionals. Built with modern web technologies, it offers a seamless experience for both patients and dental practice administrators. 

---

## 🌐 Live Demo

🔗 https://dent-wise-2von.vercel.app/

---

## 💡 Problem Statement

Managing dental clinics manually leads to inefficiencies in scheduling, patient communication, and billing.
DentWise solves this by providing an automated, scalable, and intelligent system for modern clinics.

---

## 🚀 Features

### 🔐 **User Management**

- Secure user authentication and registration via Clerk
- User profile management with personal information
- Role-based access control (Patients vs Admins)


### 📅 **Appointment Booking System**
- **Multi-step booking process:**

  1. Select verified dentist from available professionals
  2. Choose appointment type (Checkup, Cleaning, Emergency, etc.)
  3. Pick date and time from real-time availability
  4. Confirm booking with instant confirmation
- Real-time conflict detection and prevention
- Automated email confirmations with appointment details
- Appointment history and management


### 🤖 **AI Voice Assistant** (Pro Feature)

- Powered by Vapi AI for natural voice interactions
- Instant dental advice and consultation
- 24/7 availability for patient queries
- Voice-to-text transcription capabilities


### 👨‍⚕️ **Doctor Management**

- Comprehensive doctor profiles with specializations
- Professional credentials and bio information
- Appointment tracking and statistics
- Active/inactive status management


### 🎛️ **Admin Dashboard**
- **Real-time Statistics:**

  - Total doctors and active count
  - Appointment metrics and completion rates
  - Practice performance insights

  
- **Doctor Management:**

  - Add new dental professionals
  - Edit doctor information and credentials
  - Manage doctor availability status
  
- **Appointment Oversight:**

  - View all appointments across the practice
  - Update appointment statuses
  - Monitor recent booking activities


### 💳 **Subscription Management**

- Integrated with Clerk's subscription system
- Pro plan features for AI voice assistant
- Flexible pricing tiers


### 📧 **Email Integration**

- Beautiful HTML email templates
- Appointment confirmation emails
- Automated notifications via Resend
- Professional branding and styling

---

## 📸 Screenshots

### 🏠 Landing Page

<p align="center">
  <img src="./screenshots/Landing-page1.png" width="80%" />
</p>

<p align="center">
  <img src="./screenshots/Landing-Page2.png" width="45%" />
  <img src="./screenshots/Landing-Page3.png" width="45%" />
</p>

<p align="center">
  <img src="./screenshots/Landing-Page4.png" width="45%" />
  <img src="./screenshots/Landing-Page5.png" width="45%" />
</p>

---

### 🧑‍💼 Admin Page

<p align="center">
  <img src="./screenshots/Admin-Page.png" width="70%" />
</p>

---

### 📊 Dashboard

<p align="center">
  <img src="./screenshots/dashboard.png" width="70%" />
</p>

---

### 💳 Pro Page

<p align="center">
  <img src="./screenshots/Pro-Page.png" width="70%" />
</p>

---

### 🎙️ Voice Page

<p align="center">
  <img src="./screenshots/Voice-Page.png" width="70%" />
</p>
---

## 🛠️ Tech Stack

### **Frontend**

- **Framework:** Next.js 15.5.0 with App Router
- **Language:** TypeScript 5.0
- **Styling:** TailwindCSS 4.0 with custom animations
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Date Handling:** date-fns


### **Backend**

- **Runtime:** Node.js with Next.js API routes
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** Clerk (supports OAuth, magic links, etc.)
- **Email Service:** Resend for transactional emails


### **AI & Voice**

- **Voice AI:** Vapi AI integration for voice consultations
- **Real-time Communication:** WebSocket support


### **Development Tools**

- **Code Quality:** Biome for linting and formatting
- **Build Tool:** Turbopack for fast development
- **Package Manager:** npm/yarn/pnpm compatible
- **Type Safety:** Full TypeScript coverage


### **State Management**

- **Data Fetching:** TanStack Query (React Query)
- **Form Handling:** Native React state with validation
- **Global State:** React Context for auth and theme

---

## 🧠 Architecture

* REST API backend
* Component-based frontend
* Secure authentication
* Scalable database

---

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AadityaRJ01/DentWise.git
   cd dentwise
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/dentwise"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   
   # Admin Configuration
   NEXT_PUBLIC_ADMIN_EMAIL="admin@yourdomain.com"
   
   # Email Service (Resend)
   RESEND_API_KEY="your_resend_api_key"
   
   # AI Voice Assistant (Vapi)
   NEXT_PUBLIC_VAPI_API_KEY="your_vapi_api_key"
   VAPI_WEBHOOK_SECRET="your_vapi_webhook_secret"
   
   # Application URL
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma db push
   
   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Access the Application**
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - Sign up for a new account or sign in
   - Admin access: Use the email configured in `NEXT_PUBLIC_ADMIN_EMAIL`

---

---

## 📂 Project Structure

```
dentwise/
├── prisma/
│   └── schema.prisma              # Database schema and models
├── public/                        # Static assets (images, icons)
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── admin/                # Admin dashboard pages
│   │   ├── api/                  # API routes
│   │   ├── appointments/         # Appointment booking pages
│   │   ├── dashboard/            # User dashboard
│   │   ├── pro/                  # Pro subscription pages
│   │   └── voice/                # AI voice assistant pages
│   ├── components/               # Reusable UI components
│   │   ├── admin/                # Admin-specific components
│   │   ├── appointments/         # Booking flow components
│   │   ├── dashboard/            # Dashboard widgets
│   │   ├── emails/               # Email templates
│   │   ├── landing/              # Landing page components
│   │   ├── ui/                   # Base UI components
│   │   └── voice/                # Voice assistant components
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utility functions and configurations
│   │   └── actions/              # Server actions for data fetching
│   └── middleware.ts             # Next.js middleware for auth
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 📱 API Documentation

### Appointment Management
- `POST /api/appointments` - Create new appointment
- `GET /api/appointments` - Fetch user appointments
- `PUT /api/appointments/[id]` - Update appointment status

### Email Services
- `POST /api/send-appointment-email` - Send confirmation emails

### Voice AI Integration
- `POST /api/vapi/webhook` - Handle voice assistant interactions

---

## 🎯 Key Learnings

* Built real-world SaaS system
* Integrated auth + payments
* Designed scalable backend
* Improved UI/UX

---

## 🔮 Future Improvements

* 📱 Mobile optimization
* 🧠 Advanced AI features
* 📊 Analytics dashboard

---

## 👨‍💻 Author

Aaditya Raj Joshi

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

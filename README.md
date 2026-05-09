# HelpLink

## 🔗 Live Link: [HelpLink](https://helplink-frontend.vercel.app)

## Overview

Every year, during winter, floods and cyclones in Bangladesh, underprivileged people suffer. Many donors want to help but do not know who to help. This project is a MERN Stack web platform that connects donors, receivers, volunteers and admin to ensure timely relief distribution.

## Features

- Receivers can post their issues and donors can easily view these requests and provide assistance through donations, ensuring a transparent and efficient support system.

- The platform uses AI to analyze request titles and determine emergency levels automatically. Highly urgent requests can be instantly prioritized or auto-approved to accelerate relief distribution during critical situations.

- Integrated an AI-powered chatbot to provide instant support and guidance for users. The chatbot helps users navigate the platform, answer common questions, provide emergency assistance information, and improve overall user experience during disaster situations.

- Every user is securely authorized using JWT tokens with role-based access control.
  - **Receiver:** Post requests for help; view, update, and delete only their own requests.
  - **Donor:** View donation history and track supported requests.
  - **Admin:** Manage users, campaigns, donations, and approvals through a dedicated dashboard.
  - **Volunteer:** Verify requests and manage assigned campaigns from a separate dashboard.

- Implemented secure authentication with protected routes and role-based permissions to ensure platform security and data privacy.

- Integrated REST APIs for authentication, donation management, request handling, and real-time data communication between frontend and backend systems.

## 🛠️ Technologies Used

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- RTK Query
- React Hook Form
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication & AI

- JWT
- NextAuth
- OpenAI API

## Run Locally

Clone the project

```bash
  git clone https://github.com/kalidashodekare14/HelpLink_Frontend.git
```

Go to the project directory

```bash
  cd HelpLink_Frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start / dev
```

Create a .env file in the root directory and add the required environment variables:

```
NEXT_JWT_SECRET=your_jwt_secret
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
NEXT_PUBLIC_API_BASE_URL=https://helplink-backend.vercel.app
NEXT_GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
```

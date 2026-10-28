# StaffSync - Modern Human Resource Management Solution

MERN stack app for HR, managers, and employees. HR manages people and announcements, managers approve team leave and assign training, and employees apply for leave, mark attendance, and update their profile.

## Stack

- Backend: Node.js, Express.js, MongoDB (Mongoose), JWT, bcryptjs
- Frontend: React (Vite), React Router, Axios, Bootstrap, Context API

## Roles

- **HR**: employee CRUD, post/delete announcements, view all leaves and attendance
- **Manager**: view team leave requests, approve/reject, create and assign training
- **Employee**: apply leave, view leave status, mark attendance, view announcements, update profile

Managers see employees who share the same department.

## Project structure

```
staffsyncc/
  backend/
  frontend/
```

## Prerequisites

- Node.js
- MongoDB running locally (or a MongoDB Atlas connection string)

## Setup

### 1. Backend

```bash
cd backend
copy .env.example .env
```

On macOS/Linux use `cp .env.example .env`.

Edit `.env`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/staffsync
JWT_SECRET=replace_this_with_a_long_random_secret
```

```bash
npm install
npm start
```

API runs at `http://localhost:5000`.

### 2. Frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## Try it

1. Register an **HR** account, a **Manager** account, and an **Employee** account.
2. Use the same department for the manager and employee so team leave and training assignment work.
3. Employee applies for leave and marks attendance.
4. Manager approves or rejects the request and assigns training.
5. HR posts announcements and reviews all employees, leaves, and attendance.

## API overview

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- ` /api/hr/*` (HR JWT required)
- ` /api/manager/*` (Manager JWT required)
- ` /api/employee/*` (Employee JWT required)

# 🏥 Healthcare System - Next.js (CarePulse)

A full-stack healthcare system built using **Next.js 14 App Router**, enabling admin, patients, and doctors to manage appointments, user data, and communication through an intuitive interface.

🚀 **Live Demo:** [healthcare-system-next-js.vercel.app](https://healthcare-system-next-js.vercel.app)

---

## ⚙️ Tech Stack

| Category           | Tech / Tool                     |
|--------------------|----------------------------------|
| Frontend Framework | [Next.js 14 - App Router]        |
| Styling            | Tailwind CSS, `clsx`, `tailwind-merge` |
| State Management   | React Hooks                      |
| Form Handling      | `react-hook-form`, `@hookform/resolvers`, `zod` |
| File Upload        | `react-dropzone`                 |
| Date Input         | `react-datepicker`               |
| Phone Input        | `react-phone-number-input`       |
| UI Components      | Radix UI (`@radix-ui/react-*`)   |
| Icons              | `lucide-react`                   |
| Theme Switching    | `next-themes`                    |
| Tables             | `@tanstack/react-table`          |
| Backend Services   | **Appwrite** (Database, Storage, Auth, SMS) |
| Error Tracking     | `@sentry/nextjs` (Optional)      |

---

## 🧭 Application Flow

### 🔐 Authentication (via Appwrite)
- User registration & login (with email & phone)
- Roles:
  - **Admin**: Full access to all users and appointments.
  - **Doctor**: Can view and manage appointments.
  - **Patient**: Can register, upload documents, and book/cancel appointments.

### 📄 Patient Registration
- Multi-step form.
- Uploads identification document to Appwrite Storage.
- Saved to Appwrite Database with secure access.

### 🩺 Appointment System
- Admin/Patient can create new appointments.
- Appointment data saved in Appwrite Database.
- SMS notifications are sent via Appwrite Messaging (if configured).

### 📁 File Upload
- Patients upload identification documents using `react-dropzone`.
- Uploaded files stored securely in Appwrite and linked via signed URLs.

---


## 📌 Notes
- Ensure Appwrite is configured with correct Database, Storage, and Messaging permissions.
- Sentry is included but optional. Add DSN key if you want to enable error tracking.
- All server actions are handled via use server functions within the app directory.


---


## 🚀 Getting Started (Locally)

1. **Clone the repo:**
```bash
git clone https://github.com/MohammedOsamma/healthcare-system-NextJs.git
cd healthcare-system-NextJs



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Developed by Mohammed Osama.

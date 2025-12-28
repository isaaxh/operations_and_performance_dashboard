# Operations & Performance Dashboard

A web-based internal dashboard that provides businesses with real-time visibility into operations, performance metrics, and decision-critical KPIs.  
Designed to replace spreadsheets and fragmented tools with a single, reliable source of truth.

---

## 📌 Overview

Many businesses rely on Google Sheets, email, and messaging apps to track operations and performance. This project demonstrates how those fragmented workflows can be consolidated into a secure, scalable web dashboard that enables faster decision-making.

The **Operations & Performance Dashboard** is built as a **SaaS-style MVP** and showcases best practices for internal tools, admin dashboards, and analytics systems.

---

## 🎯 Key Features

- Secure authentication and role-based access (Admin, Viewer)
- KPI overview with real-time performance indicators
- Interactive charts for trends and comparisons
- Filterable and searchable data tables
- Channel and campaign performance breakdown
- Responsive layout for desktop and tablet
- Clean, admin-focused UI

---

## 🧩 Use Cases

This project can be adapted for:

- SaaS founders tracking product and growth metrics
- Marketing agencies monitoring campaign performance
- Operations teams managing internal workflows
- Service-based businesses replacing manual reporting

---

## 🛠️ Tech Stack

### Frontend & Backend (BFF)

- **Next.js** (App Router)

### Database & Authentication

- **Supabase** (PostgreSQL + Auth)

### UI & Data Visualization

- **Tailwind CSS**
- **Recharts** or **Chart.js**

---

## 🧠 System Architecture

This architecture keeps the system secure, scalable, and easy to maintain without introducing unnecessary backend complexity.

---

## 📊 Core Functionality

### Authentication & Roles

- Users authenticate via Supabase Auth
- Role-based access ensures data security
- Admins can manage users and settings

### Dashboard & KPIs

- Revenue, spend, leads, and conversion rate
- Date-range filtering
- Trend indicators for quick insights

### Analytics & Visualization

- Line charts for performance over time
- Bar charts for channel comparisons
- Drill-down views for deeper analysis

### Data Management

- Structured time-series metrics
- Search, filter, and pagination
- Export-ready data views

---

## 🗂️ Database Schema (High-Level)

- **profiles** – User metadata and roles
- **data_sources** – Marketing or operational channels
- **campaigns** – Logical groupings of activity
- **metrics** – Time-series performance data

KPIs are calculated dynamically from metrics to ensure accuracy and flexibility.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- Supabase account
- Supabase project credentials

---

### Installation

```bash
git clone https://github.com/your-username/operations-performance-dashboard.git
cd operations-performance-dashboard
npm install
```

---

### Run the Project

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

### 🧑‍💼 Author

Ishaq Hussain
Web Developer specializing in SaaS MVPs, internal dashboards, and admin systems.

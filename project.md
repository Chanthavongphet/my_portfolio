# Savanvayu Web Portal - Design System

## Project Overview
**Name:** Savanvayu Web Portal  
**Purpose:** A public web portal providing wind power-related information, statistics, and insights.  
**Target Audience:** General public, researchers, policymakers, and industry experts.  

### Key Features
- Informational content (articles, research papers, news)
- Wind power statistics and data visualization
- Interactive maps for wind energy sites
- User authentication (optional, for specific sections)

---

## Technology Stack

### Frontend
- **Framework:** Next.js 15.1.6 (React-based)
- **UI Library:** Ant Design
- **Styling:** Tailwind CSS (for utility-first styling)
- **State Management:** React Context API or Zustand (lightweight state management)
- **Data Fetching:** Next.js API routes (or SWR/React Query for client-side fetching)
- **Charting & Visualization:** Chart.js, D3.js, or Recharts
- **Maps Integration:** OpenLayers or Leaflet for wind power site locations

### Backend
- **Framework:** Next.js API Routes (Server-side functions)
- **Authentication:** NextAuth.js (for handling login sessions)
- **ORM:** Prisma (for database interactions)
- **Data Validation:** Zod (for type-safe validation of API inputs)
- **Caching & Performance:** Redis (optional, for caching API responses)

### Database
- **Database Engine:** PostgreSQL (scalable, relational database)
- **Hosting:** DigitalOcean/AWS RDS/Supabase (managed Postgres instance)
- **Schema Management:** Prisma Migrations

---

## System Architecture

### Frontend Architecture
- **Component-based Design:** Reusable UI components (Navbar, Footer, Cards, Tables)
- **Layout System:** Flexible page structure with a consistent UI/UX
- **Static & Server-Side Rendering (SSR/SSG):**
  - **SSG (Static Site Generation):** For public pages (e.g., news, research)
  - **SSR (Server-Side Rendering):** For dynamic data (e.g., live wind power statistics)

### Backend Architecture
- **API Routes:** Next.js API handlers (`/api`) for database interactions
- **Role-based Access Control (RBAC):** (If needed for admin/user roles)
- **Data Processing:** Scheduled tasks (cron jobs) for periodic data updates

### Database Schema (Simplified)
- **Users** (id, name, email, role, createdAt)
- **Articles** (id, title, content, authorId, createdAt)
- **Wind Data** (id, location, wind_speed, power_generated, timestamp)
- **Research Papers** (id, title, summary, link, authorId, createdAt)

---

## Deployment & DevOps
- **Frontend & Backend Deployment:** Vercel (for serverless Next.js)
- **Database Hosting:** Supabase, AWS RDS, or DigitalOcean PostgreSQL
- **CI/CD:** GitHub Actions (for automated testing & deployment)
- **Monitoring & Logging:** Sentry (for error tracking) & LogRocket

---

## Future Enhancements
- **AI-Powered Insights:** Use OpenAI API for summarizing reports
- **Progressive Web App (PWA):** For better offline support
- **Mobile Responsiveness:** Optimized UI for mobile devices

# 🎮 Eneba Demo App

A simple full-stack web application built as part of the **Software Engineer Intern** homework assignment for **Eneba**.  
The app allows users to search for games using a responsive UI and a backend API with SQL-based search.

🌐 **Live demo:**  
👉 http://185.80.129.97:8080/

---

## 📌 Assignment Overview

**Goal:**  
Create a web application with a searchable game list that matches the provided design as closely as possible.

**Key requirements fulfilled:**

- React frontend
- Node.js backend
- SQL database
- Public API endpoints:
  - `/list`
  - `/list?search=<gamename>`
- Self-hosted and publicly accessible
- AI usage allowed and disclosed separately

---

## 🧱 Tech Stack

### Front-End

- Vite
- React
- JavaScript

### Back-End

- Node.js
- REST API
- Custom SQL queries (no ORM)

### Database

- MySQL

### Deployment

- Hosted on a personal VPS
- Frontend and backend run as separate services

---

## 🎮 Game Data

The database contains **5 games** (with variations):

- FIFA 23
- Red Dead Redemption 2
- Split Fiction
- Minecraft
- SnowRunner

---

## 🔍 Search Functionality

- The search is performed **in real time** as the user types
- Requests are sent to the backend **after each entered character**
- Supports **partial matching** using SQL-based search
- Results update instantly without page reload

**Example request:**

```http
GET /list?search=fifa
```

---

## ⚡ Quick Start (Local)

1. Clone the repository
2. Install dependencies:

Front-End:

```
npm install
```

Back-End:

```
npm install
```

3. Create MySQL database and tables (example schema provided in /server/db/schema.sql)

4. Create .env files:

```
PORT=3001
DB_HOST=127.0.0.1
DB_PORT=3307
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
VITE_API_BASE_URL=http://localhost:3001
```

5. Start the application:

Front-End:

```
npm run dev
```

Back-End:

```
npm run dev
```

### Important Note

For security reasons, **MySQL credentials are not exposed** in this repository.  
Because of this, when running the project locally, **no game data will be available by default** unless you provide your own database and seed it manually.

If you prefer not to set up the database locally, the live demo already demonstrates full application functionality.

The live demo uses a populated database hosted on a private VPS.

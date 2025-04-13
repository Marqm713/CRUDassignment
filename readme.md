# 📖 Ebook Landing Page with Dynamic Reviews (AngularJS + Node.js + MySQL)

## ✅ Project Overview
A responsive ebook landing page that dynamically loads and manages user reviews via a **MySQL database**, **Node.js REST API**, and **AngularJS**.

---

## ✅ Technologies Used
- **HTML / CSS / Bootstrap 5**
- **JavaScript / AngularJS 1.8**
- **Node.js (Express)**
- **MySQL Database**
- **REST API**
- **dotenv** for environment config

---

## ✅ Project Structure
```
📁 templatemo_588_ebook_landing/
│
├── css/
├── images/
├── js/
├── my-api/                  # Node.js API server
│   ├── server.js
│   ├── .env
│   ├── create_ebook_db.sql  # Database/table creation
│   └── package.json
├── index.html               # Main landing page (displays reviews only)
├── reviews.html             # Admin panel (Add/Edit/Delete reviews)
└── README.md
```

---

## ✅ Setup Instructions

### 1⃣️ Clone the Project
```bash
git clone https://github.com/Marqm713/CRUDassignment
cd ebook-landing/my-api
```

---

### 2⃣️ Create and Import the MySQL Database
In MySQL:
```sql
-- Run this from a MySQL terminal or GUI:
CREATE DATABASE IF NOT EXISTS ebook_db;
USE ebook_db;

CREATE TABLE IF NOT EXISTS reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT NOT NULL,
  avatar VARCHAR(255)
);
```

Or just run:
```bash
mysql -u root -p < create_ebook_db.sql
```

---

### 3⃣️ Configure Environment Variables
Create a `.env` file inside the `my-api/` folder:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=ebook_db
DB_PORT=3306
```

---

### 4⃣️ Install Dependencies and Start Server
Inside the `my-api/` folder, run:

```bash
npm install express mysql2 cors body-parser dotenv

```

✅ You should see:
```
Connected to MySQL
Server running at http://localhost:3000
```

---

## ✅ Pages

### 🔹 `index.html`
- Public-facing landing page
- Displays reviews using AngularJS via API call

### 🔹 `reviews.html`
- Admin panel
- Add / Edit / Delete reviews (full CRUD)
- Connects to same API

---

## ✅ API Endpoints
- `GET    /api/reviews` – Get all reviews
- `POST   /api/reviews` – Add new review
- `PUT    /api/reviews/:id` – Update review by ID
- `DELETE /api/reviews/:id` – Delete review by ID

Example JSON:
```json
{
  "name": "Sophia",
  "role": "Writer",
  "rating": 5,
  "comment": "Loved this book!",
  "avatar": "images/avatar/avatar1.jpg"
}
```

---

## ✅ Deployment Notes
- Host frontend with Netlify, GitHub Pages, or Vercel
- Host backend with Render, Railway, or any Node-friendly service
- Make sure to change `localhost:3000` in HTML to match your production API domain

---

## ✅ Troubleshooting
- ❌ No reviews showing?
  - Check MySQL connection and table
  - Ensure server is running: `node server.js`
  - Look at console errors in browser dev tools

---

## ✅ Credits
- Template by [TemplateMo](https://templatemo.com)
- AngularJS: [angularjs.org](https://angularjs.org)
- MySQL: [mysql.com](https://www.mysql.com)

---


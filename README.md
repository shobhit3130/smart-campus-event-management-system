# smart-campus-event-management-system
# 🚀 Smart Interview Preparation Platform (Backend)

## 📌 Project Overview

This project is a backend system for a **Smart Interview Preparation Platform**.
It helps users practice interviews, track their progress, and improve their performance through structured APIs.

The backend is built using **Node.js** and **Express.js**, and it follows a scalable and modular structure for future enhancements like AI feedback and performance analysis.

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB** (for database)
* **Mongoose** (ODM)
* **REST API**

---

## 📂 Project Structure

```
backend_project/
│── config/
│   └── db.js
│── routes/
│   └── authRoutes.js
│── controllers/
│── models/
│── server.js
│── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/smart-interview-platform.git
```

### 2. Navigate to project directory

```bash
cd backend_project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

---

## 🔐 API Endpoints

### ➤ Test Route

* **GET** `/api/auth/test`
  ✔️ Used to check if the server and routes are working

### ➤ Register User

* **POST** `/api/auth/register`
  ✔️ Registers a new user with name, email, and password

---

## 📌 Features Implemented

* Express server setup
* Routing using Express Router
* Modular folder structure
* Basic user registration API
* API testing using Postman

---

## 🚀 Upcoming Features

* 🔐 User Login System (JWT Authentication)
* 🔒 Password Hashing using bcrypt

---

## 🧪 Testing

* APIs are tested using **Postman**
* JSON-based request handling enabled

---


If you find this project useful, consider giving it a ⭐ on GitHub!


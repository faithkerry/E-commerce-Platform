# E-commerce Platform

A full-stack E-commerce platform built from scratch with **Flask** (backend) and **React** (frontend), using **PostgreSQL** for reliable data storage and **Stripe** for payment processing.

---

## **Project Overview**

This project is a monorepo containing both the **backend** (`server`) and **frontend** (`client`) code:

- **Backend (Flask)**
  - User registration and JWT-based authentication
  - Product inventory management
  - Shopping cart functionality
  - Stripe payment integration
  - PostgreSQL database integration

- **Frontend (React)**
  - Responsive UI for browsing products
  - Shopping cart and checkout
  - Interaction with Flask API using JWT authentication

---

## **Folder Structure**

```text
ecommerce-platform/
├── server/                 # Flask backend
│   ├── app.py              # Main Flask app
│   ├── models.py           # SQLAlchemy models
│   ├── routes/             # API routes (users, products, cart, checkout)
│   ├── utils/              # Helper functions (JWT, payments)
│   ├── requirements.txt    # Python dependencies
│   └── config.py           # App configuration
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Pages (Home, ProductDetails, Cart, Checkout)
│   │   ├── services/       # API calls
│   │   └── App.jsx         # Main app component
│   ├── package.json
│   └── vite.config.js
├── .gitignore
├── README.md
└── .env                    # Environment variables


Getting Started
1. Backend Setup
cd server
python3 -m venv venv
source venv/bin/activate   # On Windows: .\venv\Scripts\Activate.ps1
pip install -r requirements.txt

Create a .env file with:

FLASK_APP=app.py
FLASK_ENV=development
DATABASE_URL=postgresql://username:password@localhost:5432/ecommerce_db
JWT_SECRET_KEY=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
2. Frontend Setup
cd client
npm install
npm run dev               # Start development server
Usage

Start backend server:

cd server
source venv/bin/activate
flask run

Start frontend server:

cd client
npm run dev

Visit http://localhost:5173 (React dev server) to browse products and test the app.

Features

User authentication with JWT

Product catalog with inventory management

Shopping cart logic

Stripe payment integration (sandbox/test mode)

Responsive React frontend

License

This project is licensed under the MIT License. See LICENSE for details.


---

## **Step 1: Commit & Push Commands**

```bash
# Stage README.md
git add README.md

# Commit with message
git commit -m "Add detailed README with project overview and setup instructions"

# Push to GitHub
git push origin main
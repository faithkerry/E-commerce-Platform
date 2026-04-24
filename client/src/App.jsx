import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Checkout from "./pages/Checkout"
import OrderSuccess from "./pages/OrderSuccess"
import ProtectedRoute from "./ProtectedRoute"
import Navbar from "./components/Navbar"

// ⭐ CLEAN HOME PAGE (NO PRODUCTS INSIDE)
function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-4xl font-bold mb-4">
        Welcome to KerryShop 🛍️
      </h1>

      <p className="text-gray-300 mb-6">
        Your premium online shopping experience
      </p>

      <p className="text-sm text-gray-400">
        Go to Products to start shopping
      </p>

    </div>
  )
}

function App() {
  return (
    <>
      {/* NAVBAR ALWAYS VISIBLE */}
      <Navbar />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />

        {/* REDIRECT ROOT */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ⭐ STEP 10 — CHECKOUT FLOW */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/home" />} />

      </Routes>
    </>
  )
}

export default App
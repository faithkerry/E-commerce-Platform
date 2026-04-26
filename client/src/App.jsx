import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";

// ⭐ HOME PAGE (keep here OR move later to pages/Home.jsx)
function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6">

      {/* LOGO */}
      <div className="flex justify-start pt-6">
        <img
          src="/kerryshop-logo.png"
          alt="KerryShop Logo"
          className="w-40"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">

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

    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Navigate to="/home" />} />

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

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
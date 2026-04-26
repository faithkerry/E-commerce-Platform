import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, User, Menu, X, Search } from "lucide-react";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    setCartCount(total);
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3 flex items-center justify-between gap-4">

      {/* LEFT — Hamburger + Logo */}
      <div className="flex items-center gap-3">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/home" className="flex items-center gap-2">
          <img
            src="/kerryshop-logo.png"
            alt="KerryShop"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold">
            <span className="text-gray-900">Kerry</span>
            <span className="text-green-600">Shop</span>
          </span>
        </Link>
      </div>

      {/* CENTER — Search Bar */}
      <div className="flex-1 max-w-xl hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-transparent outline-none text-sm w-full text-gray-700"
        />
      </div>

      {/* RIGHT — Icons */}
      <div className="flex items-center gap-4">
        <Link to="/favorites" className="text-gray-600 hover:text-red-500 hidden sm:block">
          <Heart size={22} />
        </Link>

        <Link to="/cart" className="relative text-gray-600 hover:text-green-600">
          <ShoppingCart size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </Link>

        <Link to="/profile" className="text-gray-600 hover:text-green-600">
          <User size={22} />
        </Link>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg px-6 py-4 flex flex-col gap-4 z-50">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 sm:hidden">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
          <Link to="/home" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Categories</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Orders</Link>
          <Link to="/favorites" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Favorites</Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Account</Link>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
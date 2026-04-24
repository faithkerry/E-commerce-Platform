import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import ProfileDrawer from "./ProfileDrawer"

function Navbar() {

  const [cartCount, setCartCount] = useState(0)
  const [user, setUser] = useState(null)
  const [openProfile, setOpenProfile] = useState(false)
  const navigate = useNavigate()

  // ⭐ FIX: FULL SYNC (login/logout instantly updates navbar)
  useEffect(() => {

    const syncUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"))
      setUser(storedUser)
    }

    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || []

      const totalItems = cart.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
      )

      setCartCount(totalItems)
    }

    // initial load
    syncUser()
    updateCart()

    // listen for changes
    window.addEventListener("storage", syncUser)
    window.addEventListener("storage", updateCart)

    window.addEventListener("userUpdated", syncUser)
    window.addEventListener("cartUpdated", updateCart)

    return () => {
      window.removeEventListener("storage", syncUser)
      window.removeEventListener("storage", updateCart)
      window.removeEventListener("userUpdated", syncUser)
      window.removeEventListener("cartUpdated", updateCart)
    }

  }, [])

  // ⭐ LOGOUT FIX (instant UI update)
  const handleLogout = () => {

    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("cart")

    setUser(null)
    setCartCount(0)

    // notify app instantly
    window.dispatchEvent(new Event("userUpdated"))
    window.dispatchEvent(new Event("cartUpdated"))

    navigate("/login")
  }

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">

        {/* LEFT LOGO */}
        <Link to="/home" className="text-2xl font-bold">
          KerryShop 🛍️
        </Link>

        {/* CENTER NAV */}
        <div className="flex gap-6 items-center">

          <Link to="/home" className="hover:text-yellow-400">
            Home
          </Link>

          <Link to="/products" className="hover:text-yellow-400">
            Products
          </Link>

          <Link to="/cart" className="relative hover:text-yellow-400">
            Cart 🛒

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

        </div>

        {/* RIGHT USER AREA */}
        <div className="flex items-center gap-4">

          {user ? (
            <>
              {/* PROFILE BUTTON */}
              <button
                onClick={() => setOpenProfile(true)}
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                👩 Profile
              </button>

              {/* EMAIL */}
              <span className="text-sm text-gray-300 hidden md:block">
                {user.email}
              </span>

              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="bg-red-600 px-4 py-1 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700"
            >
              Login
            </Link>
          )}

        </div>

      </nav>

      {/* PROFILE DRAWER */}
      <ProfileDrawer
        open={openProfile}
        onClose={() => setOpenProfile(false)}
      />
    </>
  )
}

export default Navbar
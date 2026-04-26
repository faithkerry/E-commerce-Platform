import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Heart, ArrowLeft, ShoppingCart } from "lucide-react"
import BottomNav from "../components/BottomNav"

function Wishlist() {
  const navigate = useNavigate()
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || []
    setWishlist(stored)
  }, [])

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id)
    setWishlist(updated)
    localStorage.setItem("wishlist", JSON.stringify(updated))
  }

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const existing = cart.find((item) => item.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    window.dispatchEvent(new Event("cartUpdated"))
    alert(`${product.name} added to cart! 🛒`)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* HEADER WITH BACK ARROW */}
      <div className="bg-white shadow-sm px-4 py-4 flex items-center gap-3 sticky top-0 z-40">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <h1 className="text-lg font-bold text-gray-800">My Wishlist ❤️</h1>
      </div>

      {/* EMPTY WISHLIST */}
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-6 pt-20 text-center">

          <div className="bg-red-100 rounded-full p-6 mb-6">
            <Heart size={64} className="text-red-400" />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            <em>Your Wishlist is empty!</em>
          </h2>

          <p className="text-gray-500 mb-8 italic">
            Save your favourite items and find them here!
          </p>

          <button
            onClick={() => navigate("/products")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Browse Products
          </button>

        </div>

      ) : (

        /* WISHLIST ITEMS */
        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover"
                />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                >
                  <Heart size={16} className="fill-red-500 text-red-500" />
                </button>
              </div>

              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 truncate">
                  {item.name}
                </h3>
                <p className="text-green-600 font-bold text-sm mt-1">
                  Ksh {item.price?.toLocaleString()}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-2 w-full flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2 rounded-full transition"
                >
                  <ShoppingCart size={14} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      )}

      <BottomNav />
    </div>
  )
}

export default Wishlist
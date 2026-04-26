import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ShoppingCart, ArrowLeft } from "lucide-react"
import BottomNav from "../components/BottomNav"

function Cart() {
  const [cart, setCart] = useState([])
  const [delivery, setDelivery] = useState("standard")
  const navigate = useNavigate()

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || []
    setCart(stored)
  }, [])

  const updateStorage = (updated) => {
    setCart(updated)
    localStorage.setItem("cart", JSON.stringify(updated))
    window.dispatchEvent(new Event("cartUpdated"))
  }

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id)
    updateStorage(updated)
  }

  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    )
    updateStorage(updated)
  }

  const decreaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
        : item
    )
    updateStorage(updated)
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  )

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* HEADER WITH BACK ARROW — ALWAYS VISIBLE */}
      <div className="bg-white shadow-sm px-4 py-4 flex items-center gap-3 sticky top-0 z-40">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <h1 className="text-lg font-bold text-gray-800">Your Cart 🛒</h1>
      </div>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-6 pt-20 text-center">

          <div className="bg-green-100 rounded-full p-6 mb-6">
            <ShoppingCart size={64} className="text-green-500" />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            <em>Your Cart is empty!</em>
          </h2>

          <p className="text-gray-500 mb-8 italic">
            Browse our categories and discover our best deals!
          </p>

          <button
            onClick={() => navigate("/products")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Start Shopping
          </button>

        </div>

      ) : (

        /* CART WITH ITEMS */
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT — ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow p-4 rounded-xl hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  className="w-16 h-16 object-cover rounded-lg"
                  alt={item.name}
                />

                <div className="flex-1 ml-4">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-green-600 font-bold">Ksh {item.price}</p>
                </div>

                {/* QUANTITY */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center font-bold"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity || 1}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
                >
                  Remove
                </button>

              </div>
            ))}
          </div>

          {/* RIGHT — SUMMARY */}
          <div className="bg-white shadow p-6 rounded-xl h-fit">

            <h3 className="text-xl font-bold mb-4">Order Summary</h3>

            <p className="mb-2 text-gray-600">Items: {cart.length}</p>

            <p className="text-lg font-bold mb-4 text-green-700">
              Total: Ksh {total.toLocaleString()}
            </p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Delivery Options</h4>
              <select
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                className="w-full border p-2 rounded-lg"
              >
                <option value="standard">Standard Delivery (2-3 days)</option>
                <option value="express">Express Delivery (Same day)</option>
                <option value="pickup">Pickup Station</option>
              </select>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 mb-2 font-semibold"
            >
              Checkout
            </button>

            <button
              onClick={() => window.print()}
              className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-900 font-semibold"
            >
              Print Receipt 🧾
            </button>

          </div>

        </div>

      )}

      <BottomNav />
    </div>
  )
}

export default Cart
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function Checkout() {

  const [cart, setCart] = useState([])
  const [delivery, setDelivery] = useState("standard")
  const navigate = useNavigate()

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || []
    setCart(stored)
  }, [])

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  )

  const handlePlaceOrder = () => {
    const order = {
      id: Date.now(),
      items: cart,
      total,
      delivery,
      date: new Date().toLocaleString()
    }
    localStorage.setItem("lastOrder", JSON.stringify(order))
    localStorage.setItem("cart", JSON.stringify([]))
    window.dispatchEvent(new Event("cartUpdated"))
    navigate("/order-success")
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
        <h1 className="text-lg font-bold text-gray-800">Checkout 🧾</h1>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT — ORDER ITEMS */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">

          <h2 className="font-bold text-gray-800 mb-4 text-lg">
            Order Items
          </h2>

          {cart.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center py-3 border-b last:border-0"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    Qty: {item.quantity || 1}
                  </p>
                </div>
              </div>
              <p className="font-bold text-green-600">
                Ksh {(item.price * (item.quantity || 1)).toLocaleString()}
              </p>
            </div>
          ))}

        </div>

        {/* RIGHT — SUMMARY */}
        <div className="bg-white p-6 rounded-2xl shadow-sm h-fit">

          <h2 className="font-bold text-gray-800 mb-4 text-lg">
            Summary
          </h2>

          <p className="text-gray-600 mb-1">
            Items: {cart.length}
          </p>

          <p className="text-xl font-bold text-green-700 mb-4">
            Total: Ksh {total.toLocaleString()}
          </p>

          {/* DELIVERY */}
          <div className="mb-4">
            <p className="font-semibold text-gray-700 mb-2">
              Delivery Options
            </p>
            <select
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
              className="w-full border border-gray-200 p-3 mb-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="standard">Standard Delivery (2-3 days)</option>
              <option value="express">Express Delivery (Same day)</option>
              <option value="pickup">Pickup Station</option>
            </select>
          </div>

          {/* PAYMENT METHOD */}
          <div className="mb-6">
            <p className="font-semibold text-gray-700 mb-3">
              Payment Method
            </p>

            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl mb-2 cursor-pointer hover:bg-gray-50">
              <input type="radio" name="pay" defaultChecked />
              <span className="text-sm font-medium">📱 M-Pesa</span>
            </label>

            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
              <input type="radio" name="pay" />
              <span className="text-sm font-medium">💳 Card Payment</span>
            </label>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  )
}

export default Checkout
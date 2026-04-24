import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

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
    const updated = cart.filter(item => item.id !== id)
    updateStorage(updated)
  }

  const increaseQty = (id) => {
    const updated = cart.map(item =>
      item.id === id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    )
    updateStorage(updated)
  }

  const decreaseQty = (id) => {
    const updated = cart.map(item =>
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

  // ⭐ PRINT RECEIPT
  const printReceipt = () => {
    window.print()
  }

  return (
    <div className="p-6 min-h-screen bg-gray-50">

      <h2 className="text-3xl font-bold mb-6">
        Your Cart 🛒
      </h2>

      {cart.length === 0 ? (

        <div className="text-center mt-20">

          <h3 className="text-xl text-gray-600 mb-4">
            Your cart is empty 😢
          </h3>

          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Browse Products
          </Link>

        </div>

      ) : (

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT ITEMS */}
          <div className="lg:col-span-2 space-y-4">

            {cart.map(item => (

              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow p-4 rounded hover:shadow-lg transition"
              >

                <img
                  src={item.image}
                  className="w-16 h-16 object-cover rounded"
                  alt={item.name}
                />

                <div className="flex-1 ml-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-blue-600 font-bold">
                    Ksh {item.price}
                  </p>
                </div>

                {/* QUANTITY */}
                <div className="flex items-center gap-2">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 bg-gray-300 rounded"
                  >
                    -
                  </button>

                  <span>{item.quantity || 1}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 bg-gray-300 rounded"
                  >
                    +
                  </button>

                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          {/* RIGHT SUMMARY */}
          <div className="bg-white shadow p-6 rounded h-fit">

            <h3 className="text-xl font-bold mb-4">
              Order Summary
            </h3>

            <p className="mb-2">
              Items: {cart.length}
            </p>

            <p className="text-lg font-bold mb-4">
              Total: Ksh {total}
            </p>

            {/* DELIVERY */}
            <div className="mb-4">

              <h4 className="font-semibold mb-2">
                Delivery Options
              </h4>

              <select
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="standard">
                  Standard Delivery (2-3 days)
                </option>

                <option value="express">
                  Express Delivery (Same day)
                </option>

                <option value="pickup">
                  Pickup Station
                </option>
              </select>

            </div>

            {/* ⭐ STEP 10 FIX — REAL CHECKOUT NAVIGATION */}
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mb-2"
            >
              Checkout
            </button>

            {/* PRINT RECEIPT */}
            <button
              onClick={printReceipt}
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Print Receipt 🧾
            </button>

          </div>

        </div>

      )}

    </div>
  )
}

export default Cart
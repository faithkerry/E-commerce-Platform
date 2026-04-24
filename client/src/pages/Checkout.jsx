import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

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

    // save order
    localStorage.setItem("lastOrder", JSON.stringify(order))

    // clear cart
    localStorage.setItem("cart", JSON.stringify([]))
    window.dispatchEvent(new Event("cartUpdated"))

    // go to success page
    navigate("/order-success")
  }

  return (
    <div className="p-6 min-h-screen bg-gray-100">

      <h1 className="text-3xl font-bold mb-6">
        Checkout 🧾
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 bg-white p-4 rounded shadow">

          <h2 className="font-bold mb-4">Order Items</h2>

          {cart.map(item => (
            <div key={item.id} className="flex justify-between mb-2">
              <p>{item.name} x {item.quantity || 1}</p>
              <p>Ksh {item.price * (item.quantity || 1)}</p>
            </div>
          ))}

        </div>

        {/* RIGHT */}
        <div className="bg-white p-4 rounded shadow">

          <h2 className="font-bold mb-4">Summary</h2>

          <p className="mb-2">Total: Ksh {total}</p>

          {/* DELIVERY */}
          <select
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
            className="w-full border p-2 mb-4 rounded"
          >
            <option value="standard">Standard Delivery</option>
            <option value="express">Express Delivery</option>
            <option value="pickup">Pickup Station</option>
          </select>

          {/* PAYMENT (UI ONLY) */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Payment Method</p>

            <label className="block">
              <input type="radio" name="pay" defaultChecked />
              {" "}M-Pesa
            </label>

            <label className="block">
              <input type="radio" name="pay" />
              {" "}Card Payment
            </label>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  )
}

export default Checkout
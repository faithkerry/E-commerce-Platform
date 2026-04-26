import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CheckCircle, ArrowLeft, Printer } from "lucide-react"

function OrderSuccess() {

  const [order, setOrder] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("lastOrder"))
    setOrder(data)
  }, [])

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No order found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* HEADER WITH BACK ARROW */}
      <div className="bg-white shadow-sm px-4 py-4 flex items-center gap-3 sticky top-0 z-40">
        <button
          onClick={() => navigate("/home")}
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <h1 className="text-lg font-bold text-gray-800">Order Confirmed</h1>
      </div>

      <div className="flex flex-col items-center justify-center px-6 pt-10 text-center">

        {/* SUCCESS ICON */}
        <div className="bg-green-100 rounded-full p-6 mb-4">
          <CheckCircle size={64} className="text-green-500" />
        </div>

        <h1 className="text-2xl font-bold text-green-700 mb-2">
          Order Successful! 🎉
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          Thank you for shopping with KerryShop!
        </p>

        {/* ORDER DETAILS CARD */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-6 text-left mb-6">

          <h2 className="font-bold text-gray-800 mb-4">Order Details</h2>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Order ID</span>
              <span className="font-semibold text-gray-800">#{order.id}</span>
            </div>
            <div className="flex justify-between">
              <span>Date</span>
              <span className="font-semibold text-gray-800">{order.date}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="font-semibold text-gray-800 capitalize">{order.delivery}</span>
            </div>
            <div className="flex justify-between border-t pt-2 mt-2">
              <span className="font-bold text-gray-800">Total</span>
              <span className="font-bold text-green-600">
                Ksh {order.total.toLocaleString()}
              </span>
            </div>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 w-full max-w-md">

          <button
            onClick={() => window.print()}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-xl font-semibold transition"
          >
            <Printer size={18} />
            Receipt
          </button>

          <button
            onClick={() => navigate("/products")}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Continue Shopping
          </button>

        </div>

      </div>

    </div>
  )
}

export default OrderSuccess
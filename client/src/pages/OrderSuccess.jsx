import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function OrderSuccess() {

  const [order, setOrder] = useState(null)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("lastOrder"))
    setOrder(data)
  }, [])

  if (!order) {
    return (
      <div className="p-6">
        <h2>No order found</h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center p-6">

      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Order Successful 🎉
      </h1>

      <p className="mb-2">
        Order ID: {order.id}
      </p>

      <p className="mb-2">
        Date: {order.date}
      </p>

      <p className="text-xl font-bold mb-6">
        Total: Ksh {order.total}
      </p>

      <button
        onClick={() => window.print()}
        className="bg-black text-white px-4 py-2 rounded mb-4"
      >
        Print Receipt 🧾
      </button>

      <Link
        to="/products"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Continue Shopping
      </Link>

    </div>
  )
}

export default OrderSuccess
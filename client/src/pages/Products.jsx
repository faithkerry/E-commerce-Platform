import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import BottomNav from "../components/BottomNav"

function Products() {
  const [products, setProducts] = useState([])
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const selectedCategory = searchParams.get("category") || "All Products"

  useEffect(() => {
    fetch("http://127.0.0.1:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products", err))
  }, [])

  const filtered = selectedCategory === "All Products"
    ? products
    : products.filter((p) =>
        p.category?.toLowerCase() === selectedCategory.toLowerCase()
      )

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
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* HEADER */}
      <div className="bg-white shadow-sm px-4 py-4 flex items-center gap-3 sticky top-0 z-40">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <div>
          <h1 className="text-lg font-bold text-gray-800">
            {selectedCategory}
          </h1>
          <p className="text-xs text-gray-400">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center pt-20 text-center px-6">
          <p className="text-gray-400 text-lg mb-4">
            No products found in this category yet.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold"
          >
            View All Products
          </button>
        </div>
      ) : (
        <div className="p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-800 truncate">
                  {product.name}
                </h3>
                <p className="text-green-600 font-bold text-sm mt-1">
                  Ksh {product.price?.toLocaleString()}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2 rounded-full transition"
                >
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

export default Products
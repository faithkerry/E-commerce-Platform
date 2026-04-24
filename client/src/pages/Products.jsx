import { useEffect, useState } from "react"

function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // ⭐ STEP 8.1 — SMART ADD TO CART (NO DUPLICATES + QUANTITY SUPPORT)
  const addToCart = (product) => {

    const cart = JSON.parse(localStorage.getItem("cart")) || []

    // 🔥 check if product already exists
    const existing = cart.find(item => item.id === product.id)

    if (existing) {
      // increase quantity instead of duplicating
      existing.quantity += 1
    } else {
      // add new product with quantity = 1
      cart.push({
        ...product,
        quantity: 1
      })
    }

    localStorage.setItem("cart", JSON.stringify(cart))

    // notify navbar instantly
    window.dispatchEvent(new Event("cartUpdated"))
  }

  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6">
        Products 🛍️
      </h2>

      {/* ⭐ GRID LAYOUT (AMAZON STYLE) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map(product => (

          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >

            {/* ⭐ IMAGE (KEPT SMALL AS YOU WANTED) */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover"
            />

            {/* PRODUCT INFO */}
            <div className="p-3">

              <h3 className="font-semibold text-md">
                {product.name}
              </h3>

              <p className="text-blue-600 font-bold">
                Ksh {product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Products
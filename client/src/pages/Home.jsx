import Banner from "../components/Banner";
import Categories from "../components/Categories";
import BottomNav from "../components/BottomNav";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: 3499,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 2499,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Perfume – Women",
    price: 1999,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=300&h=200&fit=crop",
  },
];

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden min-w-[160px] flex-shrink-0 relative">

      {/* WISHLIST HEART */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-2 right-2 z-10"
      >
        <Heart
          size={18}
          className={liked ? "fill-red-500 text-red-500" : "text-gray-300"}
        />
      </button>

      {/* PRODUCT IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover"
      />

      {/* PRODUCT INFO */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-1">
          <span className="text-green-600 font-bold text-sm">
            KSh {product.price.toLocaleString()}
          </span>

          <span className="flex items-center gap-1 text-yellow-400 text-xs">
            <Star size={12} className="fill-yellow-400" />
            {product.rating}
          </span>
        </div>

        {/* ADD TO CART BUTTON */}
        <button
          onClick={addToCart}
          className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2 rounded-full transition"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen pb-24">

      {/* BANNER */}
      <Banner />

      {/* CATEGORIES */}
      <Categories />

      {/* FEATURED PRODUCTS */}
      <div className="mx-4 mt-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-gray-800">
            Featured Products
          </h2>

          <button
            onClick={() => navigate("/products")}
            className="text-green-600 text-sm font-medium flex items-center gap-1"
          >
            See All ›
          </button>
        </div>

        {/* SCROLLABLE PRODUCT ROW */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>

      {/* BOTTOM NAV */}
      <BottomNav />

    </div>
  );
}

export default Home;
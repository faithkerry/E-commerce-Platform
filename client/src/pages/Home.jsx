import TopHeader from "../components/TopHeader";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import BottomNav from "../components/BottomNav";

function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white pb-24">

      {/* ⭐ TOP HEADER (small logo + search + icons) */}
      <TopHeader />

      {/* ⭐ HERO SECTION WITH BIG RIGHT LOGO */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10">

        {/* LEFT TEXT */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to KerryShop 🛍️
          </h1>

          <p className="text-gray-300 mb-6">
            Discover electronics, fashion, beauty, gaming and more —
            all in one smart marketplace.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
            Start Shopping
          </button>
        </div>

        {/* ⭐ BIG RIGHT LOGO */}
        <img
          src="/kerryshop-logo.png"
          alt="KerryShop Big Logo"
          className="w-80 mt-8 md:mt-0"
        />
      </div>

      {/* ⭐ CATEGORIES */}
      <h2 className="px-6 text-xl font-bold mb-4">
        Categories
      </h2>

      <Categories />

      {/* ⭐ FEATURED PRODUCTS PLACEHOLDER */}
      <h2 className="px-6 mt-10 text-xl font-bold">
        Featured Products
      </h2>

      <div className="px-6 text-gray-400 mt-2">
        Products will appear here...
      </div>

      {/* ⭐ BOTTOM NAVIGATION */}
      <BottomNav />

    </div>
  );
}

export default Home;
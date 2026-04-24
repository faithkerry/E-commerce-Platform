import Products from "./pages/Products"

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* ⭐ HERO SECTION */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-10">

        {/* LOGO ROW */}
        <div className="flex items-center gap-6 mb-6">

          <img
            src="https://tse2.mm.bing.net/th/id/OIP.1-IZeMYWNml68yNGqV7SygAAAA?pid=Api&h=220&P=0"
            alt="logo1"
            className="w-20 h-20 rounded-full object-cover border-2 border-white"
          />

          <h1 className="text-4xl font-bold">
            Welcome to KerryShop 🛍️
          </h1>

          <img
            src="https://tse2.mm.bing.net/th/id/OIP.LhdRfxsGYJAzRibHFxsakgHaHa?pid=Api&h=220&P=0"
            alt="logo2"
            className="w-20 h-20 rounded-full object-cover border-2 border-white"
          />

        </div>

        <p className="text-gray-300 mb-2">
          Your premium online shopping experience
        </p>

        <p className="text-sm text-gray-400 mb-6">
          Explore thousands of products at the best prices
        </p>

      </div>

      {/* ⭐ PRODUCTS SECTION (UNCHANGED FUNCTIONALITY) */}
      <div className="px-6 pb-10">
        <Products />
      </div>

    </div>
  )
}

export default Home
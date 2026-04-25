import logo from "../assets/kerryshop-logo.png"
function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center px-6">

      {/* ⭐ LOGO ADDED */}
      <img
        src={logo}
        alt="KerryShop Logo"
        className="w-72 mb-6 drop-shadow-xl"
      />

      <h1 className="text-4xl font-bold mb-4">
        Welcome to KerryShop 🛍️
      </h1>

      <p className="text-gray-300 mb-6">
        Your premium online shopping experience
      </p>

      <p className="text-sm text-gray-400">
        Go to Products to start shopping
      </p>

    </div>
  )
}

export default Home
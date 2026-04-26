function Banner() {
  return (
    <div className="mx-4 mt-4 rounded-3xl overflow-hidden" style={{background: "linear-gradient(135deg, #1a237e 0%, #1565c0 40%, #00897b 100%)"}}>
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-10 relative">

        {/* LEFT TEXT */}
        <div className="max-w-xs z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Shop Smart,<br />
            <span className="text-green-300">Live Better</span>
          </h1>

          <p className="mt-3 text-blue-100 text-sm">
            Quality products, best prices and fast delivery.
          </p>

          <button className="mt-6 bg-white text-blue-900 font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-100 transition">
            Shop Now
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">▶</span>
          </button>
        </div>

        {/* CENTER — Product Images (decorative) */}
        <div className="hidden md:flex items-end gap-4 mx-8">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&h=140&fit=crop" alt="headphones" className="rounded-xl h-36 w-28 object-cover" />
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=160&fit=crop" alt="phone" className="rounded-xl h-44 w-24 object-cover" />
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120&h=140&fit=crop" alt="shoe" className="rounded-xl h-36 w-28 object-cover" />
        </div>

        {/* RIGHT — Logo */}
        <div className="mt-6 md:mt-0 z-10 text-center">
          <img
            src="/kerryshop-logo.png"
            alt="KerryShop"
            className="w-36 md:w-48 mx-auto drop-shadow-xl"
          />
          <div className="bg-blue-900 text-white text-xs font-bold tracking-widest px-4 py-1 rounded mt-2 inline-block">
            WELCOME
          </div>
        </div>

      </div>
    </div>
  );
}

export default Banner;
import { useNavigate } from "react-router-dom"

function Banner() {
  const navigate = useNavigate()

  return (
    <div
      className="mx-4 mt-4 rounded-3xl overflow-hidden shadow-xl relative"
      style={{ minHeight: "240px", background: "linear-gradient(105deg, #0d1b6e 0%, #1a56a0 35%, #1a9e6e 65%, #7ec832 100%)" }}
    >

      {/* WHITE WAVY SHAPE — right side */}
      <div
        className="absolute top-0 right-0 h-full w-[35%]"
        style={{
          background: "white",
          borderRadius: "50% 0 0 50%",
        }}
      />

      {/* PRODUCTS IMAGE — background layer, left-center */}
      <div
        className="absolute bottom-0"
        style={{ left: "30%", transform: "translateX(-10%)" }}
      >
        <img
          src="/banner-products.png"
          alt="Products"
          className="object-contain opacity-90"
          style={{ maxHeight: "230px" }}
        />
      </div>

      <div className="relative flex items-center px-5 py-8 gap-0 h-full z-10">

        {/* LEFT — TEXT */}
        <div className="z-10 flex flex-col justify-center w-[35%]">

          <h1 className="text-6xl font-extrabold text-white leading-tight">
            Shop Smart,
          </h1>
          <h1
            className="text-6xl font-extrabold leading-tight"
            style={{ color: "#c8f04a" }}
          >
            Live Better
          </h1>

          <p className="text-white text-sm mt-2 leading-relaxed opacity-90">
            Quality products, best prices<br />and fast delivery.
          </p>

          {/* SHOP NOW BUTTON */}
          <button
            onClick={() => navigate("/categories")}
            className="mt-5 bg-white text-blue-900 font-bold text-sm px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-100 transition shadow-lg w-fit"
          >
            Shop Now
            <span
              className="text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: "#4caf50" }}
            >
              ▶
            </span>
          </button>

        </div>

        {/* SPACER — pushes logo to right */}
        <div className="w-[40%]" />

        {/* RIGHT — LOGO ON WHITE AREA */}
        <div className="z-10 w-[25%] flex flex-col items-center justify-center">
          <img
            src="/kerryshop-logo.png"
            alt="KerryShop"
            className="object-contain"
            style={{ width: "260px", height: "260px" }}
          />
        </div>

      </div>
    </div>
  )
}

export default Banner
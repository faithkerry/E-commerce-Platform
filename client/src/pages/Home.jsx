import TopHeader from "../components/TopHeader";
import Categories from "../components/Categories";
import BottomNav from "../components/BottomNav";

function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white pb-24">

      {/* TOP HEADER */}
      <TopHeader />

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10">

        <div>
          <h1 className="text-4xl font-bold mb-4">
            Welcome to KerryShop 🛍️
          </h1>

          <p className="text-gray-300">
            Your premium online shopping experience
          </p>
        </div>

        {/* BIG RIGHT LOGO */}
        <img
          src="/kerryshop-logo.png"
          alt="big logo"
          className="w-72 mt-6 md:mt-0"
        />

      </div>

      {/* CATEGORIES */}
      <h2 className="px-6 mb-4 text-xl font-bold">
        Categories
      </h2>

      <Categories />

      {/* BOTTOM NAV */}
      <BottomNav />

    </div>
  );
}

export default Home;
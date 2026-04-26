import { Heart, ShoppingCart, User } from "lucide-react";

function TopHeader() {
  return (
    <div className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-md">

      {/* Logo */}
      <img
        src="/kerryshop-logo.png"
        alt="logo"
        className="w-28"
      />

      {/* Search */}
      <input
        type="text"
        placeholder="Search for products..."
        className="bg-gray-800 rounded-full px-4 py-2 w-1/2 outline-none"
      />

      {/* Icons */}
      <div className="flex gap-4">
        <Heart className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>

    </div>
  );
}

export default TopHeader;
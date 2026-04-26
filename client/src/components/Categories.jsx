import { useNavigate } from "react-router-dom";
import {
  Tv, Shirt, Home, Sparkles, Trophy, Baby,
  Laptop, Gamepad2, Flower2, Briefcase, Plug, LayoutGrid
} from "lucide-react";

const categories = [
  { name: "Electronics", icon: Tv, bg: "bg-blue-100", color: "text-blue-600" },
  { name: "Fashion", icon: Shirt, bg: "bg-green-100", color: "text-green-600" },
  { name: "Home & Kitchen", icon: Home, bg: "bg-yellow-100", color: "text-yellow-600" },
  { name: "Beauty", icon: Sparkles, bg: "bg-pink-100", color: "text-pink-600" },
  { name: "Sports", icon: Trophy, bg: "bg-cyan-100", color: "text-cyan-600" },
  { name: "Toys", icon: Baby, bg: "bg-purple-100", color: "text-purple-600" },
  { name: "Computing", icon: Laptop, bg: "bg-indigo-100", color: "text-indigo-600" },
  { name: "Gaming", icon: Gamepad2, bg: "bg-red-100", color: "text-red-600" },
  { name: "Garden & Outdoors", icon: Flower2, bg: "bg-lime-100", color: "text-lime-600" },
  { name: "Office", icon: Briefcase, bg: "bg-orange-100", color: "text-orange-600" },
  { name: "Appliances", icon: Plug, bg: "bg-teal-100", color: "text-teal-600" },
];

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="mx-4 mt-4 bg-white rounded-2xl shadow-sm p-4">

      {/* SCROLLABLE ROW */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-1">

        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div
              key={index}
              onClick={() => navigate("/products")}
              className="flex flex-col items-center gap-2 cursor-pointer group min-w-[70px]"
            >
              <div className={`${cat.bg} w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon size={24} className={cat.color} />
              </div>
              <p className="text-xs text-gray-600 text-center font-medium leading-tight">
                {cat.name}
              </p>
            </div>
          );
        })}

        {/* VIEW ALL */}
        <div
          onClick={() => navigate("/products")}
          className="flex flex-col items-center gap-2 cursor-pointer group min-w-[70px]"
        >
          <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <LayoutGrid size={24} className="text-gray-500" />
          </div>
          <p className="text-xs text-gray-600 text-center font-medium">View All</p>
        </div>

      </div>

    </div>
  );
}

export default Categories;
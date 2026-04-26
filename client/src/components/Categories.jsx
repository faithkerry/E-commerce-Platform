const categories = [
  { name: "Electronics", icon: "💻" },
  { name: "Fashion", icon: "👗" },
  { name: "Home & Kitchen", icon: "🏠" },
  { name: "Health & Beauty", icon: "💄" },
  { name: "Sports", icon: "⚽" },
  { name: "Toys", icon: "🧸" },
  { name: "Computing", icon: "🖥️" },
  { name: "Gaming", icon: "🎮" },
  { name: "Garden & Outdoors", icon: "🌿" },
  { name: "Office", icon: "📁" },
  { name: "Appliances", icon: "🔌" },
];

function Categories() {
  return (
    <div className="px-4 py-4">

      {/* TITLE */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-white">
          Shop by Category
        </h2>

        <button className="text-sm text-yellow-400 hover:text-yellow-300">
          View All →
        </button>
      </div>

      {/* SCROLLABLE CATEGORIES */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">

        {categories.map((cat, index) => (
          <div
            key={index}
            className="
              min-w-[120px]
              bg-gray-800
              hover:bg-gray-700
              transition
              rounded-2xl
              p-4
              flex
              flex-col
              items-center
              justify-center
              cursor-pointer
              shadow-md
              hover:scale-105
            "
          >
            <span className="text-3xl mb-2">
              {cat.icon}
            </span>

            <p className="text-sm text-center">
              {cat.name}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Categories;
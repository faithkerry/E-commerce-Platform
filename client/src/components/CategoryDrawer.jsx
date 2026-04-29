import { X } from "lucide-react"

const categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Toys",
  "Computing",
  "Gaming",
  "Garden & Outdoors",
  "Office",
  "Appliances",
  "All Products",
]

function CategoryDrawer({ open, onClose, onSelect }) {
  return (
    <>
      {/* DARK OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        />
      )}

      {/* SLIDING DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >

        {/* DRAWER HEADER */}
        <div className="flex items-center justify-between px-5 py-4 bg-green-600">
          <h2 className="text-white font-bold text-lg">Categories</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-green-700 p-1 rounded-full transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* CATEGORY GRID — Jumia style */}
        <div className="overflow-y-auto h-full pb-20 p-3">
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => onSelect(cat)}
                className="bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-300 rounded-xl px-3 py-4 text-center transition"
              >
                <p className="text-xs text-gray-700 italic font-medium leading-tight">
                  {cat}
                </p>
              </button>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default CategoryDrawer
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BottomNav from "../components/BottomNav"

const categoryData = [
  {
    name: "Electronics",
    subcategories: [
      { name: "Smartphones", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop" },
      { name: "Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" },
      { name: "Smart Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop" },
      { name: "Tablets", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=200&fit=crop" },
      { name: "Cameras", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop" },
      { name: "Speakers", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop" },
    ],
  },
  {
    name: "Fashion",
    subcategories: [
      { name: "Men's Wear", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=200&h=200&fit=crop" },
      { name: "Women's Wear", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=200&h=200&fit=crop" },
      { name: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop" },
      { name: "Bags", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop" },
      { name: "Sunglasses", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop" },
      { name: "Watches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&h=200&fit=crop" },
    ],
  },
  {
    name: "Home & Kitchen",
    subcategories: [
      { name: "Cookware", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop" },
      { name: "Bedding", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200&h=200&fit=crop" },
      { name: "Furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop" },
      { name: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a35359e16?w=200&h=200&fit=crop" },
      { name: "Storage", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop" },
      { name: "Curtains", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop" },
    ],
  },
  {
    name: "Beauty",
    subcategories: [
      { name: "Skincare", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop" },
      { name: "Perfumes", image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=200&h=200&fit=crop" },
      { name: "Makeup", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop" },
      { name: "Hair Care", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=200&h=200&fit=crop" },
      { name: "Nail Care", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop" },
      { name: "Body Lotion", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop" },
    ],
  },
  {
    name: "Sports",
    subcategories: [
      { name: "Football", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop" },
      { name: "Gym Equipment", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=200&fit=crop" },
      { name: "Cycling", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=200&h=200&fit=crop" },
      { name: "Swimming", image: "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?w=200&h=200&fit=crop" },
      { name: "Running", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop" },
      { name: "Yoga", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=200&fit=crop" },
    ],
  },
  {
    name: "Toys",
    subcategories: [
      { name: "Action Figures", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop" },
      { name: "Board Games", image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=200&h=200&fit=crop" },
      { name: "Dolls", image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=200&h=200&fit=crop" },
      { name: "Puzzles", image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=200&h=200&fit=crop" },
      { name: "Remote Cars", image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=200&h=200&fit=crop" },
      { name: "Baby Toys", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=200&h=200&fit=crop" },
    ],
  },
  {
    name: "Computing",
    subcategories: [
      { name: "Laptops", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop" },
      { name: "Monitors", image: "https://images.unsplash.com/photo-1527443224154-c4a573d5f5ea?w=200&h=200&fit=crop" },
      { name: "Keyboards", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop" },
      { name: "Mouse", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop" },
      { name: "Hard Drives", image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=200&h=200&fit=crop" },
      { name: "Printers", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=200&h=200&fit=crop" },
    ],
  },
  {
    name: "Gaming",
    subcategories: [
      { name: "Consoles", image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=200&h=200&fit=crop" },
      { name: "Controllers", image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=200&h=200&fit=crop" },
      { name: "Games", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&h=200&fit=crop" },
      { name: "Headsets", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" },
      { name: "Gaming Chairs", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=200&h=200&fit=crop" },
      { name: "VR Headsets", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=200&h=200&fit=crop" },
    ],
  },
  {
    name: "Garden & Outdoors",
    subcategories: [
      { name: "Garden Tools", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=200&fit=crop" },
      { name: "Plants", image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=200&h=200&fit=crop" },
      { name: "BBQ Grills", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop" },
      { name: "Tents", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=200&h=200&fit=crop" },
      { name: "Outdoor Chairs", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop" },
      { name: "Solar Lights", image: "https://images.unsplash.com/photo-1513506003901-1e6a35359e16?w=200&h=200&fit=crop" },
    ],
  },
  {
    name: "Office",
    subcategories: [
      { name: "Desks", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=200&h=200&fit=crop" },
      { name: "Office Chairs", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=200&h=200&fit=crop" },
      { name: "Stationery", image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=200&h=200&fit=crop" },
      { name: "Shredders", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=200&h=200&fit=crop" },
      { name: "Whiteboards", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop" },
      { name: "Filing Cabinets", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop" },
    ],
  },
  {
    name: "Appliances",
    subcategories: [
      { name: "Fridges", image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=200&h=200&fit=crop" },
      { name: "Washing Machines", image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=200&h=200&fit=crop" },
      { name: "Microwaves", image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=200&h=200&fit=crop" },
      { name: "Blenders", image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=200&h=200&fit=crop" },
      { name: "Air Fryers", image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=200&h=200&fit=crop" },
      { name: "Irons", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop" },
    ],
  },
]

function Categories() {
  const [selected, setSelected] = useState(categoryData[0])
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 pb-24 flex flex-col">

      {/* HEADER */}
      <div className="bg-white shadow-sm px-4 py-4 sticky top-0 z-40">
        <h1 className="text-lg font-bold text-gray-800">Categories</h1>
      </div>

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT — Category List */}
        <div className="w-28 bg-white border-r border-gray-100 overflow-y-auto flex-shrink-0">
          {categoryData.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelected(cat)}
              className={`w-full px-3 py-4 text-center border-b border-gray-100 transition
                ${selected.name === cat.name
                  ? "bg-green-50 border-l-4 border-l-green-600"
                  : "hover:bg-gray-50"
                }`}
            >
              <p className={`text-xs italic leading-tight
                ${selected.name === cat.name
                  ? "text-green-700 font-bold"
                  : "text-gray-600 font-medium"
                }`}
              >
                {cat.name}
              </p>
            </button>
          ))}
        </div>

        {/* RIGHT — Subcategories Grid */}
        <div className="flex-1 overflow-y-auto p-3">

          {/* SECTION TITLE */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-bold text-gray-800 italic">
              {selected.name}
            </h2>
            <button
              onClick={() => navigate(`/products?category=${encodeURIComponent(selected.name)}`)}
              className="text-xs text-green-600 font-semibold"
            >
              See All
            </button>
          </div>

          {/* SUBCATEGORY GRID */}
          <div className="grid grid-cols-3 gap-2">
            {selected.subcategories.map((sub, index) => (
              <button
                key={index}
                onClick={() => navigate(`/products?category=${encodeURIComponent(sub.name)}`)}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-full h-20 object-cover"
                />
                <p className="text-xs text-gray-700 italic text-center py-2 px-1 leading-tight">
                  {sub.name}
                </p>
              </button>
            ))}
          </div>

        </div>

      </div>

      <BottomNav />
    </div>
  )
}

export default Categories
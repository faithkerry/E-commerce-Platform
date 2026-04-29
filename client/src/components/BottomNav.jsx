import { Link, useLocation } from "react-router-dom"
import { Home, Grid, ShoppingCart, Heart, User } from "lucide-react"

function BottomNav() {
  const location = useLocation()

  const links = [
    { to: "/home", icon: Home, label: "Home" },
    { to: "/categories", icon: Grid, label: "Categories" },
    { to: "/cart", icon: ShoppingCart, label: "Cart" },
    { to: "/wishlist", icon: Heart, label: "Wishlist" },
    { to: "/account", icon: User, label: "Account" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 z-30">
      {links.map(({ to, icon: Icon, label }) => {
        const active = location.pathname === to
        return (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center gap-1 px-3 py-1 ${active ? "text-green-600" : "text-gray-400"}`}
          >
            <Icon size={22} />
            <span className="text-xs">{label}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default BottomNav
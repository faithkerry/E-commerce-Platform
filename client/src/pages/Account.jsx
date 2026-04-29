import {
  Wallet, MessageCircle, ChevronRight, HelpCircle,
  ShoppingBag, MessageSquare, Star, Ticket, Heart,
  UserCheck, Eye, Search, CreditCard, MapPin,
  UserCog, UserX, Bell, LogOut
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import BottomNav from "../components/BottomNav"

function Account() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user")) || {}
  const name = user.name || user.email?.split("@")[0] || "User"
  const email = user.email || "user@example.com"
  const balance = user.balance || 0

  const handleWhatsApp = () => {
    window.open("https://wa.me/254700000000", "_blank")
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("cart")
    navigate("/login")
  }

  const MenuItem = ({ icon: Icon, label, color = "text-green-600", bg = "bg-green-100", onClick }) => (
    <button
      onClick={onClick || (() => {})}
      className="w-full flex items-center gap-4 hover:bg-gray-50 rounded-xl px-4 py-3 transition"
    >
      <div className={`${bg} w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`}>
        <Icon size={20} className={color} />
      </div>
      <span className="flex-1 text-left font-medium text-gray-800 text-sm">
        {label}
      </span>
      <ChevronRight size={18} className="text-gray-400" />
    </button>
  )

  return (
    <div className="min-h-screen bg-gray-50 pb-32">

      {/* GREEN HEADER */}
      <div className="bg-green-600 px-6 pt-12 pb-16 text-white text-center">
        <div className="w-20 h-20 rounded-full bg-white mx-auto mb-3 overflow-hidden">
          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold">Welcome {name}!</h2>
        <p className="text-green-100 text-sm mt-1">{email}</p>
      </div>

      {/* MAIN CONTENT CARD */}
      <div className="mx-4 -mt-8 space-y-4">

        {/* TOP CARD — WALLET + CHAT */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-5">

          {/* WALLET */}
          <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Wallet size={28} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">KerryShop Balance</p>
              <p className="text-xl font-bold text-green-700">
                Ksh {balance.toLocaleString()}
              </p>
            </div>
          </div>

          {/* LIVE CHAT + WHATSAPP */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition">
              <MessageCircle size={20} />
              Live Chat
            </button>

            <button
              onClick={handleWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </button>
          </div>

          {/* NEED ASSISTANCE */}
          <div>
            <p className="text-gray-400 text-sm italic mb-3">Need Assistance?</p>
            <MenuItem
              icon={HelpCircle}
              label="Help & Support"
              color="text-green-600"
              bg="bg-green-100"
            />
          </div>

        </div>

        {/* MY KERRYSHOP ACCOUNT */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h3 className="text-base font-bold text-gray-800 px-2 mb-2">
            My KerryShop Account
          </h3>

          <MenuItem
            icon={ShoppingBag}
            label="Orders"
            color="text-blue-600"
            bg="bg-blue-100"
            onClick={() => navigate("/cart")}
          />
          <MenuItem
            icon={MessageSquare}
            label="Inbox"
            color="text-purple-600"
            bg="bg-purple-100"
          />
          <MenuItem
            icon={Star}
            label="Ratings & Reviews"
            color="text-yellow-500"
            bg="bg-yellow-100"
          />
          <MenuItem
            icon={Ticket}
            label="Vouchers"
            color="text-pink-600"
            bg="bg-pink-100"
          />
          <MenuItem
            icon={Heart}
            label="Wishlist"
            color="text-red-500"
            bg="bg-red-100"
            onClick={() => navigate("/wishlist")}
          />
          <MenuItem
            icon={UserCheck}
            label="Follow Seller"
            color="text-green-600"
            bg="bg-green-100"
          />
          <MenuItem
            icon={Eye}
            label="Recently Viewed"
            color="text-indigo-600"
            bg="bg-indigo-100"
          />
          <MenuItem
            icon={Search}
            label="Recently Searched"
            color="text-cyan-600"
            bg="bg-cyan-100"
          />
        </div>

        {/* MY SETTINGS */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h3 className="text-base font-bold text-gray-800 px-2 mb-2">
            My Settings
          </h3>

          <MenuItem
            icon={CreditCard}
            label="Payment Settings"
            color="text-green-600"
            bg="bg-green-100"
          />
          <MenuItem
            icon={MapPin}
            label="Address Book"
            color="text-red-500"
            bg="bg-red-100"
          />
          <MenuItem
            icon={UserCog}
            label="Account Management"
            color="text-blue-600"
            bg="bg-blue-100"
          />
          <MenuItem
            icon={UserX}
            label="Close Account"
            color="text-red-600"
            bg="bg-red-100"
          />
          <MenuItem
            icon={Bell}
            label="Notification Preferences"
            color="text-yellow-600"
            bg="bg-yellow-100"
          />
        </div>

        {/* LOGOUT BUTTON */}
        <div className="flex justify-center pb-6">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-12 py-3 rounded-full transition shadow-md"
          >
            <LogOut size={20} />
            Log Out
          </button>
        </div>

      </div>

      <BottomNav />
    </div>
  )
}

export default Account
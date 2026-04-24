import { useState, useEffect } from "react"

function ProfileDrawer({ open, onClose }) {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"))
    setUser(stored)
  }, [])

  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300
      ${open ? "translate-x-0" : "translate-x-full"}`}>

      {/* HEADER */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-bold">My Account</h2>

        <button onClick={onClose} className="text-red-500 font-bold">
          ✕
        </button>
      </div>

      {/* PROFILE */}
      <div className="p-4 text-center">

        {/* 👩 CONSTANT LADY PROFILE IMAGE */}
        <img
          src="https://i.pravatar.cc/150?img=47"
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-3"
        />

        <h3 className="font-semibold">
          {user?.email}
        </h3>

        <p className="text-sm text-green-600">
          🟢 Active
        </p>

      </div>

      {/* OPTIONS */}
      <div className="p-4 space-y-3">

        <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
          ✏️ Edit Profile
        </button>

        <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
          🔒 Change Password
        </button>

        <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
          ℹ️ About App
        </button>

      </div>

    </div>
  )
}

export default ProfileDrawer
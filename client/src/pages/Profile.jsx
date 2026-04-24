import { useState, useEffect } from "react"

function Profile() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"))
    setUser(savedUser)
  }, [])

  if (!user) return <h2>Loading...</h2>

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <h2 className="text-3xl font-bold mb-6">My Profile 👤</h2>

      <div className="bg-white shadow-lg rounded p-6 space-y-4">

        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="w-24 h-24 rounded-full"
        />

        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Status:</strong> 🟢 Active</p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Change Password
        </button>

        <button className="bg-gray-700 text-white px-4 py-2 rounded">
          About App
        </button>

      </div>

    </div>
  )
}

export default Profile
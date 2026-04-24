import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      )

      const data = await response.json()

      if (response.ok) {

        // ⭐ STEP 4 — TOKEN AUTO LOGIN
        localStorage.setItem("token", data.token)

        // store user
        localStorage.setItem("user", JSON.stringify(data.user))

        // ensure cart exists
        if (!localStorage.getItem("cart")) {
          localStorage.setItem("cart", JSON.stringify([]))
        }

        // ⭐ IMPORTANT FIX — NOTIFY NAVBAR INSTANTLY
        window.dispatchEvent(new Event("userUpdated"))
        window.dispatchEvent(new Event("cartUpdated"))
        alert("Login successful ✅")

        // redirect to home
        navigate("/home")

      } else {
        alert(data.message || "Invalid credentials")
      }

    } catch (error) {
      console.error(error)
      alert("Server error ❌")
    }

    setLoading(false)
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white shadow-xl p-8 rounded-xl w-96"
      >

        <h2 className="text-2xl font-bold text-center mb-6">
          Kerry Store Login 🛍️
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded font-semibold transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center mt-4 text-gray-500">
          Forgot Password? (Coming Soon)
        </p>

      </form>
    </div>
  )
}

export default Login
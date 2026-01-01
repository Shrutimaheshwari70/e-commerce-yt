import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
// import { backendUrl } from '../App'

function Login({setToken}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/user/admin",
        { email, password }
      );
      if(response.data.success){
        setToken(response.data.token)
      }else{
        toast.error(response.data.message)
      }
      console.log(response);
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admin Panel
        </h1>

        <form onSubmit={onSubmitHandler} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-black
                         focus:border-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-black
                         focus:border-black"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md 
                       hover:bg-gray-900 transition duration-200 font-semibold"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Admin Dashboard
        </p>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

function Login() {
  const [currencyState, setCurrencyState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currencyState === "Sign up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        }else{
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };
  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6"
      >
        {/* Header */}
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800">{currencyState}</p>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Name input for Sign Up */}
        {currencyState !== "Login" && (
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="w-full border rounded-lg px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="w-full border rounded-lg px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Forgot / Toggle */}
        <div className="flex justify-between text-sm text-gray-500">
          {currencyState === "Login" ? (
            <button type="button" className="text-orange-500 hover:underline">
              Forgot your password?
            </button>
          ) : (
            <div></div>
          )}

          <button
            type="button"
            onClick={() =>
              setCurrencyState(currencyState === "Login" ? "Sign up" : "Login")
            }
            className="text-orange-500 font-semibold hover:underline"
          >
            {currencyState === "Login" ? "Create Account" : "Login here"}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600
                     text-white font-semibold py-3 rounded-lg transition"
        >
          {currencyState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default Login;

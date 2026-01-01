import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { useState } from "react";
import Login from "./components/Login";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = '$'
function App() {
  // do not refresh than login again again 
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token') : '');
  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  return (
    <div>
      <ToastContainer/>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken}/>
          <hr />
          <div className="flex">
            <Sidebar />
            <div>
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token}/>} />
                <Route path="/orders" element={<Orders token={token}/>} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

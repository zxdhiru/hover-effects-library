import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // Note: Updated import path for React Router
import SingleCard from "./components/SingleCard";
import App from "./App";
import "./index.css";
import Navbar from "./components/Navbar";
import { FaHeart } from "react-icons/fa";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Navbar />
  <main className="min-h-screen pt-10 bg-gradient-to-r from-purple-500 to-indigo-500 ">

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/effect/:effectName" element={<SingleCard />} />
    </Routes>
      <p className="flex items-center text-center w-full justify-center py-4 gap-2 ">Create with <FaHeart/> by <a href="https://www.instagram.com/zxdhiru"><b className="hover:text-red-400">Dhiru</b>❤️</a></p>
  </main>
  </BrowserRouter>
);
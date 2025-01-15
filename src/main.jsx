import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // Note: Updated import path for React Router
import SingleCard from "./components/SingleCard";
import App from "./App";
import "./index.css";
import Navbar from "./components/Navbar";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/effect/:effectName" element={<SingleCard />} />
    </Routes>
  </BrowserRouter>
);
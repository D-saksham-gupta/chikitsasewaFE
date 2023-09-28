import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import First from "./pages/First";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Category from "./pages/Category";
import List from "./pages/List";
import Otp from "./pages/Otp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/categories" element={<Category />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/list" element={<List />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
}

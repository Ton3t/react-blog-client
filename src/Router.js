import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/misc/Navbar";
import Home from "./components/home/Home";
import Articulos from "./components/posts/Articulos";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

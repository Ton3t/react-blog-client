import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/misc/Navbar";
import Home from "./components/home/Home";
import Articulos from "./components/posts/Articulos";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/login">Login</Route>
        <Route path="/register">Register</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

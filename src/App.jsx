import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarHappy from "./components/Navbar";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import "./App.css";

function App() {
  return (
    <>
      <NavbarHappy />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

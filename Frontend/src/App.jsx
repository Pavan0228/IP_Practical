// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar"; // Import Navbar
import Hotels from "./pages/Hotels";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/hotels" element={<PrivateRoute element={<Hotels />} />} />

      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "../components/Category.jsx";
import Cuisine from "./Cuisine";
import Welcome from "../components/Welcome";
import Search from "../components/Search";
import Find from "./Find";
import Footer from "../components/Footer";
import Recipe from "./Recipe";
import { motion } from "framer-motion";

function Mainhome() {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <BrowserRouter>
          <Welcome />
          <Category />
          <Search />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:id" element={<Cuisine />} />
            <Route path="/searched/:id" element={<Find />} />
            <Route path="/recipe/:id" element={<Recipe />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </motion.div>
    </>
  );
}

export default Mainhome;

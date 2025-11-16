
import React from "react";
import './../styles/App.css';
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  )
}

export default App

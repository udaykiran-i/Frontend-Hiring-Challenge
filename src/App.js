import React from "react";
import Navbar from "./components/navbar/navbar";
import Page1 from "./components/page1/page1";
import { Routes, Route } from "react-router-dom";
import Mens from "./components/mens/mens";
import Womens from "./components/womens/womens";
import Jewelery from "./components/jewelery/jewelery";
import Electronics from "./components/electronics/electronics";
import Page2 from "./components/page2/page2";

import "./App.css";

function App() {
  return (
    <div class="bg-color">
      <Routes>
            <Route path="/mens" element={<Mens />} />
            <Route path="/womens" element={<Womens />} />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/page2" element={<Page2/>} />
      </Routes>
      <Navbar />
      <Page1 />
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";

const App = () => {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="mintmade/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
   
  );
};

export default App;

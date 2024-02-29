import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import { ProductProvider } from "./context/ProductsContext";
import Cart from "./pages/cart/Cart";

const App = () => {
  return (
    <BrowserRouter basename="/mintmade">
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
